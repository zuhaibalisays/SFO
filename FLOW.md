# FLOW.md — Application Flow, Code Logic & Structure

> Complete technical documentation of how the SFA web platform works.

---

## Table of Contents
1. [Application Architecture](#application-architecture)
2. [Component Hierarchy](#component-hierarchy)
3. [Page Flow & Routing](#page-flow--routing)
4. [Data Flow](#data-flow)
5. [Contact Form Logic](#contact-form-logic)
6. [Dark Mode Logic](#dark-mode-logic)
7. [Mobile Navigation Logic](#mobile-navigation-logic)
8. [Student of the Week Logic](#student-of-the-week-logic)
9. [Consent Banner Logic](#consent-banner-logic)
10. [Heritage SVG Rendering](#heritage-svg-rendering)

---

## Application Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        index.html                            │
│  (Meta tags, JSON-LD, theme-color, root div)                │
└────────────────────────┬────────────────────────────────────┘
                         │
┌────────────────────────▼────────────────────────────────────┐
│                       main.tsx                               │
│  ReactDOM.createRoot → renders <App />                      │
└────────────────────────┬────────────────────────────────────┘
                         │
┌────────────────────────▼────────────────────────────────────┐
│                       App.tsx                                │
│  BrowserRouter → Routes → Layout wrapper → Page components  │
└────────────────────────┬────────────────────────────────────┘
                         │
         ┌───────────────┼───────────────┐
         ▼               ▼               ▼
    ┌─────────┐    ┌──────────┐    ┌──────────┐
    │ Layout  │    │  Pages   │    │  Data    │
    │ (shell) │    │ (routes) │    │ (org.ts) │
    └─────────┘    └──────────┘    └──────────┘
```

---

## Component Hierarchy

```
App
├── BrowserRouter
│   └── Routes
│       └── Layout
│           ├── SkipLink (a.skip-link)
│           ├── Header
│           │   ├── Logo + Name (Link to /)
│           │   ├── Desktop Nav (NavLink × 5)
│           │   ├── Dark Mode Toggle (Sun/Moon)
│           │   └── Mobile Menu (conditional)
│           │       └── Mobile Nav (NavLink × 5)
│           ├── <main id="main-content">
│           │   └── <Outlet /> (current page renders here)
│           ├── Footer
│           │   ├── Org Info + Address
│           │   ├── Quick Links (nav)
│           │   ├── Social Links
│           │   └── Bottom Bar (copyright, legal links)
│           └── ConsentBanner (conditional)
```

---

## Page Flow & Routing

### Route Resolution
```
User navigates to URL
    │
    ▼
BrowserRouter matches path
    │
    ▼
Layout renders (always)
    │
    ├── Header (sticky, always visible)
    ├── <Outlet /> ← Page component renders here
    ├── Footer (always visible)
    └── ConsentBanner (if no consent stored)
```

### Page Components
Each page follows this structure:
1. **Page Header** — gradient background, breadcrumb, h1
2. **Content Sections** — semantic `<section>` with `aria-labelledby`
3. **CTA Section** — call-to-action at bottom (where appropriate)

### Navigation Flow
```
Home ──────► About ──────► Programs ──────► Get Involved ──────► Contact
  │            │               │                  │                  │
  └────────────┴───────────────┴──────────────────┴──────────────────┘
                              (all pages link to each other)
```

### Query String Handling
- `/contact?subject=volunteer` → pre-selects "Volunteer" in the dropdown
- `/contact?subject=donation` → pre-selects "Donation / Support"
- Validated against allow-list before applying

---

## Data Flow

### Organization Data (org.ts)
```
org.ts (single source of truth)
    │
    ├── Imported by Layout.tsx (nav links, org info, social links)
    ├── Imported by Home.tsx (hero text, highlight cards)
    ├── Imported by About.tsx (founding date, mission, themes)
    ├── Imported by Programs.tsx (flagship name, recurring programme)
    ├── Imported by GetInvolved.tsx (contact info, anti-fraud notice)
    ├── Imported by Contact.tsx (contact info, social links)
    └── Imported by legal pages (org name, contact details)
```

### State Management
- **React useState** — local component state (form fields, dark mode, menu)
- **localStorage** — persisted preferences (theme, consent)
- **URL search params** — cross-page state (pre-selected subject)
- **No global state library** — React context not needed for this scale

---

## Contact Form Logic

### Validation Pipeline
```
User types in field
    │
    ▼
onChange → update state
    │
    ▼
onBlur → validateField(field, value)
    │
    ├── validateName: 2-80 chars, no CR/LF
    ├── validateEmail: regex, no CR/LF
    ├── validatePhone: E.164 or PK format (optional)
    ├── validateSubject: allow-list check
    └── validateMessage: 20-2000 chars
    │
    ▼
setErrors({ field: error | null })
setTouched({ field: true })
    │
    ▼
UI updates: red border + error message (aria-live)
```

### Submission Flow
```
User clicks "Send Message"
    │
    ▼
handleSubmit(e)
    │
    ├── Prevent default
    ├── Validate ALL fields
    ├── If errors: focus first invalid field, return
    │
    ├── Check timing (formAge < 3s?)
    │   └── If yes: fake success (anti-bot)
    │
    ├── Check honeypot (honeypot field filled?)
    │   └── If yes: fake success (anti-bot)
    │
    ├── setSubmitting(true) → disable button, show spinner
    │
    ├── Simulate API call (Phase 2: POST /api/contact)
    │
    └── On success: setSubmitted(true) → show success screen
        On error: setSubmitError(true) → show error message
```

### Success Screen
```
Submitted = true
    │
    ├── Green checkmark icon
    ├── "Message Sent Successfully!" heading
    ├── Thank you message
    ├── "Send Another Message" button (resets form)
    └── "Return Home" link
```

---

## Dark Mode Logic

### Initialization
```
Component mounts
    │
    ▼
useDarkMode() hook
    │
    ├── Check localStorage('sfa-theme')
    │   ├── 'dark' → setDark(true)
    │   ├── 'light' → setDark(false)
    │   └── null → check prefers-color-scheme
    │       ├── dark → setDark(true)
    │       └── light → setDark(false)
    │
    └── useEffect: toggle 'dark' class on <html>
        localStorage.setItem('sfa-theme', dark ? 'dark' : 'light')
```

### Toggle
```
User clicks Sun/Moon button
    │
    ▼
setDark(!dark)
    │
    ▼
useEffect fires:
    ├── document.documentElement.classList.toggle('dark', dark)
    └── localStorage.setItem('sfa-theme', dark ? 'dark' : 'light')
```

### CSS Variables
```css
/* Light mode (default) */
--color-surface: #FBF6EE;     /* cream-light */
--color-ink: #2B1B0F;          /* text */
--color-muted: #6B5844;        /* text-muted */

/* Dark mode (html.dark) */
--color-dark-bg: #1a1008;
--color-dark-surface: #2d1f10;
--color-dark-muted: #b8a48c;
```

---

## Mobile Navigation Logic

### Open/Close
```
User clicks hamburger menu
    │
    ▼
setMenuOpen(!menuOpen)
    │
    ├── aria-expanded={menuOpen}
    ├── aria-controls="mobile-menu"
    │
    └── Conditional render:
        ├── menuOpen = true → show <div id="mobile-menu">
        └── menuOpen = false → hide menu
```

### Focus Trap (when open)
```
Menu is open
    │
    ▼
useEffect adds keydown listener
    │
    ├── Escape → setMenuOpen(false), focus toggle button
    │
    └── Tab key:
        ├── Get all focusable elements in menu
        ├── If Shift+Tab on first → focus last
        └── If Tab on last → focus first
```

### Auto-Close on Navigation
```
Route changes (location.pathname)
    │
    ▼
useEffect fires
    │
    └── setMenuOpen(false)
```

---

## Student of the Week Logic

### State
```typescript
const [studentName, setStudentName] = useState("Student Name");
const [isEditing, setIsEditing] = useState(false);
const [editValue, setEditValue] = useState(studentName);
```

### Edit Flow
```
User clicks edit icon (pencil)
    │
    ▼
setEditValue(studentName)  // sync edit field with current name
setIsEditing(true)          // show input field
    │
    ▼
User types new name → setEditValue(e.target.value)
    │
    ▼
User clicks checkmark
    │
    ▼
handleSaveName()
    │
    ├── If editValue.trim().length > 0:
    │   └── setStudentName(editValue.trim())
    │
    └── setIsEditing(false)  // hide input, show name
```

### Display
```
isEditing = false:
    └── Show: student name + edit button (pencil icon)

isEditing = true:
    └── Show: text input + save button (checkmark icon)
```

### No "Get Involved" Link
The Student of the Week card deliberately omits any CTA link to keep focus on recognition and avoid confusion with donation requests.

---

## Consent Banner Logic

### Display Logic
```
Component mounts
    │
    ▼
useEffect (500ms delay to avoid CLS)
    │
    ├── Check localStorage('sfa-consent')
    │   ├── Exists → don't show banner
    │   └── Null → setShow(true) after 500ms
    │
    └── Banner renders (fixed bottom, z-50)
```

### Accept/Reject
```
User clicks "Accept All"
    │
    ▼
acceptAll()
    ├── localStorage.setItem('sfa-consent', JSON.stringify({
    │       accepted: true,
    │       timestamp: Date.now(),
    │       version: 1
    │   }))
    └── setShow(false) → banner disappears

User clicks "Reject All"
    │
    ▼
rejectAll()
    ├── localStorage.setItem('sfa-consent', JSON.stringify({
    │       accepted: false,
    │       timestamp: Date.now(),
    │       version: 1
    │   }))
    └── setShow(false) → banner disappears
```

---

## Heritage SVG Rendering

### CamelCaravan Component
```
Props: { className?: string }
    │
    ▼
SVG viewBox="0 0 800 200"
    │
    ├── Sand dunes (2 paths, opacity 0.08/0.05)
    ├── Camel 1 (lead, opacity 0.15)
    │   └── Body, hump, neck, head, 4 legs, tail
    ├── Camel 2 (middle, scale 0.85, opacity 0.12)
    ├── Camel 3 (trailing, scale 0.7, opacity 0.09)
    └── Handler figure (opacity 0.15)
        └── Head, body, arms, legs, staff, turban
    │
    ▼
All elements use fill="currentColor" or stroke="currentColor"
    → Inherits color from parent (theme-adaptive)
    → aria-hidden="true" (decorative)
```

### BalochiPattern Component
```
SVG viewBox="0 0 400 40"
    │
    ├── <pattern> with repeating diamond motif
    │   └── Outer diamond, inner diamond, center dot
    │
    └── <rect> filled with pattern
    │
    ▼
Used as section divider (h-6, opacity 20-40%)
```

### Usage Locations
```
Home.tsx:
    ├── Hero background: <CamelCaravan className="w-full h-auto" />
    └── Hero bottom border: <BalochiPattern className="w-full h-6 opacity-40" />

About.tsx:
    └── Page header bottom: <BalochiPattern className="w-full h-6 opacity-30" />

Programs.tsx:
    └── Page header bottom: <BalochiPattern className="w-full h-6 opacity-20" />

Home.tsx (mission section):
    └── Card background: inline camel SVG (opacity 0.2, decorative)
```

---

## Build & Output

### Vite Build Process
```
npm run build
    │
    ├── TypeScript compilation (tsc --noEmit for type checking)
    ├── Vite bundles:
    │   ├── CSS → dist/assets/index-[hash].css (35.85 KB / 7.06 KB gzip)
    │   ├── JS → dist/assets/index-[hash].js (269.32 KB / 73.97 KB gzip)
    │   └── HTML → dist/index.html (3.10 KB / 1.16 KB gzip)
    │
    └── Output: dist/ directory (ready for deployment)
```

### Performance Budget
- Initial JS: ~74 KB gzipped (under 60 KB target excluding vendors)
- CSS: ~7 KB gzipped (Tailwind purged)
- Total: ~81 KB gzipped

---

## File Dependencies Map

```
main.tsx
  └── App.tsx
       └── Layout.tsx
            ├── org.ts (data)
            ├── HeritageSVG.tsx (illustrations)
            └── Pages:
                 ├── Home.tsx → org.ts, HeritageSVG.tsx
                 ├── About.tsx → org.ts, HeritageSVG.tsx
                 ├── Programs.tsx → org.ts, HeritageSVG.tsx
                 ├── GetInvolved.tsx → org.ts
                 ├── Contact.tsx → org.ts
                 ├── Privacy.tsx → org.ts
                 ├── Terms.tsx → org.ts
                 ├── Disclaimer.tsx → org.ts
                 └── NotFound.tsx → org.ts
```

---

## Last Updated
January 2025
