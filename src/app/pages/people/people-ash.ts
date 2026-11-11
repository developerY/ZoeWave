import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ModalService } from '../../services/modal.service';
import { ASH_LEADERSHIP_DATA } from '../../data/zoewave.data';

@Component({
  selector: 'app-people-ash',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  templateUrl: './people-ash.html'
})
export class PeopleAsh {
  modalService = inject(ModalService);

  ash = ASH_LEADERSHIP_DATA;

  activeTechTab = signal<'android' | 'ios' | 'aiml' | 'rust'>('android');

  setActiveTechTab(tab: 'android' | 'ios' | 'aiml' | 'rust'): void {
    this.activeTechTab.set(tab);
  }

  openContact(): void {
    this.modalService.openContactModal();
  }
}
