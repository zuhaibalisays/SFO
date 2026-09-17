import { Link } from "react-router-dom";
import { orgData } from "../data/org";
import { Shield } from "lucide-react";

/**
 * Privacy Policy Page
 * 
 * Extended with cookie/ads/analytics disclosures per Section 9.6.
 * Must be a crawlable URL for AdSense and Google Search compliance.
 */
export function Privacy() {
  return (
    <>
      {/* Page Header */}
      <section
        aria-labelledby="page-heading"
        className="bg-gradient-to-br from-primary to-primary-dark text-white py-12 md:py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-sm text-white/70">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white" aria-current="page">Privacy Policy</li>
            </ol>
          </nav>
          <h1 id="page-heading" className="text-3xl md:text-4xl font-bold">
            Privacy Policy
          </h1>
          <p className="mt-3 text-white/80 text-lg">
            Last updated: January 2025
          </p>
        </div>
      </section>

      <section aria-labelledby="privacy-content-heading" className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="privacy-content-heading" className="sr-only">Privacy Policy Content</h2>
          <div className="prose text-muted dark:text-dark-muted space-y-6 leading-relaxed">
            <div className="flex items-start gap-3 p-4 bg-subtle dark:bg-dark-surface rounded-lg">
              <Shield className="text-primary dark:text-accent-light shrink-0 mt-1" size={20} aria-hidden="true" />
              <p className="text-sm">
                {orgData.legalName} ({orgData.shortName}) respects your privacy and is committed
                to protecting your personal data. This policy explains what information we collect,
                why we collect it, and how we handle it.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-ink dark:text-white mt-8 mb-3">
                1. Information We Collect
              </h3>
              <p>
                When you use our contact form, we collect the following personal information:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Your full name</li>
                <li>Your email address</li>
                <li>Your phone number (if provided — this is optional)</li>
                <li>The subject of your inquiry</li>
                <li>Your message content</li>
              </ul>
              <p className="mt-3">
                We also collect technical information automatically, including your IP address
                (stored as a hashed value, not in plain text), browser user agent string, and the
                time of your submission.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-ink dark:text-white mt-8 mb-3">
                2. How We Use Your Information
              </h3>
              <p>
                Personal details collected via the contact form are used strictly for communication
                purposes and will not be shared or sold to any third party. Specifically, we use
                your information to:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Respond to your inquiry or request</li>
                <li>Follow up on volunteer, partnership, or support expressions</li>
                <li>Maintain records of communications for organizational purposes</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-ink dark:text-white mt-8 mb-3">
                3. Cookies and Tracking Technologies
              </h3>
              <p>
                Our website may use cookies and similar technologies for the following purposes:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong>Essential cookies:</strong> Required for the website to function (e.g., consent preferences)</li>
                <li><strong>Analytics cookies:</strong> Google Analytics 4 may be used to understand how visitors interact with our site. IP addresses are anonymized.</li>
                <li><strong>Advertising cookies:</strong> If Google AdSense is enabled, third-party cookies may be used to serve relevant advertisements.</li>
              </ul>
              <p className="mt-3">
                By default, all non-essential cookies are disabled until you provide consent through
                our cookie banner. You can manage or withdraw your consent at any time by clicking
                the &quot;Manage Cookies&quot; link in our website footer.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-ink dark:text-white mt-8 mb-3">
                4. Third-Party Services
              </h3>
              <p>
                We may use the following third-party services:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong>Google AdSense:</strong> For displaying advertisements (when enabled). Google may use cookies to serve ads based on your prior visits.</li>
                <li><strong>Google Analytics:</strong> For understanding website traffic and user behavior.</li>
                <li><strong>Email service provider:</strong> For sending notification emails when contact form submissions are received.</li>
                <li><strong>Hosting provider:</strong> For hosting our website and server infrastructure.</li>
              </ul>
              <p className="mt-3">
                Each third-party service has its own privacy policy. We encourage you to review
                their policies independently.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-ink dark:text-white mt-8 mb-3">
                5. Data Retention
              </h3>
              <p>
                Contact form submissions are retained for a maximum of 24 months. After this period,
                records are securely deleted. IP addresses are stored only as cryptographic hashes
                and are never stored in plain text.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-ink dark:text-white mt-8 mb-3">
                6. Your Rights
              </h3>
              <p>
                You have the right to:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Request access to the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your personal data</li>
                <li>Withdraw consent for cookie usage at any time</li>
                <li>Object to processing of your personal data</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, please contact us at{" "}
                <a href={`mailto:${orgData.contact.email}`} className="text-primary dark:text-accent-light hover:underline">
                  {orgData.contact.email}
                </a>.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-ink dark:text-white mt-8 mb-3">
                7. Children&apos;s Privacy
              </h3>
              <p>
                {orgData.shortName} is dedicated to serving communities that include children. We do
                not knowingly collect personal information from children under 13 without verifiable
                parental consent. If you believe a child has provided us with personal data, please
                contact us and we will take appropriate action.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-ink dark:text-white mt-8 mb-3">
                8. Changes to This Policy
              </h3>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on
                this page with an updated &quot;Last updated&quot; date. We encourage you to review this
                policy periodically.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-ink dark:text-white mt-8 mb-3">
                9. Contact Us
              </h3>
              <p>
                If you have any questions about this Privacy Policy or our data practices, please
                contact us:
              </p>
              <div className="mt-3 p-4 bg-subtle dark:bg-dark-surface rounded-lg">
                <p className="font-medium text-ink dark:text-white">{orgData.legalName}</p>
                <p>{orgData.headOffice.full}</p>
                <p>
                  Phone: <a href={`tel:${orgData.contact.phoneTel}`} className="text-primary dark:text-accent-light hover:underline">{orgData.contact.phone}</a>
                </p>
                <p>
                  Email: <a href={`mailto:${orgData.contact.email}`} className="text-primary dark:text-accent-light hover:underline">{orgData.contact.email}</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
