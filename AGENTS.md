# AGENTS.md

## Purpose

This file defines how coding agents must work inside the `portfolio` repository.

The portfolio is a public, production-quality personal website for **Victor Castro**, focused on presenting work across:

- Software Engineering
- Data Engineering
- Data Science
- Machine Learning / MLOps
- Applied AI / LLM Systems

The repository is not a generic portfolio template. It should remain a restrained, technical, editorial product whose code quality and case-study depth reinforce the same professional narrative.

Agents must optimize for:

1. factual correctness;
2. usability;
3. accessibility;
4. maintainability;
5. performance;
6. visual consistency;
7. incremental delivery.

Do not optimize for visual novelty, unnecessary abstraction, or feature count.

---

# 1. Source of truth

Before implementing or changing product behavior, read:

```text
README.md
docs/portfolio-roadmap.md
docs/visual-reference-pt1.*
docs/visual-reference-pt2.*
docs/victor-perfil-dark.jpg
docs/victor-perfil-light.jpg
docs/curriculum.pdf
```

The expected repository documentation layout is:

```text
docs/
├── portfolio-roadmap.md
├── visual-reference-pt1.*
├── visual-reference-pt2.*
├── victor-perfil-dark.jpg
├── victor-perfil-light.jpg
└── curriculum.pdf
```

The roadmap is the main product and engineering specification.

The two visual references are design-direction references only.

`docs/victor-perfil-dark.jpg` and `docs/victor-perfil-light.jpg` are the approved portrait sources for dark and light themes.

`docs/curriculum.pdf` is the primary source of truth for professional experience, education, roles, dates, and other résumé-derived information.

When portfolio copy conflicts with the curriculum, do not silently invent or reconcile information. Prefer the most recently verified source and flag material inconsistencies when necessary.

When sources conflict, use this priority:

```text
1. Explicit current user instruction
2. Verified current project/repository facts
3. docs/curriculum.pdf for professional history and résumé-derived facts
4. docs/portfolio-roadmap.md
5. Existing intentional implementation and tests
6. Visual references
7. Agent assumptions
```

Never treat placeholder text from a generated visual reference as factual content.

---

# 2. Core product narrative

The portfolio should communicate:

```text
Victor Castro
    ↓
Data Scientist
    ↓
works across software, data and AI systems
    ↓
builds systems rather than isolated notebooks
    ↓
documents architecture, decisions and trade-offs
```

Primary professional positioning:

> **Data Scientist | Software, Data & AI Systems**

Do not replace this positioning with a different personal brand unless explicitly instructed.

---

# 3. Non-negotiable truth rules

Never invent:

- years of experience;
- project counts;
- client counts;
- user counts;
- revenue;
- performance improvements;
- model metrics;
- business impact;
- technology usage;
- job titles;
- project maturity;
- project results;
- testimonials;
- company logos;
- fake availability claims;
- fake production usage;
- fake demo URLs.

Do not add:

```text
"6+ years"
"15+ projects"
"5 core domains"
"95% Python"
```

or similar vanity metrics unless explicitly verified.

If factual information is missing:

- omit it;
- label it as planned;
- or leave a clear TODO in development documentation.

Do not silently fabricate.

---

# 4. Privacy and sensitive-data rules

This repository is public.

Never commit or expose:

- secrets;
- API keys;
- tokens;
- credentials;
- private environment files;
- patient information;
- health records;
- protected healthcare data;
- proprietary internal documents;
- internal company URLs;
- confidential screenshots;
- private datasets;
- personally identifying third-party information.

For healthcare-related portfolio content, only use:

- public material;
- synthetic examples;
- clearly sanitized examples.

The `medaudit` case study must never reveal confidential healthcare content.

---

# 5. Project inventory

The initial portfolio project set is:

## Medaudit

Area:

```text
Applied AI / RAG / LLM Systems
```

Positioning:

> AI-powered healthcare audit system for document intelligence, rule retrieval and grounded reasoning.

Likely themes:

- ingestion;
- parsing;
- retrieval;
- grounded generation;
- source traceability;
- evaluation;
- rule correlation;
- document intelligence;
- observability;
- regression testing.

Do not claim implementation of future features unless they exist.

---

## Third-Party Lifecycle

Area:

```text
Backend / SaaS / Software Architecture
```

Positioning:

> Multi-tenant B2B platform for third-party onboarding, document compliance, approval workflows and lifecycle management.

Themes may include:

- multi-tenancy;
- RBAC;
- workflow/state machines;
- auditability;
- document lifecycle;
- notifications;
- API design;
- lifecycle automation.

---

## Municipal Fiscal Data Platform

Area:

```text
Data Engineering / Analytics Engineering
```

Positioning:

> Data platform for ingesting, standardizing, validating and serving Brazilian municipal economic and fiscal data from official public sources.

Themes may include:

- ingestion;
- data contracts;
- schema evolution;
- entity resolution;
- bronze/silver/gold layers;
- data quality;
- provenance;
- transformations;
- serving.

---

## Energy Load Forecasting

Area:

```text
ML Engineering / MLOps
```

Positioning:

> Production-oriented ML system for short-term electrical load forecasting using Brazilian ONS data, with temporal backtesting, monitoring and retraining.

Themes may include:

- temporal splits;
- forecasting baselines;
- backtesting;
- feature engineering;
- experiment tracking;
- model lifecycle;
- batch inference;
- monitoring;
- retraining.

Do not display mockup metrics as real model results.

---

## Coping Struggles Prediction

Area:

```text
Data Science / Statistical Machine Learning
```

This is an existing project.

Before publishing detailed methodology, metrics, dataset or conclusions, verify them against the actual repository.

---

# 6. Scope discipline

V1 includes:

```text
Home
Projects index
Project detail
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
Accessibility baseline
Responsive behavior
Footer
Production deployment
```

V1 does not require:

```text
Blog
CMS
Admin
Authentication
Database
Contact form
GitHub API
Search
Backend API
Complex animation framework
3D
Analytics
```

Do not introduce excluded features without a concrete product reason.

---

# 7. Technical direction

Expected initial stack:

```text
Next.js
React
TypeScript
Tailwind CSS
MDX when justified
```

Use the Next.js App Router.

Prefer Server Components by default.

Use Client Components only for interactions that require browser state or APIs, such as:

- theme selection;
- mobile navigation;
- interactive filters;
- clearly interactive diagrams.

Do not place `"use client"` at high levels without necessity.

---

# 8. TypeScript rules

Use strict TypeScript.

Avoid:

```ts
any
```

unless unavoidable and documented.

Prefer:

- narrow types;
- discriminated unions;
- typed metadata;
- explicit domain types;
- runtime validation for content where useful.

Core project types should remain small and understandable.

Recommended direction:

```ts
type ProjectArea =
  | "applied-ai"
  | "software-engineering"
  | "data-engineering"
  | "ml-engineering"
  | "data-science"

type ProjectStatus =
  | "planned"
  | "active"
  | "experimental"
  | "stable"
```

Do not expand enums/unions casually.

---

# 9. Content architecture

Prefer local, version-controlled content.

Do not add a CMS in V1.

Potential content structure:

```text
content/
└── projects/
    ├── medaudit.mdx
    ├── third-party-lifecycle.mdx
    ├── municipal-fiscal-data-platform.mdx
    ├── energy-load-forecasting.mdx
    └── coping-struggles-prediction.mdx
```

Use MDX only if project case studies benefit from:

- prose;
- code;
- diagrams;
- figures;
- reusable components.

If MDX adds disproportionate complexity, start with typed local data.

---

# 10. Route structure

Target route map:

```text
/
├── /projects
│   └── /projects/[slug]
├── /about
└── /experience
```

Do not add empty routes such as:

```text
/blog
/services
/contact
/admin
```

unless explicitly required.

Contact can live in the header, final CTA and footer.

---

# 11. Design direction

Visual style:

> **Minimal, technical, editorial, restrained.**

Use:

- strong hierarchy;
- whitespace;
- neutral backgrounds;
- controlled borders;
- subtle shadows;
- meaningful diagrams;
- orange accent;
- limited motion.

Avoid:

- neon cyberpunk visuals;
- Matrix effects;
- particle backgrounds;
- fake terminal themes;
- unnecessary 3D;
- excessive glassmorphism;
- skill bars;
- giant badge walls;
- excessive gradients;
- decorative animations that distract from content.

Orange is an accent, not a page background strategy.

---

# 12. Design tokens

Do not scatter arbitrary values throughout components.

Centralize semantic tokens.

Expected token families:

```text
color
typography
spacing
radius
shadow
motion
breakpoint
container
```

Color tokens should be semantic, for example:

```text
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

Do not duplicate literal hex values throughout JSX.

---

# 13. Color system

Primary brand direction:

```text
neutral charcoal / off-white surfaces
+
warm orange accent
```

Dark mode should use:

- charcoal rather than pure black everywhere;
- near-white primary text;
- neutral gray secondary text;
- subtle borders;
- orange accent.

Light mode should use:

- off-white page background;
- white/near-white surfaces;
- charcoal text;
- subtle neutral borders;
- the same orange family.

Do not simply invert dark mode.

Status colors remain semantic and separate from brand orange.

Color must never be the only indicator of status.

---

# 14. Typography

Use one primary sans-serif family.

Initial direction:

```text
Inter or similarly neutral modern sans-serif
```

Do not add multiple decorative font families.

Suggested roles:

```text
Display / Hero
H1
H2
H3
H4
Body Large
Body
Body Small
Caption
```

Large headings may use `clamp()`.

Body copy should remain around:

```text
60–75 characters per line
```

for long-form case-study content.

Do not let prose stretch across the full desktop viewport.

---

# 15. Spacing

Use an 8px-oriented rhythm.

Suggested scale:

```text
4
8
12
16
24
32
48
64
96
128
```

Avoid arbitrary one-off values when a token fits.

Use tighter spacing inside components and larger spacing between page sections.

---

# 16. Layout and grid

Use a centered container.

Initial max width direction:

```text
~1200–1280px
```

Desktop conceptual grid:

```text
12 columns
24–32px gutters
responsive outer padding
```

Tablet may behave like an 8-column system.

Mobile is primarily one column.

Do not force every element into visible grid math when simpler CSS layout is clearer.

---

# 17. Breakpoints

Implement mobile-first.

Initial breakpoint direction:

```text
base     < 640px
sm       ≥ 640px
md       ≥ 768px
lg       ≥ 1024px
xl       ≥ 1280px
2xl      ≥ 1536px
```

Use these as defaults, not device names.

Prefer container queries for components whose behavior depends on component width rather than viewport width.

---

# 18. Accessibility

Treat accessibility as a baseline requirement.

Target WCAG 2.2 AA-oriented behavior.

Use semantic HTML:

```html
<header>
<nav>
<main>
<section>
<article>
<footer>
```

Use correct interactive elements:

- `<button>` for actions;
- `<a>` for navigation.

Do not create clickable `<div>` elements.

All interactive controls must support keyboard use.

Focus must be visible.

Never globally remove outlines without a replacement.

Test:

```text
Tab
Shift+Tab
Enter
Space
Escape
```

as relevant.

Icon-only buttons require accessible names.

Respect:

```css
prefers-reduced-motion
```

Touch targets must remain usable on mobile.

---

# 19. Theme behavior

Support:

```text
System
Light
Dark
```

Default to system preference unless a user explicitly chooses otherwise.

Persist explicit preference locally.

Avoid an incorrect-theme flash where reasonably possible.

Theme switching must be keyboard accessible.

Do not make theme state depend on server persistence.

---

# 20. Motion

Motion should communicate state, not decorate the page.

Allowed:

- subtle fade/translate;
- controlled navigation transitions;
- restrained hover;
- theme transitions;
- meaningful diagram emphasis.

Avoid:

- scroll hijacking;
- cursor gimmicks;
- bouncing CTAs;
- continuous background animation;
- long entrance animations;
- parallax that harms readability.

Typical micro-interaction timing:

```text
120–250ms
```

Use consistent easing.

---

# 21. Image rules

## Portrait

Source:

```text
docs/victor-perfil-dark.jpg
docs/victor-perfil-light.jpg
```

Treat them as the approved theme-specific originals/references.

For production serving:

- create/use an optimized asset under `public/`;
- preserve aspect ratio;
- crop/mask through presentation;
- do not assume transparent corners;
- use responsive sizing;
- avoid unnecessary image duplication;
- do not permanently distort the source.

The circular/rounded presentation should be implemented in CSS/component code.

## Project images

Only present real screenshots as implemented-product evidence.

Conceptual graphics must be labeled as concepts.

---

# 22. Component philosophy

Do not build a huge component library before pages need it.

Create abstractions when:

- a pattern repeats;
- behavior is shared;
- styling must remain consistent;
- the abstraction makes the code easier to understand.

Do not abstract simply to reduce line count.

Likely initial component groups:

```text
layout/
navigation/
project/
content/
ui/
```

Potential components:

```text
SiteHeader
MobileNavigation
PageContainer
Section
SiteFooter
ThemeToggle

Button
TextLink
IconLink

ProjectCard
ProjectStatus
ProjectTags
ProjectGrid
ProjectHero
ProjectNavigation
ProjectMilestones
ArchitectureDiagram
DecisionBlock

LoadingSkeleton
EmptyState
ErrorState
NotFoundState

Portrait
ProjectImage
Figure
```

Do not create `MetricCard` until real metrics exist.

---

# 23. Component states

Interactive components must define:

```text
default
hover
focus-visible
active
disabled
```

Use `loading` only for genuinely asynchronous actions.

Clickable cards need:

```text
hover
focus-within
```

Non-clickable cards should not have misleading hover behavior.

Filters require:

```text
default
hover
focus
selected
```

Do not communicate selected state by color alone.

---

# 24. Home page implementation rules

Home should communicate identity quickly.

Expected sections:

```text
Hero
Selected Projects
Areas / What I work across
Short About / context
Closing CTA
Footer
```

Do not overfill the Hero.

Hero hierarchy:

```text
name
professional positioning
short explanation
primary action
optional secondary action
portrait
```

Avoid:

- long biography;
- skill wall;
- unsupported availability;
- generic motivational copy.

Selected projects should usually show approximately 3 strong entries.

Selection is editorial, not automatic.

---

# 25. Projects index rules

Route:

```text
/projects
```

Project cards should be scannable.

Use:

```text
status
title
short summary
area / small number of tags
action
```

Do not expose a long technology list on every card.

Filters should exist only if they improve discovery.

If there are too few projects, omit filters.

If filters exist, implement a real empty state and reset action.

---

# 26. Case-study rules

Route:

```text
/projects/[slug]
```

Case studies should explain engineering thinking.

Potential sections:

```text
Overview
Problem
Solution
Architecture
Technical Decisions
Challenges
Current Status
Results
Learnings
Previous / Next
```

Do not render empty sections.

For planned projects:

- clearly label `Planned`;
- distinguish proposed architecture from implementation;
- do not write fake results;
- do not show fake demo buttons.

For active projects:

separate:

```text
Implemented
In Progress
Planned
```

Results only exist when real evidence exists.

---

# 27. Architecture diagrams

Diagrams should be:

- readable;
- semantic;
- responsive;
- version controlled;
- understandable without decorative complexity.

Prefer:

- SVG;
- HTML/CSS;
- lightweight React components.

Avoid shipping a raster screenshot of a diagram when semantic/vector rendering is practical.

When architecture is only planned, label it accordingly.

---

# 28. About page rules

Route:

```text
/about
```

Narrative direction:

```text
Biotechnology
→ Bioinformatics
→ Data Science
→ Software Engineering
→ Data & AI Systems
```

Do not duplicate the CV verbatim.

Do not add vanity counters.

Do not add generic personality claims unsupported by content.

---

# 29. Experience page rules

Route:

```text
/experience
```

Use the current CV as source of truth for:

- role titles;
- organizations;
- dates;
- responsibilities;
- education.

Keep the page concise.

Do not calculate or display total experience years unless specifically requested and verified.

Desktop may use a timeline.

Mobile must reduce to a readable vertical sequence.

---

# 30. External links

Only render real links.

Do not render:

- disabled fake demo buttons;
- placeholder GitHub links;
- `#` as a fake destination.

Use clear labels.

If opening new tabs, use safe link attributes.

---

# 31. GitHub integration

Do not make V1 depend on the GitHub API.

Portfolio content is editorial and version controlled.

GitHub integration may be added later only if it adds clear value.

Do not fetch stars, commits or repository metadata simply to make pages look dynamic.

---

# 32. SEO

Use Next.js metadata capabilities.

Required V1:

```text
global title
global description
page titles
project-specific metadata
canonical
favicon/icons
sitemap
robots
Open Graph baseline
```

Project titles should follow a predictable pattern, e.g.:

```text
Victor Castro — Medaudit
```

Do not add structured data that contains unverified claims.

---

# 33. Open Graph

Social cards should use the portfolio identity:

- neutral surfaces;
- orange accent;
- strong title hierarchy;
- restrained composition.

Do not overload Open Graph images with technology badges.

Project cards may include:

```text
project title
area
short truthful description
```

---

# 34. Performance

Prefer:

- Server Components;
- static rendering;
- minimal JS;
- optimized images;
- optimized fonts;
- lazy loading for heavy below-the-fold media.

Avoid:

- large client dependencies;
- unnecessary runtime animation libraries;
- huge SVGs;
- autoplay media;
- artificial loading states;
- layout shifts.

Use Lighthouse/Core Web Vitals as feedback, not as a vanity target.

---

# 35. Dependency policy

Before adding a package, answer:

1. What problem does it solve?
2. Can the platform or current stack solve it simply?
3. What runtime/client cost does it add?
4. Is it maintained?
5. Is the complexity justified?

Avoid duplicate libraries for similar purposes.

Do not add a dependency merely because it appears in common Next.js starter repositories.

---

# 36. Error and state design

Design only states that correspond to real behavior.

## 404

Must include:

- clear `404`;
- concise explanation;
- action back to Home or Projects.

## Loading

Use only for actual asynchronous boundaries.

Do not artificially delay static content to display skeletons.

## Empty

Use only for real empty/filter states.

## Error

Provide useful recovery when possible.

---

# 37. Testing

Test behavior that matters.

Priority areas:

- navigation;
- mobile menu;
- theme behavior;
- project route rendering;
- invalid slug handling;
- filtering if implemented;
- content validation;
- keyboard accessibility.

Avoid tests that only confirm static text exists when they add no regression value.

---

# 38. Accessibility validation

Automated tests are insufficient.

Perform manual checks for:

- keyboard flow;
- visible focus;
- mobile menu focus behavior;
- Escape behavior;
- heading hierarchy;
- landmark correctness;
- color contrast;
- reduced motion;
- image alt text;
- icon labels;
- touch targets.

---

# 39. Quality gates

Before considering a change complete, run the repository's available equivalents of:

```text
typecheck
lint
test
build
```

Use the package manager and scripts actually configured in the repository.

Do not invent commands that do not exist.

If a check cannot run, report why.

Do not claim tests pass unless they were actually run.

---

# 40. CI

Keep CI minimal.

Expected pull-request quality sequence:

```text
install
typecheck
lint
test
build
```

Do not introduce complex deployment orchestration before the project needs it.

---

# 41. Security

Never commit `.env` secrets.

Never expose server-only variables to client code.

Do not add authentication to V1.

If third-party scripts are introduced, review:

- security;
- privacy;
- performance;
- CSP implications.

Use secure external-link behavior.

---

# 42. Analytics

Analytics is optional.

Do not add analytics without explicit product value.

If added later, prefer privacy-conscious tooling and document what is collected.

---

# 43. Browser quality

Check:

- Chromium-based browser;
- Firefox;
- WebKit/Safari behavior where tooling allows;
- narrow mobile;
- typical mobile;
- tablet/intermediate widths;
- large desktop.

Do not optimize only for the exact visual-reference canvas dimensions.

---

# 44. Repository structure

Do not scaffold dozens of empty files.

Grow structure incrementally.

Target direction:

```text
portfolio/
├── app/
├── components/
├── content/
├── lib/
├── public/
├── docs/
├── tests/
├── README.md
├── AGENTS.md
└── LICENSE
```

Only create subdirectories when their contents exist.

---

# 45. Git discipline

Prefer small, coherent commits.

Examples:

```text
docs: add agent repository instructions
feat(theme): add semantic color tokens
feat(nav): implement responsive navigation
feat(home): build portfolio hero
feat(projects): add typed project metadata
fix(a11y): improve mobile menu focus
perf(images): optimize portrait delivery
```

Do not mix unrelated refactors and features in one commit.

Do not rewrite git history unless explicitly instructed.

Do not commit generated junk, caches or local environment files.

---

# 46. Refactoring policy

Refactor when:

- duplication is real;
- complexity is measurable;
- a pattern has stabilized;
- readability improves.

Do not perform broad “cleanup” refactors while implementing an unrelated feature unless necessary.

Avoid premature:

- service layers;
- generic repositories;
- complex state management;
- micro-frontends;
- plugin architectures;
- design-system packages;
- monorepo conversion.

---

# 47. Comments and documentation

Code should usually explain itself through names and structure.

Use comments for:

- non-obvious trade-offs;
- browser workarounds;
- accessibility rationale;
- performance rationale;
- constraints that future contributors could accidentally violate.

Do not comment trivial code.

Update documentation when a meaningful architecture/product decision changes.

---

# 48. File naming

Use predictable naming.

Prefer:

```text
kebab-case for content/files where appropriate
PascalCase for React components if repository conventions use it
camelCase for variables/functions
```

Do not rename files solely for personal preference when an established convention already exists.

---

# 49. Styling rules

Prefer semantic utility composition.

Avoid:

- giant class strings with repeated arbitrary values;
- inline style objects for static design tokens;
- duplicate magic colors;
- global selectors targeting unrelated components.

Use CSS variables/design tokens for theme values.

Keep component styling colocated or structurally consistent with the chosen project approach.

---

# 50. Client state

Do not introduce Redux, Zustand or another global store unless a real need emerges.

V1 likely requires very little client state.

Expected state is mostly:

- theme preference;
- mobile menu state;
- optional filter selection.

Use the simplest appropriate mechanism.

---

# 51. Data fetching

Do not introduce remote data fetching for static portfolio information.

Project content should initially come from local repository data/MDX.

Use external APIs only when the product gains a concrete requirement.

---

# 52. Forms

No contact form is required in V1.

Do not add:

- form libraries;
- validation libraries;
- server actions for forms;
- email services;

unless a form is explicitly introduced.

---

# 53. Code examples in project case studies

Only display code when it adds explanatory value.

Code must be:

- real implementation;
- or clearly labeled pseudocode/concept.

Do not fabricate production code to make a page appear more technical.

---

# 54. Status handling

Public repository visibility does not imply maturity.

Use truthful status labels.

Recommended lifecycle:

```text
Planned
→ In Development
→ Experimental
→ Stable
```

Do not automatically advance statuses based on commit activity.

Status is editorial/project-specific.

---

# 55. Visual references

The visual references should influence:

- composition;
- hierarchy;
- density;
- typography direction;
- orange-accent usage;
- responsive treatment;
- component styling;
- interaction states.

They should not dictate:

- placeholder copy;
- fake metrics;
- fake technologies;
- fake location;
- fake availability;
- exact pixel dimensions;
- exact generated font rendering.

Implementation may improve inconsistencies discovered in the mockups.

---

# 56. Orange accent rule

Orange should be used intentionally for:

- primary CTA;
- active navigation;
- selected states;
- focus treatment;
- small icons;
- key diagram elements;
- controlled highlights.

Avoid:

- huge orange page sections;
- orange body text;
- using orange on every card;
- replacing all semantic status colors with orange.

The portrait's warm lighting should visually harmonize with the accent.

---

# 57. Portrait rule

Do not regenerate or heavily retouch the portrait during normal implementation.

Use:

```text
docs/victor-perfil-dark.jpg
docs/victor-perfil-light.jpg
```

as theme-specific sources/references.

Create an optimized web-serving copy as needed.

Any crop should preserve a natural head-and-shoulders presentation.

---

# 58. Accessibility over mockup fidelity

If the mockup conflicts with accessibility:

accessibility wins.

Examples:

- increase contrast;
- enlarge touch targets;
- alter focus styles;
- adjust type size;
- change interaction model;
- simplify mobile navigation.

Do not reproduce inaccessible details for visual fidelity.

---

# 59. Performance over decorative fidelity

If a decorative effect from a visual reference requires disproportionate runtime cost:

simplify it.

Prefer CSS, SVG and native browser behavior.

Do not ship a large dependency merely to recreate a subtle effect.

---

# 60. Implementation workflow for agents

For every substantial task:

1. inspect the relevant existing files;
2. read the relevant roadmap section;
3. identify the smallest coherent change;
4. implement it;
5. run available quality checks;
6. review responsive behavior;
7. review accessibility impact;
8. summarize what changed;
9. note any unresolved factual/product decision.

Do not begin with a large speculative rewrite.

---

# 61. Planning behavior

When asked to implement a broad milestone:

- break it into a short sequence;
- start with the highest-value vertical slice;
- do not generate dozens of placeholder files;
- keep each step runnable.

Example:

```text
tokens
→ theme
→ global shell
→ hero
→ project card
→ projects index
```

is preferred over scaffolding the entire final architecture at once.

---

# 62. Decision behavior

When requirements are ambiguous, use this priority:

```text
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

If a decision materially changes product direction, ask or document the trade-off instead of silently making a large assumption.

Minor implementation details can be decided autonomously when they follow these rules.

---

# 63. Definition of complete work

A task is not complete merely because the UI renders.

For affected scope, verify:

```text
[ ] factual content is valid
[ ] responsive layout works
[ ] keyboard access works
[ ] focus is visible
[ ] dark theme works
[ ] light theme works
[ ] no obvious console errors
[ ] types pass
[ ] lint passes
[ ] relevant tests pass
[ ] production build passes when appropriate
[ ] documentation is updated if needed
```

If something cannot be verified, state it explicitly.

---

# 64. Do not overengineer

For this repository, avoid premature:

- microservices;
- databases;
- queues;
- authentication;
- backend APIs;
- event systems;
- global state libraries;
- CMS platforms;
- Kubernetes;
- monorepos;
- GraphQL;
- feature flag systems;
- design-system packages.

The portfolio should remain operationally simple.

---

# 65. Do not underengineer

Simplicity does not mean ignoring quality.

Do not skip:

- semantic HTML;
- accessibility;
- responsive behavior;
- typed data;
- error handling where relevant;
- metadata;
- image optimization;
- maintainable design tokens;
- tests for meaningful behavior;
- CI quality gates.

---

# 66. Current visual and product constraints summary

Keep these assumptions unless explicitly changed:

```text
Brand accent: orange
Visual style: minimal / technical / editorial
Themes: system + light + dark
Primary portraits: docs/victor-perfil-dark.jpg and docs/victor-perfil-light.jpg
Framework direction: Next.js App Router
Language: TypeScript
Styling: Tailwind CSS + semantic tokens
Content: local typed data / MDX when justified
CMS: no
Backend: no
Database: no
Auth: no
Blog: no V1
Analytics: optional later
GitHub API: no V1 dependency
Location display: unnecessary
Vanity metrics: prohibited
```

---

# 67. Final rule

The portfolio itself is part of Victor's engineering portfolio.

Code quality, accessibility, performance, content discipline and design consistency are therefore product features.

The final result should communicate:

> **Victor builds systems across data, software and AI — and can explain how and why they are built.**
