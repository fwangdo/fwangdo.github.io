import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Doyeon Hwang',
  description:
    'Doyeon Hwang — Researcher in program analysis, compiler optimization, and SMT solver testing.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">{children}</body>
    </html>
  );
}
