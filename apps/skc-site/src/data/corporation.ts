export interface Highlight {
  id: string;
  icon: string;
}

export interface TimelineMilestone {
  id: string;
  year: string;
  icon: string;
}

export interface LeadershipProfile {
  id: string;
  order: number;
  avatar?: string;
  focusKeys: string[];
}

export interface ESGMetric {
  id: string;
  value: string;
  unit?: string;
}

export interface ESGInitiative {
  id: string;
  icon: string;
}

export const corporationHighlights: Highlight[] = [
  { id: 'research', icon: '🧪' },
  { id: 'manufacturing', icon: '🏭' },
  { id: 'alliances', icon: '🤝' },
  { id: 'innovation', icon: '⚡️' },
];

export const timelineMilestones: TimelineMilestone[] = [
  { id: 'foundation', year: '1976', icon: '🏢' },
  { id: 'materialsExpansion', year: '1990s', icon: '🧱' },
  { id: 'globalAlliances', year: '2000s', icon: '🌐' },
  { id: 'batteryLeadership', year: '2010s', icon: '🔋' },
  { id: 'esgPledge', year: '2020', icon: '♻️' },
  { id: 'futureVision', year: '2030', icon: '🚀' },
];

export const leadershipProfiles: LeadershipProfile[] = [
  { id: 'ceo', order: 1, focusKeys: ['strategy', 'partnerships', 'esg'] },
  { id: 'cto', order: 2, focusKeys: ['innovation', 'labs'] },
  { id: 'cso', order: 3, focusKeys: ['sustainability', 'compliance'] },
  { id: 'cfo', order: 4, focusKeys: ['finance', 'investors'] },
  { id: 'coo', order: 5, focusKeys: ['operations', 'global'] },
  { id: 'chro', order: 6, focusKeys: ['talent', 'culture'] },
];

export const esgMetrics: ESGMetric[] = [
  { id: 'emissions', value: '-42%', unit: 'vs 2019' },
  { id: 'renewableEnergy', value: '78%', unit: 'global sites' },
  { id: 'circularMaterials', value: '210kt', unit: 'per year' },
  { id: 'communityHours', value: '45k', unit: 'hours' },
];

export const esgInitiatives: ESGInitiative[] = [
  { id: 'netZero', icon: '🌱' },
  { id: 'responsibleSupply', icon: '🛰️' },
  { id: 'circularDesign', icon: '♻️' },
  { id: 'equity', icon: '🤝' },
];
