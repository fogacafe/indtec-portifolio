import type { Language } from './i18n'

export const careerContent = {
  pt: {
    journeyLabel: 'TRAJETÓRIA PROFISSIONAL',
    journeyEyebrow: 'MISSÃO / 2014 — PRESENTE',
    journeyTitle: 'Da sala de aula ao código em produção.',
    journeyDescription: 'Uma trajetória construída em etapas: ensino, suporte, desenvolvimento e, hoje, engenharia de software em sistemas críticos com liderança técnica hands-on.',
    current: 'ATUAL',
    educationLabel: 'FORMAÇÃO ACADÊMICA',
    learningLabel: 'FORMAÇÃO CONTÍNUA',
    career: [
      { period: 'MAR 2023 — ATUAL', duration: '3+ ANOS', company: 'BTG PACTUAL', role: 'IT Analyst', focus: 'Software Engineering · Technical Leadership · Sistemas financeiros · .NET · AWS' },
      { period: 'OUT 2017 — MAR 2023', duration: '5 ANOS 6 MESES', company: 'EDIAZ SOLUTIONS', role: 'Software Developer', focus: 'Aplicações corporativas · Modernização de legado · Integrações · .NET' },
      { period: 'SET 2016 — OUT 2017', duration: '1 ANO 2 MESES', company: 'ZANAFLEX BORRACHAS', role: 'IT Apprentice', focus: 'Suporte · Infraestrutura · Help Desk · SLA' },
      { period: 'JUN 2014 — OUT 2015', duration: '1 ANO 5 MESES', company: 'EURODATA', role: 'Instrutor de Informática', focus: 'Ensino · Informática · Fundamentos de tecnologia' },
    ],
    education: { degree: 'Sistemas de Informação', school: 'Faculdades Integradas Rio Branco', learning: ['Full Cycle', 'Balta.io', 'Rocketseat', 'Alura'] },
  },
  en: {
    journeyLabel: 'PROFESSIONAL JOURNEY',
    journeyEyebrow: 'MISSION / 2014 — PRESENT',
    journeyTitle: 'From the classroom to production code.',
    journeyDescription: 'A career built in stages: teaching, support, software development and, today, engineering critical systems with hands-on technical leadership.',
    current: 'CURRENT',
    educationLabel: 'ACADEMIC EDUCATION',
    learningLabel: 'CONTINUOUS LEARNING',
    career: [
      { period: 'MAR 2023 — PRESENT', duration: '3+ YEARS', company: 'BTG PACTUAL', role: 'IT Analyst', focus: 'Software Engineering · Technical Leadership · Financial systems · .NET · AWS' },
      { period: 'OCT 2017 — MAR 2023', duration: '5 YEARS 6 MONTHS', company: 'EDIAZ SOLUTIONS', role: 'Software Developer', focus: 'Corporate applications · Legacy modernization · Integrations · .NET' },
      { period: 'SEP 2016 — OCT 2017', duration: '1 YEAR 2 MONTHS', company: 'ZANAFLEX BORRACHAS', role: 'IT Apprentice', focus: 'Support · Infrastructure · Help Desk · SLA' },
      { period: 'JUN 2014 — OCT 2015', duration: '1 YEAR 5 MONTHS', company: 'EURODATA', role: 'Computer Instructor', focus: 'Teaching · Computing · Technology fundamentals' },
    ],
    education: { degree: 'Information Systems', school: 'Faculdades Integradas Rio Branco', learning: ['Full Cycle', 'Balta.io', 'Rocketseat', 'Alura'] },
  },
} satisfies Record<Language, object>
