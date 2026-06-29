'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Brand } from './Brand';
import { ThemeToggle } from './ThemeToggle';
import { LangSwitch } from './LangSwitch';
import { APPSTORE_URL } from './constants';
import { useI18n } from '@/i18n';

export function Nav() {
  const pathname = usePathname();
  const { t } = useI18n();
  const active = (path: string) => (pathname === path ? ' active' : '');
  return (
    <nav className="nav">
      <div className="nav-inner">
        <Brand />
        <div className="nav-links">
          <Link className={`nav-link${active('/features')}`} href="/features">
            {t.nav.features}
          </Link>
          <Link className="nav-link" href="/#sports">
            {t.nav.sports}
          </Link>
          <Link className={`nav-link${active('/support')}`} href="/support">
            {t.nav.support}
          </Link>
          <Link className={`nav-link${active('/privacy')}`} href="/privacy">
            {t.nav.privacy}
          </Link>
          <Link className={`nav-link${active('/accessibility')}`} href="/accessibility">
            {t.nav.accessibility}
          </Link>
        </div>
        <div className="nav-spacer" />
        <div className="nav-actions">
          <LangSwitch />
          <ThemeToggle />
          <a className="btn btn-primary btn-sm" href={APPSTORE_URL} target="_blank" rel="noopener noreferrer">
            {t.nav.download}
          </a>
        </div>
      </div>
    </nav>
  );
}
