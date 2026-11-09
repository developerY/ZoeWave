import { ChangeDetectionStrategy, Component, computed, inject, OnDestroy, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ModalService } from '../../services/modal.service';
import { COMPANIES_DATA } from '../../data/zoewave.data';
import { CompanyItem } from '../../data/zoewave-logic';

export type CarouselCategory = 'all' | 'core' | 'production' | 'development' | 'frontier' | 'concepts';

export interface CatalogCategory {
  id: string;
  tier: string;
  number: string;
  title: string;
  badge: string;
  subtitle: string;
  icon: string;
  companies: CompanyItem[];
}

@Component({
  selector: 'app-catalog',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  templateUrl: './catalog.html',
  host: {
    '(window:keydown)': 'handleKeydown($event)'
  }
})
export class Catalog implements OnDestroy {
  modalService = inject(ModalService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  allCompanies = COMPANIES_DATA;

  // View mode toggle: 'both' | 'carousel' | 'categories'
  activeViewMode = signal<'both' | 'carousel' | 'categories'>('both');

  // ============================================================
  // CAROUSEL (FLIP BOOK) STATE & LOGIC
  // ============================================================
  activeCarouselIndex = signal<number>(0);
  isCardFlipped = signal<boolean>(false);
  searchQuery = signal<string>('');
  carouselCategory = signal<CarouselCategory>('all');
  isPlaying = signal<boolean>(false);

  private autoplayTimer: ReturnType<typeof setInterval> | null = null;

  // Category columns (MAC Cosmetics style)
  categories: CatalogCategory[] = [
    {
      id: 'core',
      tier: 'core',
      number: '01',
      title: 'CORE R&D',
      badge: '2 Ventures',
      subtitle: 'Foundational Physical Computing',
      icon: 'science',
      companies: this.allCompanies.filter(c => c.tier === 'core')
    },
    {
      id: 'production',
      tier: 'production',
      number: '02',
      title: 'PRODUCTION',
      badge: '3 Ventures',
      subtitle: 'Commercial Micro-Dosing & Spatial XR',
      icon: 'rocket_launch',
      companies: this.allCompanies.filter(c => c.tier === 'production')
    },
    {
      id: 'development',
      tier: 'development',
      number: '03',
      title: 'DEVELOPMENT',
      badge: '3 Ventures',
      subtitle: 'Clinical AI & Smart IoT Mobility',
      icon: 'biotech',
      companies: this.allCompanies.filter(c => c.tier === 'development')
    },
    {
      id: 'frontier',
      tier: 'frontier',
      number: '04',
      title: 'FRONTIER',
      badge: '3 Ventures',
      subtitle: 'Assistive Robotics & Chromatic AI',
      icon: 'smart_toy',
      companies: this.allCompanies.filter(c => c.tier === 'frontier')
    },
    {
      id: 'concepts',
      tier: 'concepts',
      number: '05',
      title: 'CONCEPTS',
      badge: '3 Ventures',
      subtitle: 'Swarm Intelligence & Stealth Hardware',
      icon: 'psychology',
      companies: this.allCompanies.filter(c => c.tier === 'concepts')
    }
  ];

  constructor() {
    this.route.queryParamMap.subscribe(params => {
      const tier = params.get('tier');
      if (tier && ['core', 'production', 'development', 'frontier', 'concepts', 'all'].includes(tier)) {
        this.setCarouselCategory(tier as CarouselCategory);
      }
    });
  }

  // Filtered companies based on category & search query
  filteredCarouselCompanies = computed(() => {
    const query = this.searchQuery().trim().toLowerCase();
    const cat = this.carouselCategory();

    return this.allCompanies.filter(c => {
      const matchesCat = cat === 'all' || c.tier === cat;
      if (!matchesCat) return false;

      if (!query) return true;
      return (
        c.name.toLowerCase().includes(query) ||
        c.tagline.toLowerCase().includes(query) ||
        c.description.toLowerCase().includes(query) ||
        c.domain.toLowerCase().includes(query) ||
        (c.highlight && c.highlight.toLowerCase().includes(query))
      );
    });
  });

  // Current company in the carousel
  currentCompany = computed<CompanyItem | null>(() => {
    const list = this.filteredCarouselCompanies();
    if (list.length === 0) return null;
    const idx = Math.min(Math.max(0, this.activeCarouselIndex()), list.length - 1);
    return list[idx];
  });

  // Carousel Controls
  nextCompany(): void {
    const list = this.filteredCarouselCompanies();
    if (list.length <= 1) return;
    this.isCardFlipped.set(false);
    this.activeCarouselIndex.update(idx => (idx + 1) % list.length);
  }

  prevCompany(): void {
    const list = this.filteredCarouselCompanies();
    if (list.length <= 1) return;
    this.isCardFlipped.set(false);
    this.activeCarouselIndex.update(idx => (idx - 1 + list.length) % list.length);
  }

  selectCompany(index: number): void {
    const list = this.filteredCarouselCompanies();
    if (index >= 0 && index < list.length) {
      this.isCardFlipped.set(false);
      this.activeCarouselIndex.set(index);
    }
  }

  selectCompanyById(id: string): void {
    const list = this.filteredCarouselCompanies();
    const foundIdx = list.findIndex(c => c.id === id);
    if (foundIdx !== -1) {
      this.selectCompany(foundIdx);
      this.scrollToCarousel();
    } else {
      // Find what category it belongs to and switch to it or 'all'
      const comp = this.allCompanies.find(c => c.id === id);
      if (comp) {
        this.setCarouselCategory('all');
        const newIdx = this.filteredCarouselCompanies().findIndex(c => c.id === id);
        if (newIdx !== -1) {
          this.selectCompany(newIdx);
          this.scrollToCarousel();
        }
      }
    }
  }

  toggleCardFlip(): void {
    this.isCardFlipped.update(v => !v);
  }

  setCarouselCategory(cat: CarouselCategory): void {
    this.carouselCategory.set(cat);
    this.activeCarouselIndex.set(0);
    this.isCardFlipped.set(false);
  }

  onSearchInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchQuery.set(input.value);
    this.activeCarouselIndex.set(0);
    this.isCardFlipped.set(false);
  }

  clearSearch(): void {
    this.searchQuery.set('');
    this.activeCarouselIndex.set(0);
    this.isCardFlipped.set(false);
  }

  toggleAutoplay(): void {
    if (this.isPlaying()) {
      this.stopAutoplay();
    } else {
      this.startAutoplay();
    }
  }

  private startAutoplay(): void {
    if (typeof window === 'undefined') return;
    this.stopAutoplay();
    this.isPlaying.set(true);
    this.autoplayTimer = setInterval(() => {
      this.nextCompany();
    }, 4500);
  }

  private stopAutoplay(): void {
    if (this.autoplayTimer) {
      clearInterval(this.autoplayTimer);
      this.autoplayTimer = null;
    }
    this.isPlaying.set(false);
  }

  handleKeydown(event: KeyboardEvent): void {
    const target = event.target as HTMLElement | null;
    if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA')) {
      return;
    }

    if (event.key === 'ArrowRight') {
      this.nextCompany();
    } else if (event.key === 'ArrowLeft') {
      this.prevCompany();
    } else if (event.key === ' ' || event.key.toLowerCase() === 'f') {
      event.preventDefault();
      this.toggleCardFlip();
    }
  }

  scrollToCarousel(): void {
    if (typeof document !== 'undefined') {
      const el = document.getElementById('catalog-carousel');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }

  scrollToMatrix(): void {
    if (typeof document !== 'undefined') {
      const el = document.getElementById('catalog-matrix');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }

  inspectCompany(company: CompanyItem, event?: Event): void {
    if (event) {
      event.stopPropagation();
    }
    this.modalService.openCompanyModal(company);
  }

  openContact(): void {
    this.modalService.openContactModal();
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
  }
}
