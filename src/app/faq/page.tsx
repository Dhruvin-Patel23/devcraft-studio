'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/motion';
import { faqs } from '@/data/seed';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const categories = Array.from(new Set(faqs.map((f) => f.category)));

function FaqItem({ faq }: { faq: (typeof faqs)[0] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-[var(--border)] rounded-xl overflow-hidden hover:border-[var(--border-hover)] transition-colors">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
        aria-expanded={open}
      >
        <span className="text-sm font-semibold text-[var(--fg)]">{faq.question}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0"
        >
          <ChevronDown className="h-4 w-4 text-[var(--fg-secondary)]" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 text-sm text-[var(--fg-secondary)] leading-relaxed border-t border-[var(--border)] pt-4">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FaqPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = activeCategory
    ? faqs.filter((f) => f.category === activeCategory)
    : faqs;

  return (
    <main className="pt-24 pb-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--fg-tertiary)] mb-3">
              FAQ
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-[var(--fg)] tracking-tight mb-4">
              Common questions
            </h1>
            <p className="text-lg text-[var(--fg-secondary)]">
              Everything you need to know before starting a project with us.
            </p>
          </div>
        </FadeIn>

        {/* Category filter */}
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                activeCategory === null
                  ? 'bg-[var(--fg)] text-[var(--bg)]'
                  : 'border border-[var(--border)] text-[var(--fg-secondary)] hover:text-[var(--fg)] hover:border-[var(--border-hover)]'
              }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat === activeCategory ? null : cat)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[var(--fg)] text-[var(--bg)]'
                    : 'border border-[var(--border)] text-[var(--fg-secondary)] hover:text-[var(--fg)] hover:border-[var(--border-hover)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* FAQs */}
        <StaggerContainer className="space-y-3 mb-16">
          {filtered.map((faq) => (
            <StaggerItem key={faq.id}>
              <FaqItem faq={faq} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <FadeIn>
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-secondary)] p-8 text-center">
            <h2 className="text-xl font-semibold text-[var(--fg)] mb-2">
              Still have questions?
            </h2>
            <p className="text-[var(--fg-secondary)] mb-6 text-sm">
              We&apos;re happy to answer any specific questions about your project.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--fg)] text-[var(--bg)] text-sm font-semibold hover:opacity-90 transition-opacity group"
            >
              Ask us directly
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
