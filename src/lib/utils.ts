import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date | string): string {
  return new Date(date).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length).trim() + '...';
}

export function estimateReadingTime(text: string): number {
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / wordsPerMinute));
}

export function formatBudget(budget: string): string {
  const budgetMap: Record<string, string> = {
    UNDER_25K: 'Under ₹25,000',
    FROM_25K_TO_50K: '₹25,000 – ₹50,000',
    FROM_50K_TO_1L: '₹50,000 – ₹1,00,000',
    ABOVE_1L: '₹1,00,000+',
    NOT_SURE: 'Not sure yet',
  };
  return budgetMap[budget] || budget;
}

export function formatProjectType(type: string): string {
  const typeMap: Record<string, string> = {
    WEBSITE: 'Website',
    WEB_APP: 'Web Application',
    SAAS: 'SaaS Platform',
    ECOMMERCE: 'E-commerce',
    API: 'API Development',
    AI: 'AI Integration',
    OTHER: 'Other',
  };
  return typeMap[type] || type;
}

export function formatInquiryStatus(status: string): string {
  const statusMap: Record<string, string> = {
    NEW: 'New',
    CONTACTED: 'Contacted',
    IN_DISCUSSION: 'In Discussion',
    WON: 'Won',
    LOST: 'Lost',
    ARCHIVED: 'Archived',
  };
  return statusMap[status] || status;
}

export function getInitials(name: string): string {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

export function absoluteUrl(path: string): string {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  return `${siteUrl}${path}`;
}
