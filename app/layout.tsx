import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Avery Lee — Frontend Engineer',
  description: 'Portfolio for a frontend engineer with 3 years of expertise across React, Angular, and modern web tooling.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-secondary text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
