'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: 'default' | 'secondary' | 'tertiary';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
}

export function Section({
  children,
  className,
  id,
  background = 'default',
  padding = 'lg',
}: SectionProps) {
  const backgrounds = {
    default: 'bg-[var(--bg)]',
    secondary: 'bg-[var(--bg-secondary)]',
    tertiary: 'bg-[var(--bg-tertiary)]',
  };

  const paddings = {
    sm: 'py-12 md:py-16',
    md: 'py-16 md:py-20',
    lg: 'py-20 md:py-28',
    xl: 'py-24 md:py-36',
  };

  return (
    <section id={id} className={cn(backgrounds[background], paddings[padding], className)}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeader({
  label,
  title,
  description,
  align = 'center',
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'mb-12 md:mb-16',
        align === 'center' && 'text-center mx-auto max-w-2xl',
        className
      )}
    >
      {label && (
        <p className="text-sm font-medium text-brand-500 mb-3 tracking-wide uppercase">
          {label}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--fg)]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-[var(--fg-secondary)] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

interface PageHeaderProps {
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}

export function PageHeader({ title, description, children, className }: PageHeaderProps) {
  return (
    <section className={cn('pt-32 pb-16 md:pt-40 md:pb-20 bg-[var(--bg)]', className)}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--fg)]">
            {title}
          </h1>
          {description && (
            <p className="mt-4 text-lg md:text-xl text-[var(--fg-secondary)] leading-relaxed">
              {description}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
