export const capabilities = [
  {
    id: 'SYS.01',
    title: 'Backend engineering',
    description: 'APIs, domain modeling and application flows designed for reliability, clarity and long-term maintenance.',
    technologies: ['C#', '.NET', 'REST', 'DDD'],
  },
  {
    id: 'SYS.02',
    title: 'Distributed systems',
    description: 'Asynchronous processing, messaging, idempotency and failure handling across independently evolving components.',
    technologies: ['SQS', 'SNS', 'RabbitMQ', 'Redis'],
  },
  {
    id: 'SYS.03',
    title: 'Cloud architecture',
    description: 'Serverless and containerized workloads with pragmatic infrastructure choices driven by the problem, not the trend.',
    technologies: ['AWS', 'Lambda', 'Docker', 'Kubernetes'],
  },
  {
    id: 'SYS.04',
    title: 'Data & performance',
    description: 'High-volume persistence, query optimization, batching, concurrency and observability for production systems.',
    technologies: ['PostgreSQL', 'SQL Server', 'DynamoDB', 'Datadog'],
  },
]

export const experience = [
  {
    index: '01',
    eyebrow: 'HIGH-VOLUME PROCESSING',
    title: 'Moving large workloads without losing control.',
    description: 'Experience designing and evolving processing pipelines where throughput, consistency and recoverability matter as much as raw speed.',
    tags: ['Batching', 'Parallelism', 'Idempotency', 'Backpressure'],
  },
  {
    index: '02',
    eyebrow: 'ARCHITECTURE EVOLUTION',
    title: 'Changing foundations while systems keep running.',
    description: 'Database and architecture migrations approached as progressive engineering problems, with reconciliation, observability and rollback paths in mind.',
    tags: ['PostgreSQL', 'DynamoDB', 'AWS', 'Migration'],
  },
  {
    index: '03',
    eyebrow: 'PERFORMANCE',
    title: 'Finding the bottleneck before adding complexity.',
    description: 'Profiling infrastructure, queries and application behavior to understand where time is actually spent before choosing an optimization strategy.',
    tags: ['.NET', 'SQL', 'Docker', 'Observability'],
  },
]

export const projects = [
  {
    mission: 'MISSION 001',
    name: 'BandFlow',
    status: 'PLANNED',
    description: 'A music-focused engineering ecosystem designed to explore domain modeling, distributed services and event-driven architecture.',
    stack: ['.NET', 'DDD', 'PostgreSQL', 'AWS'],
    href: '#',
  },
  {
    mission: 'MISSION 002',
    name: 'Engineering Labs',
    status: 'PLANNED',
    description: 'Small, focused experiments around software architecture, messaging, performance and reusable .NET building blocks.',
    stack: ['C#', 'Distributed systems', 'Observability'],
    href: '#',
  },
]

export const principles = [
  ['01', 'Simple before distributed', 'Complexity needs a reason to exist. Start with the simplest architecture that can honestly support the problem.'],
  ['02', 'Patterns solve problems', 'A pattern is useful when it improves a concrete design decision, not when it only makes the folder tree look familiar.'],
  ['03', 'Observability is part of the system', 'Production software should explain what it is doing when things are healthy and when they are not.'],
  ['04', 'Optimize with evidence', 'Measure first. A faster solution to the wrong bottleneck is still the wrong solution.'],
]
