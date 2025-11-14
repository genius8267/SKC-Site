export type Stat = {
  label: string;
  value: string;
  detail: string;
};

export type Feature = {
  title: string;
  description: string;
  metric: string;
};

export type CanvasStep = {
  title: string;
  summary: string;
  helper: string;
};

export type Modality = {
  id: "chat" | "voice" | "multimodal";
  label: string;
  headline: string;
  description: string;
  highlights: string[];
  latency: string;
};

export type Suggestion = {
  title: string;
  description: string;
  improvement: string;
  impact: string;
};

export type Insight = {
  title: string;
  type: "Policy Modification" | "Knowledge Gap";
  tickets: number;
  lift: string;
};

export type VoiceHighlight = {
  title: string;
  detail: string;
};

export const stats: Stat[] = [
  {
    label: "Deflection rate",
    value: "92%",
    detail: "Voice + chat",
  },
  {
    label: "Supported languages",
    value: "45+",
    detail: "Adaptive routing",
  },
  {
    label: "Custom agents",
    value: "220",
    detail: "Across Fortune 100",
  },
];

export const features: Feature[] = [
  {
    title: "Built to handle complexity",
    description:
      "Route escalations, manage compliance reviews, and reason over live delivery data within a single agent canvas.",
    metric: "Millions of workflows automated",
  },
  {
    title: "Extremely customizable",
    description:
      "Ground every playbook in your brand standards, escalation rules, and knowledge base without writing brittle code.",
    metric: "Policy drift removed",
  },
  {
    title: "Auto policy writing",
    description:
      "Drop transcripts or SOPs and watch Giga craft agent-ready policies with citations and guardrails.",
    metric: "2 week deployment window",
  },
  {
    title: "Built-in Copilot",
    description:
      "Pair operators with an AI assist layer that suggests flows, coverage gaps, and improvements as they work.",
    metric: "Live tuning from transcript data",
  },
];

export const canvasSteps: CanvasStep[] = [
  {
    title: "Create the agent",
    summary:
      "Start from blueprints or import your best-performing workflows. Every configuration is versioned for auditability.",
    helper: "Brand, compliance, workflows",
  },
  {
    title: "Define policies",
    summary:
      "Blend legal language with conversational prompts so responses stay compliant across every region and product line.",
    helper: "Policy studio + reviewers",
  },
  {
    title: "Design the logic",
    summary:
      "Visual logic builder maps every branch. Add deterministic rules or let AI handle flexible routing based on goals.",
    helper: "Guarded reasoning graph",
  },
  {
    title: "Test and launch",
    summary:
      "Replay thousands of historical tickets before going live, then promote with a single approval.",
    helper: "Pre-production sandboxes",
  },
  {
    title: "Monitor and improve",
    summary:
      "Insights, alerts, and auto-improve recommendations keep agents aligned with KPIs long after launch.",
    helper: "Smart suggestions engine",
  },
];

export const modalities: Modality[] = [
  {
    id: "chat",
    label: "Chat",
    headline: "Conversational chat agents that feel on-brand.",
    description:
      "Handle high-volume messaging channels with contextual memory, inline actions, and multilingual coverage.",
    highlights: [
      "Under 300ms text responses",
      "Understands attachments + structured data",
      "Can trigger internal tools directly",
    ],
    latency: "285ms median latency",
  },
  {
    id: "voice",
    label: "Voice",
    headline: "Emotionally aware voice experiences.",
    description:
      "Interruption-aware speech, accent adaptation, and ultra-low latency keep fast-moving conversations natural.",
    highlights: [
      "Sub-500ms end-to-end latency",
      "Handles rapid topic shifts",
      "Escalation routing with context packets",
    ],
    latency: "480ms round trip",
  },
  {
    id: "multimodal",
    label: "Multi-modal",
    headline: "Ground every channel with consistent reasoning.",
    description:
      "Blend chat, voice, and visual context so customers can swap channels without losing continuity.",
    highlights: [
      "Understands files + screenshots",
      "Shared memory across channels",
      "Dynamic channel failover",
    ],
    latency: "Unified transcript timeline",
  },
];

export const suggestions: Suggestion[] = [
  {
    title: "Performance enhancement",
    description: "Auto-generate policy changes tied to KPIs you target.",
    improvement: "+22.2% resolution lift",
    impact: "1,190 tickets impacted",
  },
  {
    title: "Custom suggestions",
    description: "Surface flows to build before customers ever ask.",
    improvement: "+13.8% containment gain",
    impact: "928 tickets impacted",
  },
  {
    title: "Auto improve",
    description: "One-click implementation with full audit trail.",
    improvement: "+9.7% error reduction",
    impact: "102 tickets impacted",
  },
];

export const insights: Insight[] = [
  {
    title: "Add self-service reservation modification flow",
    type: "Policy Modification",
    tickets: 928,
    lift: "+13.8%",
  },
  {
    title: "Add fallback search flow for missing confirmation",
    type: "Policy Modification",
    tickets: 1190,
    lift: "+22.2%",
  },
  {
    title: "Streamline unspecific transfer flow",
    type: "Policy Modification",
    tickets: 102,
    lift: "+9.7%",
  },
  {
    title: "Add FAQ and handling rules",
    type: "Knowledge Gap",
    tickets: 72,
    lift: "+3.5%",
  },
];

export const voiceHighlights: VoiceHighlight[] = [
  {
    title: "Personalized voices",
    detail: "Tune pitch, cadence, and language mixing per brand locale.",
  },
  {
    title: "Dynamic interrupts",
    detail: "Understands impatient callers and recovers gracefully.",
  },
  {
    title: "Ultra-low latency",
    detail: "GPU-accelerated streaming keeps dialogues human-fast.",
  },
];

export const customerSpotlight = {
  brand: "DoorDash",
  metricLabel: "DWR rate",
  metricValue: "80%",
  title: "How DoorDash and Giga built reliable support at scale",
  quote:
    "We operate at a massive scale across services, platforms, and languages. Giga delivered measurable improvements—fewer escalations, faster resolutions, and tighter workflows across 40+ countries.",
  person: "Andy Fang",
  role: "Co-Founder at DoorDash",
};

export const footerNav = {
  product: [
    { label: "Agent Canvas", href: "#agent-canvas" },
    { label: "Smart Insights", href: "#insights" },
    { label: "Voice Experience", href: "#voice" },
  ],
  company: [
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
    { label: "Trust Center", href: "/trust" },
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};
