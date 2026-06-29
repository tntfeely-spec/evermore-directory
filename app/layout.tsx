import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import { GoogleAnalytics } from '@next/third-parties/google';
import Footer from '@/components/Footer';
import StickyLeadButton from '@/components/StickyLeadButton';
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
        <script data-grow-initializer="" dangerouslySetInnerHTML={{
          __html: `!(function(){window.growMe||((window.growMe=function(e){window.growMe._.push(e);}),(window.growMe._=[]));var e=document.createElement("script");(e.type="text/javascript"),(e.src="https://faves.grow.me/main.js"),(e.defer=!0),e.setAttribute("data-grow-faves-site-id","U2l0ZTpkM2Y0YzhlMi05MzQzLTQzNDUtYmY2OS01NmFhNmNlM2U2Yzk=");var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t);})();`,
        }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Organization","name":"Evermore Directory","url":"https://funeralhomedirectories.com","logo":"https://funeralhomedirectories.com/logo.png","description":"The most comprehensive funeral home directory in the United States. 7,395 plus funeral homes and cremation providers across all 50 states with real pricing data and planning resources for families.","founder":{"@type":"Person","name":"Terry Feely","jobTitle":"Founder","description":"Former firefighter and paramedic"},"address":{"@type":"PostalAddress","addressLocality":"Brentwood","addressRegion":"TN","addressCountry":"US"},"contactPoint":{"@type":"ContactPoint","email":"listings@funeralhomedirectories.com","contactType":"customer service"}}) }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Footer />
        <StickyLeadButton />
        <Analytics />
        <GoogleAnalytics gaId="G-S3GRCTG9CF" />
      </body>
    </html>
  );
}
