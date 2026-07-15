# Aarti Potdar — Portfolio

A personal portfolio site for **Aarti Potdar**, Senior Generative AI & Agentic AI Engineer, built to translate 15+ years of enterprise ERP depth and 3+ years of applied GenAI work into a fast, recruiter-scannable case for hire.

## Overview

- **Role classification:** AI / ML Engineer (Generative AI & Agentic AI specialization), senior level.
- **Design direction:** A dark "engineering schematic" aesthetic — deep ink-navy background, amber + cyan signal accents, monospace annotations — built around a signature element: a hand-drawn **agentic pipeline trace** (`ERP_DATA → RETRIEVAL → REASONING → ACTION`) that mirrors the actual RAG/agent systems described in the experience section, rather than a generic gradient hero.
- **Content:** Rewritten (not copied) from the source resume and LinkedIn profile — condensed to achievement-driven bullets, deduplicated across roles, and organized by role-relevant themes (agentic systems, RAG, Oracle Fusion ERP, production delivery).

### Sections

1. **Hero** — name, positioning line, headline metrics, and the animated pipeline-trace diagram.
2. **About** — narrative summary + four core strength panels.
3. **Featured Work** — three flagship projects (RAG knowledge copilot, agentic ERP automation pipeline, LLaMA conversational assistant) with stack tags and outcomes.
4. **Experience** — vertical timeline across all roles, condensed for the earliest years.
5. **Skills** — grouped skill panels (GenAI/LLMs, agentic systems, retrieval/RAG, engineering/infra, Oracle Fusion ERP, languages) plus certifications.
6. **Contact** — direct email CTA and a contact card (email, phone, LinkedIn, location).

## Tech stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [Tailwind CSS 3](https://tailwindcss.com/)
- [lucide-react](https://lucide.dev/) for icons
- Plain JavaScript (no TypeScript), no external CSS frameworks, no browser storage APIs
- System font stack only — **no external network calls at build time**, so `npm install && npm run dev` works offline once dependencies are installed

## Local setup

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev

# 3. Open the site
# http://localhost:3000
```

To create a production build:

```bash
npm run build
npm start
```

No environment variables or API keys are required.

## Project structure

```
.
├── app/
│   ├── layout.js        # Root layout + metadata
│   ├── page.js           # Assembles all sections
│   └── globals.css       # Design tokens, base styles, custom utilities
├── components/
│   ├── Navbar.js
│   ├── Hero.js            # Includes the signature PipelineTrace SVG
│   ├── About.js           # Also exports the shared SectionEyebrow
│   ├── Projects.js
│   ├── Experience.js
│   ├── Skills.js
│   ├── Contact.js
│   └── Footer.js
├── public/                # Static assets (empty by default)
├── tailwind.config.js     # Custom color tokens, fonts, keyframes
├── postcss.config.js
├── next.config.js
├── jsconfig.json          # Enables the "@/..." import alias
└── package.json
```

## Customizing content

All copy lives directly inside the component files as plain arrays/objects at the top of each file (e.g. `PROJECTS` in `components/Projects.js`, `ROLES` in `components/Experience.js`, `GROUPS` in `components/Skills.js`) — update those to change content without touching layout markup.
