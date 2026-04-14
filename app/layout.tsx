import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import { GoogleAnalytics } from '@next/third-parties/google';
import Footer from '@/components/Footer';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Funeral Home Directory | Find Funeral Services Nationwide",
  description: "The Evermore Directory connects families with trusted funeral homes and cremation services across all 50 states. Find compassionate funeral services near you.",
  alternates: {
    canonical: "https://funeralhomedirectories.com",
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="color-scheme" content="light" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Organization","name":"Evermore Directory","url":"https://funeralhomedirectories.com","logo":"https://funeralhomedirectories.com/logo.png","description":"The most comprehensive funeral home directory in the United States. 4,800 plus funeral homes across all 50 states with real pricing data and planning resources for families.","founder":{"@type":"Person","name":"Terry Feely","jobTitle":"Founder","description":"Former firefighter and paramedic"},"address":{"@type":"PostalAddress","addressLocality":"Brentwood","addressRegion":"TN","addressCountry":"US"},"contactPoint":{"@type":"ContactPoint","email":"listings@funeralhomedirectories.com","contactType":"customer service"}}) }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Footer />
        <Analytics />
        <GoogleAnalytics gaId="G-S3GRCTG9CF" />
      </body>
    </html>
  );
}
