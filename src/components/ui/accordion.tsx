'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export function Accordion({ items, className }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className={cn('divide-y divide-[var(--border)]', className)}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id}>
            <button
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-[var(--fg)] cursor-pointer"
              aria-expanded={isOpen}
              aria-controls={`accordion-${item.id}`}
            >
              <span className="text-base font-medium text-[var(--fg)] pr-4">
                {item.title}
              </span>
              <ChevronDown
                className={cn(
                  'h-4 w-4 shrink-0 text-[var(--fg-tertiary)] transition-transform duration-200',
                  isOpen && 'rotate-180'
                )}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`accordion-${item.id}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2, ease: 'easeInOut' }}
                  className="overflow-hidden"
                  role="region"
                  aria-labelledby={item.id}
                >
                  <p className="pb-5 text-sm leading-relaxed text-[var(--fg-secondary)]">
                    {item.content}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
