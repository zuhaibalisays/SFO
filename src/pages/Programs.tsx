import { Link } from "react-router-dom";
import { orgData } from "../data/org";
import { GraduationCap, Award, BookOpen, ArrowRight, Users, MapPin, Calendar } from "lucide-react";

/**
 * Educational Programs Page
 * 
 * Card grid showcasing SFA's educational initiatives.
 * 
 * IMPORTANT: Per Section 11.10 and editorial policy, no minor's full name,
 * school, or location should be published together without written guardian consent.
 * The "Student of the Week" card uses a placeholder design only.
 */
export function Programs() {
  return (
    <>
      {/* Page Header */}
      <section
        aria-labelledby="page-heading"
        className="bg-gradient-to-br from-accent to-accent-dark text-white py-12 md:py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-sm text-white/70">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white" aria-current="page">Educational Programs</li>
            </ol>
          </nav>
          <h1 id="page-heading" className="text-3xl md:text-4xl font-bold">
            Educational Programs
          </h1>
          <p className="mt-3 text-white/80 text-lg max-w-2xl">
            Discover the initiatives through which we expand educational access and empower
            communities in Balochistan.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section aria-labelledby="programs-heading" className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="programs-heading" className="sr-only">Our Programs</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Zant Academy Card */}
            <article className="bg-white dark:bg-slate-800 rounded-xl border border-border dark:border-dark-border overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-gradient-to-br from-primary to-primary-dark p-8 text-white">
                <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                  <GraduationCap size={28} aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{orgData.flagship.name}</h3>
                <p className="text-white/80 flex items-center gap-2">
                  <MapPin size={16} aria-hidden="true" />
                  {orgData.flagship.location}
                </p>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-muted dark:text-dark-muted leading-relaxed mb-6">
                  {orgData.flagship.name} is our flagship educational initiative, located in{" "}
                  {orgData.flagship.location}. The academy represents our commitment to providing
                  quality education directly within the community it serves, making learning
                  accessible to children who might otherwise face barriers to education.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <BookOpen className="text-primary" size={16} aria-hidden="true" />
                    </div>
                    <span className="text-ink dark:text-white">Quality education for local children</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Users className="text-primary" size={16} aria-hidden="true" />
                    </div>
                    <span className="text-ink dark:text-white">Community-driven approach</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="text-primary" size={16} aria-hidden="true" />
                    </div>
                    <span className="text-ink dark:text-white">Located in {orgData.flagship.location}</span>
                  </div>
                </div>
                <Link
                  to="/contact?subject=educational-support"
                  className="inline-flex items-center gap-2 text-primary dark:text-accent-light font-semibold hover:underline"
                >
                  Learn more or support this program
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </article>

            {/* Student of the Week Card */}
            <article className="bg-white dark:bg-slate-800 rounded-xl border border-border dark:border-dark-border overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-gradient-to-br from-accent to-accent-dark p-8 text-white">
                <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                  <Award size={28} aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{orgData.recurringProgramme}</h3>
                <p className="text-white/80 flex items-center gap-2">
                  <Calendar size={16} aria-hidden="true" />
                  Recurring recognition programme
                </p>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-muted dark:text-dark-muted leading-relaxed mb-6">
                  Our &quot;{orgData.recurringProgramme}&quot; is a recurring recognition programme
                  that celebrates outstanding students who demonstrate exceptional dedication to
                  their studies. This initiative motivates learners across our community and
                  highlights the importance of educational achievement.
                </p>

                {/* Placeholder Student Card - No real student data */}
                <div className="bg-subtle dark:bg-slate-700 rounded-lg p-4 mb-6 border border-border dark:border-dark-border">
                  <p className="text-xs text-muted dark:text-dark-muted mb-3 italic">
                    {/* 
                      PLACEHOLDER: Student of the Week spotlight card.
                      Per editorial policy, no minor's full name, school, or location
                      may be published together without written guardian consent.
                      This is a design placeholder only.
                    */}
                    Student spotlight feature — details updated weekly
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                      <Award className="text-accent" size={20} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-semibold text-ink dark:text-white text-sm">
                        Outstanding Student
                      </p>
                      <p className="text-xs text-muted dark:text-dark-muted">
                        Recognized for academic excellence
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                      <Award className="text-accent" size={16} aria-hidden="true" />
                    </div>
                    <span className="text-ink dark:text-white">Weekly student recognition</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                      <Users className="text-accent" size={16} aria-hidden="true" />
                    </div>
                    <span className="text-ink dark:text-white">Motivating learners across the community</span>
                  </div>
                </div>
                <Link
                  to="/contact?subject=general"
                  className="inline-flex items-center gap-2 text-accent dark:text-accent-light font-semibold hover:underline"
                >
                  Get involved with this programme
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Community Engagement Section */}
      <section aria-labelledby="engagement-heading" className="py-16 md:py-20 bg-subtle dark:bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="engagement-heading" className="text-2xl md:text-3xl font-bold text-ink dark:text-white mb-4">
              Community Engagement
            </h2>
            <p className="text-muted dark:text-dark-muted max-w-2xl mx-auto">
              Beyond our formal programmes, SFA actively engages with the community through
              visits, official meetings, and collaborative initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-border dark:border-dark-border">
              <Users className="text-primary dark:text-accent-light mb-4" size={28} aria-hidden="true" />
              <h3 className="font-bold text-ink dark:text-white mb-2">Community Visits</h3>
              <p className="text-sm text-muted dark:text-dark-muted">
                Regular visits to local communities to understand needs, build relationships,
                and identify areas where educational support is most needed.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-border dark:border-dark-border">
              <BookOpen className="text-primary dark:text-accent-light mb-4" size={28} aria-hidden="true" />
              <h3 className="font-bold text-ink dark:text-white mb-2">Official Engagements</h3>
              <p className="text-sm text-muted dark:text-dark-muted">
                Collaboration with government officials, including engagements at our central
                office with representatives such as the Assistant Commissioner.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-border dark:border-dark-border">
              <GraduationCap className="text-primary dark:text-accent-light mb-4" size={28} aria-hidden="true" />
              <h3 className="font-bold text-ink dark:text-white mb-2">Student Support</h3>
              <p className="text-sm text-muted dark:text-dark-muted">
                Providing direct support to students through educational resources, mentorship,
                and recognition programmes that encourage academic excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section aria-labelledby="cta-heading" className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="cta-heading" className="text-2xl md:text-3xl font-bold text-ink dark:text-white mb-4">
            Support Our Educational Programs
          </h2>
          <p className="text-muted dark:text-dark-muted text-lg mb-8">
            Your involvement can help us reach more students and expand our impact across Balochistan.
          </p>
          <Link
            to="/get-involved"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
          >
            Get Involved
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
