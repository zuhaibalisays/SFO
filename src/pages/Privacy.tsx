import { Link } from "react-router-dom";
import { orgData } from "../data/org";
import { Shield } from "lucide-react";

export function Privacy() {
  return (
    <>
      <section aria-labelledby="page-heading" className="bg-gradient-to-br from-primary to-primary-dark text-cream-light py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-sm text-cream/70">
              <li><Link to="/" className="hover:text-cream-light transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-cream-light" aria-current="page">Privacy Policy</li>
            </ol>
          </nav>
          <h1 id="page-heading" className="text-3xl md:text-4xl font-bold">Privacy Policy</h1>
          <p className="mt-3 text-cream/80 text-lg">Last updated: January 2025</p>
        </div>
      </section>

      <section aria-labelledby="privacy-content-heading" className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="privacy-content-heading" className="sr-only">Privacy Policy Content</h2>
          <div className="prose text-muted dark:text-dark-muted space-y-6 leading-relaxed">
            <div className="flex items-start gap-3 p-4 bg-subtle dark:bg-dark-surface rounded-lg">
              <Shield className="text-primary shrink-0 mt-1" size={20} aria-hidden="true" />
              <p className="text-sm">{orgData.legalName} ({orgData.shortName}) respects your privacy and is committed to protecting your personal data. This policy explains what information we collect, why we collect it, and how we handle it.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-ink dark:text-cream-light mt-8 mb-3">1. Information We Collect</h3>
              <p>When you use our contact form, we collect: your full name, email address, phone number (optional), subject of inquiry, and message content. We also collect technical information including your IP address (stored as a hashed value), browser user agent, and submission time.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-ink dark:text-cream-light mt-8 mb-3">2. How We Use Your Information</h3>
              <p>Personal details collected via the contact form are used strictly for communication purposes and will not be shared or sold. We use your information to respond to inquiries, follow up on expressions of interest, and maintain organizational records.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-ink dark:text-cream-light mt-8 mb-3">3. Cookies and Tracking Technologies</h3>
              <p>Our website may use cookies for essential functionality, analytics (Google Analytics 4 with anonymized IPs), and advertising (Google AdSense when enabled). By default, all non-essential cookies are disabled until you provide consent. You can manage consent via the &quot;Manage Cookies&quot; link in our footer.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-ink dark:text-cream-light mt-8 mb-3">4. Third-Party Services</h3>
              <p>We may use Google AdSense, Google Analytics, email service providers, and hosting providers. Each has its own privacy policy.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-ink dark:text-cream-light mt-8 mb-3">5. Data Retention</h3>
              <p>Contact form submissions are retained for a maximum of 24 months. IP addresses are stored only as cryptographic hashes.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-ink dark:text-cream-light mt-8 mb-3">6. Your Rights</h3>
              <p>You have the right to access, correct, delete your data, withdraw consent, and object to processing. Contact us at <a href={`mailto:${orgData.contact.email}`} className="text-primary dark:text-accent-light hover:underline">{orgData.contact.email}</a>.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-ink dark:text-cream-light mt-8 mb-3">7. Children&apos;s Privacy</h3>
              <p>We do not knowingly collect personal information from children under 13 without verifiable parental consent.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-ink dark:text-cream-light mt-8 mb-3">8. Contact Us</h3>
              <div className="mt-3 p-4 bg-subtle dark:bg-dark-surface rounded-lg">
                <p className="font-medium text-ink dark:text-cream-light">{orgData.legalName}</p>
                <p>{orgData.headOffice.full}</p>
                <p>Phone: <a href={`tel:${orgData.contact.phoneTel}`} className="text-primary dark:text-accent-light hover:underline whitespace-nowrap">{orgData.contact.phone}</a></p>
                <p>Email: <a href={`mailto:${orgData.contact.email}`} className="text-primary dark:text-accent-light hover:underline break-all">{orgData.contact.email}</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
