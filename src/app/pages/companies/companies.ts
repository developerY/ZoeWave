import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ModalService } from '../../services/modal.service';
import { COMPANIES_DATA } from '../../data/zoewave.data';
import { CompanyItem, filterCompanies } from '../../data/zoewave-logic';

@Component({
  selector: 'app-companies',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  templateUrl: './companies.html'
})
export class Companies {
  modalService = inject(ModalService);

  allCompanies = COMPANIES_DATA;

  selectedTier = signal<string>('all');
  searchQuery = signal<string>('');

  filteredCompanies = computed(() => {
    return filterCompanies(this.allCompanies, this.selectedTier(), this.searchQuery());
  });

  tierCore = computed(() => this.allCompanies.filter(c => c.tier === 'core'));
  tierProduction = computed(() => this.allCompanies.filter(c => c.tier === 'production'));
  tierDevelopment = computed(() => this.allCompanies.filter(c => c.tier === 'development'));
  tierFrontier = computed(() => this.allCompanies.filter(c => c.tier === 'frontier'));
  tierConcepts = computed(() => this.allCompanies.filter(c => c.tier === 'concepts'));

  setTier(tier: string): void {
    this.selectedTier.set(tier);
  }

  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchQuery.set(input.value);
  }

  inspectCompany(company: CompanyItem): void {
    this.modalService.openCompanyModal(company);
  }
}
