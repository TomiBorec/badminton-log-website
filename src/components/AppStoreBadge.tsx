'use client';

import { useAppState } from '@/components/state';
import { APPSTORE_URL } from '@/components/constants';

export function AppStoreBadge() {
  const { theme } = useAppState();
  const src = theme === 'dark' ? '/badge-dark.svg' : '/badge-light.svg';
  return (
    <a href={APPSTORE_URL} target="_blank" rel="noopener noreferrer" className="app-store-badge-link">
      <img src={src} alt="Download on the App Store" width={120} height={40} />
    </a>
  );
}
