/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ayush Chauhan — Data-Driven Developer',
  description:
    'Ayush Chauhan is a Data-Driven Developer, Data Analyst, and AI & ML Enthusiast focused on building intelligent solutions and real-world applications.',
  keywords: [
    'Ayush Chauhan',
    'Data Analyst',
    'AI',
    'Machine Learning',
    'Developer',
    'Portfolio',
  ],
  authors: [{ name: 'Ayush Chauhan' }],
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: 'Ayush Chauhan — Data-Driven Developer',
    description:
      'Turning data into intelligent solutions and real-world impact.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-zinc-900">
        {children}
      </body>
    </html>
  );
}
