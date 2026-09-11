# Portfolio --- Product, UX/UI & Engineering Roadmap

> **Document status:** Initial product specification\
> **Repository:** `portfolio`\
> **Product:** Personal portfolio of Victor Castro\
> **Primary purpose:** Present professional background and technical
> work across software engineering, data, machine learning, MLOps and
> applied AI through a polished, credible and evolving web experience.\
> **Implementation status:** Planned --- development has not started
> yet.

------------------------------------------------------------------------

# 1. Purpose of this document

This document is the implementation reference for the portfolio
repository.

It consolidates the product direction, information architecture, visual
direction, design system, responsive behavior, accessibility
requirements, page structures, content model, engineering principles,
project presentation rules, implementation phases and Definition of
Done.

The repository should also contain the two approved visual references:

``` text
docs/
├── portfolio-roadmap.md
├── visual-reference-pt1.png
├── visual-reference-pt2.png
├── victor-perfil-dark.jpg
└── victor-perfil-light.jpg
```

The visual references define **visual intent**, not literal content.
Text, metrics, technologies, statuses and project results visible in
mockups must never be copied blindly into production.

When this document and a visual mockup conflict:

1. factual/project information in this document or the actual project
    repository wins;
2. accessibility and usability requirements win;
3. semantic design tokens and component rules win;
4. the mockup remains a reference for composition, visual hierarchy and
    overall feel.

------------------------------------------------------------------------

# 2. Product vision

The portfolio must not feel like:

- a résumé converted into HTML;
- a generic developer template;
- a wall of technology badges;
- a collection of disconnected GitHub links;
- a flashy animation demo;
- a fabricated "senior engineer" landing page;
- a dashboard.

It should feel like a **personal technical product**.

The visitor should quickly understand:

``` text
Victor Castro
    ↓
Data Scientist
    ↓
works across software, data and AI systems
    ↓
builds real systems rather than isolated notebooks
    ↓
can explain architecture, engineering decisions and evolution
    ↓
has projects spanning complementary technical areas
```

The site is simultaneously:

- a professional presentation layer;
- a curated project index;
- a collection of technical case studies;
- a living record of project evolution;
- a demonstration of frontend/product engineering quality.

------------------------------------------------------------------------

# 3. Core portfolio narrative

Primary professional positioning:

> **Data Scientist \| Software, Data & AI Systems**

Supporting narrative:

Victor works across the lifecycle of data-driven systems, from ingestion
and modeling to APIs, applications and production-oriented AI/ML
systems.

The portfolio should make the intersection visible without presenting
multiple disconnected identities.

Primary areas:

- Software Engineering
- Data Engineering
- Data Science
- Machine Learning / MLOps
- Applied AI / LLM Systems

The site should communicate breadth through **projects and evidence**,
not through arbitrary percentages or inflated counters.

## 3.1 Explicitly prohibited claims

Do not display unsupported vanity metrics such as:

- `6+ years of experience`
- `15+ projects`
- `5 core domains`
- skill percentages such as `Python 95%`
- invented performance metrics
- invented user counts
- invented business impact
- fabricated project outcomes
- technologies that have not actually been used
- fake testimonials
- fake client logos

Do not display a city/location merely to fill visual space. Current
location is not required in the interface.

------------------------------------------------------------------------

# 4. Content truth hierarchy

Production copy must be grounded in real information.

Use this priority:

``` text
1. Current CV / verified professional information
2. Actual project repository and its documentation
3. Actual implementation/code
4. Project roadmap and ADRs
5. Portfolio editorial copy derived from the above
6. Visual mockups only for layout/design inspiration
```

A visual reference may contain placeholder copy. Placeholder copy is
never factual evidence.

## 4.1 Project content rules

For every project:

- status must reflect reality;
- technologies must reflect reality;
- architecture must reflect the actual or clearly labeled planned
    architecture;
- metrics/results must only appear when measured;
- screenshots must represent real interfaces unless clearly marked as
    concept;
- roadmap items must distinguish completed, active and planned work;
- "production" must not be used when the system is not
    production-ready;
- "AI-powered" must correspond to an actual AI capability once
    implementation exists;
- planned systems may describe the proposed problem and architecture,
    but must be labeled `Planned`.

------------------------------------------------------------------------

# 5. Initial project inventory

The portfolio currently has the following project narrative.

## 5.1 Medaudit

**Area:** Applied AI / RAG / LLM Systems\
**Role in portfolio:** Flagship Applied AI project.

Purpose:

> AI-powered healthcare audit system for document intelligence, rule
> retrieval and grounded reasoning.

Expected engineering themes:

- document ingestion;
- parsing;
- retrieval;
- grounded generation;
- citations/source traceability;
- rule correlation;
- evaluation;
- multimodal/document intelligence as later evolution;
- structured tools/data integration as later evolution;
- observability and regression testing.

Important content restriction:

Never expose private healthcare documents, proprietary documents,
patient information or other sensitive data. Public portfolio examples
should use public, synthetic or appropriately sanitized material.

## 5.2 Third-Party Lifecycle

**Area:** Backend / SaaS / Software Architecture

Purpose:

> Multi-tenant B2B platform for third-party onboarding, document
> compliance, approval workflows and lifecycle management.

Core lifecycle concept:

``` text
Third-party registration
→ document request
→ collection/upload
→ validation
→ pending items
→ approvals
→ qualification
→ active third party
→ monitoring
→ expiring documents
→ renewal/recertification
→ suspension/offboarding
```

Portfolio emphasis should eventually include:

- multi-tenancy;
- authorization/RBAC;
- workflow/state machine;
- auditability;
- document lifecycle;
- notifications;
- scheduling;
- idempotency;
- API design;
- software architecture.

Do not present future AI features as implemented.

## 5.3 Municipal Fiscal Data Platform

**Area:** Data Engineering / Analytics Engineering

Purpose:

> Data platform for ingesting, standardizing, validating and serving
> Brazilian municipal economic and fiscal data from official public
> sources.

Portfolio emphasis:

- ingestion;
- data contracts;
- schema evolution;
- deterministic entity resolution using municipality identifiers;
- raw/bronze → silver → gold concepts;
- data quality;
- provenance;
- historical revisions;
- transformations;
- serving/analytics.

## 5.4 Energy Load Forecasting

**Area:** ML Engineering / MLOps

Purpose:

> Production-oriented ML system for short-term electrical load
> forecasting using Brazilian ONS data, with temporal backtesting,
> monitoring and retraining.

Portfolio emphasis:

- temporal correctness;
- forecasting baselines;
- walk-forward/backtesting;
- point-in-time features;
- experiment tracking;
- model lifecycle;
- batch inference;
- monitoring;
- drift/regime changes;
- controlled retraining.

Never display example model metrics from visual mockups as real results.

## 5.5 Coping Struggles Prediction

**Area:** Data Science / Statistical Machine Learning

Existing project representing a more traditional
data-science/statistical-ML dimension.

The final case study must be derived from the actual repository before
publishing detailed claims about methodology, metrics, dataset or
conclusions.

------------------------------------------------------------------------

# 6. Information architecture

Initial route map:

``` text
/
├── /projects
│   └── /projects/[slug]
├── /about
└── /experience
```

No blog, CMS, services page or contact form is required for V1.

Do not create empty sections merely because portfolio templates commonly
contain them.

Potential future additions require a real content need:

``` text
/writing
/notes
```

These are explicitly **not V1 requirements**.

------------------------------------------------------------------------

# 7. Global navigation

Desktop navigation:

``` text
VC | Home | Projects | About | Experience | Theme | Primary CTA
```

The exact primary CTA should be decided from real intent. Do not
automatically claim "Available for opportunities."

Potential CTA:

- `Get in touch`

Only expose contact channels that Victor actually wants public.

## 7.1 Desktop header behavior

Requirements:

- visually restrained;
- consistent max-width with page content;
- active route clearly indicated;
- active state cannot rely exclusively on color;
- sufficient contrast in both themes;
- keyboard focus visible;
- theme control accessible by keyboard and screen reader;
- sticky header is optional, not mandatory;
- if sticky, avoid excessive backdrop blur and visual noise.

## 7.2 Mobile navigation

Mobile:

``` text
VC                       Menu
```

Menu opens into a clear navigation surface with:

- Home
- Projects
- About
- Experience
- theme control if appropriate
- contact CTA
- social/contact links if useful

Requirements:

- close control;
- Escape closes menu;
- focus management;
- no background interaction while modal-style menu is open;
- no tiny icon-only touch targets;
- respect reduced motion.

------------------------------------------------------------------------

# 8. Home page

The Home page is the primary entry point and must establish identity
before detail.

## 8.1 Hero

Desktop conceptual structure:

``` text
┌───────────────────────────────────────────────────────┐
│ Intro / positioning                 Portrait          │
│                                                       │
│ Hi, I'm                                               │
│ Victor Castro.                       [photo]           │
│                                                       │
│ concise professional statement                        │
│                                                       │
│ [Explore my work] [secondary action]                  │
└───────────────────────────────────────────────────────┘
```

The portrait supplied for the project is a key visual asset.

### Portrait rules

- preserve natural appearance;
- use circular or controlled rounded masking;
- do not rely on the source image already having transparent corners;
- crop with CSS/image processing at presentation time;
- maintain correct aspect ratio;
- provide meaningful alt text when the image conveys identity;
- avoid excessive decorative glow;
- allow warm tones in the portrait to influence the orange accent;
- do not over-enlarge the portrait at the expense of hierarchy.

## 8.2 Hero copy

Copy must be concise.

Desired hierarchy:

1. name;
2. professional positioning;
3. one short explanation of what Victor builds;
4. primary action;
5. optional secondary action.

Avoid:

- long biography;
- giant skill lists;
- "passionate ninja/guru" language;
- unsupported availability claims;
- generic motivational slogans.

## 8.3 Selected projects

Home should feature approximately 3 projects, not necessarily all
projects.

Selection is editorial.

Initial candidates:

- Medaudit
- Energy Load Forecasting
- Third-Party Lifecycle

A completed project such as Coping Struggles Prediction can replace a
planned project if it creates a stronger evidence mix.

Each card should contain only the information necessary for scanning:

``` text
Status
Project title
Short problem/system description
Area or 2–3 meaningful tags
Action
```

Avoid a badge wall.

## 8.4 Areas of work

A restrained section may communicate:

- Software Engineering
- Data Engineering
- Machine Learning
- Applied AI

This section must not be presented as quantified "core domains."

Its purpose is navigation/context, not self-scoring.

## 8.5 Home closing section

A final CTA may invite contact or project exploration.

Avoid generic giant marketing banners if they add no information.

------------------------------------------------------------------------

# 9. Projects index

Route:

``` text
/projects
```

Purpose:

> Provide a curated overview of all relevant technical work.

## 9.1 Header

Suggested structure:

``` text
PROJECTS

Systems I'm building and experiments I've worked on.

[All] [AI] [Software] [Data] [ML]
```

Category labels may evolve.

Filters must only be added if there are enough projects to justify them.
With very few projects, filtering may be unnecessary.

## 9.2 Project card

Canonical project card fields:

``` ts
type ProjectSummary = {
  slug: string
  title: string
  summary: string
  area: ProjectArea
  status: ProjectStatus
  technologies: string[]
  featured: boolean
  repository?: string
  demo?: string
}
```

Recommended area model:

``` ts
type ProjectArea =
  | "applied-ai"
  | "software-engineering"
  | "data-engineering"
  | "ml-engineering"
  | "data-science"
```

Recommended status model:

``` ts
type ProjectStatus =
  | "planned"
  | "active"
  | "experimental"
  | "stable"
```

A `completed` presentation state can be considered if it accurately
represents a project, but the semantic lifecycle should remain
intentionally small.

## 9.3 Status language

Preferred visible labels:

``` text
Planned
In Development
Experimental
Stable
```

Do not imply that public means complete.

------------------------------------------------------------------------

# 10. Project case-study page

Route:

``` text
/projects/[slug]
```

This is the most important content template after Home.

GitHub explains implementation details and source history.

The portfolio case study explains:

- what problem exists;
- why the project exists;
- what system is being built;
- how it is structured;
- what decisions were made;
- what is implemented;
- what remains planned;
- what was learned;
- what evidence/results exist.

## 10.1 Case-study header

Potential structure:

``` text
Back to projects

[Status]

Project Name

One-sentence system description.

[Repository] [Live demo, only if real]

Tags / technologies
```

No disabled fake demo button. If there is no demo, omit it.

## 10.2 Case-study navigation

For sufficiently long pages, use an anchored subnavigation:

``` text
Overview
Problem
Solution
Architecture
Tech
Challenges
Roadmap
Learnings
```

Only include sections that actually exist.

On mobile, avoid a cramped horizontal navigation. Options:

- horizontally scrollable tabs;
- compact section menu;
- no sticky section navigation if it harms usability.

## 10.3 Overview

Concise system summary.

## 10.4 Problem

Explain the real problem, constraints and context.

Avoid marketing exaggeration.

## 10.5 Proposed/implemented solution

For planned projects label it clearly as proposed.

For active projects distinguish:

``` text
Implemented
In progress
Planned
```

## 10.6 Architecture

Architecture diagrams should be first-class portfolio content.

Principles:

- readable;
- semantic;
- accessible;
- no decorative complexity;
- reflect real architecture;
- distinguish future components;
- provide textual explanation alongside the diagram.

Example conceptual flow for Medaudit:

``` text
Documents
    ↓
Ingestion / parsing
    ↓
Index / knowledge representation
    ↓
Retrieval
    ↓
Grounded generation
    ↓
Answer + source traceability
```

Do not lock the implementation to this exact architecture before the
project validates it.

## 10.7 Technical decisions

Case studies should explain decisions, not merely list tools.

Useful format:

``` text
Decision
Context
Options considered
Choice
Trade-offs
Current result
```

Long-lived decisions may link to ADRs in the source repository.

## 10.8 Challenges

Show actual engineering challenges.

Examples of categories:

- data quality;
- temporal leakage;
- retrieval quality;
- multi-tenancy;
- schema evolution;
- model evaluation;
- observability;
- performance;
- accessibility.

Only use challenges relevant to the project.

## 10.9 Results

Only render when real evidence exists.

Possible evidence:

- evaluation metrics;
- latency;
- data-quality results;
- test coverage where meaningful;
- model metrics;
- screenshots;
- measured performance improvements;
- operational characteristics.

No fabricated charts.

## 10.10 Current status

Use a readable milestone list.

Example:

``` text
✓ Problem definition
✓ Architecture exploration
● Initial implementation
○ Evaluation
○ Deployment
```

Symbols must have text/ARIA meaning and cannot depend solely on color.

## 10.11 Learnings

A concise section explaining meaningful technical learning.

Do not turn it into generic inspirational copy.

## 10.12 Previous / next project

At the bottom:

``` text
← Previous project              Next project →
```

Ordering should be deterministic and editorial.

------------------------------------------------------------------------

# 11. About page

Route:

``` text
/about
```

Purpose: tell the professional story without reproducing the entire CV.

Core narrative:

``` text
Biotechnology
    ↓
Bioinformatics
    ↓
Data Science
    ↓
Software Engineering
    ↓
Data & AI Systems
```

The page can explain how scientific training influences the approach to
technical problems.

The portrait can appear here again, at a smaller scale.

Avoid:

- vanity counters;
- skill percentages;
- generic personality claims;
- long CV duplication.

------------------------------------------------------------------------

# 12. Experience page

Route:

``` text
/experience
```

Purpose: provide concise professional chronology.

Use real CV information as the source of truth.

Known high-level experience direction:

- current Data Scientist / Specialist work involving data pipelines,
    ML, data platforms, applied Generative AI, applications,
    DevOps/CI/CD, governance/quality and analytics;
- prior Full-Stack development involving frontend, APIs, databases,
    caching, cloud/CI/CD and containers;
- earlier scientific/bioinformatics work;
- Biotechnology education;
- Data Science training.

Before final copy is published, verify exact titles, dates and
descriptions against the current CV.

## 12.1 Timeline

Desktop:

``` text
Year / period ── Role
                Organization
                concise responsibilities
```

Mobile should become a single readable vertical flow.

Do not use invented numeric years of total experience.

------------------------------------------------------------------------

# 13. Contact behavior

A dedicated Contact page is not required for V1.

Contact can be provided through:

- header CTA;
- closing section;
- footer.

Potential destinations:

- email;
- LinkedIn;
- GitHub.

Only publish actual desired channels.

No location is necessary.

A contact form should only be introduced if there is a real reason to
maintain one.

------------------------------------------------------------------------

# 14. Visual direction

Overall style:

> **Minimal, technical, editorial, restrained.**

Avoid stereotypical "developer portfolio" visuals.

Explicitly avoid:

- Matrix effects;
- fake terminal interfaces as the primary visual language;
- particle backgrounds;
- unnecessary 3D;
- neon-heavy cyberpunk styling;
- excessive glassmorphism;
- skill progress bars;
- large badge walls;
- animated backgrounds that compete with content;
- gratuitous scroll hijacking.

Use:

- generous whitespace;
- strong typography;
- neutral surfaces;
- subtle borders;
- controlled shadows;
- meaningful diagrams;
- limited motion;
- orange accent;
- the portrait as a warm visual anchor.

------------------------------------------------------------------------

# 15. Color system

The approved direction replaces the earlier blue-primary concept with
**orange as the main accent**.

Orange should be an accent, not the dominant surface color.

## 15.1 Semantic token strategy

Do not hard-code arbitrary hex values throughout components.

Use semantic tokens:

``` text
--color-background
--color-surface
--color-surface-elevated
--color-text-primary
--color-text-secondary
--color-text-muted
--color-border
--color-border-strong

--color-accent
--color-accent-hover
--color-accent-active
--color-accent-foreground
--color-focus

--color-success
--color-warning
--color-error
--color-info
```

Exact hex values should be tuned during implementation using the visual
references and contrast testing.

The mockup palette is **directional**, not a binding numeric
specification.

## 15.2 Dark theme

Direction:

``` text
Background       near-black / charcoal
Surface          slightly lighter charcoal
Elevated surface another neutral step
Primary text     near-white
Secondary text   cool/light gray
Border           low-contrast neutral
Accent           warm orange
```

The dark theme should not use pure black everywhere.

## 15.3 Light theme

Direction:

``` text
Background       off-white
Surface          white / near-white
Elevated surface subtle neutral
Primary text     near-black / charcoal
Secondary text   medium neutral
Border           light neutral
Accent           same orange family
```

Do not simply invert dark mode.

## 15.4 Status colors

Status is semantically separate from the orange brand accent.

Suggested semantics:

``` text
Planned          amber / neutral warm
In Development   green/teal family
Experimental     contextual neutral/info
Stable           success family
Error            red
```

Every status includes a text label; color is supplemental.

------------------------------------------------------------------------

# 16. Theme behavior

Support:

``` text
System
Light
Dark
```

Default should respect system preference unless the user has explicitly
selected another theme.

Persist explicit preference locally.

Requirements:

- no flash of incorrect theme where reasonably avoidable;
- theme toggle has accessible label;
- theme transition should be subtle;
- respect `prefers-reduced-motion`;
- both themes must meet the same usability standard.

------------------------------------------------------------------------

# 17. Typography

Typography should be modern, highly legible and neutral enough to let
content and diagrams lead.

## 17.1 Font strategy

Preferred initial direction:

- one primary sans-serif family;
- variable font when practical;
- system fallback stack;
- avoid loading several decorative font families.

The visual references use an Inter-like neo-grotesk direction. Final
implementation may use **Inter** or another carefully evaluated
sans-serif.

Do not treat the font shown in generated imagery as an exact font
specification.

## 17.2 Type roles

Suggested desktop scale:

``` text
Display / Hero     56–64px / tight leading
H1                 48–56px
H2                 36–40px
H3                 28–32px
H4                 22–24px
Body Large         18px / 28px
Body               16px / 24–26px
Body Small         14px / 20px
Caption            12–13px / 18px
```

Mobile should scale down fluidly rather than preserving desktop sizes.

Use `clamp()` where appropriate for large headings.

Example direction:

``` css
font-size: clamp(2.5rem, 6vw, 4rem);
```

## 17.3 Line length

Long-form case-study prose should target approximately:

``` text
60–75 characters per line
```

Do not allow body copy to span the full desktop viewport.

## 17.4 Font weights

Keep a small system:

``` text
Regular     400
Medium      500
Semibold    600
Bold        700
```

Do not use many visually indistinguishable weights.

------------------------------------------------------------------------

# 18. Spacing system

Use an 8px-oriented spacing scale.

Recommended semantic scale:

``` text
1   = 4px
2   = 8px
3   = 12px
4   = 16px
5   = 24px
6   = 32px
7   = 48px
8   = 64px
9   = 96px
10  = 128px
```

Not every token must map directly to Tailwind naming.

Rules:

- components use smaller spacing tokens;
- sections use larger tokens;
- avoid one-off arbitrary spacing unless justified;
- vertical rhythm should remain consistent across pages.

------------------------------------------------------------------------

# 19. Layout grid

## 19.1 Page container

Use a centered max-width container.

Initial target:

``` text
max content width: ~1200–1280px
```

Case-study prose may use a narrower reading column inside the main
container.

## 19.2 Desktop grid

Use a 12-column conceptual grid.

Suggested:

``` text
12 columns
24–32px gutters
responsive outer padding
```

Typical hero:

``` text
text     6–7 columns
portrait 5–6 columns
```

Do not force every component into visible grid boundaries.

## 19.3 Tablet

Use flexible 8-column or CSS-grid behavior rather than a rigid
design-tool-only grid.

## 19.4 Mobile

Single primary content column.

Cards can remain one column unless width genuinely supports two without
harming readability.

------------------------------------------------------------------------

# 20. Breakpoints

Prefer mobile-first implementation.

Initial breakpoint direction aligned with the chosen utility framework:

``` text
base     < 640px
sm       ≥ 640px
md       ≥ 768px
lg       ≥ 1024px
xl       ≥ 1280px
2xl      ≥ 1536px
```

These are implementation defaults, not design targets for specific
devices.

Design should respond to **available space**, not "iPhone vs iPad."

Use container queries when a reusable component needs to respond to its
own width rather than the viewport.

------------------------------------------------------------------------

# 21. Responsive behavior

## 21.1 Mobile first

Build the smallest layout first.

Desktop enhancements should be layered on top.

## 21.2 Hero

Mobile:

``` text
portrait
headline
description
actions
```

or headline before portrait if testing indicates better hierarchy.

The visual reference currently favors portrait near the top.
Implementation can tune order based on actual viewport behavior.

Desktop:

``` text
copy + portrait side by side
```

## 21.3 Project cards

Mobile: single column.

Tablet: 2 columns where appropriate.

Desktop: typically 3 columns for selected projects.

Projects index can use 2--3 columns depending on card width and copy
length.

## 21.4 Case studies

Desktop may use:

- main content + status/sidebar;
- wide architecture diagrams;
- multi-column challenge/decision sections.

Mobile must collapse to a logical reading order.

No information may disappear solely because the viewport is smaller.

------------------------------------------------------------------------

# 22. Component inventory

Do not build a huge generic component library before the site needs it.

Initial components should emerge from actual page requirements.

## 22.1 Layout

``` text
SiteHeader
MobileNavigation
PageContainer
Section
SiteFooter
ThemeToggle
```

## 22.2 Typography

Prefer semantic wrappers or styling conventions rather than components
for every text size.

Potential primitives:

``` text
Eyebrow
SectionHeading
Prose
```

## 22.3 Actions

``` text
Button
TextLink
IconLink
```

Button variants:

``` text
primary
secondary
outline
ghost
```

Sizes should remain limited.

## 22.4 Project components

``` text
ProjectCard
ProjectStatus
ProjectTags
ProjectGrid
ProjectHero
ProjectNavigation
ProjectMilestones
ArchitectureDiagram
DecisionBlock
MetricCard
```

Only create `MetricCard` when real metrics exist.

## 22.5 Feedback/state components

``` text
LoadingSkeleton
EmptyState
ErrorState
NotFoundState
```

## 22.6 Media

``` text
Portrait
ProjectImage
Figure
```

Use framework image optimization where appropriate.

------------------------------------------------------------------------

# 23. Component states

Interactive components must define states intentionally.

## 23.1 Buttons

Required:

``` text
default
hover
focus-visible
active
disabled
loading — only if asynchronous action exists
```

Focus must be obvious.

Orange hover should change luminance/contrast rather than introduce an
unrelated hue.

## 23.2 Links

Required:

``` text
default
hover
focus-visible
visited — optional/editorially controlled
```

Do not remove underlines from long-form inline links unless another
clear affordance exists.

## 23.3 Cards

Required:

``` text
default
hover (when clickable)
focus-within
```

Do not create misleading hover effects on non-interactive cards.

Avoid excessive lift/shadow animation.

## 23.4 Tags

Tags are informational unless implemented as filters.

Interactive filter chips require:

``` text
default
hover
focus
selected
disabled if relevant
```

------------------------------------------------------------------------

# 24. Accessibility

Accessibility is a baseline engineering requirement.

Target: **WCAG 2.2 AA-oriented implementation**.

## 24.1 Semantic HTML

Use real semantic elements:

``` html
<header>
<nav>
<main>
<section>
<article>
<footer>
```

Use heading levels in logical order.

Do not use clickable `<div>` elements where a `<button>` or `<a>` is
correct.

## 24.2 Keyboard

Everything interactive must work without a mouse.

Test:

- Tab
- Shift+Tab
- Enter
- Space where appropriate
- Escape for modal/menu behavior

## 24.3 Focus

Never globally remove outlines without replacement.

Use a consistent `focus-visible` treatment derived from the accent/focus
token.

## 24.4 Contrast

Validate text, controls, borders that communicate state and focus
indicators.

Orange-on-white and orange-on-dark combinations must be tested rather
than assumed accessible.

## 24.5 Images

Portrait:

- meaningful alt text if serving identity/content;
- empty alt only if truly decorative.

Architecture images require:

- useful alt;
- nearby textual explanation.

## 24.6 Motion

Respect:

``` css
@media (prefers-reduced-motion: reduce)
```

Non-essential motion should be reduced or removed.

## 24.7 Screen readers

Icon-only controls require accessible names.

Use `sr-only` content where appropriate.

## 24.8 Touch targets

Controls should have comfortable touch areas even when icons are
visually small.

------------------------------------------------------------------------

# 25. Motion and interaction

Motion should communicate state and continuity.

Allowed direction:

- subtle opacity/translate reveal;
- restrained card hover;
- theme transition;
- navigation transition;
- diagram emphasis if meaningful.

Avoid:

- scroll hijacking;
- long entrance sequences;
- bouncing CTAs;
- constant background motion;
- cursor gimmicks;
- parallax that harms reading;
- animations required to understand content.

Typical transition duration:

``` text
~120–250ms for micro-interactions
```

Use easing consistently.

------------------------------------------------------------------------

# 26. Design tokens

Tokens should be centralized.

Suggested conceptual taxonomy:

``` text
tokens
├── color
│   ├── background
│   ├── surface
│   ├── text
│   ├── border
│   ├── accent
│   └── semantic
├── typography
│   ├── family
│   ├── size
│   ├── weight
│   ├── leading
│   └── tracking
├── spacing
├── radius
├── shadow
├── motion
└── breakpoint
```

## 26.1 Radius

Use a restrained scale:

``` text
small
medium
large
full
```

Portrait uses `full`.

Cards should not look excessively pill-shaped.

## 26.2 Shadows

Dark mode should rely more on borders/surface separation than large
black shadows.

Light mode may use subtle elevation.

## 26.3 Borders

Borders are important to the approved visual language.

Use neutral, low-contrast borders and stronger focus/interactive
borders.

------------------------------------------------------------------------

# 27. Content architecture

Initial preference: local, version-controlled content.

Do not introduce a CMS in V1.

Potential structure:

``` text
content/
└── projects/
    ├── medaudit.mdx
    ├── third-party-lifecycle.mdx
    ├── municipal-fiscal-data-platform.mdx
    ├── energy-load-forecasting.mdx
    └── coping-struggles-prediction.mdx
```

MDX is preferred if case studies need:

- prose;
- code;
- diagrams;
- figures;
- reusable React components.

Project metadata should be typed and validated.

Possible frontmatter:

``` yaml
title:
slug:
summary:
area:
status:
featured:
repository:
demo:
technologies:
published:
updated:
```

Do not expose a `demo` field if no demo exists.

------------------------------------------------------------------------

# 28. Proposed application structure

Target direction, not a requirement to create empty files immediately:

``` text
portfolio/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── projects/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── about/
│   │   └── page.tsx
│   ├── experience/
│   │   └── page.tsx
│   ├── not-found.tsx
│   ├── sitemap.ts
│   └── robots.ts
│
├── components/
│   ├── layout/
│   ├── navigation/
│   ├── project/
│   ├── content/
│   └── ui/
│
├── content/
│   └── projects/
│
├── lib/
│   ├── projects/
│   └── metadata/
│
├── public/
│   ├── images/
│   └── projects/
│
├── docs/
│   ├── portfolio-roadmap.md
│   ├── visual-reference-pt1.png
│   ├── visual-reference-pt2.png
│   ├── victor-perfil-dark.jpg
│   ├── victor-perfil-light.jpg
│   └── curriculum.pdf
│
├── tests/
├── README.md
├── LICENSE
└── ...
```

Avoid architecture astronautics.

------------------------------------------------------------------------

# 29. Technical stack direction

Initial intended stack:

``` text
Next.js
React
TypeScript
Tailwind CSS
MDX
```

This is an implementation direction until the project is initialized.

## 29.1 Next.js

Use App Router.

Prefer Server Components by default.

Use Client Components only when browser state/interactivity requires
them.

Examples likely requiring client behavior:

- theme control;
- mobile menu;
- interactive filters;
- specific animated/interactive diagrams.

Do not add `"use client"` broadly.

## 29.2 TypeScript

Use strict typing.

Project metadata/status/areas should be typed rather than represented as
arbitrary strings.

Avoid `any` unless there is a documented reason.

## 29.3 Tailwind CSS

Use utility-first styling while maintaining semantic tokens.

Do not scatter arbitrary colors and spacing throughout JSX.

Use CSS/theme variables for the design system.

## 29.4 MDX

Use for long-form project case studies if the integration remains
simple.

If MDX introduces disproportionate complexity before case studies exist,
begin with typed local data and add MDX when justified.

------------------------------------------------------------------------

# 30. Dependency policy

Dependencies require a concrete purpose.

Do not add libraries simply because they are common in portfolio
templates.

Before adding a dependency ask:

1. What problem does it solve?
2. Can platform/React/Next.js solve it simply?
3. What runtime/client cost does it add?
4. Is it actively maintained?
5. Does it improve maintainability enough to justify itself?

Avoid an animation library unless CSS is insufficient for the actual
motion requirements.

------------------------------------------------------------------------

# 31. SEO and metadata

Every public page needs intentional metadata.

Use the framework Metadata API.

Global:

- site title;
- description;
- canonical base;
- favicon/icons;
- Open Graph defaults;
- social preview;
- robots;
- sitemap.

Per project:

``` text
Victor Castro — Medaudit
```

with a truthful description and project-specific Open Graph preview.

## 31.1 Open Graph

The visual reference includes a social card direction.

Final cards should:

- use the orange-accent identity;
- remain readable at social-preview sizes;
- include project title;
- include concise category/description;
- optionally use the portrait for the main site card;
- not overload with technology badges.

------------------------------------------------------------------------

# 32. Performance

The site should feel immediate.

Principles:

- static/server rendering where practical;
- minimize client-side JavaScript;
- optimize images;
- use font optimization;
- avoid large animation/runtime libraries;
- lazy-load below-the-fold heavy media;
- size diagrams appropriately;
- no autoplay media;
- avoid layout shifts.

## 32.1 Performance budget direction

Use Lighthouse/Core Web Vitals as feedback, not vanity scores.

Desired characteristics:

- fast LCP;
- negligible CLS;
- responsive interactions;
- minimal unnecessary JS.

Do not sacrifice accessibility or functionality to chase a perfect
synthetic score.

------------------------------------------------------------------------

# 33. Images and visual assets

## 33.1 Portrait

The supplied portrait is approved as the identity image.

Implementation should solve the circular crop through presentation
rather than requiring transparent pixels around the existing circular
area.

Store an optimized source in `public/images/`.

Generate appropriate sizes/formats through the framework/tooling.

## 33.2 Project screenshots

Only real project screenshots should be presented as implemented product
evidence.

Concept imagery must be labeled if used.

## 33.3 Architecture diagrams

Preferred options:

- semantic HTML/CSS/SVG components;
- version-controlled diagrams;
- exported images only when necessary.

Diagrams should remain legible on mobile or provide a mobile
alternative.

------------------------------------------------------------------------

# 34. Loading, empty, error and 404 states

These are part of the design, not afterthoughts.

## 34.1 Loading

Use skeletons only when there is genuinely asynchronous content.

For mostly static portfolio pages, avoid artificial loading states.

## 34.2 Empty filter

If filters exist and produce zero projects:

``` text
No projects found.
Try adjusting your filters.
```

Provide a reset action.

## 34.3 Error

Errors should be concise and recoverable.

Provide:

- explanation;
- retry when meaningful;
- navigation fallback.

## 34.4 404

Custom 404 consistent with the site.

Required:

- `404`;
- concise message;
- action back to Home or Projects.

No gimmick required.

------------------------------------------------------------------------

# 35. Footer

Keep footer compact.

Potential content:

``` text
VC / Victor Castro
Home
Projects
About
Experience
GitHub
LinkedIn
Email
Copyright
```

Only use real public links.

No location required.

No unnecessary privacy/terms pages unless the site's actual
functionality creates a need for them.

------------------------------------------------------------------------

# 36. UX writing

Tone:

- concise;
- technical;
- professional;
- human;
- factual.

Avoid:

- buzzword accumulation;
- exaggerated self-promotion;
- vague "innovative solutions" copy;
- fake startup language;
- unnecessary jargon in navigation.

Project case studies may use domain-specific engineering terminology
where it adds precision.

------------------------------------------------------------------------

# 37. Code examples in case studies

Only show code when it teaches something meaningful.

Do not add code blocks merely to make a case study look technical.

Code must come from real implementation or be clearly marked
conceptual/pseudocode.

Code blocks need:

- readable contrast;
- horizontal overflow handling;
- copy button only if useful;
- accessible labeling where appropriate.

------------------------------------------------------------------------

# 38. External links

Repository links open to the actual project.

Use recognizable external-link affordance where useful.

Do not force every external link into a new tab. If using a new tab,
handle it safely.

Do not display dead demo buttons.

------------------------------------------------------------------------

# 39. GitHub integration

V1 should **not depend on the GitHub API**.

Portfolio content is editorial.

Reasons:

- repository metadata does not equal portfolio narrative;
- a commit does not necessarily change project status;
- GitHub API introduces runtime complexity without core value;
- project ordering should be curated.

Possible future GitHub-derived data:

- last update;
- latest release;
- repository metadata.

Only add if it meaningfully improves the experience.

------------------------------------------------------------------------

# 40. Analytics and privacy

Analytics is optional.

Do not add analytics in the initial scaffold merely because it is
common.

If added later:

- choose privacy-conscious implementation;
- document what is collected;
- avoid invasive tracking;
- add consent behavior only if actually required by chosen
    tracking/legal context.

------------------------------------------------------------------------

# 41. Testing strategy

## 41.1 Unit tests

Use for logic with meaningful behavior, such as:

- project metadata parsing;
- filtering;
- status mapping;
- content validation.

Do not unit-test trivial static markup solely for coverage.

## 41.2 Component/integration tests

Prioritize:

- navigation;
- theme behavior;
- mobile menu;
- project filtering if implemented;
- project route rendering;
- invalid project slug/404.

## 41.3 Accessibility tests

Automated checks plus manual keyboard testing.

Automated tools cannot replace manual review.

## 41.4 End-to-end

V1 critical flows:

``` text
Home → Projects
Home → featured project
Projects → case study
Case study → repository
Navigation → About
Navigation → Experience
Theme change
Mobile navigation
404 recovery
```

------------------------------------------------------------------------

# 42. Quality gates

Before merge to main, target:

``` text
typecheck
lint
tests
build
```

Accessibility/static analysis should be incorporated when tooling is
established.

Do not choose exact commands until package manager/tooling are
initialized.

------------------------------------------------------------------------

# 43. CI/CD

Initial CI should remain simple.

On pull request:

``` text
install
typecheck
lint
test
build
```

Deployment platform should be selected during implementation rather than
assumed in documentation.

Preview deployments are desirable if the chosen platform supports them.

------------------------------------------------------------------------

# 44. Deployment

Requirements:

- HTTPS;
- production build;
- environment separation if environment variables ever exist;
- custom domain can be added when desired;
- preview environment for design review is useful.

Do not introduce backend infrastructure when the portfolio does not need
it.

------------------------------------------------------------------------

# 45. Security

Even a static portfolio needs basic discipline.

Rules:

- no secrets committed;
- no private API keys in client bundles;
- validate any future external content;
- sanitize user-generated content if it ever exists;
- dependency updates;
- safe external-link handling;
- security headers where appropriate.

There is no need for authentication in V1.

------------------------------------------------------------------------

# 46. Browser/device quality

Test at minimum:

- current Chromium-based desktop browser;
- Firefox;
- Safari/WebKit behavior through available tooling;
- narrow mobile viewport;
- common modern phone width;
- tablet/intermediate width;
- large desktop.

Do not optimize only for the exact mockup dimensions.

------------------------------------------------------------------------

# 47. Design review checklist

For every page:

- Is the primary purpose obvious?
- Is there one clear visual hierarchy?
- Is copy readable without zoom?
- Are lines too long?
- Is spacing consistent?
- Does dark mode work?
- Does light mode work?
- Does keyboard focus work?
- Are interactive elements obvious?
- Does mobile preserve all essential content?
- Is orange being used as an accent rather than decoration everywhere?
- Is every factual claim supported?
- Are planned features labeled?
- Is anything present only because a template usually has it?

------------------------------------------------------------------------

# 48. Content review checklist

Before publishing project content:

``` text
[ ] Project title is correct
[ ] Status is current
[ ] Summary is factual
[ ] Repository URL is correct
[ ] Demo URL exists before showing it
[ ] Technologies were actually used
[ ] Architecture reflects reality or is labeled planned
[ ] Metrics are measured
[ ] Screenshots are real or labeled concept
[ ] No sensitive/private information
[ ] No proprietary material
[ ] No unsupported business impact
[ ] No placeholder copy remains
```

------------------------------------------------------------------------

# 49. Visual-reference interpretation

The two files in `/docs` are intended for implementation guidance.

## `victor-perfil-dark.jpg` and `victor-perfil-light.jpg`

Primary portrait reference for the portfolio.

This image should be used as the source portrait for Victor's visual identity across the website. Cropping, masking, sizing, responsive positioning, and presentation effects should be handled by the application rather than permanently modifying the source image.

## `visual-reference-pt1`

Primary visual language reference:

- orange-accent direction;
- dark theme;
- overall Home composition;
- project cards;
- project listing;
- About/Experience composition;
- mobile direction;
- general identity.

## `visual-reference-pt2`

Complements part 1 with:

- deeper project case-study treatment;
- light theme;
- mobile navigation;
- component variants;
- interaction states;
- design-system direction;
- loading/empty/error/404 concepts;
- social/Open Graph preview;
- responsive/tablet direction;
- footer treatment.

Neither reference is pixel-perfect implementation specification.

The production site should improve inconsistencies discovered during
implementation.

------------------------------------------------------------------------

# 50. V1 scope

V1 must include:

``` text
Home
Projects index
Project detail route
About
Experience
Responsive navigation
Dark theme
Light theme
System theme
Portrait integration
Project metadata/content system
SEO metadata
Open Graph baseline
404
Responsive behavior
Accessibility baseline
Footer
Real external links
Production deployment
```

V1 does **not** require:

``` text
Blog
CMS
Admin
Authentication
Database
Contact form
GitHub API
Analytics
Complex animation library
Backend API
Search
Interactive 3D
```

------------------------------------------------------------------------

# 51. Development roadmap

## Phase 0 --- Repository and truth baseline

Goal: establish reliable inputs before UI implementation.

Tasks:

``` text
[ ] README exists
[ ] MIT LICENSE exists
[ ] docs/ exists
[ ] add portfolio-roadmap.md
[ ] add visual-reference-pt1
[ ] add visual-reference-pt2
[ ] add approved portrait asset
[ ] confirm public GitHub/LinkedIn/contact destinations
[ ] confirm current CV as professional source of truth
[ ] verify current status of each portfolio project
```

Deliverable:

> Repository contains product specification and factual content sources.

------------------------------------------------------------------------

## Phase 1 --- Technical initialization

Goal: create the smallest viable application foundation.

Tasks:

``` text
[ ] initialize Next.js application
[ ] TypeScript enabled
[ ] App Router enabled
[ ] Tailwind configured
[ ] choose package manager
[ ] establish lint/typecheck/build commands
[ ] establish global styles
[ ] create root layout
[ ] create base metadata
```

Do not build all future components in this phase.

Deliverable:

> Minimal application builds and renders.

------------------------------------------------------------------------

## Phase 2 --- Design tokens

Goal: translate visual direction into reusable semantic primitives.

Define:

``` text
[ ] dark color tokens
[ ] light color tokens
[ ] accent orange tokens
[ ] semantic status colors
[ ] typography
[ ] spacing
[ ] radius
[ ] border
[ ] shadow
[ ] motion
[ ] container widths
[ ] breakpoints
```

Validate:

``` text
[ ] dark contrast
[ ] light contrast
[ ] focus contrast
[ ] accent CTA contrast
[ ] status readability without color alone
```

Deliverable:

> Stable token layer before page-level styling proliferates.

------------------------------------------------------------------------

## Phase 3 --- Global shell

Build:

``` text
[ ] PageContainer
[ ] SiteHeader
[ ] desktop navigation
[ ] MobileNavigation
[ ] ThemeToggle
[ ] SiteFooter
[ ] Button variants
[ ] base link styles
[ ] focus system
```

Test:

``` text
[ ] keyboard navigation
[ ] mobile menu
[ ] dark/light/system theme
[ ] responsive header
```

------------------------------------------------------------------------

## Phase 4 --- Home vertical slice

Goal: create the first complete visual experience.

Build:

``` text
[ ] Hero
[ ] portrait
[ ] real introductory copy
[ ] primary CTA
[ ] selected projects
[ ] work-area section if still useful
[ ] closing CTA
[ ] footer
```

Review against `visual-reference-pt1`.

Do not copy placeholder metrics or copy.

Deliverable:

> Production-quality Home page on mobile and desktop.

------------------------------------------------------------------------

## Phase 5 --- Project content model

Define typed project data.

Tasks:

``` text
[ ] ProjectArea
[ ] ProjectStatus
[ ] ProjectSummary
[ ] project metadata validation
[ ] repository/demo optional fields
[ ] featured ordering
[ ] project slug handling
[ ] decide typed data vs MDX integration
```

Then populate only verified metadata.

Deliverable:

> One source of truth drives Home and Projects.

------------------------------------------------------------------------

## Phase 6 --- Projects index

Build:

``` text
[ ] page header
[ ] ProjectGrid
[ ] ProjectCard
[ ] ProjectStatus
[ ] tags
[ ] responsive layout
[ ] filters only if justified
[ ] empty filter state if filters exist
```

Deliverable:

> All selected portfolio projects are browsable.

------------------------------------------------------------------------

## Phase 7 --- Case-study template

Start with one project, preferably Medaudit once sufficient real content
exists.

Build:

``` text
[ ] ProjectHero
[ ] status
[ ] repository link
[ ] optional demo
[ ] section navigation
[ ] overview
[ ] problem
[ ] solution
[ ] architecture
[ ] decisions
[ ] challenges
[ ] status/milestones
[ ] results when real
[ ] learnings
[ ] previous/next project
```

Review against `visual-reference-pt2`.

Deliverable:

> Reusable case-study system with one complete real case.

------------------------------------------------------------------------

## Phase 8 --- Remaining project pages

Populate progressively.

Important rule:

A planned project does not need fabricated implementation sections.

Planned case study can contain:

``` text
Problem
Why this project
Proposed system
Architecture direction
Planned milestones
Current status
Repository
```

As implementation evolves, the same page evolves.

------------------------------------------------------------------------

## Phase 9 --- About

Build real professional narrative.

Tasks:

``` text
[ ] concise biography
[ ] science → data → software → AI progression
[ ] portrait integration
[ ] no vanity metrics
[ ] responsive layout
```

------------------------------------------------------------------------

## Phase 10 --- Experience

Tasks:

``` text
[ ] verify current CV
[ ] model experience entries
[ ] build timeline
[ ] education
[ ] responsive vertical layout
[ ] no invented total years
```

------------------------------------------------------------------------

## Phase 11 --- SEO and social

Tasks:

``` text
[ ] root metadata
[ ] page metadata
[ ] project generateMetadata
[ ] canonical strategy
[ ] favicon
[ ] sitemap
[ ] robots
[ ] Open Graph site image
[ ] project Open Graph images
```

Validate shared previews.

------------------------------------------------------------------------

## Phase 12 --- State pages

Build:

``` text
[ ] not-found
[ ] error boundary where useful
[ ] loading only where real async behavior exists
[ ] empty state only where real filtering exists
```

Do not create fake loading delays to showcase skeletons.

------------------------------------------------------------------------

## Phase 13 --- Accessibility pass

Manual and automated review.

Tasks:

``` text
[ ] heading hierarchy
[ ] landmarks
[ ] keyboard
[ ] focus
[ ] mobile menu focus
[ ] image alt
[ ] icon accessible names
[ ] contrast
[ ] reduced motion
[ ] touch targets
[ ] screen-reader-only labels
[ ] link purpose
```

------------------------------------------------------------------------

## Phase 14 --- Performance pass

Tasks:

``` text
[ ] inspect client component boundaries
[ ] remove unnecessary JS
[ ] optimize portrait
[ ] optimize project images
[ ] font loading
[ ] avoid layout shift
[ ] audit third-party dependencies
[ ] test production build
[ ] Core Web Vitals/Lighthouse review
```

------------------------------------------------------------------------

## Phase 15 --- Testing and CI

Tasks:

``` text
[ ] metadata/content validation tests
[ ] navigation tests
[ ] theme tests
[ ] mobile menu tests
[ ] project route tests
[ ] 404 tests
[ ] accessibility checks
[ ] critical E2E flow
[ ] CI install
[ ] CI typecheck
[ ] CI lint
[ ] CI test
[ ] CI build
```

------------------------------------------------------------------------

## Phase 16 --- Production deployment

Tasks:

``` text
[ ] select hosting
[ ] preview deployments
[ ] production deployment
[ ] HTTPS
[ ] domain if desired
[ ] canonical domain
[ ] production social preview
[ ] production smoke test
```

------------------------------------------------------------------------

# 52. Post-V1 evolution

Only after V1 is useful.

Potential V2:

- richer architecture diagrams;
- more mature technical case studies;
- project screenshots;
- measured results;
- refined motion;
- generated per-project Open Graph imagery;
- deeper project milestones;
- improved diagrams;
- project changelog if useful.

Potential V3:

- technical writing;
- notes;
- search;
- selective GitHub integration;
- interactive system diagrams.

Every addition needs a content/product reason.

------------------------------------------------------------------------

# 53. Project maturity strategy

The site must support projects at different maturity levels.

``` text
Planned
   ↓
In Development
   ↓
Experimental
   ↓
Stable
```

Public visibility is not equivalent to portfolio readiness.

A project may be public while still evolving.

Home `Selected Projects` is editorial and should favor the strongest
representation of current work.

------------------------------------------------------------------------

# 54. Repository visibility philosophy

The portfolio itself should be public.

The development history can demonstrate:

- design decisions;
- incremental implementation;
- accessibility work;
- responsive engineering;
- content evolution;
- technical discipline.

However, unfinished work should be clearly labeled rather than disguised
as complete.

------------------------------------------------------------------------

# 55. Git/commit strategy

Prefer small, meaningful commits.

Examples:

``` text
docs: add portfolio product roadmap
feat(theme): add light and dark color tokens
feat(nav): implement responsive site navigation
feat(home): build portfolio hero
feat(projects): add typed project metadata
feat(projects): implement project card grid
feat(case-study): add architecture section
fix(a11y): improve mobile menu focus management
perf(images): optimize portrait rendering
docs(projects): add medaudit case study
```

Avoid huge "initial project" commits containing the entire finished site
when incremental development is practical.

------------------------------------------------------------------------

# 56. Documentation strategy

Keep root README general.

Detailed product/engineering specification lives here:

``` text
docs/portfolio-roadmap.md
```

Future documentation may include:

``` text
docs/
├── portfolio-roadmap.md
├── visual-reference-pt1.png
├── visual-reference-pt2.png
├── architecture/
├── decisions/
└── content/
```

Only create subfolders when actual documents exist.

------------------------------------------------------------------------

# 57. ADR candidates

Use Architecture Decision Records only for decisions with meaningful
trade-offs.

Potential ADRs:

``` text
ADR-001 — local content vs CMS
ADR-002 — project content model / MDX
ADR-003 — theme strategy
ADR-004 — deployment platform
ADR-005 — analytics decision
```

Do not create ADRs for trivial choices.

------------------------------------------------------------------------

# 58. Definition of Done --- public V1

V1 is portfolio-ready when all conditions below are true.

## Product

``` text
[ ] Visitor understands who Victor is and what he builds
[ ] Home has a clear primary action
[ ] Projects are easy to discover
[ ] At least one project has a substantive real case study
[ ] Planned projects are clearly labeled
[ ] About tells a concise professional story
[ ] Experience reflects the real CV
```

## Visual

``` text
[ ] Orange accent is consistently applied
[ ] Dark theme is polished
[ ] Light theme is polished
[ ] Portrait is correctly integrated
[ ] Typography hierarchy is consistent
[ ] Spacing is consistent
[ ] Mobile, tablet and desktop layouts are intentional
[ ] No mockup placeholder metrics remain
```

## UX

``` text
[ ] Navigation is predictable
[ ] Mobile menu works
[ ] Theme preference works
[ ] Project cards are scannable
[ ] Case studies have readable line lengths
[ ] External actions are clear
[ ] 404 provides recovery
```

## Accessibility

``` text
[ ] Semantic landmarks
[ ] Logical heading order
[ ] Keyboard usable
[ ] Visible focus
[ ] Accessible menu
[ ] Accessible theme control
[ ] Alt text reviewed
[ ] Contrast reviewed
[ ] Reduced motion respected
[ ] Status does not depend only on color
```

## Engineering

``` text
[ ] Strict TypeScript
[ ] No unnecessary client components
[ ] Project data is typed/validated
[ ] No secrets
[ ] No broken links
[ ] Production build succeeds
[ ] Lint succeeds
[ ] Typecheck succeeds
[ ] Required tests succeed
[ ] CI runs quality gates
```

## SEO / sharing

``` text
[ ] Site metadata
[ ] Per-page titles
[ ] Per-project metadata
[ ] Canonical
[ ] Sitemap
[ ] Robots
[ ] Favicon
[ ] Open Graph preview
```

## Content integrity

``` text
[ ] CV facts verified
[ ] Project statuses verified
[ ] Technology claims verified
[ ] Metrics verified
[ ] No private/sensitive content
[ ] No fabricated project outcomes
[ ] No visual-reference placeholder copy treated as fact
```

## Deployment

``` text
[ ] Production URL works
[ ] HTTPS works
[ ] Mobile production smoke test
[ ] Desktop production smoke test
[ ] Social preview tested
```

------------------------------------------------------------------------

# 59. First implementation sessions

## Session 1 --- Source of truth

- add this roadmap;
- add both visual references;
- organize portrait;
- verify project metadata;
- verify contact links.

## Session 2 --- Application baseline

- initialize application;
- establish scripts;
- root layout;
- minimal page;
- first production build.

## Session 3 --- Tokens and themes

- semantic colors;
- orange accent;
- typography;
- spacing;
- dark/light/system theme;
- contrast review.

## Session 4 --- Navigation shell

- header;
- mobile menu;
- theme control;
- footer;
- keyboard/focus behavior.

## Session 5 --- Home

- hero;
- portrait;
- selected projects;
- responsive behavior.

## Session 6 --- Project model/index

- typed project metadata;
- cards;
- project grid;
- projects route.

## Session 7 --- First case study

- project route;
- case-study structure;
- Medaudit or strongest available real project;
- architecture content.

## Session 8 --- About/Experience

- real copy;
- timeline;
- responsive layout.

## Session 9 --- Quality

- accessibility;
- performance;
- states;
- metadata;
- social preview.

## Session 10 --- Ship

- tests;
- CI;
- deploy;
- smoke test;
- V1 review.

------------------------------------------------------------------------

# 60. Final implementation principles

When implementation decisions are ambiguous, use this priority:

``` text
Truth
  ↓
Usability
  ↓
Accessibility
  ↓
Content clarity
  ↓
Maintainability
  ↓
Performance
  ↓
Visual polish
  ↓
Novelty
```

The visual references are important, but the final portfolio should not
be a literal recreation of an AI-generated mockup.

The target is a coherent, production-quality personal site whose visual
system, code quality and case-study depth reinforce the same
professional message:

> **Victor builds systems across data, software and AI --- and can
> explain how and why they are built.**
