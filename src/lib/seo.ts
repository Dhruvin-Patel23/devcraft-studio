import { Metadata } from 'next';
import { absoluteUrl } from './utils';

const siteName = process.env.NEXT_PUBLIC_SITE_NAME || 'DevCraft Studio';
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: 'website' | 'article';
  publishedAt?: string;
  updatedAt?: string;
  authors?: string[];
  noIndex?: boolean;
}

export function generateMetadata({
  title,
  description = 'A 3-person full-stack development studio that designs and builds modern digital products. We specialize in web applications, SaaS platforms, and custom software solutions.',
  path = '',
  image,
  type = 'website',
  publishedAt,
  updatedAt,
  authors,
  noIndex = false,
}: SEOProps = {}): Metadata {
  const pageTitle = title ? `${title} | ${siteName}` : `${siteName} — Full-Stack Development Studio`;
  const url = absoluteUrl(path);
  const ogImage = image || absoluteUrl('/og-image.png');

  return {
    title: pageTitle,
    description,
    ...(noIndex && { robots: { index: false, follow: false } }),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: pageTitle,
      description,
      url,
      siteName,
      type,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
      ...(publishedAt && { publishedTime: publishedAt }),
      ...(updatedAt && { modifiedTime: updatedAt }),
      ...(authors && { authors }),
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description,
      images: [ogImage],
    },
  };
}

// JSON-LD structured data generators

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteName,
    url: siteUrl,
    logo: absoluteUrl('/logo.png'),
    description:
      'A 3-person full-stack development studio that designs and builds modern digital products.',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'hello@devcraftstudio.com',
      contactType: 'customer service',
    },
    sameAs: [],
  };
}

export function generatePersonSchema(person: {
  name: string;
  role: string;
  url: string;
  image?: string;
  github?: string;
  linkedin?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: person.name,
    jobTitle: person.role,
    url: absoluteUrl(person.url),
    ...(person.image && { image: person.image }),
    worksFor: {
      '@type': 'Organization',
      name: siteName,
    },
    sameAs: [person.github, person.linkedin].filter(Boolean),
  };
}

export function generateArticleSchema(article: {
  title: string;
  description: string;
  url: string;
  image?: string;
  publishedAt: string;
  updatedAt?: string;
  author: { name: string; url: string };
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    url: absoluteUrl(article.url),
    ...(article.image && { image: article.image }),
    datePublished: article.publishedAt,
    ...(article.updatedAt && { dateModified: article.updatedAt }),
    author: {
      '@type': 'Person',
      name: article.author.name,
      url: absoluteUrl(article.author.url),
    },
    publisher: {
      '@type': 'Organization',
      name: siteName,
      logo: {
        '@type': 'ImageObject',
        url: absoluteUrl('/logo.png'),
      },
    },
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.url),
    })),
  };
}

export function generateServiceSchema(service: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    url: absoluteUrl(service.url),
    provider: {
      '@type': 'Organization',
      name: siteName,
    },
  };
}

export function generateFAQSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
