import { useState } from "react";
import { Link } from "react-router-dom";
import { orgData } from "../data/org";
import { BalochiPattern } from "../components/HeritageSVG";
import { GraduationCap, Award, BookOpen, ArrowRight, Users, MapPin, Calendar, Edit3, Check } from "lucide-react";

/**
 * Educational Programs Page
 * 
 * Card grid showcasing SFA's educational initiatives.
 * 
 * IMPORTANT: Per Section 11.10 and editorial policy, no minor's full name,
 * school, or location should be published together without written guardian consent.
 * The "Student of the Week" card has a configurable name field for weekly updates.
 * No "Get Involved" link on the Student of the Week card.
 */
export function Programs() {
  // Student of the Week — name can be changed each week
  // In production, this would come from a CMS or API endpoint.
  // For now, it's a local state that demonstrates the editable concept.
  const [studentName, setStudentName] = useState("Student Name");
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(studentName);

  const handleSaveName = () => {
    if (editValue.trim().length > 0) {
      setStudentName(editValue.trim());
    }
    setIsEditing(false);
  };

  return (
    <>
      {/* Page Header */}
      <section
        aria-labelledby="page-heading"
        className="bg-gradient-to-br from-primary to-primary-dark text-cream-light py-12 md:py-16 relative overflow-hidden"
      >
        <div className="absolute bottom-0 left-0 right-0 text-cream-light" aria-hidden="true">
          <BalochiPattern className="w-full h-6 opacity-20" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-sm text-cream/70">
              <li><Link to="/" className="hover:text-cream-light transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-cream-light" aria-current="page">Educational Programs</li>
            </ol>
          </nav>
          <h1 id="page-heading" className="text-3xl md:text-4xl font-bold">
            Educational Programs
          </h1>
          <p className="mt-3 text-cream/80 text-lg max-w-2xl">
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
            <article className="bg-cream-light dark:bg-dark-bg rounded-xl border border-border dark:border-dark-border overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-gradient-to-br from-primary to-primary-dark p-8 text-cream-light">
                <div className="w-14 h-14 rounded-xl bg-cream-light/10 flex items-center justify-center mb-4">
                  <GraduationCap size={28} aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{orgData.flagship.name}</h3>
                <p className="text-cream/80 flex items-center gap-2">
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
                    <span className="text-ink dark:text-cream-light">Quality education for local children</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Users className="text-primary" size={16} aria-hidden="true" />
                    </div>
                    <span className="text-ink dark:text-cream-light">Community-driven approach</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="text-primary" size={16} aria-hidden="true" />
                    </div>
                    <span className="text-ink dark:text-cream-light">Located in {orgData.flagship.location}</span>
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
            <article className="bg-cream-light dark:bg-dark-bg rounded-xl border border-border dark:border-dark-border overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-gradient-to-br from-accent to-accent-dark p-8 text-cream-light">
                <div className="w-14 h-14 rounded-xl bg-cream-light/10 flex items-center justify-center mb-4">
                  <Award size={28} aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{orgData.recurringProgramme}</h3>
                <p className="text-cream/80 flex items-center gap-2">
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

                {/* Student Spotlight — editable name */}
                <div className="bg-subtle dark:bg-dark-surface rounded-lg p-4 mb-6 border border-border dark:border-dark-border">
                  <p className="text-xs text-muted dark:text-dark-muted mb-3 italic">
                    {/* 
                      PLACEHOLDER: Student of the Week spotlight card.
                      The name below can be changed weekly by an authorized editor.
                      Per editorial policy, no minor's full name, school, or location
                      may be published together without written guardian consent.
                    */}
                    This week&apos;s recognized student:
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                      <Award className="text-accent" size={20} aria-hidden="true" />
                    </div>
                    <div className="flex-1 min-w-0">
                      {isEditing ? (
                        <div className="flex items-center gap-2">
                          <input
                            type="text"
                            value={editValue}
                            onChange={(e) => setEditValue(e.target.value)}
                            className="flex-1 px-3 py-1.5 text-sm rounded border border-border dark:border-dark-border bg-cream-light dark:bg-dark-bg text-ink dark:text-cream-light"
                            placeholder="Enter student name"
                            aria-label="Student name"
                            maxLength={80}
                          />
                          <button
                            onClick={handleSaveName}
                            className="p-1.5 rounded bg-teal text-cream-light hover:bg-teal-dark transition-colors"
                            aria-label="Save student name"
                          >
                            <Check size={16} />
                          </button>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <p className="font-semibold text-ink dark:text-cream-light text-sm truncate">
                            {studentName}
                          </p>
                          <button
                            onClick={() => {
                              setEditValue(studentName);
                              setIsEditing(true);
                            }}
                            className="p-1 rounded text-muted dark:text-dark-muted hover:text-primary dark:hover:text-accent-light hover:bg-primary/10 transition-colors"
                            aria-label="Edit student name"
                            title="Change student name for this week"
                          >
                            <Edit3 size={14} />
                          </button>
                        </div>
                      )}
                      <p className="text-xs text-muted dark:text-dark-muted">
                        Recognized for academic excellence
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                      <Award className="text-accent" size={16} aria-hidden="true" />
                    </div>
                    <span className="text-ink dark:text-cream-light">Weekly student recognition</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                      <Users className="text-accent" size={16} aria-hidden="true" />
                    </div>
                    <span className="text-ink dark:text-cream-light">Motivating learners across the community</span>
                  </div>
                </div>
                {/* No "Get Involved" link on Student of the Week card — per spec */}
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Community Engagement Section */}
      <section aria-labelledby="engagement-heading" className="py-16 md:py-20 bg-subtle dark:bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="engagement-heading" className="text-2xl md:text-3xl font-bold text-ink dark:text-cream-light mb-4">
              Community Engagement
            </h2>
            <p className="text-muted dark:text-dark-muted max-w-2xl mx-auto">
              Beyond our formal programmes, SFA actively engages with the community through
              visits, official meetings, and collaborative initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-cream-light dark:bg-dark-bg rounded-xl p-6 border border-border dark:border-dark-border">
              <Users className="text-primary mb-4" size={28} aria-hidden="true" />
              <h3 className="font-bold text-ink dark:text-cream-light mb-2">Community Visits</h3>
              <p className="text-sm text-muted dark:text-dark-muted">
                Regular visits to local communities to understand needs, build relationships,
                and identify areas where educational support is most needed.
              </p>
            </div>

            <div className="bg-cream-light dark:bg-dark-bg rounded-xl p-6 border border-border dark:border-dark-border">
              <BookOpen className="text-accent mb-4" size={28} aria-hidden="true" />
              <h3 className="font-bold text-ink dark:text-cream-light mb-2">Official Engagements</h3>
              <p className="text-sm text-muted dark:text-dark-muted">
                Collaboration with government officials, including engagements at our central
                office with representatives such as the Assistant Commissioner.
              </p>
            </div>

            <div className="bg-cream-light dark:bg-dark-bg rounded-xl p-6 border border-border dark:border-dark-border">
              <GraduationCap className="text-accent mb-4" size={28} aria-hidden="true" />
              <h3 className="font-bold text-ink dark:text-cream-light mb-2">Student Support</h3>
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
          <h2 id="cta-heading" className="text-2xl md:text-3xl font-bold text-ink dark:text-cream-light mb-4">
            Support Our Educational Programs
          </h2>
          <p className="text-muted dark:text-dark-muted text-lg mb-8">
            Your involvement can help us reach more students and expand our impact across Balochistan.
          </p>
          <Link
            to="/get-involved"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-cream-light font-semibold rounded-lg hover:bg-primary-dark transition-colors"
          >
            Get Involved
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
