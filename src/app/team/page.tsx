import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/motion';
import { teamMembers } from '@/data/seed';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Team — DevCraft Studio',
  description:
    'Meet the three senior full-stack developers behind DevCraft Studio. No juniors, no outsourcing — just senior engineering from start to finish.',
};

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function TeamPage() {
  return (
    <main className="pt-24 pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--fg-tertiary)] mb-3">
              The Team
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-[var(--fg)] tracking-tight mb-4">
              Three engineers, one team
            </h1>
            <p className="text-lg text-[var(--fg-secondary)]">
              We&apos;re a tight-knit group of senior full-stack developers. Every project
              is handled personally — no juniors, no outsourcing, no hand-offs.
            </p>
          </div>
        </FadeIn>

        {/* Team cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {teamMembers.map((member) => (
            <StaggerItem key={member.id}>
              <article className="rounded-2xl border border-[var(--border)] bg-[var(--bg-secondary)] overflow-hidden hover:border-[var(--border-hover)] transition-all duration-200 hover:-translate-y-0.5">
                {/* Avatar */}
                <div className="relative h-64 w-full bg-[var(--bg-tertiary)] border-b border-[var(--border)] overflow-hidden">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top transition-transform duration-500 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center">
                      <div className="h-20 w-20 rounded-2xl bg-[var(--bg)] border border-[var(--border)] flex items-center justify-center text-2xl font-bold text-[var(--fg-secondary)]">
                        {member.name.split(' ').map((n) => n[0]).join('')}
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-7">
                  <h2 className="text-lg font-semibold text-[var(--fg)] mb-0.5">{member.name}</h2>
                  <p className="text-sm text-[var(--fg-secondary)] mb-5 leading-snug">{member.role}</p>
                  <p className="text-sm text-[var(--fg-secondary)] leading-relaxed mb-6">{member.shortBio}</p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-2 py-0.5 rounded-md border border-[var(--border)] bg-[var(--bg)] text-[var(--fg-secondary)]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Social links */}
                  <div className="flex items-center gap-2 pt-4 border-t border-[var(--border)]">
                    {member.github && (
                      <a
                        href={member.github}
                        aria-label={`${member.name} on GitHub`}
                        className="h-8 w-8 rounded-lg border border-[var(--border)] flex items-center justify-center text-[var(--fg-secondary)] hover:text-[var(--fg)] hover:border-[var(--border-hover)] transition-colors"
                      >
                        <GithubIcon className="h-3.5 w-3.5" />
                      </a>
                    )}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        aria-label={`${member.name} on LinkedIn`}
                        className="h-8 w-8 rounded-lg border border-[var(--border)] flex items-center justify-center text-[var(--fg-secondary)] hover:text-[var(--fg)] hover:border-[var(--border-hover)] transition-colors"
                      >
                        <LinkedinIcon className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Values */}
        <FadeIn>
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-[var(--fg)] mb-8 text-center">How we work together</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  title: 'Full ownership',
                  desc: 'Each of us owns a full slice of every project — frontend, backend, and deployment.',
                },
                {
                  title: 'Async by default',
                  desc: 'We work asynchronously with clear documentation and structured communication.',
                },
                {
                  title: 'Code reviews for everything',
                  desc: 'Every line of production code goes through a peer review before it ships.',
                },
                {
                  title: 'Continuous delivery',
                  desc: 'We ship small, frequent updates to reduce risk and get feedback quickly.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)] p-5"
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
              Want to work with us?
            </h2>
            <p className="text-[var(--fg-secondary)] mb-7 max-w-md mx-auto">
              We&apos;re selective about the projects we take on so we can give each one
              our full attention. Let&apos;s see if we&apos;re a good fit.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--fg)] text-[var(--bg)] text-sm font-semibold hover:opacity-90 transition-opacity group"
            >
              Start a conversation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
