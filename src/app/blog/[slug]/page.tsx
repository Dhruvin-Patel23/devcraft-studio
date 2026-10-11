import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { FadeIn } from '@/components/ui/motion';
import { blogPosts } from '@/data/seed';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.metaTitle ?? `${post.title} — DevCraft Studio Blog`,
    description: post.metaDescription ?? post.excerpt,
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  // Render simple markdown-ish content
  const paragraphs = post.content
    .split('\n\n')
    .map((block) => block.trim())
    .filter(Boolean);

  return (
    <main className="pt-24 pb-24">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        {/* Back */}
        <FadeIn>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-[var(--fg-secondary)] hover:text-[var(--fg)] transition-colors mb-10 group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            All posts
          </Link>
        </FadeIn>

        {/* Header */}
        <FadeIn delay={0.05}>
          <header className="mb-10">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge variant="default">{post.category.replace('_', ' ')}</Badge>
              <span className="flex items-center gap-1 text-xs text-[var(--fg-tertiary)]">
                <Clock className="h-3 w-3" />
                {post.readingTime} min read
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-[var(--fg)] tracking-tight mb-5 leading-tight">
              {post.title}
            </h1>
            <p className="text-lg text-[var(--fg-secondary)] leading-relaxed mb-6">
              {post.excerpt}
            </p>

            {/* Author + date */}
            <div className="flex items-center gap-3 pt-5 border-t border-[var(--border)]">
              <div className="relative h-10 w-10 rounded-xl overflow-hidden bg-[var(--bg-tertiary)] border border-[var(--border)] shrink-0">
                {post.author.image ? (
                  <Image
                    src={post.author.image}
                    alt={post.author.name}
                    fill
                    className="object-cover object-top"
                    sizes="40px"
                  />
                ) : (
                  <div className="h-full w-full flex items-center justify-center text-sm font-bold text-[var(--fg-secondary)]">
                    {post.author.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                )}
              </div>
              <div>
                <Link
                  href={`/team/${post.author.slug}`}
                  className="text-sm font-semibold text-[var(--fg)] hover:underline"
                >
                  {post.author.name}
                </Link>
                <p className="text-xs text-[var(--fg-tertiary)]">{post.author.role}</p>
              </div>
              <div className="ml-auto flex items-center gap-1 text-xs text-[var(--fg-tertiary)]">
                <Calendar className="h-3 w-3" />
                {post.publishedAt ? formatDate(post.publishedAt) : ''}
              </div>
            </div>
          </header>
        </FadeIn>

        {/* Cover placeholder */}
        <FadeIn delay={0.1}>
          <div className="w-full h-52 rounded-2xl border border-[var(--border)] bg-[var(--bg-secondary)] flex items-center justify-center text-5xl font-bold text-[var(--fg-tertiary)] mb-10">
            {post.title.charAt(0)}
          </div>
        </FadeIn>

        {/* Content */}
        <FadeIn delay={0.15}>
          <article className="prose-custom">
            {paragraphs.map((block, idx) => {
              if (block.startsWith('## ')) {
                return (
                  <h2 key={idx} className="text-xl font-bold text-[var(--fg)] mt-8 mb-3">
                    {block.replace('## ', '')}
                  </h2>
                );
              }
              if (block.startsWith('### ')) {
                return (
                  <h3 key={idx} className="text-base font-semibold text-[var(--fg)] mt-6 mb-2">
                    {block.replace('### ', '')}
                  </h3>
                );
              }
              return (
                <p key={idx} className="text-[var(--fg-secondary)] leading-relaxed mb-4">
                  {block}
                </p>
              );
            })}
          </article>
        </FadeIn>

        {/* Tags */}
        {post.tags.length > 0 && (
          <FadeIn delay={0.2}>
            <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-[var(--border)]">
              {post.tags.map((tag) => (
                <Badge key={tag.id} variant="outline">
                  #{tag.name}
                </Badge>
              ))}
            </div>
          </FadeIn>
        )}

        {/* Author card */}
        <FadeIn delay={0.2}>
          <div className="mt-10 p-6 rounded-2xl border border-[var(--border)] bg-[var(--bg-secondary)]">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--fg-tertiary)] mb-4">
              Written by
            </p>
            <div className="flex items-center gap-4">
              <div className="relative h-14 w-14 rounded-xl overflow-hidden bg-[var(--bg-tertiary)] border border-[var(--border)] shrink-0">
                {post.author.image ? (
                  <Image
                    src={post.author.image}
                    alt={post.author.name}
                    fill
                    className="object-cover object-top"
                    sizes="56px"
                  />
                ) : (
                  <div className="h-full w-full flex items-center justify-center text-lg font-bold text-[var(--fg-secondary)]">
                    {post.author.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                )}
              </div>
              <div>
                <Link
                  href={`/team/${post.author.slug}`}
                  className="text-base font-semibold text-[var(--fg)] hover:underline"
                >
                  {post.author.name}
                </Link>
                <p className="text-sm text-[var(--fg-secondary)]">{post.author.role}</p>
                <p className="text-sm text-[var(--fg-secondary)] mt-1">{post.author.shortBio}</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
