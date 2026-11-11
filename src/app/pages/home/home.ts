import { ChangeDetectionStrategy, Component, computed, inject, OnDestroy, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ModalService } from '../../services/modal.service';
import { COMPANIES_DATA, PROJECTS_DATA, BELIEFS_DATA, ASH_LEADERSHIP_DATA } from '../../data/zoewave.data';
import { CompanyItem } from '../../data/zoewave-logic';

export type CarouselCategory = 'all' | 'core' | 'production' | 'development' | 'frontier' | 'concepts';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  templateUrl: './home.html',
  host: {
    '(window:keydown)': 'handleKeydown($event)'
  }
})
export class Home implements OnDestroy {
  modalService = inject(ModalService);

  companies = COMPANIES_DATA;
  featuredProjects = PROJECTS_DATA.slice(0, 4);
  beliefs = BELIEFS_DATA;
  ash = ASH_LEADERSHIP_DATA;

  // Existing horizon filter (for the lower grid)
  activeFilter = signal<'all' | 'health' | 'robotics' | 'ai'>('all');

  // Leadership card collapse/expand state (hidden under icon by default)
  isLeadershipOpen = signal<boolean>(false);

  toggleLeadership(): void {
    this.isLeadershipOpen.update(v => !v);
  }

  // Carousel (Flip Book) State
  activeCarouselIndex = signal<number>(0);
  isCardFlipped = signal<boolean>(false);
  searchQuery = signal<string>('');
  carouselCategory = signal<CarouselCategory>('all');
  isPlaying = signal<boolean>(false);

  private autoplayTimer: ReturnType<typeof setInterval> | null = null;

  // Filtered companies based on category & search query
  filteredCarouselCompanies = computed(() => {
    const query = this.searchQuery().trim().toLowerCase();
    const cat = this.carouselCategory();

    return this.companies.filter(c => {
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
    // Ignore keyboard shortcuts if user is typing into an input or textarea
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

  openContact(): void {
    this.modalService.openContactModal();
  }

  inspectCompany(company: CompanyItem): void {
    this.modalService.openCompanyModal(company);
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
  }
}
