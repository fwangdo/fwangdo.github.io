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
      <body className="min-h-screen bg-stone-50 text-gray-900 antialiased">
        <Nav />
        <main className="mx-auto max-w-5xl px-5 py-12 md:px-8 md:py-20">
          {children}
        </main>
        <footer className="mx-auto max-w-5xl border-t border-gray-200 px-5 py-8 text-sm text-gray-400 md:px-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <span>&copy; {new Date().getFullYear()} Doyeon Hwang</span>
            <span>Program analysis, compilers, and solver testing</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
