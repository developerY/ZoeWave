import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { BELIEFS_DATA } from '../../data/zoewave.data';
import { filterBeliefs } from '../../data/zoewave-logic';

@Component({
  selector: 'app-believe',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './believe.html'
})
export class Believe {
  allBeliefs = BELIEFS_DATA;

  selectedPillar = signal<string>('all');

  filteredBeliefs = computed(() => {
    return filterBeliefs(this.allBeliefs, this.selectedPillar());
  });

  setPillar(pillar: string): void {
    this.selectedPillar.set(pillar);
  }
}
