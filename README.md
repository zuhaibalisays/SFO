# School For All Welfare Organization (SFA) — Web Platform

> **schoolforall.org.pk** — A responsive, accessible, SEO-optimised web presence for School For All Welfare Organization.

---

## Table of Contents

1. [Overview](#overview)
2. [Tech Stack](#tech-stack)
3. [Prerequisites](#prerequisites)
4. [Local Development](#local-development)
5. [Project Structure](#project-structure)
6. [Pages & Routing](#pages--routing)
7. [Design System](#design-system)
8. [Color Palette](#color-palette)
9. [Accessibility](#accessibility)
10. [SEO & Structured Data](#seo--structured-data)
11. [Contact Form](#contact-form)
12. [Heritage Illustrations](#heritage-illustrations)
13. [Content Management](#content-management)
14. [Deployment](#deployment)
15. [Editorial Policy](#editorial-policy)

---

## Overview

This is the frontend web platform for **School For All Welfare Organization (SFA)**, a non-profit founded on October 1, 2020, in Turbat, Kech, Balochistan, Pakistan. The platform serves as the organization's primary digital presence.

### Key Features
- Multi-page responsive website with client-side routing
- Warm Balochistan-inspired color palette (browns, oranges, creams, teal)
- Subtle heritage SVG illustrations (camel caravan, Balochi patterns)
- Accessible contact form with validation and anti-spam measures
- Dark mode support
- SEO-optimized with structured data (JSON-LD)
- Legal pages (Privacy, Terms, Disclaimer)

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 |
| Build | Vite 6 |
| Styling | Tailwind CSS v4 |
| Routing | React Router v6 |
| Icons | Lucide React |
| Language | TypeScript (strict) |

---

## Prerequisites

- Node.js 20 LTS
- npm 10+

---

## Local Development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Type check
npm run typecheck
```

---

## Project Structure

```
src/
├── App.tsx                    # Router setup — entry point
├── main.tsx                   # React DOM mount
├── index.css                  # Tailwind + design tokens
├── data/
│   └── org.ts                 # Canonical organization data (single source of truth)
├── components/
│   ├── Layout.tsx             # Header, Footer, Consent Banner, Dark Mode
│   └── HeritageSVG.tsx        # Balochistan heritage illustrations
└── pages/
    ├── Home.tsx               # Hero + highlights + mission
    ├── About.tsx              # Overview, vision/mission, impact
    ├── Programs.tsx           # Zant Academy + Student of the Week
    ├── GetInvolved.tsx        # Volunteer / Partner / Support
    ├── Contact.tsx            # Contact form + info card
    ├── Privacy.tsx            # Privacy Policy
    ├── Terms.tsx              # Terms & Conditions
    ├── Disclaimer.tsx         # Disclaimer + Anti-Fraud Notice
    └── NotFound.tsx           # 404 page
```

---

## Pages & Routing

| Route | Page | Purpose |
|-------|------|---------|
| `/` | Home | Hero, highlights, mission, CTA |
| `/about` | About | Organization overview, vision/mission |
| `/programs` | Programs | Educational initiatives |
| `/get-involved` | Get Involved | Volunteer, partner, support routes |
| `/contact` | Contact | Contact form + info |
| `/privacy` | Privacy | Privacy Policy |
| `/terms` | Terms | Terms & Conditions |
| `/disclaimer` | Disclaimer | Disclaimer + anti-fraud |
| `*` | 404 | Not Found |

---

## Design System

### Typography
- System font stack: `ui-sans-serif, system-ui, "Segoe UI", Roboto, "Noto Sans", sans-serif`
- Base 16px, fluid scale via `clamp()`
- Body line-height 1.6, max text measure 70ch
- Respects `prefers-reduced-motion`

### Spacing
- 8px spacing scale
- Rounded corners: 0.5rem
- Two shadow levels maximum

### Focus
- 3px solid orange (#E8763A) outline, offset 2px
- Never removed on any interactive element

---

## Color Palette

All colors defined as CSS custom properties in `src/index.css`:

| Token | Hex | Usage |
|-------|-----|-------|
| `--brown` | `#7A4A1E` | Primary (headers, buttons) |
| `--brown-dark` | `#5C3614` | Primary dark (footer, gradients) |
| `--orange` | `#E8763A` | Accent (CTAs, focus, highlights) |
| `--orange-light` | `#F4A261` | Accent light (hover states) |
| `--blue` | `#1E5FA8` | Secondary (trust, links) |
| `--blue-light` | `#A8CBEA` | Secondary light |
| `--cream` | `#F5EAD8` | Subtle background |
| `--cream-light` | `#FBF6EE` | Surface (page background) |
| `--teal` | `#1B7A8C` | Teal accent (programs, contact) |
| `--text` | `#2B1B0F` | Primary text |
| `--text-muted` | `#6B5844` | Secondary text |
| `--border` | `#E5D6BE` | Borders |

### Dark Mode
- Background: `#1a1008`
- Surface: `#2d1f10`
- Muted text: `#b8a48c`
- Border: `#4a3828`

---

## Accessibility

- WCAG 2.2 AA compliant
- Skip-to-content link
- Semantic HTML landmarks
- `aria-labelledby` on all sections
- Focus trapping in mobile menu and modals
- Keyboard-operable throughout
- `prefers-reduced-motion` respected
- Color contrast verified (all pairs ≥ 4.5:1)
- Target size ≥ 44px for primary mobile CTAs

---

## SEO & Structured Data

- Unique `<title>` and `<meta description>` per page
- JSON-LD structured data (NGO, BreadcrumbList)
- Canonical URLs
- Open Graph and Twitter Card meta
- Semantic heading hierarchy (one h1 per page)
- `robots.txt` and `sitemap.xml` ready for deployment

---

## Contact Form

### Fields
- Full Name (required, 2–80 chars)
- Email (required, validated)
- Phone/WhatsApp (optional)
- Subject (required, dropdown with allow-list)
- Message (required, 20–2000 chars, live counter)

### Anti-Spam Measures
- Hidden honeypot field
- Timing check (rejects submissions < 3 seconds)
- Client-side validation on blur and submit
- Server-side validation pipeline (Phase 2)

### Accessibility
- `aria-invalid` on error fields
- `aria-describedby` linking errors to fields
- `aria-live="polite"` for error messages
- Focus moves to first invalid field on submit

---

## Heritage Illustrations

### Camel Image (Real Photograph)
- **Location:** `public/images/Camel.jpg` (or external URL as fallback)
- **Description:** A dromedary camel in the Balochistan desert landscape
- **Usage:** Hero section background (subtle, with overlay blend) and mission card decoration
- **Source:** Organization's GitHub repository "NGO" or AI-generated

### BalochiPattern (SVG)
- Geometric diamond pattern inspired by Balochi needlework (dochi)
- Used as section dividers (subtle border decoration)
- Located in `src/components/HeritageSVG.tsx`

**Usage principle:** Heritage elements are decorative only (`aria-hidden="true"`), and never overwhelm content. The camel is a real photograph for authenticity; the Balochi pattern remains as SVG for theme adaptability.

---

## Content Management

### Organization Data
All organization facts are in `src/data/org.ts` — the single source of truth. Never hard-code these values elsewhere.

### Student of the Week
The Programs page has an editable student name field:
- Click the edit icon (pencil) next to the student name
- Type the new name
- Click the checkmark to save
- In production, this would connect to a CMS or API

---

## Deployment

### Build Output
```bash
npm run build
# Output: dist/
```

### Static Hosting
The built `dist/` folder can be deployed to any static host:
- Netlify
- Vercel
- Cloudflare Pages
- GitHub Pages
- Any web server (Nginx, Apache)

### Environment Variables (Phase 2)
When the backend API is connected:
```
VITE_API_URL=https://api.schoolforall.org.pk
VITE_ADSENSE_ENABLED=false
VITE_GA4_ID=
```

---

## Editorial Policy

### No Invented Facts
Only verified organizational data is published. No fabricated statistics, donor names, or beneficiary counts.

### Minor Protection
No minor's full name, school, or location may be published together without written guardian consent. The Student of the Week card uses a placeholder by default.

### Anti-Fraud
SFA never solicits donations to personal accounts via DM. The anti-fraud notice appears on Get Involved and Disclaimer pages.

---

## License

© 2025 School For All Welfare Organization. All rights reserved.
