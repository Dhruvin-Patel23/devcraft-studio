import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'secondary' | 'primary' | 'success' | 'warning' | 'danger' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
}

export function Badge({ children, variant = 'default', size = 'sm', className }: BadgeProps) {
  const variants = {
    default: 'bg-[var(--bg-tertiary)] text-[var(--fg-secondary)]',
    secondary: 'bg-[var(--bg-tertiary)] text-[var(--fg-secondary)] border border-[var(--border)]',
    primary: 'bg-brand-100 text-brand-700 dark:bg-brand-900 dark:text-brand-200',
    success: 'bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300',
    warning: 'bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300',
    danger: 'bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300',
    outline: 'border border-[var(--border)] text-[var(--fg-secondary)] bg-transparent',
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-sm',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center font-medium rounded-md',
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </span>
  );
}
