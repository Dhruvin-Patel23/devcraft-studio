import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/motion';
import { projects } from '@/data/seed';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects — DevCraft Studio',
  description:
    'Explore our portfolio of full-stack web applications, SaaS platforms, and digital products built for real clients.',
};

const categoryColors: Record<string, string> = {
  SAAS: 'primary',
  WEB_APP: 'default',
  ECOMMERCE: 'warning',
  AI: 'success',
  API: 'outline',
  MOBILE: 'outline',
  OTHER: 'default',
};

export default function ProjectsPage() {
  const featured = projects.filter((p) => p.isFeatured);
  const rest = projects.filter((p) => !p.isFeatured);

  return (
    <main className="pt-24 pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn>
          <div className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--fg-tertiary)] mb-3">
              Our Work
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-[var(--fg)] tracking-tight mb-4">
              Projects we&apos;ve shipped
            </h1>
            <p className="text-lg text-[var(--fg-secondary)] max-w-2xl">
              A selection of the web applications, SaaS platforms, and digital products
              we&apos;ve designed and built end-to-end.
            </p>
          </div>
        </FadeIn>

        {/* Featured */}
        <FadeIn delay={0.1}>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--fg-tertiary)] mb-6">
            Featured Projects
          </h2>
        </FadeIn>
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {featured.map((project, i) => (
            <StaggerItem key={project.id}>
              <Link href={`/projects/${project.slug}`} className="group block h-full">
                <article className="h-full rounded-2xl border border-[var(--border)] bg-[var(--bg-secondary)] hover:border-[var(--border-hover)] hover:bg-[var(--bg-tertiary)] transition-all duration-300 overflow-hidden">
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
                        className="h-full w-full flex items-center justify-center text-5xl font-bold text-[var(--fg-tertiary)]"
                        style={{ background: `hsl(${i * 110 + 200}, 10%, 12%)` }}
                      >
                        {project.title.charAt(0)}
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge
                        variant={
                          (categoryColors[project.category] as any) ?? 'default'
                        }
                        size="sm"
                      >
                        {project.category.replace('_', ' ')}
                      </Badge>
                    </div>
                    <h3 className="text-lg font-semibold text-[var(--fg)] mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-[var(--fg-secondary)] leading-relaxed mb-5">
                      {project.shortDescription}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech.name}
                          className="text-xs px-2 py-0.5 rounded-md bg-[var(--bg)] border border-[var(--border)] text-[var(--fg-secondary)]"
                        >
                          {tech.name}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-[var(--fg-secondary)] group-hover:text-[var(--fg)] transition-colors">
                      View case study
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </article>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* All other projects */}
        {rest.length > 0 && (
          <>
            <FadeIn>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--fg-tertiary)] mb-6">
                More Projects
              </h2>
            </FadeIn>
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {rest.map((project) => (
                <StaggerItem key={project.id}>
                  <Link href={`/projects/${project.slug}`} className="group block h-full">
                    <article className="h-full rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)] hover:border-[var(--border-hover)] p-6 transition-all duration-200 hover:-translate-y-0.5">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div>
                          <Badge
                            variant={(categoryColors[project.category] as any) ?? 'default'}
                            size="sm"
                          >
                            {project.category.replace('_', ' ')}
                          </Badge>
                        </div>
                      </div>
                      <h3 className="text-base font-semibold text-[var(--fg)] mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-[var(--fg-secondary)] leading-relaxed mb-4">
                        {project.shortDescription}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.slice(0, 5).map((tech) => (
                          <span
                            key={tech.name}
                            className="text-xs px-2 py-0.5 rounded-md bg-[var(--bg)] border border-[var(--border)] text-[var(--fg-secondary)]"
                          >
                            {tech.name}
                          </span>
                        ))}
                      </div>
                    </article>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </>
        )}
      </div>
    </main>
  );
}
