'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle, Code, Cloud, Globe, ShoppingCart, Webhook, Database, Brain, Settings } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/motion';
import { projects, teamMembers, services } from '@/data/seed';
import { processSteps } from '@/config/site';

// ─── Service icon map ────────────────────────────────────────────────────────
const serviceIconMap: Record<string, React.ElementType> = {
  Code, Cloud, Globe, ShoppingCart, Webhook, Database, Brain, Settings,
};

// ─── Tech stack data ──────────────────────────────────────────────────────────
const techStack = [
  { name: 'Next.js', category: 'Frontend' },
  { name: 'React', category: 'Frontend' },
  { name: 'TypeScript', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'Prisma', category: 'Backend' },
  { name: 'Redis', category: 'Database' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'AWS', category: 'DevOps' },
  { name: 'Vercel', category: 'DevOps' },
  { name: 'Figma', category: 'Design' },
];

// ─── Stats ────────────────────────────────────────────────────────────────────
const stats = [
  { value: '20+', label: 'Projects shipped' },
  { value: '3', label: 'Team members' },
  { value: '7', label: 'Services offered' },
  { value: '100%', label: 'Remote-first' },
];

// ─── Featured projects ────────────────────────────────────────────────────────
const featuredProjects = projects.filter((p) => p.isFeatured).slice(0, 3);

// ─── Featured services ────────────────────────────────────────────────────────
const featuredServices = services.slice(0, 6);

export default function Home() {
  return (
    <main>
      {/* ─── Hero ───────────────────────────────────────────────── */}
      <section
        className="relative min-h-[92vh] flex flex-col items-center justify-center text-center px-4 pt-24 pb-20 overflow-hidden"
        aria-label="Hero"
      >
        {/* Subtle grid background */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            opacity: 0.4,
          }}
        />
        {/* Radial fade mask */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 30%, var(--bg) 100%)',
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto">
          <FadeIn direction="up" duration={0.5}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--border)] bg-[var(--bg-secondary)] text-xs font-medium text-[var(--fg-secondary)] mb-8">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Available for new projects
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.1} duration={0.6}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[var(--fg)] leading-[1.08] mb-6">
              We build digital<br />
              <span className="text-[var(--fg-secondary)]">products that</span>{' '}
              drive growth.
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.2} duration={0.6}>
            <p className="text-lg sm:text-xl text-[var(--fg-secondary)] max-w-2xl mx-auto leading-relaxed mb-10">
              A 3-person full-stack development studio specializing in modern web
              applications, SaaS platforms, and enterprise software solutions.
              From idea to production — we handle it all.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto group">
                  Start a Project
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/projects">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  View Our Work
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>

        {/* Stats row */}
        <FadeIn direction="up" delay={0.5} className="relative z-10 mt-20 w-full max-w-3xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px border border-[var(--border)] rounded-2xl overflow-hidden bg-[var(--border)]">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center py-6 px-4 bg-[var(--bg-secondary)] hover:bg-[var(--bg-tertiary)] transition-colors"
              >
                <span className="text-2xl font-bold text-[var(--fg)]">{stat.value}</span>
                <span className="text-xs text-[var(--fg-secondary)] mt-1 text-center">{stat.label}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* ─── Tech Stack ─────────────────────────────────────────── */}
      <section className="py-16 border-y border-[var(--border)] bg-[var(--bg-secondary)]" aria-label="Technologies we use">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-center text-xs font-semibold uppercase tracking-widest text-[var(--fg-tertiary)] mb-10">
              Built with modern, battle-tested technologies
            </p>
          </FadeIn>
          <StaggerContainer className="flex flex-wrap items-center justify-center gap-3">
            {techStack.map((tech) => (
              <StaggerItem key={tech.name}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--border)] bg-[var(--bg)] hover:border-[var(--border-hover)] transition-all duration-200 hover:-translate-y-0.5">
                  <span className="text-sm font-medium text-[var(--fg)]">{tech.name}</span>
                  <span className="text-xs text-[var(--fg-tertiary)]">{tech.category}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── Featured Projects ───────────────────────────────────── */}
      <section className="py-24" aria-labelledby="projects-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex items-end justify-between mb-14">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--fg-tertiary)] mb-3">
                  Selected Work
                </p>
                <h2 id="projects-heading" className="text-3xl sm:text-4xl font-bold text-[var(--fg)] tracking-tight">
                  Projects we&apos;re proud of
                </h2>
              </div>
              <Link
                href="/projects"
                className="hidden sm:flex items-center gap-2 text-sm font-medium text-[var(--fg-secondary)] hover:text-[var(--fg)] transition-colors group"
              >
                All projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, i) => (
              <StaggerItem key={project.id}>
                <Link href={`/projects/${project.slug}`} className="group block">
                  <article className="h-full rounded-2xl border border-[var(--border)] bg-[var(--bg-secondary)] hover:border-[var(--border-hover)] hover:bg-[var(--bg-tertiary)] transition-all duration-300 overflow-hidden">
                    {/* Thumbnail */}
                    <div className="relative h-48 w-full overflow-hidden border-b border-[var(--border)] bg-[var(--bg-tertiary)]">
                      {project.thumbnail ? (
                        <Image
                          src={project.thumbnail}
                          alt={project.title}
                          fill
                          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 1024px) 100vw, 33vw"
                        />
                      ) : (
                        <div
                          className="h-full w-full flex items-center justify-center text-4xl font-bold text-[var(--fg-tertiary)]"
                          style={{
                            background: `hsl(${(i * 120) % 360}, 8%, ${12}%)`,
                          }}
                        >
                          {project.title.charAt(0)}
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="secondary" size="sm">
                          {project.category.replace('_', ' ')}
                        </Badge>
                      </div>
                      <h3 className="text-lg font-semibold text-[var(--fg)] mb-2 group-hover:text-[var(--fg)] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-[var(--fg-secondary)] leading-relaxed mb-4">
                        {project.shortDescription}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech.name}
                            className="text-xs px-2 py-0.5 rounded-md bg-[var(--bg)] border border-[var(--border)] text-[var(--fg-secondary)]"
                          >
                            {tech.name}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="text-xs px-2 py-0.5 rounded-md bg-[var(--bg)] border border-[var(--border)] text-[var(--fg-tertiary)]">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>
                    </div>
                  </article>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn delay={0.3} className="mt-10 flex justify-center sm:hidden">
            <Link href="/projects">
              <Button variant="outline">View all projects</Button>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ─── Services ───────────────────────────────────────────── */}
      <section className="py-24 bg-[var(--bg-secondary)] border-y border-[var(--border)]" aria-labelledby="services-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--fg-tertiary)] mb-3">
                What we do
              </p>
              <h2 id="services-heading" className="text-3xl sm:text-4xl font-bold text-[var(--fg)] tracking-tight mb-4">
                Services built for scale
              </h2>
              <p className="text-[var(--fg-secondary)] max-w-xl mx-auto">
                From concept to deployment, we cover the full product lifecycle with senior-level expertise at every step.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredServices.map((service) => {
              const Icon = serviceIconMap[service.icon] ?? Code;
              return (
                <StaggerItem key={service.id}>
                  <Link href={`/services#${service.slug}`} className="group block h-full">
                    <div className="h-full rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-6 hover:border-[var(--border-hover)] transition-all duration-200 hover:-translate-y-0.5">
                      <div className="h-10 w-10 rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)] flex items-center justify-center mb-5 group-hover:border-[var(--border-hover)] transition-colors">
                        <Icon className="h-5 w-5 text-[var(--fg-secondary)]" />
                      </div>
                      <h3 className="text-base font-semibold text-[var(--fg)] mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm text-[var(--fg-secondary)] leading-relaxed">
                        {service.shortDescription}
                      </p>
                    </div>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          <FadeIn delay={0.3} className="mt-10 flex justify-center">
            <Link href="/services">
              <Button variant="outline" className="group">
                All services
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ─── Team ───────────────────────────────────────────────── */}
      <section className="py-24" aria-labelledby="team-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--fg-tertiary)] mb-3">
                The team
              </p>
              <h2 id="team-heading" className="text-3xl sm:text-4xl font-bold text-[var(--fg)] tracking-tight mb-4">
                Small team. Senior expertise.
              </h2>
              <p className="text-[var(--fg-secondary)] max-w-xl mx-auto">
                We&apos;re a tight-knit team of three senior developers who handle every aspect of product development — no outsourcing, no surprises.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <StaggerItem key={member.id}>
                <Link href={`/team/${member.slug}`} className="group block">
                  <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-secondary)] p-8 text-center hover:border-[var(--border-hover)] hover:bg-[var(--bg-tertiary)] transition-all duration-200 hover:-translate-y-0.5">
                    {/* Avatar */}
                    <div className="relative h-24 w-24 rounded-2xl overflow-hidden border-2 border-[var(--border)] group-hover:border-[var(--border-hover)] transition-all duration-300 mx-auto mb-5 bg-[var(--bg-tertiary)] shadow-lg">
                      {member.image ? (
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                          sizes="96px"
                        />
                      ) : (
                        <div className="h-full w-full flex items-center justify-center text-2xl font-bold text-[var(--fg-secondary)]">
                          {member.name.split(' ').map((n) => n[0]).join('')}
                        </div>
                      )}
                    </div>
                    <h3 className="text-base font-semibold text-[var(--fg)] mb-1">{member.name}</h3>
                    <p className="text-sm text-[var(--fg-secondary)] mb-5 leading-snug">{member.role}</p>
                    <div className="flex flex-wrap gap-1.5 justify-center">
                      {member.skills.slice(0, 4).map((skill) => (
                        <span
                          key={skill}
                          className="text-xs px-2 py-0.5 rounded-md border border-[var(--border)] bg-[var(--bg)] text-[var(--fg-secondary)]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn delay={0.3} className="mt-10 flex justify-center">
            <Link href="/team">
              <Button variant="outline" className="group">
                Meet the team
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ─── Process Preview ─────────────────────────────────────── */}
      <section className="py-24 bg-[var(--bg-secondary)] border-y border-[var(--border)]" aria-labelledby="process-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex items-end justify-between mb-14">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--fg-tertiary)] mb-3">
                  How we work
                </p>
                <h2 id="process-heading" className="text-3xl sm:text-4xl font-bold text-[var(--fg)] tracking-tight">
                  A process built for clarity
                </h2>
              </div>
              <Link
                href="/process"
                className="hidden sm:flex items-center gap-2 text-sm font-medium text-[var(--fg-secondary)] hover:text-[var(--fg)] transition-colors group"
              >
                Full process
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </FadeIn>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-[var(--border)] hidden sm:block" />

            <StaggerContainer className="space-y-px">
              {processSteps.slice(0, 4).map((step, i) => (
                <StaggerItem key={step.number}>
                  <motion.div
                    className="group relative sm:pl-16 py-5"
                    whileHover={{ x: 4 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  >
                    {/* Step dot */}
                    <div className="absolute left-0 top-6 h-8 w-8 rounded-full border border-[var(--border)] bg-[var(--bg)] hidden sm:flex items-center justify-center z-10">
                      <span className="text-xs font-mono font-bold text-[var(--fg-secondary)]">{i + 1}</span>
                    </div>

                    <div className="rounded-xl border border-[var(--border)] bg-[var(--bg)] px-6 py-5 hover:border-[var(--border-hover)] transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="sm:hidden h-8 w-8 shrink-0 rounded-full border border-[var(--border)] flex items-center justify-center">
                          <span className="text-xs font-mono font-bold text-[var(--fg-secondary)]">{i + 1}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-1.5">
                            <h3 className="text-base font-semibold text-[var(--fg)]">{step.title}</h3>
                          </div>
                          <p className="text-sm text-[var(--fg-secondary)] leading-relaxed">{step.description}</p>
                        </div>
                        <div className="hidden md:flex flex-wrap gap-1.5 max-w-xs shrink-0">
                          {step.details.slice(0, 3).map((d) => (
                            <span key={d} className="flex items-center gap-1 text-xs text-[var(--fg-tertiary)]">
                              <CheckCircle className="h-3 w-3 text-emerald-500 shrink-0" />
                              {d}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          <FadeIn delay={0.3} className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[var(--border)]">
            <p className="text-sm text-[var(--fg-secondary)]">
              Plus 3 more phases: Testing, Deployment &amp; Support
            </p>
            <Link href="/process">
              <Button variant="outline" size="sm" className="group">
                See full process
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ─── Why us ─────────────────────────────────────────────── */}
      <section className="py-24" aria-labelledby="why-us-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--fg-tertiary)] mb-3">
                Why DevCraft
              </p>
              <h2 id="why-us-heading" className="text-3xl sm:text-4xl font-bold text-[var(--fg)] tracking-tight mb-6">
                Senior engineers,<br />not a dev shop
              </h2>
              <p className="text-[var(--fg-secondary)] leading-relaxed mb-8">
                We&apos;re a lean team of three senior full-stack developers. Every project gets
                our full attention — no juniors, no hand-offs, no surprises. We ship clean,
                maintainable code you can own.
              </p>
              <Link href="/contact">
                <Button size="lg" className="group">
                  Let&apos;s talk
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </FadeIn>

            <FadeIn direction="right" delay={0.1}>
              <div className="grid grid-cols-1 gap-4">
                {[
                  {
                    title: 'Full ownership from day one',
                    desc: 'We handle architecture, design, development, and deployment. No outsourcing or hand-offs.',
                  },
                  {
                    title: 'Clean, documented code',
                    desc: 'We write code you can maintain. TypeScript, tests, and thorough documentation come standard.',
                  },
                  {
                    title: 'Transparent communication',
                    desc: 'Weekly demos, clear timelines, and honest updates. You always know the status of your project.',
                  },
                  {
                    title: 'Post-launch support',
                    desc: 'Shipping is the beginning, not the end. We offer maintenance packages to keep things running.',
                  },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    className="flex gap-4 p-5 rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)] hover:border-[var(--border-hover)] transition-colors"
                  >
                    <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-[var(--fg)] mb-1">{item.title}</p>
                      <p className="text-sm text-[var(--fg-secondary)]">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── CTA ────────────────────────────────────────────────── */}
      <section className="py-24 border-t border-[var(--border)]" aria-labelledby="cta-heading">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--border)] bg-[var(--bg-secondary)] text-xs font-medium text-[var(--fg-secondary)] mb-8">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Accepting new projects
            </div>
            <h2 id="cta-heading" className="text-3xl sm:text-5xl font-bold text-[var(--fg)] tracking-tight mb-6">
              Ready to build something great?
            </h2>
            <p className="text-lg text-[var(--fg-secondary)] mb-10">
              Tell us about your project. We&apos;ll get back to you within 24 hours with honest feedback and next steps.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto group">
                  Start a Project
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/projects">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  See our work first
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
