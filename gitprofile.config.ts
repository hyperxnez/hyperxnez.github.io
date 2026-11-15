// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'hyperxnez',
  },
  /**
   * Deploying to https://hyperxnez.github.io/ requires base to be '/'.
   */
  base: '/',
  projects: {
    github: {
      display: true,
      header: 'Open Source',
      mode: 'automatic',
      automatic: {
        sortBy: 'updated',
        limit: 4,
        exclude: {
          forks: true,
          projects: [
            'hyperxnez/hyperxnez',
            'hyperxnez/hyperxnez.github.io',
            'hyperxnez/grabboxprototype',
            'hyperxnez/moodin',
            'hyperxnez/java',
          ],
        },
      },
      manual: {
        projects: ['hyperxnez/stream-deck-ai-usage-monitor'],
      },
    },
    external: {
      header: 'Selected Systems & AI Architecture',
      projects: [
        {
          title: 'Distributed .NET Microservices & Migration',
          description:
            'Enterprise backend services and large-scale system migrations (.NET 4.x to .NET 8+), async messaging via Kafka & RabbitMQ, Redis caching, MSSQL / PostgreSQL, and infra orchestration with HAProxy, Nomad & Consul.',
          imageUrl: '',
          link: 'https://github.com/hyperxnez',
        },
        {
          title: 'Multi-Domain Loyalty & SaaS Platform',
          description:
            'Fullstack architecture built with NestJS, Prisma, PostgreSQL, and Next.js supporting multi-tenant domain routing, JWT refresh rotation, OAuth, and OpenAPI docs.',
          imageUrl: '',
          link: 'https://github.com/hyperxnez',
        },
        {
          title: 'AI Agent & Content Automation Pipelines',
          description:
            'Local-first AI orchestration & worker workflows combining Claude, Gemini, and Ollama with Drizzle/PostgreSQL, Playwright E2E testing, and Docker Compose.',
          imageUrl: '',
          link: 'https://github.com/hyperxnez',
        },
      ],
    },
  },
  seo: {
    title: 'Việt Long (hyperxnez) — .NET Backend & AI Agent Engineer',
    description:
      'Backend & Systems Engineer (.NET 4.x to 10), Node.js Fullstack Developer, and AI Agent Builder.',
    imageURL: '',
  },
  social: {
    linkedin: '',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    discord: '',
    telegram: '',
    website: '', // Only set this if you have another site/blog outside hyperxnez.github.io
    phone: '',
    email: '',
  },
  resume: {
    fileUrl: '', // Add your PDF resume URL here when ready
  },
  about: {
    summary:
      'Backend & Systems Engineer experienced in large-scale .NET systems and migrations (from .NET 4.x to .NET 8/10), event-driven microservices with Kafka, RabbitMQ & Redis, MSSQL / PostgreSQL, and infrastructure tooling (HAProxy, Nomad, Consul). Comfortable delivering fullstack products with NestJS, Next.js, and Angular.',
    objective:
      'Building resilient distributed backends and practical AI Agent workflows — bridging enterprise reliability with autonomous LLM tooling and local-first developer tools.',
  },
  skills: [
    {
      category: 'Backend & .NET',
      items: [
        'C#',
        '.NET 4.x – 10',
        'ASP.NET Core',
        'EF Core',
        'Microservices',
      ],
    },
    {
      category: 'Data, Cache & MQ',
      items: ['Kafka', 'RabbitMQ', 'Redis', 'MSSQL', 'PostgreSQL'],
    },
    {
      category: 'Fullstack & Web',
      items: [
        'TypeScript',
        'Node.js',
        'NestJS',
        'Next.js',
        'Angular',
        'AngularJS',
      ],
    },
    {
      category: 'Infrastructure & Ops',
      items: ['Docker', 'HAProxy', 'Nomad', 'Consul'],
    },
    {
      category: 'AI Agents & Automation',
      items: ['AI Agents', 'LLM Pipelines', 'n8n', 'Playwright'],
    },
  ],
  experiences: [
    // {
    //   company: 'Company Name',
    //   position: '.NET Backend / Fullstack Engineer',
    //   from: 'Month Year',
    //   to: 'Present',
    //   companyLink: 'https://example.com',
    // },
  ],
  certifications: [],
  educations: [
    // {
    //   institution: 'University Name',
    //   degree: 'Bachelor of Software Engineering',
    //   from: '2018',
    //   to: '2022',
    // },
  ],
  publications: [],
  blog: {
    source: 'dev',
    username: '',
    limit: 2,
  },
  googleAnalytics: {
    id: '',
  },
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi',
    disableSwitch: false,
    respectPrefersColorScheme: true,
    displayAvatarRing: false,
    themes: ['lofi', 'black', 'nord', 'silk', 'light', 'dark'],
  },
  footer: `© ${new Date().getFullYear()} Việt Long (hyperxnez)`,
  enablePWA: false,
};

export default CONFIG;
