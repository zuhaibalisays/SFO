import { Link } from "react-router-dom";
import { orgData } from "../data/org";
import { BalochiPattern } from "../components/HeritageSVG";
import {
  GraduationCap,
  Users,
  Heart,
  BookOpen,
  ArrowRight,
  Calendar,
  MapPin,
  Star,
} from "lucide-react";

/**
 * Home Page
 * 
 * Hero section with mission statement, highlight cards,
 * and CTAs to key pages. Heritage SVG used subtly.
 */
export function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        aria-labelledby="hero-heading"
        className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-brown-dark text-cream-light"
      >
        {/* Heritage camel image — Balochistan desert */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none" aria-hidden="true">
          <img
            src="https://image.qwenlm.ai/generated-images/cffee85b-3a82-4901-960d-1dffbfa5a274/_result.png"
            alt=""
            className="w-full h-auto object-cover object-bottom opacity-30 mix-blend-overlay"
            width="1200"
            height="600"
            loading="lazy"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 bg-cream-light/10 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in">
              <Calendar size={16} aria-hidden="true" />
              Active since <time dateTime={orgData.founded}>{orgData.foundedDisplay}</time>
            </p>
            <h1
              id="hero-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 animate-slide-up"
            >
              {orgData.heroHeadline}
            </h1>
            <p className="text-lg md:text-xl text-cream/90 leading-relaxed mb-8 max-w-2xl animate-slide-up" style={{ animationDelay: "0.1s" }}>
              {orgData.heroSubheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-accent text-cream-light font-semibold rounded-lg hover:bg-accent-dark transition-colors text-base"
              >
                Learn More About Our Mission
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-cream-light/10 backdrop-blur-sm text-cream-light font-semibold rounded-lg border border-cream-light/20 hover:bg-cream-light/20 transition-colors text-base"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Balochi pattern border at bottom */}
        <div className="absolute bottom-0 left-0 right-0 text-accent-light" aria-hidden="true">
          <BalochiPattern className="w-full h-6 opacity-40" />
        </div>
      </section>

      {/* Highlight Cards */}
      <section aria-labelledby="highlights-heading" className="py-16 md:py-20 bg-subtle dark:bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="highlights-heading" className="text-2xl md:text-3xl font-bold text-ink dark:text-cream-light mb-4">
              Our Impact in the Community
            </h2>
            <p className="text-muted dark:text-dark-muted max-w-2xl mx-auto">
              Since our founding, we have been committed to making a tangible difference in
              education and community development across Balochistan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1: Founded */}
            <div className="bg-cream-light dark:bg-dark-bg rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow border border-border dark:border-dark-border">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Calendar className="text-primary" size={24} aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-ink dark:text-cream-light mb-2">
                Active Since October 2020
              </h3>
              <p className="text-muted dark:text-dark-muted text-sm leading-relaxed">
                Founded on <time dateTime={orgData.founded}>{orgData.foundedDisplay}</time>, SFA
                has been serving the communities of Turbat and surrounding areas with dedication
                and commitment to educational access.
              </p>
            </div>

            {/* Card 2: Zant Academy */}
            <div className="bg-cream-light dark:bg-dark-bg rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow border border-border dark:border-dark-border">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <GraduationCap className="text-accent" size={24} aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-ink dark:text-cream-light mb-2">
                Community-Driven Educational Programmes
              </h3>
              <p className="text-muted dark:text-dark-muted text-sm leading-relaxed">
                Including {orgData.flagship.full}, our programmes are designed with and for the
                community, ensuring that education reaches every child who needs it.
              </p>
            </div>

            {/* Card 3: Youth Empowerment */}
            <div className="bg-cream-light dark:bg-dark-bg rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow border border-border dark:border-dark-border">
              <div className="w-12 h-12 rounded-lg bg-teal/10 flex items-center justify-center mb-4">
                <Heart className="text-teal" size={24} aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-ink dark:text-cream-light mb-2">
                Dedicated to Youth Empowerment &amp; Literacy
              </h3>
              <p className="text-muted dark:text-dark-muted text-sm leading-relaxed">
                Through our &quot;{orgData.recurringProgramme}&quot; recognition programme and
                community engagement, we celebrate and support the next generation of learners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section aria-labelledby="mission-heading" className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 id="mission-heading" className="text-2xl md:text-3xl font-bold text-ink dark:text-cream-light mb-6">
                Our Mission
              </h2>
              <p className="text-muted dark:text-dark-muted text-lg leading-relaxed mb-6">
                {orgData.mission}. We believe that every child in Balochistan deserves access to
                quality education, and we work tirelessly to make that a reality through
                community-driven programmes and partnerships.
              </p>
              <div className="space-y-3">
                {orgData.focusThemes.map((theme) => (
                  <div key={theme} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent shrink-0" aria-hidden="true" />
                    <span className="text-ink dark:text-cream-light font-medium">{theme}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 mt-8 text-primary dark:text-accent-light font-semibold hover:underline"
              >
                Read more about our story
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>

            <div className="bg-gradient-to-br from-cream to-cream-light dark:from-dark-surface dark:to-dark-bg rounded-2xl p-8 md:p-10 border border-border dark:border-dark-border relative overflow-hidden">
              {/* Subtle camel image decoration */}
              <div className="absolute -bottom-4 -right-4 opacity-15 pointer-events-none" aria-hidden="true">
                <img
                  src="https://image.qwenlm.ai/generated-images/cffee85b-3a82-4901-960d-1dffbfa5a274/_result.png"
                  alt=""
                  className="w-40 h-40 object-cover rounded-full"
                  width="160"
                  height="160"
                  loading="lazy"
                />
              </div>

              <div className="space-y-6 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="text-primary" size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-ink dark:text-cream-light">Based in Turbat</h4>
                    <p className="text-sm text-muted dark:text-dark-muted">
                      Central Office, Turbat, Kech, Balochistan
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <Users className="text-accent" size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-ink dark:text-cream-light">Community-First Approach</h4>
                    <p className="text-sm text-muted dark:text-dark-muted">
                      Programmes designed with and for local communities
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center shrink-0">
                    <Star className="text-teal" size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-ink dark:text-cream-light">Recognizing Excellence</h4>
                    <p className="text-sm text-muted dark:text-dark-muted">
                      &quot;{orgData.recurringProgramme}&quot; programme celebrates outstanding students
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                    <BookOpen className="text-secondary" size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-ink dark:text-cream-light">{orgData.flagship.full}</h4>
                    <p className="text-sm text-muted dark:text-dark-muted">
                      Our flagship educational initiative
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section aria-labelledby="cta-heading" className="py-16 md:py-20 bg-primary dark:bg-dark-surface text-cream-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="cta-heading" className="text-2xl md:text-3xl font-bold mb-4">
            Join Us in Making a Difference
          </h2>
          <p className="text-cream/80 text-lg mb-8 max-w-2xl mx-auto">
            Whether you want to volunteer, partner with us, or support our educational programmes,
            there are many ways to get involved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/get-involved"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-accent text-cream-light font-semibold rounded-lg hover:bg-accent-dark transition-colors"
            >
              Get Involved
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link
              to="/programs"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-cream-light/10 text-cream-light font-semibold rounded-lg border border-cream-light/20 hover:bg-cream-light/20 transition-colors"
            >
              View Our Programs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
