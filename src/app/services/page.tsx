import { Code, Cloud, Globe, ShoppingCart, Webhook, Database, Brain, Settings } from 'lucide-react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/motion';
import { services } from '@/data/seed';
import type { Metadata } from 'next';
import type { LucideIcon } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services — DevCraft Studio',
  description:
    'Full-stack web development services: SaaS platforms, web applications, APIs, e-commerce, AI integration, and database architecture.',
};

const serviceIconMap: Record<string, LucideIcon> = {
  Code, Cloud, Globe, ShoppingCart, Webhook, Database, Brain, Settings,
};

export default function ServicesPage() {
  return (
    <main className="pt-24 pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn>
          <div className="max-w-2xl mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--fg-tertiary)] mb-3">
              Services
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-[var(--fg)] tracking-tight mb-4">
              What we build
            </h1>
            <p className="text-lg text-[var(--fg-secondary)]">
              From concept to production, we offer end-to-end development services.
              Every engagement includes architecture decisions, clean code, and post-launch support.
            </p>
          </div>
        </FadeIn>

        {/* Services grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {services.map((service) => {
            const Icon = serviceIconMap[service.icon] ?? Code;
            return (
              <StaggerItem key={service.id}>
                <div
                  id={service.slug}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--bg-secondary)] p-8 hover:border-[var(--border-hover)] transition-colors scroll-mt-24"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="h-11 w-11 rounded-xl border border-[var(--border)] bg-[var(--bg)] flex items-center justify-center">
                      <Icon className="h-5 w-5 text-[var(--fg-secondary)]" />
                    </div>
                    <span className="text-xs font-mono text-[var(--fg-tertiary)]">
                      0{service.order}
                    </span>
                  </div>

                  <h2 className="text-xl font-semibold text-[var(--fg)] mb-2">
                    {service.title}
                  </h2>
                  <p className="text-sm text-[var(--fg-secondary)] leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-[var(--fg-secondary)]"
                      >
                        <span className="h-1 w-1 rounded-full bg-[var(--fg-tertiary)] shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[var(--border)]">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-0.5 rounded-md bg-[var(--bg)] border border-[var(--border)] text-[var(--fg-tertiary)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* CTA */}
        <FadeIn>
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-secondary)] p-10 text-center">
            <h2 className="text-2xl font-bold text-[var(--fg)] mb-3">
              Not sure which service fits your project?
            </h2>
            <p className="text-[var(--fg-secondary)] mb-7 max-w-lg mx-auto">
              Tell us about your idea and we&apos;ll help you scope the right solution.
              Discovery calls are always free.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--fg)] text-[var(--bg)] text-sm font-semibold hover:opacity-90 transition-opacity group"
            >
              Let&apos;s talk
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
