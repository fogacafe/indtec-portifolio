import type { Language } from './i18n'

type Project = {
  mission: string
  name: string
  status: string
  description: string
  stack: string[]
  href: string
  demoHref?: string
}

export const projectsData: Record<Language, Project[]> = {
  pt: [
    {
      mission: 'LABZ / 001',
      name: 'Catalog',
      status: 'CONCLUÍDO',
      description: 'Catálogo musical propositalmente pequeno para tornar decisões de engenharia visíveis: modelagem de domínio, boundaries limpos, persistência segura e testes exercitando um PostgreSQL real.',
      stack: ['.NET', 'DDD', 'Dapper', 'PostgreSQL', 'Testcontainers', 'AWS'],
      href: 'https://github.com/fogacafe/indtec-labz-catalog',
    },
    {
      mission: 'LABZ / 002',
      name: 'Live',
      status: 'CONCLUÍDO',
      description: 'Laboratório event-driven para explorar Lambda, SQS/SNS, idempotência com DynamoDB, partial batch response, cold-start-aware DI, DLQ e infraestrutura em CloudFormation.',
      stack: ['.NET', 'AWS Lambda', 'SQS', 'SNS', 'DynamoDB', 'CloudFormation'],
      href: 'https://github.com/fogacafe/indtec-labz-live',
    },
    {
      mission: 'LABZ / 003',
      name: 'Planner',
      status: 'CONCLUÍDO',
      description: 'Planner anual interativo com edição inline, timeline por quarters/meses/semanas, drag-and-drop com replanejamento de fila, filtros e persistência local — construído para ser usado direto no navegador.',
      stack: ['React', 'TypeScript', 'Vite', 'LocalStorage', 'Drag & Drop'],
      href: 'https://github.com/fogacafe/indtec-labz-planner',
      demoHref: '/labz/planner/',
    },
    {
      mission: 'LABZ / 004',
      name: 'Gateway',
      status: 'CONCLUÍDO',
      description: 'Laboratório de performance e resiliência que torna o comportamento distribuído visível: cache-aside com Redis, comunicação gRPC, tracing com OpenTelemetry/Jaeger e falhas controladas no downstream.',
      stack: ['.NET', 'gRPC', 'Redis', 'OpenTelemetry', 'Jaeger', 'Docker'],
      href: 'https://github.com/fogacafe/indtec-labz-gateway',
    },
    {
      mission: 'LABZ / 005',
      name: 'Drums',
      status: 'EXPERIMENTAL',
      description: 'Practice lab para bateria eletrônica: MusicXML, timeline sincronizada, metrônomo, Web MIDI e feedback de timing em tempo real.',
      stack: ['React', 'TypeScript', 'MusicXML', 'Web MIDI', 'Web Audio'],
      href: 'https://github.com/fogacafe/indtec-labz-drums',
      demoHref: '/drums/',
    },
  ],
  en: [
    {
      mission: 'LABZ / 001',
      name: 'Catalog',
      status: 'COMPLETED',
      description: 'A deliberately small music catalog built to make engineering decisions visible: domain modeling, clean boundaries, secure persistence and tests exercising a real PostgreSQL database.',
      stack: ['.NET', 'DDD', 'Dapper', 'PostgreSQL', 'Testcontainers', 'AWS'],
      href: 'https://github.com/fogacafe/indtec-labz-catalog',
    },
    {
      mission: 'LABZ / 002',
      name: 'Live',
      status: 'COMPLETED',
      description: 'An event-driven lab exploring Lambda, SQS/SNS, DynamoDB idempotency, partial batch responses, cold-start-aware DI, DLQ and CloudFormation infrastructure.',
      stack: ['.NET', 'AWS Lambda', 'SQS', 'SNS', 'DynamoDB', 'CloudFormation'],
      href: 'https://github.com/fogacafe/indtec-labz-live',
    },
    {
      mission: 'LABZ / 003',
      name: 'Planner',
      status: 'COMPLETED',
      description: 'An interactive annual planner with inline editing, quarter/month/week timeline, drag-and-drop queue reflow, filters and local persistence — built to be used directly in the browser.',
      stack: ['React', 'TypeScript', 'Vite', 'LocalStorage', 'Drag & Drop'],
      href: 'https://github.com/fogacafe/indtec-labz-planner',
      demoHref: '/labz/planner/',
    },
    {
      mission: 'LABZ / 004',
      name: 'Gateway',
      status: 'COMPLETED',
      description: 'A performance and resilience lab that makes distributed behavior visible: Redis cache-aside, gRPC communication, OpenTelemetry/Jaeger tracing and controlled downstream failures.',
      stack: ['.NET', 'gRPC', 'Redis', 'OpenTelemetry', 'Jaeger', 'Docker'],
      href: 'https://github.com/fogacafe/indtec-labz-gateway',
    },
    {
      mission: 'LABZ / 005',
      name: 'Drums',
      status: 'EXPERIMENTAL',
      description: 'An electronic-drums practice lab with MusicXML, synchronized timeline, metronome, Web MIDI and real-time timing feedback.',
      stack: ['React', 'TypeScript', 'MusicXML', 'Web MIDI', 'Web Audio'],
      href: 'https://github.com/fogacafe/indtec-labz-drums',
      demoHref: '/drums/',
    },
  ],
}
