import { Link } from "react-router-dom";
import { orgData } from "../data/org";
import { FileText } from "lucide-react";

export function Terms() {
  return (
    <>
      <section aria-labelledby="page-heading" className="bg-gradient-to-br from-primary to-primary-dark text-cream-light py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-sm text-cream/70">
              <li><Link to="/" className="hover:text-cream-light transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-cream-light" aria-current="page">Terms and Conditions</li>
            </ol>
          </nav>
          <h1 id="page-heading" className="text-3xl md:text-4xl font-bold">Terms and Conditions</h1>
          <p className="mt-3 text-cream/80 text-lg">Last updated: January 2025</p>
        </div>
      </section>

      <section aria-labelledby="terms-content-heading" className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="terms-content-heading" className="sr-only">Terms and Conditions Content</h2>
          <div className="prose text-muted dark:text-dark-muted space-y-6 leading-relaxed">
            <div className="flex items-start gap-3 p-4 bg-subtle dark:bg-dark-surface rounded-lg">
              <FileText className="text-primary shrink-0 mt-1" size={20} aria-hidden="true" />
              <p className="text-sm">By accessing this website of {orgData.legalName} ({orgData.shortName}), you accept and agree to be bound by these Terms and Conditions.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-ink dark:text-cream-light mt-8 mb-3">1. Intellectual Property</h3>
              <p>All content, photos, and materials on this website belong to {orgData.legalName}. Content may not be reproduced without prior written consent.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-ink dark:text-cream-light mt-8 mb-3">2. Acceptable Use</h3>
              <p>When using this website, you agree to provide accurate information, use it only for lawful purposes, not attempt unauthorized access, not send spam or malicious content, and not interfere with the website.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-ink dark:text-cream-light mt-8 mb-3">3. Third-Party Links</h3>
              <p>Our website may contain links to third-party websites. These are provided for convenience and do not signify endorsement. {orgData.shortName} assumes no responsibility for third-party content.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-ink dark:text-cream-light mt-8 mb-3">4. Disclaimer of Warranties</h3>
              <p>This website is provided &quot;as is&quot;. {orgData.shortName} makes no warranties regarding the operation of this website or its content.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-ink dark:text-cream-light mt-8 mb-3">5. Governing Law</h3>
              <p>These terms are governed by the laws of the Islamic Republic of Pakistan. Disputes are subject to courts in Balochistan, Pakistan.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-ink dark:text-cream-light mt-8 mb-3">6. Changes to These Terms</h3>
              <p>{orgData.shortName} reserves the right to modify these terms at any time. Changes are effective upon posting.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-ink dark:text-cream-light mt-8 mb-3">7. Contact</h3>
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
