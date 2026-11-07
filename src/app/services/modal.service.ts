import { Injectable, signal } from '@angular/core';
import { CompanyItem } from '../data/zoewave-logic';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  isContactModalOpen = signal(false);
  selectedCompany = signal<CompanyItem | null>(null);

  openContactModal(): void {
    this.isContactModalOpen.set(true);
  }

  closeContactModal(): void {
    this.isContactModalOpen.set(false);
  }

  openCompanyModal(company: CompanyItem): void {
    this.selectedCompany.set(company);
  }

  closeCompanyModal(): void {
    this.selectedCompany.set(null);
  }
}
