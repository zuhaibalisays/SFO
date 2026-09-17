import { Link } from "react-router-dom";
import { orgData } from "../data/org";
import { Heart, Building2, HeartHandshake, ArrowRight, Shield } from "lucide-react";

/**
 * Get Involved Page
 * 
 * Three routes: Volunteer, Partner, Support.
 * Each links to the contact form with the Subject dropdown pre-selected.
 * 
 * IMPORTANT: Per Section 11.9, no payment form or card collection is built.
 * No bank details form is included.
 */
export function GetInvolved() {
  return (
    <>
      {/* Page Header */}
      <section
        aria-labelledby="page-heading"
        className="bg-gradient-to-br from-primary to-accent text-cream-light py-12 md:py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-sm text-cream/70">
              <li><Link to="/" className="hover:text-cream-light transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-cream-light" aria-current="page">Get Involved</li>
            </ol>
          </nav>
          <h1 id="page-heading" className="text-3xl md:text-4xl font-bold">
            Get Involved
          </h1>
          <p className="mt-3 text-cream/80 text-lg max-w-2xl">
            There are many ways to support our mission of expanding educational access in
            Balochistan. Choose how you&apos;d like to contribute.
          </p>
        </div>
      </section>

      {/* Three Routes */}
      <section aria-labelledby="routes-heading" className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="routes-heading" className="sr-only">Ways to Get Involved</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Volunteer */}
            <div className="bg-cream-light dark:bg-dark-bg rounded-xl p-8 border border-border dark:border-dark-border shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Heart className="text-primary" size={28} aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-ink dark:text-cream-light mb-3">
                Volunteer
              </h3>
              <p className="text-muted dark:text-dark-muted leading-relaxed mb-6">
                Share your time and skills to support our educational programmes. Whether you
                can help with teaching, community outreach, event organization, or administrative
                tasks, your contribution makes a real difference.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-muted dark:text-dark-muted">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" aria-hidden="true" />
                  Teaching and tutoring support
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" aria-hidden="true" />
                  Community outreach and events
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" aria-hidden="true" />
                  Administrative and organizational help
                </li>
              </ul>
              <Link
                to="/contact?subject=volunteer"
                className="inline-flex items-center gap-2 text-primary dark:text-accent-light font-semibold hover:underline"
              >
                Sign up to volunteer
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>

            {/* Partner */}
            <div className="bg-cream-light dark:bg-dark-bg rounded-xl p-8 border border-border dark:border-dark-border shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-xl bg-teal/10 flex items-center justify-center mb-6">
                <Building2 className="text-teal" size={28} aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-ink dark:text-cream-light mb-3">
                Partner With Us
              </h3>
              <p className="text-muted dark:text-dark-muted leading-relaxed mb-6">
                Organizations, businesses, and institutions can partner with SFA to amplify our
                impact. Whether through resource sharing, expertise, or collaborative projects,
                partnerships help us reach more communities.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-muted dark:text-dark-muted">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal shrink-0" aria-hidden="true" />
                  Educational institution partnerships
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal shrink-0" aria-hidden="true" />
                  Corporate social responsibility alignment
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal shrink-0" aria-hidden="true" />
                  Collaborative community projects
                </li>
              </ul>
              <Link
                to="/contact?subject=general"
                className="inline-flex items-center gap-2 text-teal dark:text-teal-light font-semibold hover:underline"
              >
                Discuss a partnership
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>

            {/* Support */}
            <div className="bg-cream-light dark:bg-dark-bg rounded-xl p-8 border border-border dark:border-dark-border shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <HeartHandshake className="text-accent" size={28} aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-ink dark:text-cream-light mb-3">
                Support Our Cause
              </h3>
              <p className="text-muted dark:text-dark-muted leading-relaxed mb-6">
                Your support helps us continue and expand our educational programmes. Whether
                through material contributions, spreading awareness, or connecting us with
                potential supporters, every act of kindness counts.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-muted dark:text-dark-muted">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" aria-hidden="true" />
                  Educational material contributions
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" aria-hidden="true" />
                  Spread awareness in your network
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" aria-hidden="true" />
                  Connect us with supporters
                </li>
              </ul>
              <Link
                to="/contact?subject=donation"
                className="inline-flex items-center gap-2 text-accent dark:text-accent-light font-semibold hover:underline"
              >
                Express your support
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Anti-Fraud Notice — phone number fixed with proper formatting */}
      <section aria-labelledby="notice-heading" className="py-12 md:py-16 bg-subtle dark:bg-dark-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-cream-light dark:bg-dark-bg rounded-xl p-6 md:p-8 border border-border dark:border-dark-border">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                <Shield className="text-accent" size={20} aria-hidden="true" />
              </div>
              <div>
                <h2 id="notice-heading" className="text-lg font-bold text-ink dark:text-cream-light mb-2">
                  Important Safety Notice
                </h2>
                <p className="text-muted dark:text-dark-muted text-sm leading-relaxed">
                  {orgData.legalName} ({orgData.shortName}) never solicits donations to personal
                  bank accounts via direct message or unofficial channels. If you wish to support
                  us financially, please verify all details by contacting us directly at{" "}
                  <a
                    href={`tel:${orgData.contact.phoneTel}`}
                    className="text-primary dark:text-accent-light font-medium hover:underline whitespace-nowrap"
                  >
                    {orgData.contact.phoneLocal}
                  </a>{" "}
                  or{" "}
                  <a
                    href={`mailto:${orgData.contact.email}`}
                    className="text-primary dark:text-accent-light font-medium hover:underline break-all"
                  >
                    {orgData.contact.email}
                  </a>{" "}
                  before making any transfer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section aria-labelledby="contact-cta-heading" className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="contact-cta-heading" className="text-2xl md:text-3xl font-bold text-ink dark:text-cream-light mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-muted dark:text-dark-muted text-lg mb-8">
            Reach out to us and let&apos;s discuss how you can contribute to education in Balochistan.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-cream-light font-semibold rounded-lg hover:bg-primary-dark transition-colors"
          >
            Contact Us Today
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
