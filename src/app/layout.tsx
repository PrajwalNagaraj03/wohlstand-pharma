import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'WohlStand Pharma Private Limited | B2B Pharma Research & Cosmetic Formulation',
    template: '%s | WohlStand Pharma Private Limited',
  },
  description:
    'WohlStand Pharma Private Limited is an R&D-led B2B partner for pharma research, cosmetic formulation, small-scale cosmetic manufacturing, and white-label cosmetic development.',
  keywords: [
    'WohlStand Pharma',
    'WPPL',
    'pharma research',
    'cosmetic formulation',
    'cosmetic manufacturing',
    'white label cosmetics',
    'private label cosmetics',
    'sports cosmetics research',
    'B2B pharma',
    'B2B cosmetics',
    'Karnataka pharmaceutical',
    'Harohalli pharma',
  ],
  authors: [{ name: 'WohlStand Pharma Private Limited' }],
  openGraph: {
    title: 'WohlStand Pharma Private Limited',
    description:
      'An R&D-led B2B partner for pharma research, cosmetic formulation, small-scale cosmetic manufacturing, and white-label development.',
    url: 'https://wohlstandpharma.com',
    siteName: 'WohlStand Pharma Private Limited',
    images: [
      {
        url: 'https://wohlstandpharma.com/wp-content/uploads/2024/06/wppl-logo-web.jpg',
        width: 2100,
        height: 706,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org/',
    '@type': 'Organization',
    '@id': 'https://wohlstandpharma.com#Organization',
    name: 'WohlStand Pharma Private Limited',
    url: 'https://wohlstandpharma.com',
    logo: 'https://wohlstandpharma.com/wp-content/uploads/2024/06/wppl-final-logo-v12.svg',
    description:
      'An R&D-led B2B company focused on pharma research, cosmetic formulation, small-scale cosmetic manufacturing, and white-label cosmetic development.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Harohalli Industrial Area',
      addressLocality: 'Ramanagara District',
      addressRegion: 'Karnataka',
      addressCountry: 'India',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Business Development',
      email: 'info@wohlstandpharma.com',
      availableLanguage: 'English',
    },
  };

  return (
    <html lang="en-US" data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
