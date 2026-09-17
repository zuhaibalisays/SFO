import { Link } from "react-router-dom";
import { orgData } from "../data/org";
import { Home, ArrowLeft } from "lucide-react";

/**
 * 404 Not Found Page
 * 
 * Returns a real 404 status (via server configuration).
 * Provides helpful navigation back to the site.
 */
export function NotFound() {
  return (
    <section
      aria-labelledby="notfound-heading"
      className="min-h-[60vh] flex items-center justify-center py-16 md:py-20"
    >
      <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <p className="text-8xl md:text-9xl font-extrabold text-primary/20 dark:text-accent-light/20 select-none" aria-hidden="true">
            404
          </p>
        </div>
        <h1 id="notfound-heading" className="text-2xl md:text-3xl font-bold text-ink dark:text-white mb-4">
          Page Not Found
        </h1>
        <p className="text-muted dark:text-dark-muted text-lg mb-8 leading-relaxed">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or may have been moved.
          Let us help you find what you&apos;re looking for.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
          >
            <Home size={18} aria-hidden="true" />
            Go to Homepage
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border dark:border-dark-border text-ink dark:text-white font-semibold rounded-lg hover:bg-subtle dark:hover:bg-dark-surface transition-colors"
          >
            <ArrowLeft size={18} aria-hidden="true" />
            Go Back
          </button>
        </div>

        {/* Helpful links */}
        <div className="mt-12 pt-8 border-t border-border dark:border-dark-border">
          <p className="text-sm text-muted dark:text-dark-muted mb-4">
            Looking for something specific? Try these pages:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {orgData.navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="px-4 py-2 text-sm bg-subtle dark:bg-dark-surface text-ink dark:text-white rounded-lg hover:bg-primary/10 hover:text-primary dark:hover:text-accent-light transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact fallback */}
        <div className="mt-8 text-sm text-muted dark:text-dark-muted">
          <p>
            If you believe this is an error, please{" "}
            <Link to="/contact" className="text-primary dark:text-accent-light hover:underline font-medium">
              contact us
            </Link>{" "}
            and we&apos;ll fix it.
          </p>
        </div>
      </div>
    </section>
  );
}
