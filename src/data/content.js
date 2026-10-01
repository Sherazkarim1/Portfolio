/**
 * Canonical content — single source of truth.
 *
 * Positioning is aligned across LinkedIn / GitHub / Upwork / this site:
 *   Core identity .... AI Systems Engineer
 *   Supporting ....... MLOps, DevOps, Full-Stack, AI Agents, RAG
 *   Proof points ..... 7+ years, 100% Job Success, Top Rated
 *
 * Titles are deliberately NOT identical across platforms — each one is
 * optimised for how that platform is searched. The facts must match.
 */

export const PROFILE = {
  name: 'Sheraz Karim',
  role: 'AI Systems Engineer',
  location: 'Gilgit, Pakistan',
  /** Kept in sync with the LinkedIn / Upwork tagline. */
  yearsExperience: 7,
}

/** Ordered by specificity — the marquee reads best most-specific-first. */
export const SPECIALITIES = [
  'AI Agents & Autonomous Workflows',
  'RAG & GraphRAG Knowledge Systems',
  'LLMOps & Model Deployment',
  'AI Chatbots & Copilots',
  'MLOps & Data Platforms',
  'AWS · Databricks · Snowflake',
  'CI/CD & Kubernetes',
]

/**
 * Service areas, mapped to the roles with durable demand.
 *
 * Deliberately NOT led by "prompt engineering" as a standalone service:
 * dedicated prompt-engineering roles collapsed as a separate title once
 * prompt skills became a baseline expectation for every AI engineer.
 * Prompting is kept as a technique inside AI Agent Engineering instead.
 */
export const CAPABILITIES = [
  {
    title: 'AI Agent Engineering',
    summary:
      'Multi-agent orchestration, tool-calling chains, state and memory management, failure recovery, and eval harnesses for autonomous workflows in production.',
    stack: ['LangGraph', 'RAG', 'Evals', 'Guardrails'],
  },
  {
    title: 'LLMOps & MLOps',
    summary:
      'Model deployment, versioning, drift and cost monitoring, inference serving, and retraining pipelines on Kubernetes and managed cloud runtimes.',
    stack: ['Kubernetes', 'Terraform', 'Databricks', 'Snowflake'],
  },
  {
    title: 'AI & Cloud Architecture',
    summary:
      'Designing the underlying platform — multi-cloud topology, data layers, secure enclaves, and CI/CD — so AI systems stay reliable after they ship.',
    stack: ['AWS', 'Azure', 'ArgoCD', 'Observability'],
  },
  {
    title: 'AI Security & Governance',
    summary:
      'Securing LLM applications against prompt injection and data leakage, with the access controls and auditability enterprise buyers now require.',
    stack: ['Guardrails', 'IAM', 'Red Teaming', 'Compliance'],
  },
]

export const HERO = {
  eyebrow: 'AI Systems Engineer',
  heading: ['I’m Sheraz, an', 'AI Systems Engineer'],
  subtext:
    'I design, build, and ship production AI systems — agentic workflows, RAG and GraphRAG knowledge layers, and LLM applications — then deploy them on AWS, Azure, and Kubernetes with the CI/CD pipelines to keep them running.',
}

export const SIDEBAR = [
  {
    title: 'About Me',
    body: 'AI Systems Engineer working across AWS, Azure, and Kubernetes, with 7+ years spanning MLOps, DevOps, and full-stack delivery. I build autonomous AI agents, retrieval-augmented systems, and the infrastructure that serves them in production.',
    cta: 'Learn more',
    href: '#about',
  },
  {
    title: 'My Work',
    body: 'From enterprise SCCM deployments across 6,000+ servers to GitOps pipelines with ArgoCD and Kubernetes, RAG knowledge systems, and AI agent workflows — here’s a look at what I’ve shipped.',
    cta: 'Browse portfolio',
    href: '#portfolio',
  },
]

export const SOCIALS = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sheraz-karim-3b3149244/',
    icon: 'linkedin',
  },
  { label: 'GitHub', href: 'https://github.com/Sherazkarim1', icon: 'github' },
  {
    label: 'Upwork',
    href: 'https://www.upwork.com/freelancers/~0120e5107410edbd72?mp_source=share',
    icon: 'upwork',
  },
]

export const ABOUT = {
  tag: '/ About me',
  heading: ['Seven years of', 'building for production'],
  stats: [
    { value: '7+', label: ['Years of', 'Experience'] },
    { value: '100%', label: ['Job Success', 'on Upwork'] },
    { value: '17+', label: ['Projects &', 'Engagements'] },
  ],
  badges: ['Top Rated', '100% Job Success'],
}

export const PORTFOLIO = {
  tag: '/ Work portfolio',
  heading: 'Client reviews',
  subtext:
    '5.0-star feedback from Upwork and Fiverr — AI agents, RAG systems, MLOps, and cloud engagements.',
}

/** Single-line headline ticker, duplicated once for a seamless loop. */
export const HEADLINES = [
  { title: 'Senior DevOps & SRE', body: 'Good freelancer to work with. They communicated well, and completed the work as requested.' },
  { title: 'AI Education Platform', body: 'Very forthcoming and hardworking' },
  { title: 'Build & Ship MVP in 24 Hours', body: 'Seller was hard working, patient, and very attentive. I would recommend.' },
  { title: 'Invoice OCR + NLP', body: 'Highly impressed with the quality and delivery of this project.' },
  { title: 'AI-Powered Task Management', body: 'Exceptional experience from start to finish. Sheraz is a true expert in AI.' },
  { title: 'DevOps Consulting', body: 'Had a great time learning with Sheraz. Will be back again.' },
  { title: 'AWS & Azure DevOps', body: '5.0 ★ client-rated consulting and support' },
]

export const REVIEWS_LEFT = [
  {
    project: 'DevOps Containerization',
    quote: 'Great Job, will comback for more',
    client: 'emmanuel_chidex · Brazil',
  },
  {
    project: 'DevOps Consulting',
    quote: 'He completely understood the issue at hand and utilized his resource to ensure we could make my project work',
    client: 'oneaboveall_21 · United States',
  },
  {
    project: 'DevOps Consulting',
    quote: 'Sheraz helped me with my project and was always available to go through the issues.',
    client: 'oneaboveall_21 · United States',
  },
  {
    project: 'DevOps Consulting',
    quote: 'Had a great time learning with Sheraz. Improved my knowledge within the first 10 minutes. Will be back again',
    client: 'jordanson · United States',
  },
  {
    project: 'Senior DevOps & SRE',
    quote: 'Good freelancer to work with. They communicated well, and completed the work as requested.',
    client: 'Upwork · Committed to Quality',
  },
  {
    project: 'AI Education Platform',
    quote: 'Very forthcoming and hardworking',
    client: 'Upwork · Collaborative',
  },
]

export const REVIEWS_RIGHT = [
  {
    project: 'Build & Ship MVP in 24 Hours',
    quote: 'Seller was hard working, patient, and very attentive. I would recommend.',
    client: 'Upwork · Fixed price',
  },
  {
    project: 'Invoice OCR + NLP',
    quote: 'Highly impressed with the quality and delivery of this project. He took a difficult job description and delivered a professional solution that works perfectly.',
    client: 'Upwork · Detail Oriented',
  },
  {
    project: 'Help with AI Work',
    quote: 'I have worked with many developers, but Sheraz stands out for his consistency and skill. He handled multiple AI work streams, always delivering ahead of schedule.',
    client: 'Upwork · Reliable',
  },
  {
    project: 'AI-Powered Task Management',
    quote: 'Exceptional experience from start to finish. Sheraz is a true expert in AI and application development.',
    client: 'Upwork · Clear Communicator',
  },
  {
    project: 'AWS Lambda & Database Setup',
    quote: '5.0-star delivery on AWS Lambda and database setup.',
    client: 'Upwork · Cloud specialist',
  },
  {
    project: 'AWS & Azure DevOps Consulting',
    quote: '5.0-star AWS, Azure, and DevOps consulting support.',
    client: 'Upwork · Cloud consultant',
  },
]