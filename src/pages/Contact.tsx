import { useState, useEffect, useRef, useCallback, type FormEvent } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { orgData } from "../data/org";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Twitter,
  Youtube,
  BookOpen,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";

const SUBJECT_OPTIONS = [
  { value: "general", label: "General Inquiry" },
  { value: "volunteer", label: "Volunteer" },
  { value: "donation", label: "Donation / Support" },
  { value: "educational-support", label: "Educational Support" },
] as const;

type SubjectValue = (typeof SUBJECT_OPTIONS)[number]["value"];

function validateName(name: string): string | null {
  if (!name || name.trim().length < 2) return "Name must be at least 2 characters.";
  if (name.trim().length > 80) return "Name must be 80 characters or fewer.";
  if (/[\r\n]/.test(name)) return "Name contains invalid characters.";
  return null;
}

function validateEmail(email: string): string | null {
  if (!email) return "Email is required.";
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return "Please enter a valid email address.";
  if (/[\r\n]/.test(email)) return "Email contains invalid characters.";
  return null;
}

function validatePhone(phone: string): string | null {
  if (!phone) return null;
  const phoneRegex = /^(\+92|0)?[0-9]{10,12}$/;
  const cleaned = phone.replace(/[\s\-()]/g, "");
  if (!phoneRegex.test(cleaned)) return "Please enter a valid phone number.";
  return null;
}

function validateSubject(subject: string): string | null {
  const valid = SUBJECT_OPTIONS.map((o) => o.value);
  if (!valid.includes(subject as SubjectValue)) return "Please select a valid subject.";
  return null;
}

function validateMessage(message: string): string | null {
  if (!message || message.trim().length < 20) return "Message must be at least 20 characters.";
  if (message.trim().length > 2000) return "Message must be 2000 characters or fewer.";
  return null;
}

/**
 * Contact Page
 */
export function Contact() {
  const [searchParams] = useSearchParams();
  const formRef = useRef<HTMLFormElement>(null);
  const renderedAt = useRef(Date.now());

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("general");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const [errors, setErrors] = useState<Record<string, string | null>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  useEffect(() => {
    const subjectParam = searchParams.get("subject");
    if (subjectParam) {
      const valid = SUBJECT_OPTIONS.map((o) => o.value);
      if (valid.includes(subjectParam as SubjectValue)) {
        setSubject(subjectParam);
      }
    }
  }, [searchParams]);

  const validateField = useCallback((field: string, value: string) => {
    let error: string | null = null;
    switch (field) {
      case "name": error = validateName(value); break;
      case "email": error = validateEmail(value); break;
      case "phone": error = validatePhone(value); break;
      case "subject": error = validateSubject(value); break;
      case "message": error = validateMessage(value); break;
    }
    setErrors((prev) => ({ ...prev, [field]: error }));
    return error;
  }, []);

  const handleBlur = (field: string, value: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    validateField(field, value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitError(false);

    const allErrors: Record<string, string | null> = {
      name: validateName(name),
      email: validateEmail(email),
      phone: validatePhone(phone),
      subject: validateSubject(subject),
      message: validateMessage(message),
    };
    setErrors(allErrors);
    setTouched({ name: true, email: true, phone: true, subject: true, message: true });

    const hasErrors = Object.values(allErrors).some((e) => e !== null);
    if (hasErrors) {
      const firstErrorField = Object.entries(allErrors).find(([, err]) => err !== null);
      if (firstErrorField) {
        const el = formRef.current?.querySelector<HTMLElement>(`[name="${firstErrorField[0]}"]`);
        el?.focus();
      }
      return;
    }

    const formAge = Date.now() - renderedAt.current;
    if (formAge < 3000) {
      setSubmitting(true);
      await new Promise((r) => setTimeout(r, 1500));
      setSubmitting(false);
      setSubmitted(true);
      return;
    }

    if (honeypot) {
      setSubmitting(true);
      await new Promise((r) => setTimeout(r, 1500));
      setSubmitting(false);
      setSubmitted(true);
      return;
    }

    setSubmitting(true);
    try {
      await new Promise((r) => setTimeout(r, 1500));
      setSubmitted(true);
    } catch {
      setSubmitError(true);
    } finally {
      setSubmitting(false);
    }
  };

  const messageLength = message.trim().length;

  if (submitted) {
    return (
      <>
        <section
          aria-labelledby="page-heading"
          className="bg-gradient-to-br from-teal to-teal-dark text-cream-light py-12 md:py-16"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 id="page-heading" className="text-3xl md:text-4xl font-bold">Contact Us</h1>
          </div>
        </section>
        <section aria-labelledby="success-heading" className="py-16 md:py-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-cream-light dark:bg-dark-bg rounded-2xl p-8 md:p-12 border border-border dark:border-dark-border shadow-sm">
              <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="text-green-600 dark:text-green-400" size={32} aria-hidden="true" />
              </div>
              <h2 id="success-heading" className="text-2xl font-bold text-ink dark:text-cream-light mb-4">
                Message Sent Successfully!
              </h2>
              <p className="text-muted dark:text-dark-muted leading-relaxed mb-6">
                Thank you for reaching out to {orgData.shortName}. We have received your message
                and will respond as soon as possible. For urgent matters, please call us directly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setName("");
                    setEmail("");
                    setPhone("");
                    setSubject("general");
                    setMessage("");
                    setErrors({});
                    setTouched({});
                  }}
                  className="px-6 py-3 bg-primary text-cream-light font-semibold rounded-lg hover:bg-primary-dark transition-colors"
                >
                  Send Another Message
                </button>
                <Link
                  to="/"
                  className="px-6 py-3 border border-border dark:border-dark-border text-ink dark:text-cream-light font-semibold rounded-lg hover:bg-subtle dark:hover:bg-dark-surface transition-colors"
                >
                  Return Home
                </Link>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      {/* Page Header */}
      <section
        aria-labelledby="page-heading"
        className="bg-gradient-to-br from-teal to-teal-dark text-cream-light py-12 md:py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-sm text-cream/70">
              <li><Link to="/" className="hover:text-cream-light transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-cream-light" aria-current="page">Contact Us</li>
            </ol>
          </nav>
          <h1 id="page-heading" className="text-3xl md:text-4xl font-bold">
            Contact Us
          </h1>
          <p className="mt-3 text-cream/80 text-lg max-w-2xl">
            We&apos;d love to hear from you. Reach out with questions, partnership ideas, or to learn
            more about our work.
          </p>
        </div>
      </section>

      <section aria-labelledby="contact-content-heading" className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="contact-content-heading" className="sr-only">Contact Information and Form</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Info Card */}
            <div className="lg:col-span-1">
              <div className="bg-cream-light dark:bg-dark-bg rounded-xl p-6 md:p-8 border border-border dark:border-dark-border shadow-sm sticky top-24">
                <h3 className="text-lg font-bold text-ink dark:text-cream-light mb-6">
                  Get in Touch
                </h3>

                <address className="not-italic space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="text-primary" size={18} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-medium text-ink dark:text-cream-light text-sm">Address</p>
                      <p className="text-muted dark:text-dark-muted text-sm">
                        {orgData.headOffice.full}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="text-primary" size={18} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-medium text-ink dark:text-cream-light text-sm">Phone</p>
                      <a
                        href={`tel:${orgData.contact.phoneTel}`}
                        className="text-muted dark:text-dark-muted text-sm hover:text-primary dark:hover:text-accent-light transition-colors whitespace-nowrap"
                      >
                        {orgData.contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="text-primary" size={18} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-medium text-ink dark:text-cream-light text-sm">Email</p>
                      <a
                        href={`mailto:${orgData.contact.email}`}
                        className="text-muted dark:text-dark-muted text-sm hover:text-primary dark:hover:text-accent-light transition-colors break-all"
                      >
                        {orgData.contact.email}
                      </a>
                    </div>
                  </div>
                </address>

                {/* Social Links */}
                <div className="mt-8 pt-6 border-t border-border dark:border-dark-border">
                  <p className="font-medium text-ink dark:text-cream-light text-sm mb-3">Follow Us</p>
                  <div className="flex gap-3">
                    <a
                      href={orgData.social.instagram.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-lg bg-subtle dark:bg-dark-surface flex items-center justify-center text-muted dark:text-dark-muted hover:text-primary dark:hover:text-accent-light hover:bg-primary/10 transition-colors"
                      aria-label={`Follow us on ${orgData.social.instagram.label}`}
                    >
                      <Instagram size={18} />
                    </a>
                    <a
                      href={orgData.social.twitter.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-lg bg-subtle dark:bg-dark-surface flex items-center justify-center text-muted dark:text-dark-muted hover:text-primary dark:hover:text-accent-light hover:bg-primary/10 transition-colors"
                      aria-label={`Follow us on ${orgData.social.twitter.label}`}
                    >
                      <Twitter size={18} />
                    </a>
                    <a
                      href={orgData.social.youtube.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-lg bg-subtle dark:bg-dark-surface flex items-center justify-center text-muted dark:text-dark-muted hover:text-primary dark:hover:text-accent-light hover:bg-primary/10 transition-colors"
                      aria-label={`Subscribe on ${orgData.social.youtube.label}`}
                    >
                      <Youtube size={18} />
                    </a>
                    <a
                      href={orgData.social.blog.url}
                      target="_blank"
                      rel="noopener noreferrer me"
                      className="w-9 h-9 rounded-lg bg-subtle dark:bg-dark-surface flex items-center justify-center text-muted dark:text-dark-muted hover:text-primary dark:hover:text-accent-light hover:bg-primary/10 transition-colors"
                      aria-label={`Read our ${orgData.social.blog.label}`}
                    >
                      <BookOpen size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-cream-light dark:bg-dark-bg rounded-xl p-6 md:p-8 border border-border dark:border-dark-border shadow-sm">
                <h3 className="text-lg font-bold text-ink dark:text-cream-light mb-6">
                  Send Us a Message
                </h3>

                {submitError && (
                  <div
                    className="mb-6 p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 flex items-start gap-3"
                    role="alert"
                  >
                    <AlertCircle className="text-red-600 dark:text-red-400 shrink-0 mt-0.5" size={20} aria-hidden="true" />
                    <div>
                      <p className="text-red-800 dark:text-red-200 font-medium text-sm">
                        Something went wrong
                      </p>
                      <p className="text-red-700 dark:text-red-300 text-sm mt-1">
                        Please try again or contact us directly at{" "}
                        <a href={`tel:${orgData.contact.phoneTel}`} className="underline">
                          {orgData.contact.phone}
                        </a>
                      </p>
                    </div>
                  </div>
                )}

                <form
                  ref={formRef}
                  method="POST"
                  action="/api/contact"
                  onSubmit={handleSubmit}
                  noValidate
                  className="space-y-5"
                >
                  {/* Honeypot */}
                  <div className="honeypot-field" aria-hidden="true">
                    <label htmlFor="company_website">Company Website</label>
                    <input
                      type="text"
                      id="company_website"
                      name="company_website"
                      tabIndex={-1}
                      autoComplete="off"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                    />
                  </div>

                  {/* Full Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-ink dark:text-cream-light mb-1.5">
                      Full Name <span className="text-accent" aria-hidden="true">*</span>
                      <span className="sr-only">(required)</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      minLength={2}
                      maxLength={80}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      onBlur={() => handleBlur("name", name)}
                      aria-invalid={touched.name && errors.name ? "true" : undefined}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      className={`w-full px-4 py-2.5 rounded-lg border ${
                        touched.name && errors.name
                          ? "border-accent dark:border-accent-light"
                          : "border-border dark:border-dark-border"
                      } bg-cream-light dark:bg-dark-surface text-ink dark:text-cream-light placeholder:text-muted dark:placeholder:text-dark-muted focus:border-primary dark:focus:border-accent-light focus:ring-2 focus:ring-primary/20 dark:focus:ring-accent-light/20 transition-colors`}
                      placeholder="Your full name"
                    />
                    {touched.name && errors.name && (
                      <p id="name-error" className="field-error" role="alert" aria-live="polite">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-ink dark:text-cream-light mb-1.5">
                      Email Address <span className="text-accent" aria-hidden="true">*</span>
                      <span className="sr-only">(required)</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onBlur={() => handleBlur("email", email)}
                      aria-invalid={touched.email && errors.email ? "true" : undefined}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      className={`w-full px-4 py-2.5 rounded-lg border ${
                        touched.email && errors.email
                          ? "border-accent dark:border-accent-light"
                          : "border-border dark:border-dark-border"
                      } bg-cream-light dark:bg-dark-surface text-ink dark:text-cream-light placeholder:text-muted dark:placeholder:text-dark-muted focus:border-primary dark:focus:border-accent-light focus:ring-2 focus:ring-primary/20 dark:focus:ring-accent-light/20 transition-colors`}
                      placeholder="your@email.com"
                    />
                    {touched.email && errors.email && (
                      <p id="email-error" className="field-error" role="alert" aria-live="polite">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-ink dark:text-cream-light mb-1.5">
                      Phone / WhatsApp <span className="text-muted dark:text-dark-muted font-normal">(optional)</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      onBlur={() => handleBlur("phone", phone)}
                      aria-invalid={touched.phone && errors.phone ? "true" : undefined}
                      aria-describedby={errors.phone ? "phone-error" : undefined}
                      className={`w-full px-4 py-2.5 rounded-lg border ${
                        touched.phone && errors.phone
                          ? "border-accent dark:border-accent-light"
                          : "border-border dark:border-dark-border"
                      } bg-cream-light dark:bg-dark-surface text-ink dark:text-cream-light placeholder:text-muted dark:placeholder:text-dark-muted focus:border-primary dark:focus:border-accent-light focus:ring-2 focus:ring-primary/20 dark:focus:ring-accent-light/20 transition-colors`}
                      placeholder="0322 2773334"
                    />
                    {touched.phone && errors.phone && (
                      <p id="phone-error" className="field-error" role="alert" aria-live="polite">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-ink dark:text-cream-light mb-1.5">
                      Subject <span className="text-accent" aria-hidden="true">*</span>
                      <span className="sr-only">(required)</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      onBlur={() => handleBlur("subject", subject)}
                      aria-invalid={touched.subject && errors.subject ? "true" : undefined}
                      aria-describedby={errors.subject ? "subject-error" : undefined}
                      className={`w-full px-4 py-2.5 rounded-lg border ${
                        touched.subject && errors.subject
                          ? "border-accent dark:border-accent-light"
                          : "border-border dark:border-dark-border"
                      } bg-cream-light dark:bg-dark-surface text-ink dark:text-cream-light focus:border-primary dark:focus:border-accent-light focus:ring-2 focus:ring-primary/20 dark:focus:ring-accent-light/20 transition-colors`}
                    >
                      {SUBJECT_OPTIONS.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    {touched.subject && errors.subject && (
                      <p id="subject-error" className="field-error" role="alert" aria-live="polite">
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-ink dark:text-cream-light mb-1.5">
                      Message <span className="text-accent" aria-hidden="true">*</span>
                      <span className="sr-only">(required)</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      minLength={20}
                      maxLength={2000}
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onBlur={() => handleBlur("message", message)}
                      aria-invalid={touched.message && errors.message ? "true" : undefined}
                      aria-describedby={`message-counter ${errors.message ? "message-error" : ""}`}
                      className={`w-full px-4 py-2.5 rounded-lg border ${
                        touched.message && errors.message
                          ? "border-accent dark:border-accent-light"
                          : "border-border dark:border-dark-border"
                      } bg-cream-light dark:bg-dark-surface text-ink dark:text-cream-light placeholder:text-muted dark:placeholder:text-dark-muted focus:border-primary dark:focus:border-accent-light focus:ring-2 focus:ring-primary/20 dark:focus:ring-accent-light/20 transition-colors resize-y`}
                      placeholder="Tell us how we can help..."
                    />
                    <div className="flex justify-between items-center mt-1.5">
                      {touched.message && errors.message ? (
                        <p id="message-error" className="field-error" role="alert" aria-live="polite">
                          {errors.message}
                        </p>
                      ) : (
                        <span />
                      )}
                      <p
                        id="message-counter"
                        className={`text-xs ${
                          messageLength > 2000 ? "text-accent" : "text-muted dark:text-dark-muted"
                        }`}
                        aria-live="polite"
                      >
                        {messageLength}/2000 characters
                      </p>
                    </div>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary hover:bg-primary-dark text-cream-light font-semibold rounded-lg transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                    aria-busy={submitting}
                  >
                    {submitting ? (
                      <>
                        <Loader2 size={18} className="animate-spin" aria-hidden="true" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} aria-hidden="true" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
