export interface CompanyItem {
  id: string;
  name: string;
  url: string;
  tier: 'core' | 'production' | 'development' | 'frontier' | 'concepts';
  tierLabel: string;
  tagline: string;
  description: string;
  domain: string;
  category: 'rnd' | 'health' | 'ad' | 'spatial' | 'mobility' | 'robotics' | 'fintech' | 'fashion' | 'ai';
  metrics?: { label: string; value: string }[];
  highlight?: string;
  imageUrl?: string;
  icon: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'health' | 'robotics' | 'vision' | 'gnseven';
  categoryLabel: string;
  tagline: string;
  description: string;
  platform: string;
  url?: string;
  articleUrl?: string;
  simulatedHalfLifeTarget?: string;
  statusBadge?: string;
  highlightMetric?: string;
  icon: string;
}

export interface BeliefItem {
  id: string;
  name: string;
  url: string;
  initial: string;
  category: 'mobility' | 'health' | 'spatial' | 'ai' | 'rnd';
  categoryLabel: string;
  quote: string;
  description: string;
  hypothesis: string;
  status: string;
  imageUrl?: string;
  imageAlt?: string;
  specOverlay?: { tag: string; title: string };
  badgeColorClass: string;
}

export function filterProjects(projects: ProjectItem[], category: string, searchQuery = ''): ProjectItem[] {
  return projects.filter(p => {
    const matchesCat = category === 'all' || p.category === category;
    const matchesQuery = !searchQuery.trim() || 
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.platform.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });
}

export function filterCompanies(companies: CompanyItem[], tier: string, searchQuery = ''): CompanyItem[] {
  return companies.filter(c => {
    const matchesTier = tier === 'all' || c.tier === tier;
    const matchesQuery = !searchQuery.trim() ||
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.domain.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTier && matchesQuery;
  });
}

export function filterBeliefs(beliefs: BeliefItem[], category: string): BeliefItem[] {
  if (category === 'all') return beliefs;
  return beliefs.filter(b => b.category === category);
}

export function calculatePharmacokineticCurve(doseMg: number, halfLifeHours: number, timePoints = 12): number[] {
  const points: number[] = [];
  const absorptionRate = 1.2;
  const eliminationRate = Math.LN2 / halfLifeHours;

  for (let t = 0; t <= timePoints; t += timePoints / 11) {
    // Bateman 1-compartment model: C(t) = (dose * Ka / (Ka - Ke)) * (e^(-Ke*t) - e^(-Ka*t))
    const concentration = (doseMg * absorptionRate / (absorptionRate - eliminationRate)) *
      (Math.exp(-eliminationRate * t) - Math.exp(-absorptionRate * t));
    points.push(Math.max(0, Math.round(concentration * 10) / 10));
  }
  return points;
}

export function validateContactSubmission(name: string, email: string, message: string): { valid: boolean; error?: string } {
  if (!name || name.trim().length < 2) {
    return { valid: false, error: 'Name must be at least 2 characters.' };
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email.trim())) {
    return { valid: false, error: 'Please enter a valid email address.' };
  }
  if (!message || message.trim().length < 10) {
    return { valid: false, error: 'Message must be at least 10 characters long.' };
  }
  return { valid: true };
}
