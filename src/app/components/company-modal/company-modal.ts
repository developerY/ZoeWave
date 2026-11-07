import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-company-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './company-modal.html'
})
export class CompanyModal {
  modalService = inject(ModalService);

  close(): void {
    this.modalService.closeCompanyModal();
  }
}
