export interface CultureValue {
  id: string;
  icon: string;
}

export interface BenefitItem {
  id: string;
  icon: string;
}

export interface JobListing {
  id: string;
  department: string;
  location: string;
  commitment: 'full-time' | 'contract' | 'internship';
}

export interface TalentProgram {
  id: string;
  icon: string;
}

export const cultureValues: CultureValue[] = [
  { id: 'boldInnovation', icon: '🚀' },
  { id: 'esgLeadership', icon: '🌍' },
  { id: 'humanCentered', icon: '🤝' },
  { id: 'learningMindset', icon: '📚' },
];

export const benefits: BenefitItem[] = [
  { id: 'hybridWork', icon: '🏡' },
  { id: 'globalMobility', icon: '✈️' },
  { id: 'wellness', icon: '🧘' },
  { id: 'familyCare', icon: '👨‍👩‍👧' },
  { id: 'education', icon: '🎓' },
  { id: 'equity', icon: '💎' },
];

export const jobListings: JobListing[] = [
  { id: 'battery-research', department: 'Battery R&D', location: 'Seoul, KR', commitment: 'full-time' },
  { id: 'process-engineer', department: 'Process Engineering', location: 'Gumi, KR', commitment: 'full-time' },
  { id: 'esg-data', department: 'ESG Analytics', location: 'Singapore', commitment: 'full-time' },
  { id: 'product-designer', department: 'Digital Experience', location: 'Remote', commitment: 'contract' },
];

export const talentPrograms: TalentProgram[] = [
  { id: 'graduate', icon: '🎓' },
  { id: 'global-rotation', icon: '🌏' },
  { id: 'women-leadership', icon: '✨' },
  { id: 'future-foundry', icon: '🧪' },
];
