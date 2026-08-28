import { UserProfile } from '../types';

export const initialProfileData: UserProfile = {
  name: 'Emran Hossain',
  title: 'Lead Full-Stack & AI Systems Engineer',
  headline: 'Architecting high-throughput distributed systems, modern web platforms, and intelligent generative AI applications.',
  summary: 'Senior Software Engineer with 8+ years of expertise in full-stack architecture, distributed systems, cloud computing, and LLM-driven applications. Proven track record of scaling high-concurrency cloud systems to 2M+ monthly active users and leading engineering initiatives across cross-functional teams.',
  bioParagraphs: [
    'I am a passionate software engineer and systems architect dedicated to turning complex engineering challenges into elegant, resilient, and lightning-fast digital experiences. Over the past 8 years, I have worked across the entire engineering lifecycle—from designing resilient microservices and reactive frontend architectures to training custom embeddings and deploying multi-agent AI systems.',
    'My core philosophy revolves around developer velocity, strict type safety, zero-downtime reliability, and deep user empathy. When building products, I treat performance, clean architecture, and intuitive UX as non-negotiable fundamentals.',
    'Beyond day-to-day product shipping, I actively contribute to open-source developer tooling, mentor aspiring software engineers, and write technical deep-dives on distributed consensus, vector search optimization, and modern web frameworks.'
  ],
  email: 'skemranhossain777@gmail.com',
  phone: '+1 (555) 349-8291',
  location: 'San Francisco, CA (Open to Remote)',
  timezone: 'America/Los_Angeles (PST / UTC-8)',
  status: 'Available for Staff/Lead Engineering Roles & Strategic Consulting',
  openToWork: true,
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800',
  socials: [
    { platform: 'github', url: 'https://github.com', label: 'GitHub', username: 'emranhossain' },
    { platform: 'linkedin', url: 'https://linkedin.com', label: 'LinkedIn', username: 'in/emran-hossain' },
    { platform: 'twitter', url: 'https://twitter.com', label: 'X (Twitter)', username: '@emran_dev' },
    { platform: 'email', url: 'mailto:skemranhossain777@gmail.com', label: 'Email', username: 'skemranhossain777@gmail.com' },
    { platform: 'leetcode', url: 'https://leetcode.com', label: 'LeetCode', username: 'emran_code' }
  ],
  stats: [
    { label: 'Years of Experience', value: '8+', change: 'Senior / Staff Level' },
    { label: 'Production Apps Shipped', value: '35+', change: 'Web, Mobile & Cloud' },
    { label: 'Peak Monthly Active Users', value: '2.4M', change: '99.99% Uptime SLA' },
    { label: 'Open Source Stars & Forks', value: '1.8k+', change: 'Active Contributor' }
  ],
  coreValues: [
    {
      title: 'Systems Resilience & Scale',
      description: 'Designing self-healing microservices, deterministic distributed workflows, and caching strategies that thrive under extreme throughput.',
      icon: 'ShieldCheck'
    },
    {
      title: 'Obsessive Polish & Fluid UX',
      description: 'Crafting responsive, accessible interfaces with sub-50ms interaction latency, elegant micro-animations, and clean typography.',
      icon: 'Sparkles'
    },
    {
      title: 'Practical AI Integration',
      description: 'Grounded LLM implementations utilizing robust RAG pipelines, semantic caching, low-latency streaming, and structured schema outputs.',
      icon: 'BrainCircuit'
    },
    {
      title: 'Engineering Velocity & Mentorship',
      description: 'Establishing high-leverage CI/CD pipelines, strict automated test suites, and empowering engineers through transparent technical leadership.',
      icon: 'Rocket'
    }
  ],
  experiences: [
    {
      id: 'exp-1',
      company: 'Apex Cloud Technologies',
      role: 'Staff Full-Stack & AI Systems Architect',
      location: 'San Francisco, CA',
      period: '2023 - Present',
      type: 'Full-time',
      description: 'Leading the core platform team building enterprise GenAI workflows, real-time collaboration engines, and serverless compute pipelines.',
      highlights: [
        'Architected a multi-tenant semantic search engine using Vector DBs and Gemini embeddings, reducing document retrieval latency by 68%.',
        'Led migration of monolithic backend services into containerized microservices on Kubernetes, saving $180k/year in cloud infrastructure costs.',
        'Mentored 12+ junior and mid-level engineers, standardizing TypeScript/React best practices and automated CI/CD staging environments.'
      ],
      technologies: ['TypeScript', 'React 19', 'Node.js', 'Python', 'Kubernetes', 'Gemini API', 'PostgreSQL', 'Redis']
    },
    {
      id: 'exp-2',
      company: 'Nexus Scale Labs',
      role: 'Senior Full-Stack Engineer',
      location: 'New York, NY (Remote)',
      period: '2021 - 2023',
      type: 'Full-time',
      description: 'Engineered high-concurrency fintech dashboards, real-time streaming analytics, and unified design systems for financial institutions.',
      highlights: [
        'Built real-time websocket transaction streaming engine processing 45,000 events/sec with sub-10ms delivery guarantees.',
        'Spearheaded the company-wide design system in Tailwind and React, reducing new feature delivery cycles from 3 weeks to 4 days.',
        'Implemented end-to-end telemetry and tracing via OpenTelemetry and Grafana, pinpointing database bottlenecks and improving p99 response times by 42%.'
      ],
      technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'WebSockets', 'Tailwind CSS', 'Docker', 'AWS']
    },
    {
      id: 'exp-3',
      company: 'Vanguard Digital Solutions',
      role: 'Software Engineer & Full Stack Developer',
      location: 'Austin, TX',
      period: '2019 - 2021',
      type: 'Full-time',
      description: 'Developed modern web applications, e-commerce integrations, and customer portal APIs for international clients.',
      highlights: [
        'Delivered 14 bespoke web and mobile applications with 100% on-time milestone execution.',
        'Designed secure OAuth 2.0 authentication flows and role-based access control (RBAC) across client dashboards.',
        'Optimized bundle size and Core Web Vitals to achieve 98+ Lighthouse scores across major client deployments.'
      ],
      technologies: ['JavaScript', 'React', 'Express', 'MongoDB', 'REST APIs', 'GraphQL', 'Jest']
    }
  ],
  education: [
    {
      id: 'edu-1',
      institution: 'University of California, Berkeley',
      degree: 'Bachelor of Science',
      field: 'Computer Science & Software Systems',
      period: '2015 - 2019',
      location: 'Berkeley, CA',
      grade: '3.89 GPA — Magna Cum Laude',
      achievements: [
        'President of Open Source Software Development Club',
        'Dean’s Honors List across 6 consecutive academic terms',
        'Senior Capstone Project: High-Throughput Distributed Graph Partitioning Engine'
      ]
    }
  ],
  certifications: [
    {
      name: 'Google Cloud Certified Professional Cloud Architect',
      issuer: 'Google Cloud Platform',
      date: '2024 - Present',
      credentialId: 'GCP-PCA-89421'
    },
    {
      name: 'AWS Certified Solutions Architect – Professional',
      issuer: 'Amazon Web Services',
      date: '2023 - Present',
      credentialId: 'AWS-SAP-74129'
    },
    {
      name: 'Certified Kubernetes Administrator (CKA)',
      issuer: 'Cloud Native Computing Foundation (CNCF)',
      date: '2023 - Present',
      credentialId: 'CKA-98144'
    }
  ],
  skills: [
    // Frontend
    { name: 'TypeScript / JavaScript', level: 96, category: 'Frontend', experienceYears: 8, highlight: true },
    { name: 'React 18 / 19 & Next.js', level: 95, category: 'Frontend', experienceYears: 7, highlight: true },
    { name: 'Tailwind CSS & UI Systems', level: 94, category: 'Frontend', experienceYears: 6, highlight: true },
    { name: 'State Management (Zustand / Redux)', level: 92, category: 'Frontend', experienceYears: 7 },
    { name: 'Motion / Web Animations', level: 88, category: 'Frontend', experienceYears: 5 },
    { name: 'HTML5, CSS3 & Responsive Design', level: 98, category: 'Frontend', experienceYears: 8 },

    // Backend
    { name: 'Node.js & Express / NestJS', level: 94, category: 'Backend & APIs', experienceYears: 8, highlight: true },
    { name: 'Python & FastAPI', level: 90, category: 'Backend & APIs', experienceYears: 5, highlight: true },
    { name: 'Go (Golang)', level: 82, category: 'Backend & APIs', experienceYears: 3 },
    { name: 'RESTful API & GraphQL Design', level: 95, category: 'Backend & APIs', experienceYears: 8 },
    { name: 'WebSockets & Event-Driven Pub/Sub', level: 90, category: 'Backend & APIs', experienceYears: 6 },
    { name: 'Microservices & Distributed Auth (OAuth/JWT)', level: 92, category: 'Backend & APIs', experienceYears: 7 },

    // AI & LLM Systems
    { name: 'Gemini API & Multimodal GenAI', level: 94, category: 'AI & LLM Systems', experienceYears: 3, highlight: true },
    { name: 'RAG Pipelines & Vector Search (Pinecone/Chroma)', level: 90, category: 'AI & LLM Systems', experienceYears: 3, highlight: true },
    { name: 'LangChain & Autonomous AI Agents', level: 88, category: 'AI & LLM Systems', experienceYears: 2 },
    { name: 'Function Calling & Structured JSON Outputs', level: 95, category: 'AI & LLM Systems', experienceYears: 3 },
    { name: 'Prompt Engineering & Few-Shot Optimization', level: 96, category: 'AI & LLM Systems', experienceYears: 3 },

    // Cloud & DevOps
    { name: 'Docker & Containerization', level: 92, category: 'Cloud & DevOps', experienceYears: 7, highlight: true },
    { name: 'Kubernetes (K8s) & Cloud Native', level: 85, category: 'Cloud & DevOps', experienceYears: 4 },
    { name: 'Google Cloud Platform (GCP)', level: 90, category: 'Cloud & DevOps', experienceYears: 6, highlight: true },
    { name: 'AWS (ECS, Lambda, S3, RDS)', level: 88, category: 'Cloud & DevOps', experienceYears: 6 },
    { name: 'CI/CD (GitHub Actions, ArgoCD)', level: 92, category: 'Cloud & DevOps', experienceYears: 6 },
    { name: 'Infrastructure as Code (Terraform)', level: 82, category: 'Cloud & DevOps', experienceYears: 4 },

    // Databases & Infra
    { name: 'PostgreSQL & SQL Performance Tuning', level: 94, category: 'Databases & Infra', experienceYears: 7, highlight: true },
    { name: 'Redis (Caching, Queues & PubSub)', level: 92, category: 'Databases & Infra', experienceYears: 6, highlight: true },
    { name: 'Firestore / NoSQL Databases', level: 88, category: 'Databases & Infra', experienceYears: 6 },
    { name: 'Database Migrations & ORMs (Prisma/Drizzle)', level: 90, category: 'Databases & Infra', experienceYears: 5 },

    // Architecture & Tools
    { name: 'Distributed Systems Architecture', level: 92, category: 'Architecture & Tools', experienceYears: 6, highlight: true },
    { name: 'System Design & Scalability Modeling', level: 94, category: 'Architecture & Tools', experienceYears: 7, highlight: true },
    { name: 'Testing (Jest, Vitest, Playwright)', level: 90, category: 'Architecture & Tools', experienceYears: 6 },
    { name: 'Git & Monorepo Tooling (Turborepo)', level: 92, category: 'Architecture & Tools', experienceYears: 7 }
  ],
  projects: [
    {
      id: 'proj-1',
      title: 'Synthetix AI Copilot & Document Workspace',
      tagline: 'Enterprise RAG platform with live citations, semantic multi-modal search, and autonomous agents.',
      description: 'An AI-powered research and analysis workspace that ingests heterogeneous documents (PDFs, spreadsheets, code repos), constructs hybrid vector embeddings, and enables multi-agent deep research with real-time citations.',
      category: 'AI & Agents',
      technologies: ['React 19', 'TypeScript', 'Gemini 2.5', 'Python FastAPI', 'Vector DB', 'Tailwind CSS', 'Docker'],
      metrics: ['68% faster doc review', '120k monthly queries', '4.9/5 satisfaction'],
      liveUrl: 'https://synthetix-demo.example.com',
      githubUrl: 'https://github.com/emranhossain/synthetix-ai-workspace',
      featured: true,
      role: 'Lead Architect & Full-Stack Engineer',
      date: '2024',
      challenges: [
        'Ensuring sub-second search latency over 500k+ enterprise document pages.',
        'Eliminating hallucinations via grounded source verification and exact line citations.',
        'Handling concurrent streaming responses without UI thread stuttering.'
      ],
      solution: 'Constructed an asynchronous chunking and vector indexing engine with ChromaDB and Gemini embeddings, paired with a resilient WebSocket streaming protocol for token-by-token frontend rendering.',
      keyFeatures: [
        'Multi-agent workflow orchestration with tool-calling capabilities',
        'Hybrid dense + sparse semantic search with reciprocal rank fusion',
        'Interactive side-by-side PDF preview with highlight jump targets',
        'Granular role-based workspace permissions and audit logging'
      ]
    },
    {
      id: 'proj-2',
      title: 'PulseStream Real-Time Financial Analytics',
      tagline: 'High-frequency telemetry dashboard processing 50k+ market events/sec with microsecond visual updates.',
      description: 'A mission-critical financial analytics platform engineered for trading desks and risk teams. Features interactive chart rendering, customizable telemetry widgets, automated threshold alerts, and instant order book replay.',
      category: 'Full Stack',
      technologies: ['TypeScript', 'Next.js', 'Node.js', 'WebSockets', 'Redis', 'PostgreSQL', 'Tailwind'],
      metrics: ['50k events/sec throughput', '<15ms glass-to-glass latency', '99.999% reliability'],
      liveUrl: 'https://pulsestream.example.com',
      githubUrl: 'https://github.com/emranhossain/pulsestream-analytics',
      featured: true,
      role: 'Principal Developer',
      date: '2023 - 2024',
      challenges: [
        'Preventing React re-render cascades during 60 FPS continuous real-time market data ticks.',
        'Maintaining lossless buffer synchronization during network reconnects.'
      ],
      solution: 'Created an off-main-thread WebWorker data ingestion pipeline coupled with a normalized memory-mapped state buffer, bypassing React DOM updates for pure Canvas-accelerated chart components.',
      keyFeatures: [
        'Custom high-performance WebGL & Canvas time-series chart visualizer',
        'Configurable multi-panel drag-and-drop workspace layout',
        'Automated real-time anomaly detection with webhook triggers',
        'Full compliance reporting with one-click exportable financial audits'
      ]
    },
    {
      id: 'proj-3',
      title: 'CloudMesh Kubernetes Orchestrator & Observability',
      tagline: 'Lightweight multi-cluster Kubernetes control plane with automated traffic shaping and cost insights.',
      description: 'An intuitive developer control plane for deploying, monitoring, and dynamically autoscaling containerized microservices across hybrid multi-cloud clusters.',
      category: 'Cloud & Systems',
      technologies: ['Go', 'TypeScript', 'React', 'Kubernetes API', 'Docker', 'Prometheus', 'Tailwind'],
      metrics: ['35% infra cost reduction', '2.5x faster deploys', 'Zero-downtime rollouts'],
      liveUrl: 'https://cloudmesh-platform.example.com',
      githubUrl: 'https://github.com/emranhossain/cloudmesh-k8s',
      featured: true,
      role: 'Systems Architect',
      date: '2023',
      challenges: [
        'Unified telemetry across disconnected AWS EKS and Google GKE clusters.',
        'Real-time visualization of dynamic service dependency topologies.'
      ],
      solution: 'Implemented a lightweight Go agent daemon executing on cluster nodes that streams gRPC metrics back to a centralized dashboard with interactive D3 force-directed service mesh graphs.',
      keyFeatures: [
        'Interactive live topology map of services, ingresses, and pods',
        'One-click canary and blue/green deployment automated rollouts',
        'Granular CPU/Memory resource optimization recommendations',
        'Secrets manager integration with automated TLS cert renewal'
      ]
    },
    {
      id: 'proj-4',
      title: 'TypeDraft: Type-Safe Schema & Mock API Engine',
      tagline: 'Instant mock API server generator and TypeScript contract validation tool for agile engineering teams.',
      description: 'An open-source developer productivity suite that transforms TypeScript interface definitions into mock REST & GraphQL servers with deterministic synthetic data, fuzz testing, and client SDK generation.',
      category: 'Open Source & Tools',
      technologies: ['TypeScript', 'Node.js', 'Vite', 'AST Parser', 'Tailwind CSS'],
      metrics: ['1.2k GitHub Stars', '45k monthly npm downloads', 'Adopted by 80+ companies'],
      liveUrl: 'https://typedraft.dev',
      githubUrl: 'https://github.com/emranhossain/typedraft',
      featured: false,
      role: 'Creator & Maintainer',
      date: '2022 - Present',
      challenges: [
        'Accurately parsing recursive TypeScript type definitions into realistic synthetic data generators.',
        'Zero-configuration CLI with zero runtime dependencies.'
      ],
      solution: 'Leveraged the TypeScript Compiler API (ts-morph) to build an AST analyzer that infers schema boundaries, generating mock fixtures with realistic faker-like semantic logic.',
      keyFeatures: [
        'Instant CLI mock server boot in under 200ms',
        'Interactive Web playground with live request sandbox',
        'Automated OpenAPI 3.1 & JSON Schema bidirectional export',
        'Custom middleware pipeline support for latency & error simulation'
      ]
    },
    {
      id: 'proj-5',
      title: 'OmniFlow Mobile Expense & Receipts Tracker',
      tagline: 'Offline-first expense tracker with on-device OCR receipt parsing and currency conversion.',
      description: 'Cross-platform mobile application for global professionals and freelancers to track expenses, capture receipts with machine learning, and generate tax-compliant invoices.',
      category: 'Mobile',
      technologies: ['React Native', 'TypeScript', 'SQLite', 'TensorFlow Lite', 'Tailwind'],
      metrics: ['4.8★ App Store Rating', '25k+ Active Users', 'Zero data leaks'],
      liveUrl: 'https://omniflow-app.example.com',
      githubUrl: 'https://github.com/emranhossain/omniflow-mobile',
      featured: false,
      role: 'Lead Mobile Engineer',
      date: '2022',
      challenges: [
        'High-accuracy receipt OCR on low-end mobile devices without cloud API dependencies.',
        'Seamless multi-device synchronization during intermittent offline connectivity.'
      ],
      solution: 'Integrated a quantized on-device Vision model combined with an encrypted local SQLite database and CRDT-based background sync.',
      keyFeatures: [
        'Instant receipt scan with automatic merchant and tax categorization',
        'Multi-currency live exchange rate conversion',
        'Biometric authentication (FaceID / Fingerprint) vault encryption',
        'CSV, PDF, and QuickBooks one-click export'
      ]
    },
    {
      id: 'proj-6',
      title: 'HyperLog Distributed Job Scheduler',
      tagline: 'Fault-tolerant distributed task queue with prioritization, rate-limiting, and cron workflows.',
      description: 'A resilient, high-throughput distributed job processing engine engineered to execute millions of recurring tasks and background jobs with at-least-once execution guarantees.',
      category: 'Cloud & Systems',
      technologies: ['Go', 'Redis', 'PostgreSQL', 'Docker', 'gRPC'],
      metrics: ['10M+ daily jobs handled', 'Sub-millisecond scheduling latency', 'Zero dropped jobs'],
      liveUrl: 'https://hyperlog-queue.example.com',
      githubUrl: 'https://github.com/emranhossain/hyperlog-scheduler',
      featured: false,
      role: 'Backend Architect',
      date: '2023',
      challenges: [
        'Distributed lock contention and split-brain recovery in multi-node clusters.',
        'Dynamic priority scheduling with fairness guarantees across noisy tenants.'
      ],
      solution: 'Built a multi-bucket Redis token-bucket rate limiter coupled with Raft leader election and optimistic concurrency controls in PostgreSQL.',
      keyFeatures: [
        'Strict FIFO, priority, and cron-scheduled job dispatching',
        'Automated exponential backoff and dead-letter queue (DLQ) routing',
        'Real-time web monitoring console with pause/resume controls',
        'SDK libraries available for TypeScript, Go, and Python'
      ]
    }
  ],
  presentations: [
    {
      id: 'talk-1',
      title: 'Architecting Resilient Multi-Agent AI Systems in Production',
      event: 'Global Web & AI Summit 2025',
      type: 'Keynote',
      location: 'San Francisco, CA (Moscone Center)',
      date: 'November 2025',
      description: 'Delivered an opening keynote exploring the architectural patterns for deploying reliable autonomous AI agents, mitigating non-deterministic hallucinations, and streaming low-latency responses at cloud scale.',
      topics: ['LLM Orchestration', 'Multi-Agent Systems', 'Vector Databases', 'Streaming Architecture'],
      attendees: '1,200+ Attendees',
      slidesUrl: 'https://speakerdeck.com',
      videoUrl: 'https://youtube.com',
      featured: true
    },
    {
      id: 'talk-2',
      title: 'Scaling Real-Time Web Applications to Millions of Concurrent Connections',
      event: 'React & Cloud Con North America',
      type: 'Conference Talk',
      location: 'Seattle, WA',
      date: 'August 2025',
      description: 'A deep-dive technical presentation detailing zero-downtime WebSocket clusters, CRDT-based state reconciliation, and optimistic client-side synchronization in distributed React web applications.',
      topics: ['WebSockets & WebRTC', 'React 19', 'CRDTs', 'Distributed Caching', 'Edge Computing'],
      attendees: '650+ Engineers',
      slidesUrl: 'https://speakerdeck.com',
      videoUrl: 'https://youtube.com',
      featured: true
    },
    {
      id: 'talk-3',
      title: 'Hands-on Workshop: Building Enterprise RAG with Gemini & TypeScript',
      event: 'DevCon Tech Workshop Series',
      type: 'Workshop',
      location: 'Austin, TX & Virtual',
      date: 'May 2025',
      description: 'A 3-hour interactive masterclass guiding senior engineers through setting up hybrid semantic search pipelines, metadata filtering, chunking strategies, and automated evaluation metrics.',
      topics: ['Gemini API', 'TypeScript', 'Vector Search', 'Hybrid Retrieval', 'RAG Evals'],
      attendees: '300+ Participants',
      slidesUrl: 'https://speakerdeck.com',
      videoUrl: 'https://youtube.com',
      featured: false
    },
    {
      id: 'talk-4',
      title: 'The Future of Full-Stack Engineering: AI Co-Pilots vs Autonomous Agents',
      event: 'Software Engineering Daily Podcast',
      type: 'Panel / Podcast',
      location: 'Online Broadcast',
      date: 'February 2025',
      description: 'Joined a distinguished panel of engineering leads discussing how AI-assisted workflows and autonomous agents are reshaping developer productivity, code review paradigms, and system design philosophies.',
      topics: ['Developer Productivity', 'Future of Coding', 'AI Tooling', 'System Design'],
      attendees: '18k+ Listeners',
      slidesUrl: 'https://speakerdeck.com',
      videoUrl: 'https://youtube.com',
      featured: false
    }
  ]
};
