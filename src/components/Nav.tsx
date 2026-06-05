'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Brand } from './Brand';
import { ThemeToggle } from './ThemeToggle';
import { APPSTORE_URL } from './constants';

export function Nav() {
  const pathname = usePathname();
  const active = (path: string) => (pathname === path ? ' active' : '');
  return (
    <nav className="nav">
      <div className="nav-inner">
        <Brand />
        <div className="nav-links">
          <Link className={`nav-link${active('/features')}`} href="/features">
            Features
          </Link>
          <Link className="nav-link" href="/#sports">
            Sports
          </Link>
          <Link className={`nav-link${active('/support')}`} href="/support">
            Support
          </Link>
          <Link className={`nav-link${active('/privacy')}`} href="/privacy">
            Privacy
          </Link>
          <Link className={`nav-link${active('/accessibility')}`} href="/accessibility">
            Accessibility
          </Link>
        </div>
        <div className="nav-spacer" />
        <div className="nav-actions">
          <ThemeToggle />
          <a className="btn btn-primary btn-sm" href={APPSTORE_URL} target="_blank" rel="noopener noreferrer">
            Download
          </a>
        </div>
      </div>
    </nav>
  );
}
