import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import FooterSection from '@/components/share/FooterSection';
import HeaderSection from '@/components/share/HeaderSection';
import NextTopLoader from 'nextjs-toploader';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Sampli',
  description:
    "Sampli is a platform that helps you understand your product's true market potential.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <NextTopLoader />
        <HeaderSection />
        <div>{children}</div>
        <FooterSection />
      </body>
    </html>
  );
}
