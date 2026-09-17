# SECURITY.md — Threat Model & Security Controls

> Security requirements and controls for the SFA web platform.

---

## Threat Model

### Assets
1. **User data** — contact form submissions (name, email, phone, message)
2. **Organization reputation** — trust of community and donors
3. **Availability** — website uptime for information dissemination
4. **Children's privacy** — protection of minors' personal data

### Threat Actors
1. **Spammers/Bots** — automated form submission for spam/pharma
2. **Script Kiddies** — XSS, SQL injection attempts
3. **Social Engineers** — impersonation for fraudulent donation requests
4. **Insider Threat** — compromised admin credentials

---

## Security Controls

### 1. Transport Security
- **Requirement:** TLS 1.2+ only, valid certificate, HSTS
- **Status:** Phase 2 (requires server configuration)
- **Implementation:** Nginx/Caddy config with Let's Encrypt auto-renewal

### 2. Security Headers
- **Required headers:**
  ```
  Content-Security-Policy: default-src 'self'; script-src 'self' ...
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), microphone=(), camera=()
  X-Frame-Options: DENY
  Strict-Transport-Security: max-age=63072000; includeSubDomains
  ```
- **Status:** Phase 2 (server-side headers)
- **Frontend mitigation:** No inline styles or event handlers (CSP-compatible)

### 3. Input Validation
- **Client-side:** Zod-style validation in `Contact.tsx`
  - Name: 2–80 chars, no CR/LF
  - Email: RFC-ish format, no CR/LF
  - Phone: E.164 or PK local format
  - Subject: allow-list enum
  - Message: 20–2000 chars
- **Server-side:** Phase 2 with Zod schemas
- **Status:** Client-side ✅ | Server-side ⏳ Phase 2

### 4. Anti-Spam (Contact Form)
- **Honeypot field:** Hidden input, rejected if filled
- **Timing check:** Reject submissions < 3 seconds
- **Rate limiting:** Phase 2 (5 req/10min/IP)
- **Optional Turnstile:** Phase 2 (Cloudflare Turnstile behind env flag)
- **Status:** Client-side ✅ | Server-side ⏳ Phase 2

### 5. XSS Prevention
- **No `innerHTML`:** All dynamic content uses React's built-in escaping
- **No `dangerouslySetInnerHTML`:** Not used anywhere
- **No `eval` or `new Function`:** Not used
- **Output encoding:** React automatically escapes text content
- **Status:** ✅ Implemented

### 6. CSRF Protection
- **Client-side:** Form uses `method="POST"` (degrades gracefully)
- **Server-side:** Phase 2 with double-submit cookie pattern
- **Status:** Client-side ✅ | Server-side ⏳ Phase 2

### 7. Data Protection
- **Minimum data collection:** Only name, email, phone (optional), subject, message
- **IP hashing:** Phase 2 (HMAC-SHA256 with server pepper)
- **Retention:** 24 months maximum (Phase 2 purge job)
- **Database encryption:** Phase 2 (file-level encryption at rest)
- **Status:** ⏳ Phase 2

### 8. Secrets Management
- **No secrets in code:** All credentials from environment variables
- **`.env.example`:** Committed with placeholder values
- **`.gitignore`:** Excludes `.env`, `*.db`, `node_modules`, `dist`
- **Status:** ✅ Implemented (frontend has no secrets)

### 9. Error Handling
- **Generic messages:** No stack traces or internal details exposed
- **Correlation IDs:** Phase 2 (link user-facing errors to server logs)
- **Status:** ✅ Implemented (frontend)

### 10. Dependency Security
- **Lockfile committed:** `package-lock.json` in repository
- **npm audit:** Run in CI (Phase 2)
- **Dependabot/Renovate:** Phase 2
- **Status:** ✅ Lockfile committed | ⏳ CI audit Phase 2

---

## Weak Points & Mitigations

### Non-Technical Weaknesses

1. **Gmail as organizational mailbox**
   - **Risk:** Account takeover = loss of all communications
   - **Mitigation:** Enable 2FA, use App Password for SMTP, review recovery options

2. **Domain registrar account**
   - **Risk:** Expired domain = total loss of identity and SEO
   - **Mitigation:** Enable 2FA, registrar lock, auto-renewal

3. **Social account takeover**
   - **Risk:** Hijacked account soliciting fake donations
   - **Mitigation:** 2FA on all social accounts, anti-fraud notice on website

4. **Photo consent for minors**
   - **Risk:** Publishing identifiable images without consent
   - **Mitigation:** Written guardian consent required, documented workflow

5. **Insider/handover risk**
   - **Risk:** Departing team member retains access
   - **Mitigation:** Written offboarding checklist, secret rotation runbook

---

## Incident Response

### Disclosure Contact
- **Email:** `Sfawelfareorganization@gmail.com`
- **Phone:** `+92 322 2773334`

### Response Timeline
1. **Acknowledgment:** Within 24 hours
2. **Assessment:** Within 72 hours
3. **Mitigation:** Immediate for critical vulnerabilities
4. **Disclosure:** Public advisory within 30 days (if warranted)

---

## Compliance Checklist

| Control | Status | Notes |
|---------|--------|-------|
| TLS enforced | ⏳ Phase 2 | Server config required |
| HSTS header | ⏳ Phase 2 | After confirming all subdomains HTTPS |
| CSP enforced | ⏳ Phase 2 | Report-only first, then enforce |
| XSS prevention | ✅ | React auto-escaping |
| SQL injection | ⏳ Phase 2 | Parameterized queries |
| CSRF tokens | ⏳ Phase 2 | Double-submit cookie |
| Rate limiting | ⏳ Phase 2 | Server-side |
| Input validation | ✅ Client / ⏳ Server | Client-side complete |
| Output encoding | ✅ | React handles this |
| Secrets management | ✅ | No secrets in frontend |
| Error handling | ✅ | Generic messages |
| Dependency audit | ⏳ Phase 2 | CI integration |
| Data retention | ⏳ Phase 2 | 24-month purge job |
| IP hashing | ⏳ Phase 2 | HMAC-SHA256 |

---

## Security Testing

### Manual Testing (Pre-Launch)
- [ ] Verify all forms reject invalid input
- [ ] Test honeypot field (submit with it filled)
- [ ] Test timing check (submit in < 3 seconds)
- [ ] Verify no console errors or warnings
- [ ] Check all links open correctly
- [ ] Verify dark mode on all pages
- [ ] Test keyboard navigation (Tab, Shift+Tab, Enter, Escape)
- [ ] Verify focus indicators visible
- [ ] Test screen reader (VoiceOver/NVDA)

### Automated Testing (Phase 2)
- Unit tests for validation functions
- Integration tests for form submission
- E2E tests with Playwright
- Security headers verification
- Lighthouse audit (Performance, Accessibility, SEO)

---

## Last Updated
January 2025

## Version
1.0.0 (Phase 1 — Frontend)
