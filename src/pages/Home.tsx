import { Link } from "react-router-dom";
import { orgData } from "../data/org";
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
 * and CTAs to key pages.
 */
export function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        aria-labelledby="hero-heading"
        className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-accent text-white"
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in">
              <Calendar size={16} aria-hidden="true" />
              Active since <time dateTime={orgData.founded}>{orgData.foundedDisplay}</time>
            </p>
            <h1
              id="hero-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 animate-slide-up"
            >
              {orgData.heroHeadline}
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 max-w-2xl animate-slide-up" style={{ animationDelay: "0.1s" }}>
              {orgData.heroSubheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-primary font-semibold rounded-lg hover:bg-subtle transition-colors text-base"
              >
                Learn More About Our Mission
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-colors text-base"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Highlight Cards */}
      <section aria-labelledby="highlights-heading" className="py-16 md:py-20 bg-subtle dark:bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="highlights-heading" className="text-2xl md:text-3xl font-bold text-ink dark:text-white mb-4">
              Our Impact in the Community
            </h2>
            <p className="text-muted dark:text-dark-muted max-w-2xl mx-auto">
              Since our founding, we have been committed to making a tangible difference in
              education and community development across Balochistan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1: Founded */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow border border-border dark:border-dark-border">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Calendar className="text-primary dark:text-accent-light" size={24} aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-ink dark:text-white mb-2">
                Active Since October 2020
              </h3>
              <p className="text-muted dark:text-dark-muted text-sm leading-relaxed">
                Founded on <time dateTime={orgData.founded}>{orgData.foundedDisplay}</time>, SFA
                has been serving the communities of Turbat and surrounding areas with dedication
                and commitment to educational access.
              </p>
            </div>

            {/* Card 2: Zant Academy */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow border border-border dark:border-dark-border">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <GraduationCap className="text-accent dark:text-accent-light" size={24} aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-ink dark:text-white mb-2">
                Community-Driven Educational Programmes
              </h3>
              <p className="text-muted dark:text-dark-muted text-sm leading-relaxed">
                Including {orgData.flagship.full}, our programmes are designed with and for the
                community, ensuring that education reaches every child who needs it.
              </p>
            </div>

            {/* Card 3: Youth Empowerment */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow border border-border dark:border-dark-border">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Heart className="text-primary dark:text-accent-light" size={24} aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-ink dark:text-white mb-2">
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
              <h2 id="mission-heading" className="text-2xl md:text-3xl font-bold text-ink dark:text-white mb-6">
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
                    <span className="text-ink dark:text-white font-medium">{theme}</span>
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

            <div className="bg-gradient-to-br from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10 rounded-2xl p-8 md:p-10 border border-border dark:border-dark-border">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="text-primary" size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-ink dark:text-white">Based in Turbat</h4>
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
                    <h4 className="font-semibold text-ink dark:text-white">Community-First Approach</h4>
                    <p className="text-sm text-muted dark:text-dark-muted">
                      Programmes designed with and for local communities
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Star className="text-primary" size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-ink dark:text-white">Recognizing Excellence</h4>
                    <p className="text-sm text-muted dark:text-dark-muted">
                      &quot;{orgData.recurringProgramme}&quot; programme celebrates outstanding students
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <BookOpen className="text-accent" size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-ink dark:text-white">{orgData.flagship.full}</h4>
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
      <section aria-labelledby="cta-heading" className="py-16 md:py-20 bg-primary dark:bg-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="cta-heading" className="text-2xl md:text-3xl font-bold mb-4">
            Join Us in Making a Difference
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Whether you want to volunteer, partner with us, or support our educational programmes,
            there are many ways to get involved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/get-involved"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-primary font-semibold rounded-lg hover:bg-subtle transition-colors"
            >
              Get Involved
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link
              to="/programs"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-colors"
            >
              View Our Programs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
