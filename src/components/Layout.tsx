import { useState, useEffect, useRef, useCallback } from "react";
import { Outlet, Link, NavLink, useLocation } from "react-router-dom";
import { orgData } from "../data/org";
import {
  Menu,
  X,
  Instagram,
  Twitter,
  Youtube,
  BookOpen,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
} from "lucide-react";

/* ============================================
   Dark Mode Hook
   ============================================ */
function useDarkMode() {
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return false;
    const stored = localStorage.getItem("sfa-theme");
    if (stored) return stored === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("sfa-theme", dark ? "dark" : "light");
  }, [dark]);

  return [dark, setDark] as const;
}

/* ============================================
   Skip to Content Link
   ============================================ */
function SkipLink() {
  return (
    <a href="#main-content" className="skip-link">
      Skip to main content
    </a>
  );
}

/* ============================================
   Header / Navigation
   ============================================ */
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Trap focus in mobile menu when open
  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (e.key === "Tab" && menuRef.current) {
        const focusable = menuRef.current.querySelectorAll<HTMLElement>(
          'a, button, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-cream-light/95 dark:bg-dark-bg/95 backdrop-blur-sm border-b border-border dark:border-dark-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo + Name */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
            aria-label="School For All Welfare Organization - Home"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary flex items-center justify-center text-cream-light font-bold text-lg md:text-xl shrink-0 group-hover:bg-primary-dark transition-colors">
              SFA
            </div>
            <div className="hidden sm:block">
              <span className="block text-sm md:text-base font-bold text-ink dark:text-cream-light leading-tight">
                School For All
              </span>
              <span className="block text-xs text-muted dark:text-dark-muted leading-tight">
                Welfare Organization
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label="Primary" className="hidden md:flex items-center gap-1">
            {orgData.navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                end={link.href === "/"}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-primary/10 text-primary dark:text-accent-light"
                      : "text-muted dark:text-dark-muted hover:text-ink dark:hover:text-cream-light hover:bg-subtle dark:hover:bg-dark-surface"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile menu toggle */}
          <div className="flex items-center md:hidden">
            <button
              ref={toggleRef}
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-lg text-ink dark:text-cream-light hover:bg-subtle dark:hover:bg-dark-surface"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div
          ref={menuRef}
          id="mobile-menu"
          className="md:hidden border-t border-border dark:border-dark-border bg-cream-light dark:bg-dark-bg"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <nav aria-label="Mobile" className="px-4 py-4 space-y-1">
            {orgData.navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                end={link.href === "/"}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? "bg-primary/10 text-primary dark:text-accent-light"
                      : "text-muted dark:text-dark-muted hover:text-ink dark:hover:text-cream-light hover:bg-subtle dark:hover:bg-dark-surface"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

/* ============================================
   Footer
   ============================================ */
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark dark:bg-dark-bg text-cream-light" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Organization Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-cream-light font-bold text-sm">
                SFA
              </div>
              <div>
                <span className="block font-bold text-cream-light">{orgData.legalName}</span>
              </div>
            </div>
            <p className="text-cream/80 text-sm leading-relaxed max-w-md mb-4">
              A non-profit organization founded on{" "}
              <time dateTime={orgData.founded}>{orgData.foundedDisplay}</time>, dedicated to
              expanding educational access and empowering communities in Turbat, Kech, Balochistan.
            </p>
            <address className="not-italic text-cream/70 text-sm space-y-1">
              <p className="flex items-center gap-2">
                <MapPin size={14} className="shrink-0" aria-hidden="true" />
                {orgData.headOffice.full}
              </p>
              <p className="flex items-center gap-2">
                <Phone size={14} className="shrink-0" aria-hidden="true" />
                <a href={`tel:${orgData.contact.phoneTel}`} className="hover:text-cream-light transition-colors">
                  {orgData.contact.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail size={14} className="shrink-0" aria-hidden="true" />
                <a href={`mailto:${orgData.contact.email}`} className="hover:text-cream-light transition-colors">
                  {orgData.contact.email}
                </a>
              </p>
            </address>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-cream-light mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <nav aria-label="Footer" className="space-y-2">
              {orgData.navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="flex items-center gap-1 text-cream/70 hover:text-cream-light text-sm transition-colors"
                >
                  <ChevronRight size={14} aria-hidden="true" />
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social & Blog */}
          <div>
            <h3 className="font-semibold text-cream-light mb-4 text-sm uppercase tracking-wider">
              Connect With Us
            </h3>
            <div className="flex gap-3 mb-6">
              <a
                href={orgData.social.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-dark/50 hover:bg-accent flex items-center justify-center transition-colors"
                aria-label={`Follow us on ${orgData.social.instagram.label}`}
              >
                <Instagram size={18} />
              </a>
              <a
                href={orgData.social.twitter.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-dark/50 hover:bg-accent flex items-center justify-center transition-colors"
                aria-label={`Follow us on ${orgData.social.twitter.label}`}
              >
                <Twitter size={18} />
              </a>
              <a
                href={orgData.social.youtube.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-dark/50 hover:bg-accent flex items-center justify-center transition-colors"
                aria-label={`Subscribe on ${orgData.social.youtube.label}`}
              >
                <Youtube size={18} />
              </a>
              <a
                href={orgData.social.blog.url}
                target="_blank"
                rel="noopener noreferrer me"
                className="w-10 h-10 rounded-full bg-primary-dark/50 hover:bg-accent flex items-center justify-center transition-colors"
                aria-label={`Read our ${orgData.social.blog.label}`}
              >
                <BookOpen size={18} />
              </a>
            </div>
            <a
              href={orgData.social.blog.url}
              target="_blank"
              rel="noopener noreferrer me"
              className="inline-flex items-center gap-2 text-sm text-accent-light hover:text-cream-light transition-colors"
            >
              <BookOpen size={16} aria-hidden="true" />
              Read our blog articles
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-primary/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-cream/60 text-sm">
            © {currentYear} {orgData.legalName}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <Link to="/privacy" className="text-cream/60 hover:text-cream-light transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-cream/60 hover:text-cream-light transition-colors">
              Terms &amp; Conditions
            </Link>
            <Link to="/disclaimer" className="text-cream/60 hover:text-cream-light transition-colors">
              Disclaimer
            </Link>
            <button
              className="text-cream/60 hover:text-cream-light transition-colors"
              aria-label="Manage cookie preferences"
            >
              Manage Cookies
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ============================================
   Consent Banner (placeholder for CMP)
   ============================================ */
function ConsentBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("sfa-consent");
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = useCallback(() => {
    localStorage.setItem("sfa-consent", JSON.stringify({ accepted: true, timestamp: Date.now(), version: 1 }));
    setShow(false);
  }, []);

  const rejectAll = useCallback(() => {
    localStorage.setItem("sfa-consent", JSON.stringify({ accepted: false, timestamp: Date.now(), version: 1 }));
    setShow(false);
  }, []);

  if (!show) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 bg-cream-light dark:bg-dark-surface border-t border-border dark:border-dark-border shadow-lg p-4 md:p-6"
      role="dialog"
      aria-label="Cookie consent"
      aria-modal="false"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-4">
        <p className="text-sm text-muted dark:text-dark-muted flex-1">
          We use cookies to improve your experience. By continuing to browse, you agree to our use of
          cookies as described in our{" "}
          <Link to="/privacy" className="text-primary dark:text-accent-light underline">
            Privacy Policy
          </Link>
          .
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={rejectAll}
            className="px-4 py-2 text-sm font-medium text-muted dark:text-dark-muted border border-border dark:border-dark-border rounded-lg hover:bg-subtle dark:hover:bg-dark-bg transition-colors"
          >
            Reject All
          </button>
          <button
            onClick={acceptAll}
            className="px-4 py-2 text-sm font-medium text-cream-light bg-primary hover:bg-primary-dark rounded-lg transition-colors"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}

/* ============================================
   Layout Wrapper
   ============================================ */
export function Layout() {
  const [dark, setDark] = useDarkMode();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-surface dark:bg-dark-bg text-ink dark:text-cream-light">
      <SkipLink />
      <Header />
      <main id="main-content" className="flex-1" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
      <ConsentBanner />
    </div>
  );
}
