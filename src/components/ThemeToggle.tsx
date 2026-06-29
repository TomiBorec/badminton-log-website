'use client';

import { useAppState } from './state';
import { MoonIcon, SunIcon } from './icons';
import { useI18n } from '@/i18n';

export function ThemeToggle() {
  const { theme, toggleTheme } = useAppState();
  const { t } = useI18n();
  const dark = theme === 'dark';
  const label = dark ? t.themeToggle.toLight : t.themeToggle.toDark;
  return (
    <button
      type="button"
      className="theme-btn"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
    >
      {dark ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}
