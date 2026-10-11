import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/motion';
import { teamMembers } from '@/data/seed';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About — DevCraft Studio',
  description:
    'DevCraft Studio is a 3-person full-stack development studio that designs and builds modern digital products. Learn about our story, values, and approach.',
};

export default function AboutPage() {
  return (
    <main className="pt-24 pb-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <FadeIn>
          <div className="max-w-3xl mb-20">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--fg-tertiary)] mb-3">
              About Us
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-[var(--fg)] tracking-tight mb-6">
              We build the software you need to grow.
            </h1>
            <p className="text-lg text-[var(--fg-secondary)] leading-relaxed">
              DevCraft Studio is a 3-person full-stack development studio based in India.
              We design and build modern digital products — from MVPs and SaaS platforms to
              enterprise web applications. Everything we ship is owned by a senior engineer from
              first line of code to deployment.
            </p>
          </div>
        </FadeIn>

        {/* Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <FadeIn direction="left">
            <div>
              <h2 className="text-2xl font-bold text-[var(--fg)] mb-5">Our story</h2>
              <div className="space-y-4 text-[var(--fg-secondary)] leading-relaxed">
                <p>
                  We started DevCraft after years of working in product companies and agencies,
                  where we repeatedly saw the same problems: junior developers writing critical
                  production code, projects handed off between teams, and clients left confused
                  about the state of their own software.
                </p>
                <p>
                  So we built the studio we wished existed — one where senior engineers own
                  every decision, communication is transparent, and the code you get is
                  actually maintainable.
                </p>
                <p>
                  Being a small team is a deliberate choice. It lets us stay focused, move fast,
                  and give each project the full attention it deserves.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.1}>
            <div>
              <h2 className="text-2xl font-bold text-[var(--fg)] mb-5">Our approach</h2>
              <div className="space-y-4">
                {[
                  {
                    title: 'Senior-only',
                    desc: 'Every person on your project is a senior engineer with years of production experience.',
                  },
                  {
                    title: 'Full-stack ownership',
                    desc: 'We handle design, frontend, backend, database, and deployment — no silos.',
                  },
                  {
                    title: 'Transparent by default',
                    desc: 'Weekly demos, shared task boards, and honest timelines. You always know what\'s happening.',
                  },
                  {
                    title: 'Code you can own',
                    desc: 'Clean, documented, TypeScript-first code. When we\'re done, you have full ownership.',
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0 mt-2.5" />
                    <div>
                      <p className="text-sm font-semibold text-[var(--fg)]">{item.title}</p>
                      <p className="text-sm text-[var(--fg-secondary)]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Values */}
        <FadeIn>
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-[var(--fg)] mb-8">Values we build by</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  title: 'Quality over speed',
                  desc: 'We ship quickly, but never at the cost of code quality. Technical debt is avoided by design.',
                },
                {
                  title: 'Honest communication',
                  desc: 'If something is going to be late or needs rethinking, we tell you immediately — not at the deadline.',
                },
                {
                  title: 'User-centered design',
                  desc: 'We build for end users, not just requirements. Every UX decision is backed by user empathy.',
                },
                {
                  title: 'Security & privacy',
                  desc: 'We treat security as a first-class concern, not an afterthought. OWASP practices come standard.',
                },
                {
                  title: 'Continuous improvement',
                  desc: 'We are constantly learning — new tools, patterns, and practices that make our work better.',
                },
                {
                  title: 'Long-term thinking',
                  desc: 'We build systems designed to last and scale, not just satisfy the immediate scope.',
                },
              ].map((value) => (
                <div
                  key={value.title}
                  className="rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)] p-5"
                >
                  <h3 className="text-sm font-semibold text-[var(--fg)] mb-2">{value.title}</h3>
                  <p className="text-sm text-[var(--fg-secondary)] leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* Team teaser */}
        <FadeIn>
          <section className="mb-20">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-[var(--fg)]">The people behind it</h2>
              <Link
                href="/team"
                className="flex items-center gap-1.5 text-sm font-medium text-[var(--fg-secondary)] hover:text-[var(--fg)] transition-colors group"
              >
                Full team page
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {teamMembers.map((member) => (
                <StaggerItem key={member.id}>
                  <Link href={`/team/${member.slug}`} className="group block">
                    <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)] p-6 hover:border-[var(--border-hover)] transition-colors hover:-translate-y-0.5 duration-200">
                      <div className="relative h-16 w-16 rounded-xl overflow-hidden bg-[var(--bg-tertiary)] border border-[var(--border)] mb-4">
                        {member.image ? (
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover object-top"
                            sizes="64px"
                          />
                        ) : (
                          <div className="h-full w-full flex items-center justify-center text-lg font-bold text-[var(--fg-secondary)]">
                            {member.name.split(' ').map((n) => n[0]).join('')}
                          </div>
                        )}
                      </div>
                      <h3 className="text-base font-semibold text-[var(--fg)] mb-0.5">{member.name}</h3>
                      <p className="text-sm text-[var(--fg-secondary)]">{member.role}</p>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </section>
        </FadeIn>

        {/* CTA */}
        <FadeIn>
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-secondary)] p-10 text-center">
            <h2 className="text-2xl font-bold text-[var(--fg)] mb-3">Let&apos;s build together</h2>
            <p className="text-[var(--fg-secondary)] mb-7 max-w-md mx-auto">
              Tell us about your project. We respond within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--fg)] text-[var(--bg)] text-sm font-semibold hover:opacity-90 transition-opacity group"
              >
                Start a Project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/projects"
                className="text-sm font-medium text-[var(--fg-secondary)] hover:text-[var(--fg)] transition-colors"
              >
                See our work →
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
