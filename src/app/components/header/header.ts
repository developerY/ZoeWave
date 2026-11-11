import { ChangeDetectionStrategy, Component, ElementRef, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ModalService } from '../../services/modal.service';
import { COMPANIES_DATA } from '../../data/zoewave.data';
import { CompanyItem } from '../../data/zoewave-logic';

export interface CatalogCategoryGroup {
  id: string;
  tier: string;
  number: string;
  title: string;
  badge: string;
  description: string;
  icon: string;
  companies: CompanyItem[];
}

@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  host: {
    '(document:keydown.escape)': 'onEscape()',
    '(document:click)': 'onDocumentClick($event)'
  }
})
export class Header {
  private elementRef = inject(ElementRef);
  private modalService = inject(ModalService);
  private router = inject(Router);

  mobileMenuOpen = signal(false);
  isCatalogMenuOpen = signal(false);
  mobileCatalogOpen = signal(false);

  // Info menu state (houses Contact, Believe, and People -> Ash)
  isInfoMenuOpen = signal(false);
  isPeopleSubmenuOpen = signal(true);
  mobileInfoOpen = signal(false);
  mobilePeopleOpen = signal(true);

  allCompanies = COMPANIES_DATA;

  categories: CatalogCategoryGroup[] = [
    {
      id: 'core',
      tier: 'core',
      number: '01',
      title: 'CORE R&D',
      badge: '2 Ventures',
      description: 'Physical computing & applied design',
      icon: 'science',
      companies: this.allCompanies.filter(c => c.tier === 'core')
    },
    {
      id: 'production',
      tier: 'production',
      number: '02',
      title: 'PRODUCTION',
      badge: '3 Ventures',
      description: 'Micro-dose pharma & spatial XR',
      icon: 'rocket_launch',
      companies: this.allCompanies.filter(c => c.tier === 'production')
    },
    {
      id: 'development',
      tier: 'development',
      number: '03',
      title: 'DEVELOPMENT',
      badge: '3 Ventures',
      description: 'Clinical modeling & biosensor wearables',
      icon: 'biotech',
      companies: this.allCompanies.filter(c => c.tier === 'development')
    },
    {
      id: 'frontier',
      tier: 'frontier',
      number: '04',
      title: 'FRONTIER',
      badge: '3 Ventures',
      description: 'Autonomous robotics, fintech & chromatic AI',
      icon: 'smart_toy',
      companies: this.allCompanies.filter(c => c.tier === 'frontier')
    },
    {
      id: 'concepts',
      tier: 'concepts',
      number: '05',
      title: 'CONCEPTS',
      badge: '3 Ventures',
      description: 'Swarm intelligence & stealth systems',
      icon: 'psychology',
      companies: this.allCompanies.filter(c => c.tier === 'concepts')
    }
  ];

  toggleCatalogMenu(event?: Event): void {
    if (event) {
      event.stopPropagation();
    }
    this.isCatalogMenuOpen.update(v => !v);
    if (this.isCatalogMenuOpen()) {
      this.isInfoMenuOpen.set(false);
    }
  }

  openCatalogMenu(): void {
    this.isCatalogMenuOpen.set(true);
    this.isInfoMenuOpen.set(false);
  }

  closeCatalogMenu(): void {
    this.isCatalogMenuOpen.set(false);
  }

  toggleInfoMenu(event?: Event): void {
    if (event) {
      event.stopPropagation();
    }
    this.isInfoMenuOpen.update(v => !v);
    if (this.isInfoMenuOpen()) {
      this.isCatalogMenuOpen.set(false);
    }
  }

  openInfoMenu(): void {
    this.isInfoMenuOpen.set(true);
    this.isCatalogMenuOpen.set(false);
  }

  closeInfoMenu(): void {
    this.isInfoMenuOpen.set(false);
  }

  togglePeopleSubmenu(event?: Event): void {
    if (event) {
      event.stopPropagation();
    }
    this.isPeopleSubmenuOpen.update(v => !v);
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update(v => !v);
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
    this.mobileCatalogOpen.set(false);
    this.mobileInfoOpen.set(false);
  }

  toggleMobileCatalog(): void {
    this.mobileCatalogOpen.update(v => !v);
  }

  toggleMobileInfo(): void {
    this.mobileInfoOpen.update(v => !v);
  }

  toggleMobilePeople(): void {
    this.mobilePeopleOpen.update(v => !v);
  }

  openContact(): void {
    this.closeMobileMenu();
    this.closeCatalogMenu();
    this.closeInfoMenu();
    this.modalService.openContactModal();
  }

  inspectCompany(company: CompanyItem, event?: Event): void {
    if (event) {
      event.stopPropagation();
    }
    this.closeCatalogMenu();
    this.closeInfoMenu();
    this.closeMobileMenu();
    this.modalService.openCompanyModal(company);
  }

  navigateToCatalogTier(tier: string, event?: Event): void {
    if (event) {
      event.stopPropagation();
    }
    this.closeCatalogMenu();
    this.closeInfoMenu();
    this.closeMobileMenu();
    this.router.navigate(['/catalog'], { queryParams: { tier } });
  }

  navigateToAllCatalog(event?: Event): void {
    if (event) {
      event.stopPropagation();
    }
    this.closeCatalogMenu();
    this.closeInfoMenu();
    this.closeMobileMenu();
    this.router.navigate(['/catalog']);
  }

  onDocumentClick(event: MouseEvent): void {
    if (this.isCatalogMenuOpen() || this.isInfoMenuOpen()) {
      const clickedInside = this.elementRef.nativeElement.contains(event.target as Node);
      if (!clickedInside) {
        this.closeCatalogMenu();
        this.closeInfoMenu();
      }
    }
  }

  onEscape(): void {
    this.closeCatalogMenu();
    this.closeInfoMenu();
    this.closeMobileMenu();
  }
}
