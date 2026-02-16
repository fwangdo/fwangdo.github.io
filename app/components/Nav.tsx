'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/projects', label: 'Projects' },
  { href: '/publications', label: 'Publications' },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-2xl items-center justify-between px-6 py-3">
        <Link href="/" className="font-bold tracking-tight">
          Doyeon Hwang
        </Link>
        <div className="flex gap-4 text-sm">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={
                pathname === href
                  ? 'text-gray-900 font-medium'
                  : 'text-gray-500 hover:text-gray-900 transition-colors'
              }
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
