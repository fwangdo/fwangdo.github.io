import type { Metadata } from 'next';
import './globals.css';
import Nav from './components/Nav';

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
      <body className="bg-white text-gray-900 antialiased">
        <Nav />
        <main className="mx-auto max-w-2xl px-6 py-16 md:py-24">
          {children}
        </main>
        <footer className="border-t border-gray-200 mx-auto max-w-2xl px-6 py-6 text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Doyeon Hwang
        </footer>
      </body>
    </html>
  );
}
