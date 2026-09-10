# Portfolio

Personal portfolio showcasing my work across **software engineering, data science, machine learning, and applied AI**.

This repository contains the source code for my personal website — a space to present the systems I build, document their evolution, and share the engineering decisions behind them.

> **Status:** V1 pronta para deployment — aplicação, conteúdo, rotas, acessibilidade, SEO e quality gates implementados.

## About

The portfolio is designed to go beyond a traditional résumé or a collection of repository links.

Each project can evolve into a technical case study covering its problem, architecture, engineering decisions, implementation, challenges, and current development status.

The website will also provide an overview of my professional background and the areas I currently work across:

- Software Engineering
- Data Engineering
- Data Science
- Machine Learning & MLOps
- Applied AI & LLM Systems

## Projects

The portfolio will feature projects across different areas of software, data, and AI, including:

### Medaudit

AI-powered healthcare audit system focused on document intelligence, rule retrieval, and grounded reasoning.

**Area:** Applied AI / RAG / LLM Systems

### Third-Party Lifecycle

Multi-tenant B2B platform for third-party onboarding, document compliance, approval workflows, and lifecycle management.

**Area:** Backend / SaaS / Software Architecture

### Municipal Fiscal Data Platform

Data platform for ingesting, standardizing, validating, and serving Brazilian municipal economic and fiscal data from official public sources.

**Area:** Data Engineering / Analytics Engineering

### Energy Load Forecasting

Production-oriented ML system for short-term electrical load forecasting using Brazilian ONS data, with temporal backtesting, monitoring, and retraining.

**Area:** ML Engineering / MLOps

### Coping Struggles Prediction

Machine learning project focused on behavioral and clinical data analysis and predictive modeling.

**Area:** Data Science / Statistical Machine Learning

## Design Direction

The website will follow a minimal, technical, and content-first visual language.

The design will use neutral surfaces with **orange as the primary accent color**, creating visual continuity with the portfolio's photography while keeping the interface restrained.

The experience is being designed around:

- Clear visual hierarchy
- Responsive layouts
- Dark and light themes
- Accessible interactions
- Consistent design tokens and components
- Subtle motion and interaction feedback
- Technical project case studies
- Performance and usability

## Planned Pages

```text
/
├── Home
├── Projects
│   └── Project Case Studies
├── About
└── Experience

## Desenvolvimento

Requer Node.js 24 ou superior.

```bash
npm install
npm run dev
```

Quality gates:

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

O site é estático e não depende de CMS, banco de dados ou backend. Copie `.env.example` para `.env.local` e informe a URL pública final. Consulte o [guia de deployment](docs/deployment.md) antes da publicação.
