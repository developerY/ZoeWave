import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ModalService } from '../../services/modal.service';
import { AI_LEADERSHIP_DATA } from '../../data/zoewave.data';

@Component({
  selector: 'app-people-ai',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  templateUrl: './people-ai.html'
})
export class PeopleAi {
  modalService = inject(ModalService);
  ai = AI_LEADERSHIP_DATA;

  openContact(): void {
    this.modalService.openContactModal();
  }
}
