export type NavItem = {
  label: string;
  href: string;
  prefix: string;
};

export type QuickNavItem = {
  index: string;
  label: string;
  target: string;
};

export type HeroSlide = {
  title: string;
  tagline: string;
  description: string;
  media: {
    type: "image" | "video";
    src: string;
    alt: string;
  };
};

export type Metric = {
  label: string;
  value: string;
  helper?: string;
};

export type Highlight = {
  title: string;
  description: string;
  tag?: string;
};

export type CreationTrack = {
  title: string;
  summary: string;
  items: string[];
  accent: "copper" | "navy" | "emerald" | "amber";
};

export type NewsItem = {
  title: string;
  date: string;
  category: string;
  href: string;
};

export type MediaClip = {
  title: string;
  videoId: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
  handle: string;
};

export const navItems: NavItem[] = [
  { label: "Corporation", href: "#corporation", prefix: "C" },
  { label: "Creation", href: "#creation", prefix: "C" },
  { label: "Communication", href: "#communication", prefix: "C" },
  { label: "Career", href: "#career", prefix: "C" },
];

export const quickNav: QuickNavItem[] = [
  { index: "01", label: "Main", target: "#intro" },
  { index: "02", label: "Corporation", target: "#corporation" },
  { index: "03", label: "Creation", target: "#creation" },
  { index: "04", label: "Communication", target: "#communication" },
];

export const heroSlides: HeroSlide[] = [
  {
    title: "Global ESG material solutions company",
    tagline: "Technology transformation that changes the world.",
    description:
      "SKC Materials accelerates the future of electronics with copper foil, glass substrates, and eco-friendly chemistry.",
    media: {
      type: "image",
      src: "/hero-01.svg",
      alt: "SKC global ESG material solutions company hero",
    },
  },
  {
    title: "Circular manufacturing across the value chain",
    tagline: "Battery · Semiconductor · Eco-friendly",
    description:
      "From rechargeable battery components to semiconductor glass, we apply ESG discipline to every step.",
    media: {
      type: "image",
      src: "/hero-02.svg",
      alt: "Circular manufacturing hero",
    },
  },
];

export const brandPartners = [
  "SK Nexilis",
  "SK picglobal",
  "SK Leaveo",
  "Absolics",
  "ISC",
];

export const corporateMetrics: Metric[] = [
  { label: "Establishment", value: "1976" },
  { label: "Employees", value: "2,910", helper: "Consolidated" },
  { label: "Sales", value: "1.7T KRW", helper: "As of 2024" },
];

export const corporateHighlights: Highlight[] = [
  {
    title: "Woncheol Park",
    description: "CEO & President leading the transformation toward high-value semiconductors.",
    tag: "Leadership",
  },
  {
    title: "Business portfolio",
    description: "Secondary battery · Semiconductor · Eco-friendly materials",
    tag: "Value chain",
  },
  {
    title: "Corporate sustainability",
    description:
      "ESG initiatives across supply chain, ethical management, and net-zero manufacturing.",
    tag: "ESG",
  },
  {
    title: "SKC Family recruitment",
    description: "We search for diverse talent eager to build new materials with us.",
    tag: "Career",
  },
];

export const creationTracks: CreationTrack[] = [
  {
    title: "Rechargeable battery",
    summary: "Adding innovation upon innovation to accelerate electrification.",
    items: ["Copper foil", "Silicon anodes"],
    accent: "copper",
  },
  {
    title: "Semiconductor",
    summary: "Glass substrates and test sockets that unlock higher density packaging.",
    items: ["Glass substrate", "Test socket", "Blank mask"],
    accent: "navy",
  },
  {
    title: "CMP materials",
    summary: "CMP pads and slurry engineered for next-gen wafer processing.",
    items: ["CMP pad", "CMP slurry"],
    accent: "emerald",
  },
  {
    title: "Eco-friendly solutions",
    summary: "High-strength PBAT and biodegradable LIMEX for circular packaging.",
    items: ["High-strength PBAT", "Biodegradable LIMEX"],
    accent: "amber",
  },
];

export const newsItems: NewsItem[] = [
  {
    title:
      "SKC announces Q3 earnings: sustained recovery and visible progress in new businesses",
    date: "2025.11.05",
    category: "Newsroom",
    href: "https://www.skc.kr/eng/Conmmunication/newsroom/system.do",
  },
  {
    title:
      "SKC to merge with SK enpulse, restructuring toward high-value semiconductor back-end",
    date: "2025.10.16",
    category: "Press",
    href: "https://www.skc.kr/eng/Conmmunication/news/system.do",
  },
  {
    title: "Absolics secures mass production milestone for glass substrates",
    date: "2025.08.02",
    category: "Business Update",
    href: "#",
  },
];

export const mediaClips: MediaClip[] = [
  {
    title: "Glass substrate innovation",
    videoId: "NKu08otd8cw",
    href: "https://www.youtube.com/watch?v=NKu08otd8cw",
  },
  {
    title: "SKC sustainability story",
    videoId: "VgGRfOHYXRo",
    href: "https://www.youtube.com/watch?v=VgGRfOHYXRo",
  },
];

export const socialLinks: SocialLink[] = [
  {
    label: "YouTube",
    href: "https://www.youtube.com/@skc_global",
    handle: "@skc_global",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/skc",
    handle: "SKC",
  },
  {
    label: "WeChat",
    href: "https://www.skc.kr",
    handle: "SKC 官方",
  },
];

export const familySites = [
  { label: "SKC", href: "https://www.skc.kr" },
  { label: "SK picglobal", href: "https://www.skpicglobal.co.kr" },
  { label: "Absolics", href: "https://www.absolics.com" },
  { label: "SKC Leaveo", href: "https://www.skc.kr/leaveo" },
];

export const siteLinks = [
  {
    title: "Corporation",
    links: [
      { label: "Overview", href: "#corporation" },
      { label: "Leadership", href: "#corporation" },
      { label: "ESG", href: "#corporation" },
    ],
  },
  {
    title: "Creation",
    links: [
      { label: "Rechargeable battery", href: "#creation" },
      { label: "Semiconductor", href: "#creation" },
      { label: "Eco-friendly", href: "#creation" },
    ],
  },
  {
    title: "Communication",
    links: [
      { label: "Newsroom", href: "#communication" },
      { label: "Media", href: "#communication" },
      { label: "Social media", href: "#communication" },
    ],
  },
];

export const address =
  "SK-C Tower, 15 Chungmu-ro, Jung-gu, Seoul, Republic of Korea TEL: +82-2-3787-1234";
