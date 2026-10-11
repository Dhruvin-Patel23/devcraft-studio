import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar, Clock, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/motion';
import { blogPosts } from '@/data/seed';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog — DevCraft Studio',
  description:
    'Engineering articles and insights from the DevCraft Studio team on full-stack development, SaaS architecture, API design, and modern web engineering.',
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogPage() {
  const featured = blogPosts.filter((p) => p.isFeatured);
  const rest = blogPosts.filter((p) => !p.isFeatured);

  return (
    <main className="pt-24 pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn>
          <div className="max-w-2xl mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--fg-tertiary)] mb-3">
              Blog
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-[var(--fg)] tracking-tight mb-4">
              Engineering insights
            </h1>
            <p className="text-lg text-[var(--fg-secondary)]">
              Articles on full-stack development, SaaS architecture, API design,
              and lessons learned from building real products.
            </p>
          </div>
        </FadeIn>

        {/* Featured posts */}
        {featured.length > 0 && (
          <>
            <FadeIn delay={0.1}>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--fg-tertiary)] mb-6">
                Featured
              </h2>
            </FadeIn>
            <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-14">
              {featured.map((post) => (
                <StaggerItem key={post.id}>
                  <Link href={`/blog/${post.slug}`} className="group block h-full">
                    <article className="h-full rounded-2xl border border-[var(--border)] bg-[var(--bg-secondary)] hover:border-[var(--border-hover)] transition-all duration-200 overflow-hidden hover:-translate-y-0.5">
                      {/* Cover placeholder */}
                      <div className="h-44 bg-[var(--bg-tertiary)] border-b border-[var(--border)] flex items-center justify-center text-4xl font-bold text-[var(--fg-tertiary)]">
                        {post.title.charAt(0)}
                      </div>
                      <div className="p-7">
                        <div className="flex items-center gap-3 mb-4">
                          <Badge variant="default" size="sm">
                            {post.category.replace('_', ' ')}
                          </Badge>
                          <div className="flex items-center gap-1 text-xs text-[var(--fg-tertiary)]">
                            <Clock className="h-3 w-3" />
                            {post.readingTime} min read
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold text-[var(--fg)] mb-3 leading-snug group-hover:underline decoration-[var(--border)] underline-offset-4">
                          {post.title}
                        </h3>
                        <p className="text-sm text-[var(--fg-secondary)] leading-relaxed mb-5">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="relative h-6 w-6 rounded-full overflow-hidden bg-[var(--bg-tertiary)] border border-[var(--border)] shrink-0">
                              {post.author.image ? (
                                <Image
                                  src={post.author.image}
                                  alt={post.author.name}
                                  fill
                                  className="object-cover object-top"
                                  sizes="24px"
                                />
                              ) : (
                                <div className="h-full w-full flex items-center justify-center text-xs font-bold text-[var(--fg-secondary)]">
                                  {post.author.name.split(' ').map((n) => n[0]).join('')}
                                </div>
                              )}
                            </div>
                            <span className="text-xs text-[var(--fg-secondary)]">{post.author.name}</span>
                          </div>
                          <div className="flex items-center gap-1 text-xs text-[var(--fg-tertiary)]">
                            <Calendar className="h-3 w-3" />
                            {post.publishedAt ? formatDate(post.publishedAt) : ''}
                          </div>
                        </div>
                      </div>
                    </article>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </>
        )}

        {/* All posts */}
        {rest.length > 0 && (
          <>
            <FadeIn>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--fg-tertiary)] mb-6">
                All Posts
              </h2>
            </FadeIn>
            <StaggerContainer className="space-y-4">
              {rest.map((post) => (
                <StaggerItem key={post.id}>
                  <Link href={`/blog/${post.slug}`} className="group block">
                    <article className="flex items-start gap-6 p-6 rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)] hover:border-[var(--border-hover)] transition-all duration-200 hover:-translate-y-0.5">
                      <div className="hidden sm:flex h-12 w-12 shrink-0 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border)] items-center justify-center text-xl font-bold text-[var(--fg-tertiary)]">
                        {post.title.charAt(0)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <Badge variant="default" size="sm">
                            {post.category.replace('_', ' ')}
                          </Badge>
                          <span className="text-xs text-[var(--fg-tertiary)] flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {post.readingTime} min read
                          </span>
                        </div>
                        <h3 className="text-base font-semibold text-[var(--fg)] mb-1 group-hover:underline decoration-[var(--border)] underline-offset-4">
                          {post.title}
                        </h3>
                        <p className="text-sm text-[var(--fg-secondary)] leading-relaxed">
                          {post.excerpt}
                        </p>
                      </div>
                      <ArrowRight className="hidden md:block h-4 w-4 text-[var(--fg-tertiary)] shrink-0 mt-1 transition-transform group-hover:translate-x-1" />
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
