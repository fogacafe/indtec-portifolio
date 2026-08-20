# INDTEC / Software Engineering Portfolio

A public engineering portfolio built to connect four things:

**what I know → where I used it → how I think → where it can be inspected in code.**

Indtec is not meant to be a traditional online résumé. It is a small public product where career context, engineering decisions and future open-source projects live under the same identity.

## Mission

The portfolio focuses on software engineering shaped by production systems: .NET, distributed processing, cloud, reliability, data, observability, performance and technical leadership.

The visual language combines modern product minimalism with aerospace/mission-control interfaces. Space is an influence, not decoration: telemetry labels, restrained signals, technical grids and contextual color are used to make the experience feel like a system without turning it into a sci-fi theme.

## INDTEC project pattern

Public projects are presented as **INDTEC missions**.

The convention is intentionally simple:

```text
INDTEC / PUBLIC 001
INDTEC / MISSION 001
INDTEC / MISSION 002
```

Each project should eventually expose:

- a clear problem and domain;
- the architectural decisions behind it;
- the smallest stack that makes sense for the problem;
- a public GitHub repository;
- a README explaining trade-offs rather than only setup commands.

The portfolio itself is the first public Indtec project.

## Stack

- React
- TypeScript
- Vite
- Plain CSS
- Lucide icons

There is intentionally no backend. Infrastructure should only be introduced when a concrete requirement justifies it.

## Vibe coding, with engineering judgment

This project deliberately embraces AI-assisted development. The implementation has been built collaboratively with **OpenAI Codex**, using conversation as part of the engineering loop instead of treating AI only as autocomplete.

The workflow is closer to pair programming:

1. define the intent, product constraints and visual direction;
2. discuss trade-offs before changing code;
3. let the agent implement a focused iteration;
4. review the result as a human — visually and technically;
5. refine what feels generic, excessive or disconnected from the real goal;
6. commit each meaningful evolution semantically.

That distinction matters to this repository. The goal is not to hide the use of AI or generate a large application in one prompt. The goal is to demonstrate how AI can accelerate implementation while a human keeps ownership of the context, taste, architecture, career narrative and final decisions.

Codex is OpenAI's coding agent for writing, reviewing and delivering code, and is designed for end-to-end software engineering tasks such as features, refactors and migrations. This project uses that agentic style as a development tool while keeping human review as the release gate.

Official Codex reference: https://openai.com/codex/

## Why not just autocomplete?

Inline assistants are useful and remain part of everyday development, but this experiment is intentionally broader than line-by-line code completion. The interesting part here is giving the AI enough product and engineering context to reason across a feature, repository, visual system and series of commits — then reviewing the result as a collaborator would.

This is not a benchmark against any specific assistant. It is a statement about the workflow I want to explore: **context first, code second.**

## Local development

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Deployment

Production is designed to run as a static site on **GitHub Pages** under the custom domain `indtec.dev`.

Every push to `main` triggers the Pages workflow:

```text
main
  ↓
GitHub Actions
  ↓
npm install
npm run build
  ↓
dist
  ↓
GitHub Pages
  ↓
indtec.dev
```

The custom domain itself is configured in the repository Pages settings and in the DNS provider. No application secrets or backend infrastructure are required.

## Portfolio structure

- Profile / current engineering direction
- Professional journey / flight log
- Academic background and continuous learning
- Engineering challenges
- Technologies shown in context
- Public projects / Indtec missions
- Engineering principles
- GitHub and LinkedIn contact channels

## Development principles

The repository evolves in small semantic iterations rather than one generated dump. AI can be used aggressively to accelerate implementation, but complexity still needs a reason to exist and every visible career claim should stay grounded in real experience.

**Build fast. Review carefully. Keep the system understandable.**
