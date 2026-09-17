import { Link } from "react-router-dom";
import { orgData } from "../data/org";
import { AlertTriangle, Shield } from "lucide-react";

/**
 * Disclaimer Page
 * 
 * Extended with anti-fraud donation notice (Section 11.9)
 * and external links disclaimer.
 * Must be a crawlable URL for AdSense and Google Search compliance.
 */
export function Disclaimer() {
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
              <li className="text-white" aria-current="page">Disclaimer</li>
            </ol>
          </nav>
          <h1 id="page-heading" className="text-3xl md:text-4xl font-bold">
            Disclaimer
          </h1>
          <p className="mt-3 text-white/80 text-lg">
            Last updated: January 2025
          </p>
        </div>
      </section>

      <section aria-labelledby="disclaimer-content-heading" className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="disclaimer-content-heading" className="sr-only">Disclaimer Content</h2>
          <div className="prose text-muted dark:text-dark-muted space-y-6 leading-relaxed">
            <div className="flex items-start gap-3 p-4 bg-subtle dark:bg-dark-surface rounded-lg">
              <AlertTriangle className="text-primary dark:text-accent-light shrink-0 mt-1" size={20} aria-hidden="true" />
              <p className="text-sm">
                {orgData.legalName} ({orgData.shortName}) is an independent non-profit
                organization registered in Pakistan. All community updates and articles represent
                official organizational updates.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-ink dark:text-white mt-8 mb-3">
                General Information
              </h3>
              <p>
                The information provided on this website is for general informational and
                educational purposes only. While we strive to keep the information up to date and
                accurate, we make no representations or warranties of any kind, express or implied,
                about the completeness, accuracy, reliability, suitability, or availability of the
                information, products, services, or related graphics contained on the website.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-ink dark:text-white mt-8 mb-3">
                Organizational Status
              </h3>
              <p>
                {orgData.shortName} is a welfare organization focused on educational access and
                community development in Balochistan, Pakistan. Our programmes, including{" "}
                {orgData.flagship.full}, are community-driven initiatives. Any information about
                our activities, events, or engagements is provided in good faith and represents our
                official organizational communications.
              </p>
            </div>

            {/* Anti-Fraud Notice */}
            <div className="p-6 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg">
              <div className="flex items-start gap-3">
                <Shield className="text-amber-700 dark:text-amber-400 shrink-0 mt-1" size={20} aria-hidden="true" />
                <div>
                  <h3 className="text-lg font-bold text-amber-900 dark:text-amber-200 mb-2">
                    Anti-Fraud Notice
                  </h3>
                  <p className="text-amber-800 dark:text-amber-300 text-sm leading-relaxed">
                    {orgData.legalName} ({orgData.shortName}) <strong>never</strong> solicits
                    donations to personal bank accounts via direct message, social media, or
                    unofficial channels. We do not collect payment card information through this
                    website.
                  </p>
                  <p className="text-amber-800 dark:text-amber-300 text-sm leading-relaxed mt-2">
                    If anyone claims to represent {orgData.shortName} and requests financial
                    contributions through unofficial means, please verify the authenticity by
                    contacting us directly at{" "}
                    <a href={`tel:${orgData.contact.phoneTel}`} className="font-medium underline">
                      {orgData.contact.phone}
                    </a>{" "}
                    or{" "}
                    <a href={`mailto:${orgData.contact.email}`} className="font-medium underline">
                      {orgData.contact.email}
                    </a>{" "}
                    before making any transfer.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-ink dark:text-white mt-8 mb-3">
                External Links
              </h3>
              <p>
                This website contains links to external websites, including our social media
                profiles ({orgData.social.instagram.label}, {orgData.social.twitter.label},{" "}
                {orgData.social.youtube.label}) and our blog ({orgData.social.blog.label}).
              </p>
              <p className="mt-3">
                These external links are provided for convenience and informational purposes only.
                The inclusion of any links does not necessarily imply an endorsement of the views
                expressed within them. {orgData.shortName} has no control over the content of these
                sites and cannot accept responsibility for them.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-ink dark:text-white mt-8 mb-3">
                Photographs and Media
              </h3>
              <p>
                Photographs and media published on this website may depict community events,
                educational programmes, and organizational activities. All identifiable images of
                minors are published only with written consent from parents or legal guardians.
              </p>
              <p className="mt-3">
                If you believe any content on this website infringes on your rights or privacy,
                please contact us immediately and we will address the matter promptly.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-ink dark:text-white mt-8 mb-3">
                Limitation of Liability
              </h3>
              <p>
                In no event will {orgData.shortName} be liable for any loss or damage including
                without limitation, indirect or consequential loss or damage, or any loss or damage
                whatsoever arising from the use of this website or any information contained herein.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-ink dark:text-white mt-8 mb-3">
                Contact
              </h3>
              <p>
                For questions regarding this disclaimer, please contact:
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
