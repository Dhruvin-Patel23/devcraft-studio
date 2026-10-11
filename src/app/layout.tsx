import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { generateOrganizationSchema } from '@/lib/seo';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'DevCraft Studio — Full-Stack Development Studio',
    template: '%s | DevCraft Studio',
  },
  description:
    'A 3-person full-stack development studio that designs and builds modern digital products. We specialize in web applications, SaaS platforms, and custom software solutions.',
  keywords: [
    'web development',
    'full-stack development',
    'SaaS development',
    'web applications',
    'software development studio',
    'React',
    'Next.js',
    'TypeScript',
  ],
  authors: [{ name: 'DevCraft Studio' }],
  creator: 'DevCraft Studio',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: '/',
    siteName: 'DevCraft Studio',
    title: 'DevCraft Studio — Full-Stack Development Studio',
    description:
      'A 3-person full-stack development studio that designs and builds modern digital products.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DevCraft Studio — Full-Stack Development Studio',
    description:
      'A 3-person full-stack development studio that designs and builds modern digital products.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateOrganizationSchema()),
          }}
        />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
