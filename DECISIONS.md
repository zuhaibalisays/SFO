# DECISIONS.md — Assumptions & Trade-offs

> Every architectural decision, assumption, and trade-off made during development.

---

## 1. Framework Choice: React SPA (Not Static HTML)

**Decision:** Built as a React SPA with React Router instead of hand-authored static HTML.

**Rationale:**
- The project scaffold already had React, Vite, and Tailwind configured
- React Router provides proper multi-page routing with unique URLs for SEO
- Component reusability reduces maintenance burden for a non-technical team
- Client-side rendering still produces crawlable pages for search engines

**Trade-off:**
- Requires JavaScript for full functionality (though the contact form degrades with `method="POST"`)
- Slightly larger initial bundle vs. static HTML
- Mitigated by: lazy loading, code splitting, and minimal dependencies

---

## 2. Color Palette: Balochistan Heritage Theme

**Decision:** Used the specified warm/earthy palette (browns, oranges, creams, teal) instead of the original blue/teal scheme.

**Rationale:**
- Reflects Balochistan's desert landscape and cultural heritage
- Warm tones create a welcoming, community-focused feel
- All color pairs verified for WCAG AA contrast compliance
- Differentiates from generic NGO blue templates

**Trade-off:**
- Less "corporate" feel — may not appeal to institutional donors expecting traditional blue
- Mitigated by: maintaining professional typography and layout structure

---

## 3. Heritage SVG Illustrations

**Decision:** Created subtle SVG illustrations (camel caravan, Balochi pattern) rather than stock photos or AI-generated images.

**Rationale:**
- Zero file size impact (inline SVG)
- Theme-adaptive (uses `currentColor`)
- Culturally appropriate without risking misrepresentation
- No consent issues (unlike photographs of people)

**Trade-off:**
- Less visually striking than photography
- May not convey "real" community impact as effectively
- Mitigated by: using sparingly as decorative accents, not primary content

---

## 4. Student of the Week: Editable Name Field

**Decision:** Made the student name a local state variable with an edit interface instead of a static placeholder.

**Rationale:**
- Demonstrates the weekly update workflow
- No "Get Involved" link on this card (per spec) to keep focus on recognition
- In production, this would connect to a CMS or API endpoint

**Trade-off:**
- Currently client-side only — changes don't persist across sessions
- Mitigated by: documented that Phase 2 backend would provide persistence

---

## 5. Phone Number Display

**Decision:** Used `whitespace-nowrap` on phone number links to prevent line-break awkwardness.

**Rationale:**
- Phone numbers breaking mid-number looks unprofessional and confuses users
- The `tel:` link must remain intact for click-to-call functionality
- Local format (`0322 2773334`) used in body text for readability

**Trade-off:**
- On very narrow screens, may cause horizontal overflow
- Mitigated by: responsive container padding and `break-all` on email addresses

---

## 6. No Payment Integration

**Decision:** Deliberately excluded payment forms, card collection, and bank details pages.

**Rationale:**
- Handling card data pulls the organization into PCI-DSS scope (highest risk)
- The anti-fraud notice directs users to verify details by phone
- Reduces attack surface and legal liability

**Trade-off:**
- Less convenient for donors who want to give online
- Mitigated by: clear contact channels and anti-fraud guidance

---

## 7. Consent Banner: Simplified Implementation

**Decision:** Built a basic consent banner instead of a full IAB TCF v2.2 CMP.

**Rationale:**
- A certified CMP requires integration with a vendor (e.g., OneTrust, Cookiebot)
- The current implementation stores consent in localStorage and gates non-essential features
- Sufficient for initial launch; can be upgraded when AdSense is enabled

**Trade-off:**
- Not compliant with EEA/UK GDPR requirements for serving ads to those regions
- Mitigated by: AdSense is currently disabled; upgrade path documented

---

## 8. Dark Mode: System Preference + Manual Toggle

**Decision:** Implemented dark mode with both system preference detection and manual toggle.

**Rationale:**
- Respects user OS-level preference (`prefers-color-scheme`)
- Allows override via toggle (persisted in localStorage)
- Uses warm dark tones (`#1a1008`, `#2d1f10`) to maintain heritage feel

**Trade-off:**
- Additional CSS complexity
- Some color pairs required adjustment for dark mode contrast
- Mitigated by: thorough testing of all interactive elements

---

## 9. Form Validation: Client-Side Only (Phase 1)

**Decision:** Implemented comprehensive client-side validation with plans for server-side in Phase 2.

**Rationale:**
- Immediate user feedback improves UX
- Reduces server load by catching errors before submission
- Accessibility: errors linked with `aria-describedby`, `aria-invalid`

**Trade-off:**
- Client-side validation can be bypassed
- Mitigated by: Phase 2 backend will re-validate all input with Zod schemas

---

## 10. No External Fonts

**Decision:** Used system font stack instead of Google Fonts or self-hosted web fonts.

**Rationale:**
- Zero additional HTTP requests
- Faster page load (critical for low-bandwidth areas in Balochistan)
- No CSP complications
- System fonts render well on all platforms

**Trade-off:**
- Less brand control over typography
- Mitigated by: strong font-weight hierarchy and consistent sizing

---

## 11. Routing: Client-Side with Hash Fallback Consideration

**Decision:** Used React Router's browser history (clean URLs) instead of hash routing.

**Rationale:**
- Clean URLs (`/about`, not `/#/about`) are better for SEO
- Shareable links work correctly
- Server must be configured to serve `index.html` for all routes

**Trade-off:**
- Requires server configuration (Nginx/Apache rewrite rules)
- Mitigated by: deployment documentation includes server config examples

---

## 12. Image Strategy: No Images in Phase 1

**Decision:** Did not include any raster images (photos, hero backgrounds) in the initial build.

**Rationale:**
- Avoids consent issues with photographs of community members
- Zero impact on page load performance
- Heritage SVGs provide cultural context without photos

**Trade-off:**
- Less visually engaging than a photo-rich site
- Mitigated by: strong typography, color, and layout; photos can be added in Phase 2 with proper consent

---

## 13. AdSense: Feature-Flagged, Currently Disabled

**Decision:** Built the site to be AdSense-ready but with no ads enabled by default.

**Rationale:**
- AdSense approval requires substantial content (15–25 articles recommended)
- Ads must never appear on legal pages or near donation CTAs
- Feature flag allows enabling without code changes

**Trade-off:**
- No ad revenue until content is sufficient for approval
- Mitigated by: ad slot placeholders and placement map documented

---

## 14. Analytics: Consent-Gated

**Decision:** No analytics scripts load before user consent.

**Rationale:**
- Privacy-first approach
- Required for GDPR compliance if serving EEA/UK traffic
- Google Consent Mode v2 defaults to "denied"

**Trade-off:**
- No traffic data until users consent
- Mitigated by: clear consent banner with accept/reject options

---

## 15. Backend: Deferred to Phase 2

**Decision:** Built the frontend only; backend API (contact form processing, database, email) is Phase 2.

**Rationale:**
- Frontend can be deployed and tested independently
- Backend requires environment variables, SMTP credentials, database setup
- Separation of concerns allows different hosting strategies

**Trade-off:**
- Contact form currently simulates submission (no actual email sent)
- Mitigated by: form structure is production-ready; backend integration is documented

---

## Summary of Residual Risks

| Risk | Severity | Mitigation |
|------|----------|------------|
| Client-side validation bypass | Medium | Phase 2 server-side validation |
| No real email delivery | Low | Phase 2 backend with SMTP |
| Consent banner not TCF-compliant | Medium | Upgrade to certified CMP when AdSense enabled |
| No photos of community | Low | Add with proper consent workflow in Phase 2 |
| Student name not persisted | Low | Connect to CMS/API in Phase 2 |

---

## How to Update This Document

When making architectural decisions:
1. Add a new numbered section
2. State the decision clearly
3. Explain the rationale
4. Document the trade-off
5. Note any mitigation strategy

This document should be reviewed before each major release.
