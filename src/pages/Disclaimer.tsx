import { Link } from "react-router-dom";
import { orgData } from "../data/org";
import { AlertTriangle, Shield } from "lucide-react";

export function Disclaimer() {
  return (
    <>
      <section aria-labelledby="page-heading" className="bg-gradient-to-br from-primary to-primary-dark text-cream-light py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-sm text-cream/70">
              <li><Link to="/" className="hover:text-cream-light transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-cream-light" aria-current="page">Disclaimer</li>
            </ol>
          </nav>
          <h1 id="page-heading" className="text-3xl md:text-4xl font-bold">Disclaimer</h1>
          <p className="mt-3 text-cream/80 text-lg">Last updated: January 2025</p>
        </div>
      </section>

      <section aria-labelledby="disclaimer-content-heading" className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="disclaimer-content-heading" className="sr-only">Disclaimer Content</h2>
          <div className="prose text-muted dark:text-dark-muted space-y-6 leading-relaxed">
            <div className="flex items-start gap-3 p-4 bg-subtle dark:bg-dark-surface rounded-lg">
              <AlertTriangle className="text-primary shrink-0 mt-1" size={20} aria-hidden="true" />
              <p className="text-sm">{orgData.legalName} ({orgData.shortName}) is an independent non-profit organization registered in Pakistan. All community updates and articles represent official organizational updates.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-ink dark:text-cream-light mt-8 mb-3">General Information</h3>
              <p>The information on this website is for general informational purposes only. We make no warranties about the completeness, accuracy, or reliability of the content.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-ink dark:text-cream-light mt-8 mb-3">Organizational Status</h3>
              <p>{orgData.shortName} is a welfare organization focused on educational access in Balochistan, Pakistan. Our programmes, including {orgData.flagship.full}, are community-driven initiatives.</p>
            </div>

            {/* Anti-Fraud Notice */}
            <div className="p-6 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg">
              <div className="flex items-start gap-3">
                <Shield className="text-amber-700 dark:text-amber-400 shrink-0 mt-1" size={20} aria-hidden="true" />
                <div>
                  <h3 className="text-lg font-bold text-amber-900 dark:text-amber-200 mb-2">Anti-Fraud Notice</h3>
                  <p className="text-amber-800 dark:text-amber-300 text-sm leading-relaxed">
                    {orgData.legalName} ({orgData.shortName}) <strong>never</strong> solicits donations to personal bank accounts via direct message or unofficial channels. We do not collect payment card information through this website.
                  </p>
                  <p className="text-amber-800 dark:text-amber-300 text-sm leading-relaxed mt-2">
                    If anyone claims to represent {orgData.shortName} and requests financial contributions through unofficial means, please verify by contacting us at{" "}
                    <a href={`tel:${orgData.contact.phoneTel}`} className="font-medium underline whitespace-nowrap">{orgData.contact.phoneLocal}</a>{" "}
                    or{" "}
                    <a href={`mailto:${orgData.contact.email}`} className="font-medium underline break-all">{orgData.contact.email}</a>{" "}
                    before making any transfer.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-ink dark:text-cream-light mt-8 mb-3">External Links</h3>
              <p>This website contains links to external websites. These links are provided for convenience only. {orgData.shortName} has no control over external sites and cannot accept responsibility for them. External links are not endorsements.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-ink dark:text-cream-light mt-8 mb-3">Photographs and Media</h3>
              <p>All identifiable images of minors are published only with written consent from parents or legal guardians. If you believe any content infringes on your rights, please contact us.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-ink dark:text-cream-light mt-8 mb-3">Contact</h3>
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
