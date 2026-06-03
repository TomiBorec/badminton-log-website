'use client';

import { useAppState } from './state';
import { MoonIcon, SunIcon } from './icons';

export function ThemeToggle() {
  const { theme, toggleTheme } = useAppState();
  const dark = theme === 'dark';
  return (
    <button
      type="button"
      className="theme-btn"
      onClick={toggleTheme}
      aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={dark ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      {dark ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}
