import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { PROJECTS_DATA } from '../../data/zoewave.data';
import { calculatePharmacokineticCurve, filterProjects } from '../../data/zoewave-logic';

@Component({
  selector: 'app-projects',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './projects.html'
})
export class Projects {
  allProjects = PROJECTS_DATA;

  selectedCategory = signal<string>('all');
  searchQuery = signal<string>('');

  // Interactive pharmacokinetic dosage simulator for Hummingbird Fuel
  selectedDoseMg = signal<number>(100);
  selectedHalfLife = signal<number>(4.2);

  pkCurve = computed(() => {
    return calculatePharmacokineticCurve(this.selectedDoseMg(), this.selectedHalfLife(), 12);
  });

  filteredProjects = computed(() => {
    return filterProjects(this.allProjects, this.selectedCategory(), this.searchQuery());
  });

  flagshipProjects = computed(() => {
    return this.filteredProjects().filter(p => p.category !== 'gnseven');
  });

  gnsevenProjects = computed(() => {
    return this.filteredProjects().filter(p => p.category === 'gnseven');
  });

  setCategory(category: string): void {
    this.selectedCategory.set(category);
  }

  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchQuery.set(input.value);
  }

  setDose(mg: number): void {
    this.selectedDoseMg.set(mg);
  }
}
