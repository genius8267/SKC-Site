export interface Stat {
  label: string;
  value: string;
  note?: string;
}

export interface Product {
  icon: string;
  title: string;
  description: string;
  href: string;
}

export interface NewsArticle {
  id: number;
  title: string;
  date: string;
  category: 'battery' | 'semiconductor' | 'eco-friendly' | 'esg';
}

export const companyStats: Stat[] = [
  {
    label: 'Establishment',
    value: '1976',
  },
  {
    label: 'Employees',
    value: '2,910',
    note: 'Consolidated basis',
  },
  {
    label: 'Sales',
    value: '1.7T ₩',
    note: 'As of 2024',
  },
  {
    label: 'CEO',
    value: 'Woncheol Park',
    note: 'CEO and President',
  },
];

export const products: Product[] = [
  {
    icon: '🔋',
    title: 'Rechargeable Battery',
    description: 'Ultra-thin copper foil and silicon anodes for next-generation batteries',
    href: '/creation/battery',
  },
  {
    icon: '💎',
    title: 'Semiconductor',
    description: 'Advanced materials for semiconductor manufacturing including glass substrates and CMP solutions',
    href: '/creation/semiconductor',
  },
  {
    icon: '🌍',
    title: 'Eco-friendly',
    description: 'Biodegradable PBAT and LIMEX materials for sustainable packaging',
    href: '/creation/eco-friendly',
  },
];

export const affiliates = [
  { name: 'SK Nexilis', url: 'http://www.sknexilis.com/en/' },
  { name: 'SK Picglobal', url: 'http://www.skpicglobal.com/' },
  { name: 'SK Leaveo', url: 'http://www.skleaveo.com/' },
  { name: 'Absolics', url: 'https://www.absolicsinc.com/' },
  { name: 'ISC', url: 'https://kor.isc21.kr/main_e/' },
];

export const latestNews: NewsArticle[] = [
  {
    id: 1684,
    title: 'SKC Announces Q3 Earnings: "Sustained Recovery, Visible Progress"',
    date: '2025-11-05',
    category: 'battery',
  },
  {
    id: 1678,
    title: 'SKC to Merge with SK enpulse',
    date: '2025-10-16',
    category: 'semiconductor',
  },
  {
    id: 1670,
    title: 'New Biodegradable Material Line Launched',
    date: '2025-09-20',
    category: 'eco-friendly',
  },
];
