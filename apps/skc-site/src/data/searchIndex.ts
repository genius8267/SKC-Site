// Search index for Fuse.js - all searchable content across the site

export interface SearchItem {
  id: string;
  title: string;
  description: string;
  category: 'page' | 'product' | 'news' | 'company';
  url: string;
  keywords?: string[];
}

export const searchIndex: SearchItem[] = [
  // Pages
  {
    id: 'home',
    title: 'SKC - Global ESG Material Solutions Company',
    description: 'Leading global ESG material solutions company specializing in rechargeable batteries, semiconductors, and eco-friendly materials.',
    category: 'page',
    url: '/',
    keywords: ['home', 'esg', 'materials', 'sustainable'],
  },
  {
    id: 'company',
    title: 'About SKC',
    description: 'SKC Corporation company overview, history, and values.',
    category: 'page',
    url: '/corporation/intro/company',
    keywords: ['about', 'company', 'history', 'overview'],
  },
  {
    id: 'ceo',
    title: 'CEO Message',
    description: 'Message from Woncheol Park, CEO and President of SKC.',
    category: 'page',
    url: '/corporation/intro/ceo',
    keywords: ['ceo', 'leadership', 'message', 'woncheol park'],
  },
  {
    id: 'sustainability',
    title: 'Sustainability & Governance',
    description: 'SKC\'s commitment to sustainable business practices and corporate governance.',
    category: 'page',
    url: '/corporation/sustain/governance',
    keywords: ['sustainability', 'esg', 'governance', 'ethics'],
  },
  {
    id: 'careers',
    title: 'Careers at SKC',
    description: 'Join our team and help transform technology for a sustainable future.',
    category: 'page',
    url: '/career/jobs',
    keywords: ['careers', 'jobs', 'recruitment', 'hiring'],
  },

  // Products
  {
    id: 'battery',
    title: 'Rechargeable Battery Materials',
    description: 'Ultra-thin copper foil and silicon anodes for next-generation batteries.',
    category: 'product',
    url: '/creation/battery',
    keywords: ['battery', 'copper foil', 'silicon anodes', 'ev', 'energy storage'],
  },
  {
    id: 'copper-foil',
    title: 'Copper Foil',
    description: 'Ultra-thin copper foil for lithium-ion batteries with superior conductivity.',
    category: 'product',
    url: '/creation/battery/copper-foil',
    keywords: ['copper', 'foil', 'battery', 'ev', 'conductivity'],
  },
  {
    id: 'silicon-anodes',
    title: 'Silicon Anodes',
    description: 'Next-generation silicon anode materials offering 10x capacity increase.',
    category: 'product',
    url: '/creation/battery/silicon-anodes',
    keywords: ['silicon', 'anodes', 'battery', 'capacity', 'performance'],
  },
  {
    id: 'semiconductor',
    title: 'Semiconductor Materials',
    description: 'Advanced materials for semiconductor manufacturing including glass substrates and CMP solutions.',
    category: 'product',
    url: '/creation/semiconductor',
    keywords: ['semiconductor', 'chips', 'glass substrate', 'cmp', 'fabrication'],
  },
  {
    id: 'glass-substrate',
    title: 'Glass Substrate',
    description: 'High-precision glass substrates for advanced packaging and display applications.',
    category: 'product',
    url: '/creation/semiconductor/glass-substrate',
    keywords: ['glass', 'substrate', 'semiconductor', 'packaging'],
  },
  {
    id: 'eco-friendly',
    title: 'Eco-friendly Materials',
    description: 'Biodegradable PBAT and LIMEX materials for sustainable packaging.',
    category: 'product',
    url: '/creation/eco-friendly',
    keywords: ['eco-friendly', 'biodegradable', 'pbat', 'limex', 'sustainable', 'packaging'],
  },

  // News
  {
    id: 'news-1684',
    title: 'SKC Announces Q3 Earnings: "Sustained Recovery, Visible Progress"',
    description: 'SKC reports continued growth in battery materials division with strong Q3 earnings.',
    category: 'news',
    url: '/communication/news/1684',
    keywords: ['earnings', 'q3', 'financial', 'results', 'growth'],
  },
  {
    id: 'news-1678',
    title: 'SKC to Merge with SK enpulse',
    description: 'Strategic merger to strengthen semiconductor materials portfolio.',
    category: 'news',
    url: '/communication/news/1678',
    keywords: ['merger', 'sk enpulse', 'semiconductor', 'acquisition'],
  },
  {
    id: 'news-1670',
    title: 'New Biodegradable Material Line Launched',
    description: 'Expanding eco-friendly product portfolio with LIMEX technology.',
    category: 'news',
    url: '/communication/news/1670',
    keywords: ['biodegradable', 'limex', 'eco-friendly', 'launch', 'new product'],
  },

  // Company info
  {
    id: 'sk-nexilis',
    title: 'SK Nexilis',
    description: 'Copper foil for batteries - SKC affiliate company.',
    category: 'company',
    url: 'http://www.sknexilis.com/en/',
    keywords: ['sk nexilis', 'copper foil', 'affiliate'],
  },
  {
    id: 'sk-picglobal',
    title: 'SK Picglobal',
    description: 'CMP materials - SKC affiliate company.',
    category: 'company',
    url: 'http://www.skpicglobal.com/',
    keywords: ['sk picglobal', 'cmp', 'affiliate'],
  },
  {
    id: 'newsroom',
    title: 'Newsroom',
    description: 'Latest news and press releases from SKC.',
    category: 'page',
    url: '/communication/newsroom',
    keywords: ['news', 'press', 'media', 'announcements'],
  },
  {
    id: 'investor-relations',
    title: 'Investor Relations',
    description: 'Financial information and investor resources.',
    category: 'page',
    url: '/communication/ir/investor',
    keywords: ['investor', 'financial', 'stock', 'reports'],
  },
];
