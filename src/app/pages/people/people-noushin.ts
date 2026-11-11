import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ModalService } from '../../services/modal.service';
import { NOUSHIN_LEADERSHIP_DATA } from '../../data/zoewave.data';

@Component({
  selector: 'app-people-noushin',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  templateUrl: './people-noushin.html'
})
export class PeopleNoushin {
  modalService = inject(ModalService);
  noushin = NOUSHIN_LEADERSHIP_DATA;

  openContact(): void {
    this.modalService.openContactModal();
  }
}
