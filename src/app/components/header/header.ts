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

  // People menu state (houses Ash)
  isPeopleMenuOpen = signal(false);
  mobilePeopleOpen = signal(false);

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
      this.isPeopleMenuOpen.set(false);
    }
  }

  openCatalogMenu(): void {
    this.isCatalogMenuOpen.set(true);
    this.isPeopleMenuOpen.set(false);
  }

  closeCatalogMenu(): void {
    this.isCatalogMenuOpen.set(false);
  }

  togglePeopleMenu(event?: Event): void {
    if (event) {
      event.stopPropagation();
    }
    this.isPeopleMenuOpen.update(v => !v);
    if (this.isPeopleMenuOpen()) {
      this.isCatalogMenuOpen.set(false);
    }
  }

  openPeopleMenu(): void {
    this.isPeopleMenuOpen.set(true);
    this.isCatalogMenuOpen.set(false);
  }

  closePeopleMenu(): void {
    this.isPeopleMenuOpen.set(false);
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update(v => !v);
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
    this.mobileCatalogOpen.set(false);
    this.mobilePeopleOpen.set(false);
  }

  toggleMobileCatalog(): void {
    this.mobileCatalogOpen.update(v => !v);
  }

  toggleMobilePeople(): void {
    this.mobilePeopleOpen.update(v => !v);
  }

  openContact(): void {
    this.closeMobileMenu();
    this.closeCatalogMenu();
    this.closePeopleMenu();
    this.modalService.openContactModal();
  }

  inspectCompany(company: CompanyItem, event?: Event): void {
    if (event) {
      event.stopPropagation();
    }
    this.closeCatalogMenu();
    this.closePeopleMenu();
    this.closeMobileMenu();
    this.modalService.openCompanyModal(company);
  }

  navigateToCatalogTier(tier: string, event?: Event): void {
    if (event) {
      event.stopPropagation();
    }
    this.closeCatalogMenu();
    this.closePeopleMenu();
    this.closeMobileMenu();
    this.router.navigate(['/catalog'], { queryParams: { tier } });
  }

  navigateToAllCatalog(event?: Event): void {
    if (event) {
      event.stopPropagation();
    }
    this.closeCatalogMenu();
    this.closePeopleMenu();
    this.closeMobileMenu();
    this.router.navigate(['/catalog']);
  }

  onDocumentClick(event: MouseEvent): void {
    if (this.isCatalogMenuOpen() || this.isPeopleMenuOpen()) {
      const clickedInside = this.elementRef.nativeElement.contains(event.target as Node);
      if (!clickedInside) {
        this.closeCatalogMenu();
        this.closePeopleMenu();
      }
    }
  }

  onEscape(): void {
    this.closeCatalogMenu();
    this.closePeopleMenu();
    this.closeMobileMenu();
  }
}
