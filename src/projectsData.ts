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
  ],
}
