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
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-stone-50/85 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3 md:px-8">
        <Link href="/" className="font-bold tracking-tight text-gray-950">
          Doyeon Hwang
        </Link>
        <div className="flex gap-1 rounded-full border border-gray-200 bg-white/75 p-1 text-sm shadow-sm">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={
                pathname === href
                  ? 'rounded-full bg-gray-950 px-3 py-1 text-white shadow-sm'
                  : 'rounded-full px-3 py-1 text-gray-500 transition-colors hover:text-gray-950'
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
