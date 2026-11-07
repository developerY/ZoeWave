import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ModalService } from '../../services/modal.service';
import { COMPANIES_DATA, PROJECTS_DATA, BELIEFS_DATA, ASH_LEADERSHIP_DATA } from '../../data/zoewave.data';
import { CompanyItem } from '../../data/zoewave-logic';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  templateUrl: './home.html'
})
export class Home {
  modalService = inject(ModalService);

  companies = COMPANIES_DATA;
  featuredProjects = PROJECTS_DATA.slice(0, 4);
  beliefs = BELIEFS_DATA;
  ash = ASH_LEADERSHIP_DATA;

  activeFilter = signal<'all' | 'health' | 'robotics' | 'ai'>('all');

  openContact(): void {
    this.modalService.openContactModal();
  }

  inspectCompany(company: CompanyItem): void {
    this.modalService.openCompanyModal(company);
  }
}
