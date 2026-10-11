import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { FadeIn } from '@/components/ui/motion';
import { projects } from '@/data/seed';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.metaTitle ?? `${project.title} — DevCraft Studio`,
    description: project.metaDescription ?? project.shortDescription,
  };
}

const categoryColorMap: Record<string, string> = {
  SAAS: 'primary',
  WEB_APP: 'default',
  ECOMMERCE: 'warning',
  AI: 'success',
  API: 'outline',
};

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const frontendTech = project.technologies.filter((t) => t.category === 'FRONTEND');
  const backendTech = project.technologies.filter((t) => t.category === 'BACKEND');
  const dbTech = project.technologies.filter((t) => t.category === 'DATABASE');
  const devopsTech = project.technologies.filter((t) => t.category === 'DEVOPS');
  const otherTech = project.technologies.filter(
    (t) => !['FRONTEND', 'BACKEND', 'DATABASE', 'DEVOPS'].includes(t.category)
  );

  return (
    <main className="pt-24 pb-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Back */}
        <FadeIn>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-[var(--fg-secondary)] hover:text-[var(--fg)] transition-colors mb-10 group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            All projects
          </Link>
        </FadeIn>

        {/* Header */}
        <FadeIn delay={0.05}>
          <div className="mb-10">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Badge variant={(categoryColorMap[project.category] as any) ?? 'default'}>
                {project.category.replace('_', ' ')}
              </Badge>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-[var(--fg)] tracking-tight mb-4">
              {project.title}
            </h1>
            <p className="text-lg text-[var(--fg-secondary)] leading-relaxed">
              {project.description}
            </p>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-lg border border-[var(--border)] text-sm font-medium text-[var(--fg-secondary)] hover:text-[var(--fg)] hover:border-[var(--border-hover)] transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                Live demo
              </a>
            )}
          </div>
        </FadeIn>

        {/* Project Image */}
        <FadeIn delay={0.1}>
          <div className="relative w-full h-72 sm:h-96 rounded-2xl border border-[var(--border)] overflow-hidden bg-[var(--bg-secondary)] mb-12 shadow-xl">
            {project.thumbnail ? (
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 896px"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-6xl font-bold text-[var(--fg-tertiary)]">
                {project.title.charAt(0)}
              </div>
            )}
          </div>
        </FadeIn>

        {/* Problem / Solution */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          <FadeIn delay={0.1}>
            <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)] p-6">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--fg-tertiary)] mb-3">
                The Problem
              </h2>
              <p className="text-sm text-[var(--fg-secondary)] leading-relaxed">{project.problem}</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)] p-6">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--fg-tertiary)] mb-3">
                Our Solution
              </h2>
              <p className="text-sm text-[var(--fg-secondary)] leading-relaxed">{project.solution}</p>
            </div>
          </FadeIn>
        </div>

        {/* Features */}
        <FadeIn delay={0.15}>
          <section className="mb-12">
            <h2 className="text-xl font-semibold text-[var(--fg)] mb-5">Key Features</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2.5 text-sm text-[var(--fg-secondary)] p-3 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border)]"
                >
                  <span className="h-4 w-4 shrink-0 mt-0.5 text-emerald-500">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </section>
        </FadeIn>

        {/* Architecture */}
        {project.architecture && (
          <FadeIn delay={0.2}>
            <section className="mb-12">
              <h2 className="text-xl font-semibold text-[var(--fg)] mb-4">Architecture</h2>
              <p className="text-[var(--fg-secondary)] leading-relaxed">{project.architecture}</p>
            </section>
          </FadeIn>
        )}

        {/* Challenges */}
        {project.challenges && (
          <FadeIn delay={0.2}>
            <section className="mb-12">
              <h2 className="text-xl font-semibold text-[var(--fg)] mb-4">Challenges &amp; Solutions</h2>
              <p className="text-[var(--fg-secondary)] leading-relaxed">{project.challenges}</p>
            </section>
          </FadeIn>
        )}

        {/* Tech Stack */}
        <FadeIn delay={0.2}>
          <section className="mb-12">
            <h2 className="text-xl font-semibold text-[var(--fg)] mb-5">Tech Stack</h2>
            <div className="space-y-4">
              {[
                { label: 'Frontend', items: frontendTech },
                { label: 'Backend', items: backendTech },
                { label: 'Database', items: dbTech },
                { label: 'DevOps', items: devopsTech },
                { label: 'Other', items: otherTech },
              ]
                .filter((g) => g.items.length > 0)
                .map((group) => (
                  <div key={group.label} className="flex items-start gap-4">
                    <span className="text-xs font-semibold uppercase tracking-widest text-[var(--fg-tertiary)] w-20 shrink-0 pt-1.5">
                      {group.label}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((tech) => (
                        <span
                          key={tech.name}
                          className="px-3 py-1 text-sm rounded-lg border border-[var(--border)] bg-[var(--bg-secondary)] text-[var(--fg-secondary)]"
                        >
                          {tech.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </section>
        </FadeIn>

        {/* Team */}
        {project.teamMembers.length > 0 && (
          <FadeIn delay={0.2}>
            <section className="mb-12">
              <h2 className="text-xl font-semibold text-[var(--fg)] mb-5">Team</h2>
              <div className="flex flex-wrap gap-4">
                {project.teamMembers.map(({ teamMember, role }) => (
                  <Link
                    key={teamMember.id}
                    href={`/team/${teamMember.slug}`}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)] hover:border-[var(--border-hover)] transition-colors"
                  >
                    <div className="relative h-9 w-9 rounded-lg overflow-hidden border border-[var(--border)] bg-[var(--bg-tertiary)] shrink-0">
                      {teamMember.image ? (
                        <Image
                          src={teamMember.image}
                          alt={teamMember.name}
                          fill
                          className="object-cover"
                          sizes="36px"
                        />
                      ) : (
                        <div className="h-full w-full flex items-center justify-center text-sm font-bold text-[var(--fg-secondary)]">
                          {teamMember.name.split(' ').map((n) => n[0]).join('')}
                        </div>
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[var(--fg)]">{teamMember.name}</p>
                      <p className="text-xs text-[var(--fg-tertiary)]">{role}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </FadeIn>
        )}

        {/* CTA */}
        <FadeIn delay={0.2}>
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-secondary)] p-8 text-center">
            <h2 className="text-xl font-semibold text-[var(--fg)] mb-2">Like what you see?</h2>
            <p className="text-[var(--fg-secondary)] mb-6">
              Let&apos;s discuss your project and see how we can help.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--fg)] text-[var(--bg)] text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Start a Project
            </Link>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
