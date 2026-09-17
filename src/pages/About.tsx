import { Link } from "react-router-dom";
import { orgData } from "../data/org";
import { BalochiPattern } from "../components/HeritageSVG";
import { Target, Eye, ArrowRight, Award, Users, BookOpen, Heart } from "lucide-react";

/**
 * About Us Page
 */
export function About() {
  return (
    <>
      {/* Page Header */}
      <section
        aria-labelledby="page-heading"
        className="bg-gradient-to-br from-primary to-primary-dark text-cream-light py-12 md:py-16 relative overflow-hidden"
      >
        <div className="absolute bottom-0 left-0 right-0 text-accent-light" aria-hidden="true">
          <BalochiPattern className="w-full h-6 opacity-30" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-sm text-cream/70">
              <li><Link to="/" className="hover:text-cream-light transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-cream-light" aria-current="page">About Us</li>
            </ol>
          </nav>
          <h1 id="page-heading" className="text-3xl md:text-4xl font-bold">
            About Us
          </h1>
          <p className="mt-3 text-cream/80 text-lg max-w-2xl">
            Learn about our history, mission, and the communities we serve.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section aria-labelledby="overview-heading" className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 id="overview-heading" className="text-2xl md:text-3xl font-bold text-ink dark:text-cream-light mb-6">
              Who We Are
            </h2>
            <div className="prose text-muted dark:text-dark-muted space-y-4 text-lg leading-relaxed">
              <p>
                <strong className="text-ink dark:text-cream-light">{orgData.legalName}</strong> ({orgData.shortName}) is a{" "}
                {orgData.type.toLowerCase()}. We were founded on{" "}
                <time dateTime={orgData.founded} className="font-semibold text-ink dark:text-cream-light">
                  {orgData.foundedDisplay}
                </time>{" "}
                and are headquartered in {orgData.headOffice.full}.
              </p>
              <p>
                Our mission is {orgData.mission.toLowerCase()}. We believe that education is the
                most powerful tool for transforming communities, and we work to ensure that every
                child in our region has the opportunity to learn and grow.
              </p>
              <p>
                Through our flagship initiative, {orgData.flagship.full}, and our community-driven
                programmes, we have been making a meaningful impact in the lives of students and
                families across Balochistan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section aria-labelledby="vm-heading" className="py-16 md:py-20 bg-subtle dark:bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="vm-heading" className="sr-only">Vision and Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-cream-light dark:bg-dark-bg rounded-xl p-8 border border-border dark:border-dark-border">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Eye className="text-primary" size={28} aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-ink dark:text-cream-light mb-4">Our Vision</h3>
              <p className="text-muted dark:text-dark-muted leading-relaxed">
                A future where every child in Balochistan has access to quality education,
                regardless of their background or circumstances. We envision empowered communities
                where literacy and learning are the foundation for a better tomorrow.
              </p>
            </div>

            <div className="bg-cream-light dark:bg-dark-bg rounded-xl p-8 border border-border dark:border-dark-border">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <Target className="text-accent" size={28} aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-ink dark:text-cream-light mb-4">Our Mission</h3>
              <p className="text-muted dark:text-dark-muted leading-relaxed">
                {orgData.mission}. We achieve this through direct educational programmes, community
                engagement, recognition events that motivate students, and partnerships with local
                stakeholders who share our commitment to youth empowerment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Highlights */}
      <section aria-labelledby="impact-heading" className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="impact-heading" className="text-2xl md:text-3xl font-bold text-ink dark:text-cream-light mb-4">
              Impact Highlights
            </h2>
            <p className="text-muted dark:text-dark-muted max-w-2xl mx-auto">
              Key milestones and activities that define our work in the community.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-cream-light dark:bg-dark-bg rounded-xl border border-border dark:border-dark-border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="text-primary" size={24} aria-hidden="true" />
              </div>
              <h3 className="font-bold text-ink dark:text-cream-light mb-2">
                {orgData.flagship.name}
              </h3>
              <p className="text-sm text-muted dark:text-dark-muted">
                Our flagship educational initiative in {orgData.flagship.location}
              </p>
            </div>

            <div className="text-center p-6 bg-cream-light dark:bg-dark-bg rounded-xl border border-border dark:border-dark-border">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Award className="text-accent" size={24} aria-hidden="true" />
              </div>
              <h3 className="font-bold text-ink dark:text-cream-light mb-2">
                {orgData.recurringProgramme}
              </h3>
              <p className="text-sm text-muted dark:text-dark-muted">
                Recognizing outstanding student achievement regularly
              </p>
            </div>

            <div className="text-center p-6 bg-cream-light dark:bg-dark-bg rounded-xl border border-border dark:border-dark-border">
              <div className="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center mx-auto mb-4">
                <Users className="text-teal" size={24} aria-hidden="true" />
              </div>
              <h3 className="font-bold text-ink dark:text-cream-light mb-2">
                Community Visits
              </h3>
              <p className="text-sm text-muted dark:text-dark-muted">
                Regular engagement with local communities and families
              </p>
            </div>

            <div className="text-center p-6 bg-cream-light dark:bg-dark-bg rounded-xl border border-border dark:border-dark-border">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <Heart className="text-secondary" size={24} aria-hidden="true" />
              </div>
              <h3 className="font-bold text-ink dark:text-cream-light mb-2">
                Official Engagements
              </h3>
              <p className="text-sm text-muted dark:text-dark-muted">
                Collaboration with government officials and community leaders
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founding Date Callout */}
      <section aria-labelledby="founding-heading" className="py-16 md:py-20 bg-subtle dark:bg-dark-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-cream-light dark:bg-dark-bg rounded-2xl p-8 md:p-12 border border-border dark:border-dark-border shadow-sm">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Award className="text-primary" size={32} aria-hidden="true" />
            </div>
            <h2 id="founding-heading" className="text-2xl font-bold text-ink dark:text-cream-light mb-4">
              Established with Purpose
            </h2>
            <p className="text-muted dark:text-dark-muted text-lg leading-relaxed mb-4">
              {orgData.legalName} was officially established on{" "}
              <time dateTime={orgData.founded} className="font-bold text-ink dark:text-cream-light">
                {orgData.foundedDisplay}
              </time>
              , with a clear commitment to expanding educational access in Turbat and the wider
              Balochistan region.
            </p>
            <p className="text-muted dark:text-dark-muted">
              From our central office in {orgData.headOffice.city}, we continue to grow and serve
              the community with the same dedication that inspired our founding.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section aria-labelledby="cta-heading" className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="cta-heading" className="text-2xl md:text-3xl font-bold text-ink dark:text-cream-light mb-4">
            Want to Learn More or Get Involved?
          </h2>
          <p className="text-muted dark:text-dark-muted text-lg mb-8">
            We welcome volunteers, partners, and supporters who share our vision for education in Balochistan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/programs"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-cream-light font-semibold rounded-lg hover:bg-primary-dark transition-colors"
            >
              View Our Programs
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border-2 border-primary text-primary dark:text-accent-light dark:border-accent-light font-semibold rounded-lg hover:bg-primary/5 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
