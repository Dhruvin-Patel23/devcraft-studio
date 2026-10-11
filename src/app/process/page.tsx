import Link from 'next/link';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/motion';
import { processSteps } from '@/config/site';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Process — DevCraft Studio',
  description:
    'How we work: a 7-phase development process from Discovery through Support, built for clarity, quality, and on-time delivery.',
};

export default function ProcessPage() {
  return (
    <main className="pt-24 pb-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn>
          <div className="max-w-2xl mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--fg-tertiary)] mb-3">
              How we work
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-[var(--fg)] tracking-tight mb-4">
              A process built for clarity
            </h1>
            <p className="text-lg text-[var(--fg-secondary)]">
              We follow a structured 7-phase process that gives you complete visibility
              into your project at every step. No surprises — just clear milestones,
              regular demos, and honest communication.
            </p>
          </div>
        </FadeIn>

        {/* Process steps */}
        <StaggerContainer className="space-y-6 mb-20">
          {processSteps.map((step, i) => (
            <StaggerItem key={step.number}>
              <div className="group grid grid-cols-1 lg:grid-cols-[100px_1fr] gap-6 rounded-2xl border border-[var(--border)] bg-[var(--bg-secondary)] p-7 hover:border-[var(--border-hover)] transition-colors">
                {/* Step number */}
                <div className="flex items-start gap-4 lg:flex-col lg:items-start lg:gap-0">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--bg)] text-lg font-bold font-mono text-[var(--fg-secondary)]">
                    {i + 1}
                  </div>
                  <div className="lg:hidden">
                    <h2 className="text-xl font-semibold text-[var(--fg)]">{step.title}</h2>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h2 className="hidden lg:block text-xl font-semibold text-[var(--fg)] mb-3">
                    {step.title}
                  </h2>
                  <p className="text-[var(--fg-secondary)] leading-relaxed mb-5">
                    {step.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                    {step.details.map((detail) => (
                      <div
                        key={detail}
                        className="flex items-center gap-2 text-sm text-[var(--fg-secondary)]"
                      >
                        <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" />
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Principles */}
        <FadeIn>
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-[var(--fg)] mb-8">Our engineering principles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                {
                  title: 'Test before you ship',
                  desc: 'Every feature is tested across unit, integration, and end-to-end levels before it reaches production.',
                },
                {
                  title: 'Code you can own',
                  desc: 'We write clean, documented, maintainable code. When the project ends, you have full ownership.',
                },
                {
                  title: 'Performance is a feature',
                  desc: 'Fast loading, efficient queries, and optimized assets aren\'t optional — they\'re built in from day one.',
                },
                {
                  title: 'Security by default',
                  desc: 'Proper input validation, authentication, and authorization patterns are applied throughout every project.',
                },
                {
                  title: 'No black boxes',
                  desc: 'You get weekly demos and progress updates. You always know exactly what\'s been built and what\'s next.',
                },
                {
                  title: 'Ship and iterate',
                  desc: 'We prefer launching early with a solid MVP and iterating based on real user feedback over building in isolation.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)] p-6"
                >
                  <h3 className="text-sm font-semibold text-[var(--fg)] mb-2">{item.title}</h3>
                  <p className="text-sm text-[var(--fg-secondary)] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* CTA */}
        <FadeIn>
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-secondary)] p-10 text-center">
            <h2 className="text-2xl font-bold text-[var(--fg)] mb-3">
              Ready to start your project?
            </h2>
            <p className="text-[var(--fg-secondary)] mb-7 max-w-md mx-auto">
              Discovery calls are free. Tell us about your project and we&apos;ll walk you
              through exactly how we&apos;d approach it.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--fg)] text-[var(--bg)] text-sm font-semibold hover:opacity-90 transition-opacity group"
            >
              Book a discovery call
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
