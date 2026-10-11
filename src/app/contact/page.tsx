'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, CheckCircle, MapPin, Mail, Clock } from 'lucide-react';
import { FadeIn } from '@/components/ui/motion';
import { siteConfig, budgetOptions, projectTypeOptions } from '@/config/site';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  projectType: z.string().min(1, 'Please select a project type'),
  budget: z.string().min(1, 'Please select a budget range'),
  message: z.string().min(20, 'Please describe your project in at least 20 characters'),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: ContactForm) {
    setIsLoading(true);
    // Simulate API call (replace with actual Resend integration)
    await new Promise((r) => setTimeout(r, 1200));
    console.log('Contact form submitted:', data);
    setIsLoading(false);
    setSubmitted(true);
    reset();
  }

  return (
    <main className="pt-24 pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn>
          <div className="max-w-2xl mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--fg-tertiary)] mb-3">
              Contact
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-[var(--fg)] tracking-tight mb-4">
              Let&apos;s build something great
            </h1>
            <p className="text-lg text-[var(--fg-secondary)]">
              Tell us about your project. We&apos;ll get back to you within 24 hours
              with honest feedback and next steps — no commitment required.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            <FadeIn delay={0.1}>
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-20 rounded-2xl border border-[var(--border)] bg-[var(--bg-secondary)] text-center">
                  <CheckCircle className="h-12 w-12 text-emerald-500 mb-4" />
                  <h2 className="text-2xl font-bold text-[var(--fg)] mb-2">Message received!</h2>
                  <p className="text-[var(--fg-secondary)] max-w-sm">
                    Thanks for reaching out. We&apos;ll review your project details and respond within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-sm text-[var(--fg-secondary)] hover:text-[var(--fg)] transition-colors underline underline-offset-4 cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--bg-secondary)] p-8 space-y-6"
                  noValidate
                >
                  {/* Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-medium text-[var(--fg)] mb-1.5">
                        Your name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        placeholder="Alex Johnson"
                        {...register('name')}
                        className="w-full px-3 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--bg)] text-[var(--fg)] text-sm placeholder:text-[var(--fg-tertiary)] focus:outline-none focus:ring-2 focus:ring-[var(--fg)] focus:ring-offset-1 focus:ring-offset-[var(--bg)] transition-shadow"
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-sm font-medium text-[var(--fg)] mb-1.5">
                        Email address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        placeholder="alex@company.com"
                        {...register('email')}
                        className="w-full px-3 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--bg)] text-[var(--fg)] text-sm placeholder:text-[var(--fg-tertiary)] focus:outline-none focus:ring-2 focus:ring-[var(--fg)] focus:ring-offset-1 focus:ring-offset-[var(--bg)] transition-shadow"
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="contact-company" className="block text-sm font-medium text-[var(--fg)] mb-1.5">
                      Company / Organisation <span className="text-[var(--fg-tertiary)] font-normal">(optional)</span>
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      placeholder="Acme Inc."
                      {...register('company')}
                      className="w-full px-3 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--bg)] text-[var(--fg)] text-sm placeholder:text-[var(--fg-tertiary)] focus:outline-none focus:ring-2 focus:ring-[var(--fg)] focus:ring-offset-1 focus:ring-offset-[var(--bg)] transition-shadow"
                    />
                  </div>

                  {/* Project type + Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-project-type" className="block text-sm font-medium text-[var(--fg)] mb-1.5">
                        Project type <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="contact-project-type"
                        {...register('projectType')}
                        className="w-full px-3 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--bg)] text-[var(--fg)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--fg)] focus:ring-offset-1 focus:ring-offset-[var(--bg)] transition-shadow appearance-none"
                      >
                        <option value="">Select type…</option>
                        {projectTypeOptions.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                      {errors.projectType && (
                        <p className="mt-1 text-xs text-red-500">{errors.projectType.message}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="contact-budget" className="block text-sm font-medium text-[var(--fg)] mb-1.5">
                        Budget range <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="contact-budget"
                        {...register('budget')}
                        className="w-full px-3 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--bg)] text-[var(--fg)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--fg)] focus:ring-offset-1 focus:ring-offset-[var(--bg)] transition-shadow appearance-none"
                      >
                        <option value="">Select budget…</option>
                        {budgetOptions.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                      {errors.budget && (
                        <p className="mt-1 text-xs text-red-500">{errors.budget.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium text-[var(--fg)] mb-1.5">
                      Tell us about your project <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      placeholder="Describe what you want to build, your goals, any existing system or constraints, and your timeline…"
                      {...register('message')}
                      className="w-full px-3 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--bg)] text-[var(--fg)] text-sm placeholder:text-[var(--fg-tertiary)] focus:outline-none focus:ring-2 focus:ring-[var(--fg)] focus:ring-offset-1 focus:ring-offset-[var(--bg)] transition-shadow resize-none"
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[var(--fg)] text-[var(--bg)] text-sm font-semibold hover:opacity-90 disabled:opacity-50 transition-opacity cursor-pointer"
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z" />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send message
                      </>
                    )}
                  </button>
                </form>
              )}
            </FadeIn>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <FadeIn delay={0.15}>
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-secondary)] p-6 space-y-5">
                <div className="flex items-start gap-3">
                  <div className="h-9 w-9 rounded-lg border border-[var(--border)] bg-[var(--bg)] flex items-center justify-center shrink-0">
                    <Mail className="h-4 w-4 text-[var(--fg-secondary)]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[var(--fg-tertiary)] mb-1">Email</p>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-sm text-[var(--fg-secondary)] hover:text-[var(--fg)] transition-colors"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-9 w-9 rounded-lg border border-[var(--border)] bg-[var(--bg)] flex items-center justify-center shrink-0">
                    <MapPin className="h-4 w-4 text-[var(--fg-secondary)]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[var(--fg-tertiary)] mb-1">Location</p>
                    <p className="text-sm text-[var(--fg-secondary)]">{siteConfig.location}</p>
                    <p className="text-xs text-[var(--fg-tertiary)]">Remote-friendly worldwide</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-9 w-9 rounded-lg border border-[var(--border)] bg-[var(--bg)] flex items-center justify-center shrink-0">
                    <Clock className="h-4 w-4 text-[var(--fg-secondary)]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[var(--fg-tertiary)] mb-1">Response time</p>
                    <p className="text-sm text-[var(--fg-secondary)]">Within 24 hours</p>
                    <p className="text-xs text-[var(--fg-tertiary)]">Mon – Fri, IST</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-secondary)] p-6">
                <h3 className="text-sm font-semibold text-[var(--fg)] mb-3">What happens next?</h3>
                <ol className="space-y-3">
                  {[
                    'We review your project details within 24 hours.',
                    'We send you a brief discovery questionnaire if needed.',
                    'We schedule a free 30-minute discovery call.',
                    'We provide a detailed proposal with timeline and cost.',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[var(--fg-secondary)]">
                      <span className="h-5 w-5 rounded-full border border-[var(--border)] flex items-center justify-center text-xs font-bold text-[var(--fg-tertiary)] shrink-0">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </main>
  );
}
