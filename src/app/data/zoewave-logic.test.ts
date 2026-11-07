import test from 'node:test';
import assert from 'node:assert/strict';
import {
  filterProjects,
  filterCompanies,
  filterBeliefs,
  calculatePharmacokineticCurve,
  validateContactSubmission,
  ProjectItem,
  CompanyItem,
  BeliefItem
} from './zoewave-logic';

test('filterProjects returns all projects when category is "all"', () => {
  const sample: ProjectItem[] = [
    { id: '1', title: 'Hummingbird Fuel', category: 'health', categoryLabel: 'Health ML', tagline: '', description: 'Personalized microdosing', platform: 'iOS', icon: 'medication' },
    { id: '2', title: 'DrunkWatch', category: 'health', categoryLabel: 'Health ML', tagline: '', description: 'Kinematic gait analysis', platform: 'watchOS', icon: 'watch' },
    { id: '3', title: 'Firefly Micro-Drone', category: 'robotics', categoryLabel: 'Robotics', tagline: '', description: 'Autonomous home patrol', platform: 'Robotics.rs', icon: 'flight' }
  ];
  assert.equal(filterProjects(sample, 'all').length, 3);
  assert.equal(filterProjects(sample, 'health').length, 2);
  assert.equal(filterProjects(sample, 'robotics').length, 1);
  assert.equal(filterProjects(sample, 'vision').length, 0);
});

test('filterProjects searches title and description', () => {
  const sample: ProjectItem[] = [
    { id: '1', title: 'Hummingbird Fuel', category: 'health', categoryLabel: 'Health ML', tagline: '', description: 'Caffeine pharmacokinetics', platform: 'iOS', icon: 'medication' },
    { id: '2', title: 'AshBike', category: 'robotics', categoryLabel: 'Robotics', tagline: '', description: 'Electric mobility system', platform: 'Android/iOS', icon: 'two_wheeler' }
  ];
  const results = filterProjects(sample, 'all', 'caffeine');
  assert.equal(results.length, 1);
  assert.equal(results[0].title, 'Hummingbird Fuel');
});

test('filterCompanies filters by tier', () => {
  const sample: CompanyItem[] = [
    { id: '1', name: 'YLabZ', url: '', tier: 'core', tierLabel: 'Core R&D', tagline: '', description: 'Deep tech lab', domain: 'AI', category: 'rnd', icon: 'science' },
    { id: '2', name: 'ZoeWare', url: '', tier: 'production', tierLabel: 'Production', tagline: '', description: 'AR/VR Studio', domain: 'Spatial', category: 'spatial', icon: 'view_in_ar' },
    { id: '3', name: 'ZoeRobo', url: '', tier: 'frontier', tierLabel: 'Frontier', tagline: '', description: 'Robotics', domain: 'Robotics', category: 'robotics', icon: 'smart_toy' }
  ];
  assert.equal(filterCompanies(sample, 'all').length, 3);
  assert.equal(filterCompanies(sample, 'core').length, 1);
  assert.equal(filterCompanies(sample, 'production').length, 1);
  assert.equal(filterCompanies(sample, 'frontier').length, 1);
});

test('filterBeliefs filters by vector category', () => {
  const sample: BeliefItem[] = [
    { id: '1', name: 'AshBike', url: '', initial: 'A', category: 'mobility', categoryLabel: 'Mobility', quote: '', description: '', hypothesis: '', status: '', badgeColorClass: '' },
    { id: '2', name: 'RxDigita', url: '', initial: 'R', category: 'health', categoryLabel: 'Health & Bio', quote: '', description: '', hypothesis: '', status: '', badgeColorClass: '' }
  ];
  assert.equal(filterBeliefs(sample, 'all').length, 2);
  assert.equal(filterBeliefs(sample, 'mobility').length, 1);
  assert.equal(filterBeliefs(sample, 'health').length, 1);
});

test('calculatePharmacokineticCurve generates valid plasma concentrations', () => {
  const curve = calculatePharmacokineticCurve(100, 4.2, 12);
  assert.equal(curve.length, 12);
  // Initial concentration is near 0, then rises to peak, then declines
  assert.equal(curve[0], 0);
  const maxVal = Math.max(...curve);
  assert.ok(maxVal > 50, 'Peak concentration should be significant');
  assert.ok(curve[curve.length - 1] < maxVal, 'Ending concentration should be less than peak');
});

test('validateContactSubmission verifies inputs', () => {
  assert.equal(validateContactSubmission('', 'test@example.com', 'Valid message body text').valid, false);
  assert.equal(validateContactSubmission('Ash', 'invalid-email', 'Valid message body text').valid, false);
  assert.equal(validateContactSubmission('Ash', 'ash@zoewave.com', 'short').valid, false);
  assert.equal(validateContactSubmission('Ash', 'ash@zoewave.com', 'Excited to discuss joint ventures and R&D!').valid, true);
});
