import { Link } from "react-router-dom";
import { orgData } from "../data/org";
import { FileText } from "lucide-react";

/**
 * Terms and Conditions Page
 * 
 * Extended with acceptable use, governing law, and change notification.
 * Must be a crawlable URL for AdSense and Google Search compliance.
 */
export function Terms() {
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
              <li className="text-white" aria-current="page">Terms and Conditions</li>
            </ol>
          </nav>
          <h1 id="page-heading" className="text-3xl md:text-4xl font-bold">
            Terms and Conditions
          </h1>
          <p className="mt-3 text-white/80 text-lg">
            Last updated: January 2025
          </p>
        </div>
      </section>

      <section aria-labelledby="terms-content-heading" className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="terms-content-heading" className="sr-only">Terms and Conditions Content</h2>
          <div className="prose text-muted dark:text-dark-muted space-y-6 leading-relaxed">
            <div className="flex items-start gap-3 p-4 bg-subtle dark:bg-dark-surface rounded-lg">
              <FileText className="text-primary dark:text-accent-light shrink-0 mt-1" size={20} aria-hidden="true" />
              <p className="text-sm">
                By accessing and using the website of {orgData.legalName} ({orgData.shortName}),
                you accept and agree to be bound by these Terms and Conditions.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-ink dark:text-white mt-8 mb-3">
                1. Intellectual Property
              </h3>
              <p>
                All content, photos, materials, and resources published on this website belong to{" "}
                {orgData.legalName}. This includes but is not limited to text, graphics, logos,
                images, audio clips, video clips, digital downloads, data compilations, and software.
              </p>
              <p className="mt-3">
                Content may not be reproduced, distributed, transmitted, cached, stored, or
                otherwise used without prior written consent from {orgData.shortName}. Limited
                sharing for non-commercial, educational purposes with proper attribution may be
                permitted upon request.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-ink dark:text-white mt-8 mb-3">
                2. Acceptable Use
              </h3>
              <p>
                When using this website and its contact form, you agree to:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Provide accurate and truthful information</li>
                <li>Use the website only for lawful purposes</li>
                <li>Not attempt to gain unauthorized access to any part of the website or its systems</li>
                <li>Not use the contact form to send spam, malicious content, or misleading information</li>
                <li>Not impersonate any person or entity, or falsely state your affiliation with any person or entity</li>
                <li>Not interfere with or disrupt the website or servers</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-ink dark:text-white mt-8 mb-3">
                3. Third-Party Links
              </h3>
              <p>
                Our website may contain links to third-party websites, including social media
                platforms, our blog on Blogspot, and other external resources. These links are
                provided for your convenience and do not signify endorsement of the content on
                those sites.
              </p>
              <p className="mt-3">
                {orgData.shortName} has no control over and assumes no responsibility for the
                content, privacy policies, or practices of any third-party sites or services. We
                provide no warranty regarding the accuracy or reliability of any information or
                materials found on third-party websites.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-ink dark:text-white mt-8 mb-3">
                4. Disclaimer of Warranties
              </h3>
              <p>
                This website is provided on an &quot;as is&quot; and &quot;as available&quot; basis.{" "}
                {orgData.shortName} makes no warranties, expressed or implied, regarding the
                operation of this website or the information, content, materials, or services
                included on it.
              </p>
              <p className="mt-3">
                We do not warrant that the website will be uninterrupted, error-free, or free of
                viruses or other harmful components. Your use of the website is at your sole risk.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-ink dark:text-white mt-8 mb-3">
                5. Limitation of Liability
              </h3>
              <p>
                To the fullest extent permitted by applicable law, {orgData.shortName} shall not be
                liable for any direct, indirect, incidental, special, consequential, or exemplary
                damages resulting from your use of or inability to use the website.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-ink dark:text-white mt-8 mb-3">
                6. Governing Law
              </h3>
              <p>
                These Terms and Conditions shall be governed by and construed in accordance with
                the laws of the Islamic Republic of Pakistan. Any disputes arising from or relating
                to these terms shall be subject to the exclusive jurisdiction of the courts located
                in Balochistan, Pakistan.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-ink dark:text-white mt-8 mb-3">
                7. Changes to These Terms
              </h3>
              <p>
                {orgData.shortName} reserves the right to modify these Terms and Conditions at any
                time. Changes will be effective immediately upon posting to this page. The
                &quot;Last updated&quot; date at the top of this page indicates when these terms were
                last revised.
              </p>
              <p className="mt-3">
                Your continued use of the website following the posting of changes constitutes your
                acceptance of those changes. We encourage you to review these terms periodically.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-ink dark:text-white mt-8 mb-3">
                8. Contact Information
              </h3>
              <p>
                If you have any questions about these Terms and Conditions, please contact us:
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
