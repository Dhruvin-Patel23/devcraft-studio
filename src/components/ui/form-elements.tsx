import { forwardRef, InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

// ─── Input ──────────────────────────────────────────────

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, hint, id, ...props }, ref) => {
    return (
      <div className="space-y-1.5">
        {label && (
          <label htmlFor={id} className="block text-sm font-medium text-[var(--fg)]">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={id}
          className={cn(
            'flex h-10 w-full rounded-lg border border-[var(--border)] bg-[var(--bg)] px-3 text-sm text-[var(--fg)]',
            'placeholder:text-[var(--fg-tertiary)]',
            'focus:outline-none focus:ring-2 focus:ring-[var(--ring)] focus:border-transparent',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            'transition-colors',
            error && 'border-[var(--color-accent-red)] focus:ring-[var(--color-accent-red)]',
            className
          )}
          aria-invalid={error ? 'true' : undefined}
          aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : undefined}
          {...props}
        />
        {error && (
          <p id={`${id}-error`} className="text-sm text-[var(--color-accent-red)]" role="alert">
            {error}
          </p>
        )}
        {hint && !error && (
          <p id={`${id}-hint`} className="text-sm text-[var(--fg-tertiary)]">
            {hint}
          </p>
        )}
      </div>
    );
  }
);
Input.displayName = 'Input';

// ─── Textarea ───────────────────────────────────────────

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  hint?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, hint, id, ...props }, ref) => {
    return (
      <div className="space-y-1.5">
        {label && (
          <label htmlFor={id} className="block text-sm font-medium text-[var(--fg)]">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={id}
          className={cn(
            'flex min-h-[120px] w-full rounded-lg border border-[var(--border)] bg-[var(--bg)] px-3 py-2.5 text-sm text-[var(--fg)]',
            'placeholder:text-[var(--fg-tertiary)]',
            'focus:outline-none focus:ring-2 focus:ring-[var(--ring)] focus:border-transparent',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            'resize-y transition-colors',
            error && 'border-[var(--color-accent-red)] focus:ring-[var(--color-accent-red)]',
            className
          )}
          aria-invalid={error ? 'true' : undefined}
          aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : undefined}
          {...props}
        />
        {error && (
          <p id={`${id}-error`} className="text-sm text-[var(--color-accent-red)]" role="alert">
            {error}
          </p>
        )}
        {hint && !error && (
          <p id={`${id}-hint`} className="text-sm text-[var(--fg-tertiary)]">
            {hint}
          </p>
        )}
      </div>
    );
  }
);
Textarea.displayName = 'Textarea';

// ─── Select ─────────────────────────────────────────────

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  hint?: string;
  options: { value: string; label: string }[];
  placeholder?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, hint, id, options, placeholder, ...props }, ref) => {
    return (
      <div className="space-y-1.5">
        {label && (
          <label htmlFor={id} className="block text-sm font-medium text-[var(--fg)]">
            {label}
          </label>
        )}
        <select
          ref={ref}
          id={id}
          className={cn(
            'flex h-10 w-full rounded-lg border border-[var(--border)] bg-[var(--bg)] px-3 text-sm text-[var(--fg)]',
            'focus:outline-none focus:ring-2 focus:ring-[var(--ring)] focus:border-transparent',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            'transition-colors appearance-none cursor-pointer',
            'bg-[url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2371717a%22%20stroke-width%3D%222%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%2F%3E%3C%2Fsvg%3E")] bg-[length:12px] bg-[right_12px_center] bg-no-repeat',
            error && 'border-[var(--color-accent-red)] focus:ring-[var(--color-accent-red)]',
            className
          )}
          aria-invalid={error ? 'true' : undefined}
          aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : undefined}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && (
          <p id={`${id}-error`} className="text-sm text-[var(--color-accent-red)]" role="alert">
            {error}
          </p>
        )}
        {hint && !error && (
          <p id={`${id}-hint`} className="text-sm text-[var(--fg-tertiary)]">
            {hint}
          </p>
        )}
      </div>
    );
  }
);
Select.displayName = 'Select';

// ─── Card ───────────────────────────────────────────────

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

function Card({ children, className, hover = false, padding = 'md' }: CardProps) {
  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <div
      className={cn(
        'rounded-xl border border-[var(--border)] bg-[var(--bg)]',
        hover && 'transition-all duration-200 hover:border-[var(--border-hover)] hover:shadow-sm',
        paddings[padding],
        className
      )}
    >
      {children}
    </div>
  );
}

export { Input, Textarea, Select, Card };
