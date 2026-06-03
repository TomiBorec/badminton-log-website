import type { SVGProps } from 'react';
import type { Sport } from './state';

/** Per-sport line icon used in the sport switcher and brand contexts. */
export function SportIcon({ sport, className }: { sport: Sport; className?: string }) {
  switch (sport) {
    case 'badminton':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <circle cx="12" cy="18.5" r="2.6" />
          <path d="M10.6 16.3 6 5M13.4 16.3 18 5M11.2 15.6 8.5 4.5M12.8 15.6l2.7-11.1M6 5l12 0" />
        </svg>
      );
    case 'tennis':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
          <circle cx="12" cy="12" r="9" />
          <path d="M4.5 6.5c4 2 4 9 0 11M19.5 6.5c-4 2-4 9 0 11" />
        </svg>
      );
    case 'basketball':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3v18M5.6 5.6C9 9 9 15 5.6 18.4M18.4 5.6C15 9 15 15 18.4 18.4" />
        </svg>
      );
    case 'football':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" aria-hidden>
          <circle cx="12" cy="12" r="9" />
          <path d="m12 7.5 3.2 2.3-1.2 3.7h-4L8.8 9.8 12 7.5zM12 3v4.5M19.5 9.5 15.2 9.8M16.8 16.5 14 13.5M7.2 16.5 10 13.5M4.5 9.5l4.3.3" />
        </svg>
      );
    case 'golf':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M8 21h8M8 21V4l9 3.5L8 11" />
          <circle cx="8" cy="21" r="0.4" />
        </svg>
      );
  }
}

/** Apple logo glyph for App Store buttons / badges. */
export function AppleGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M16.5 1.5c.1 1-.3 2-.9 2.7-.7.8-1.7 1.4-2.7 1.3-.1-1 .4-2 .9-2.6.7-.8 1.8-1.4 2.7-1.4zM19 17.3c-.5 1.1-.7 1.6-1.3 2.6-.9 1.4-2.1 3.1-3.6 3.1-1.4 0-1.7-.9-3.6-.9s-2.2.9-3.6.9c-1.5 0-2.7-1.6-3.5-3C1 19.6.9 15.3 2.3 13c.9-1.6 2.5-2.6 4-2.6 1.5 0 2.5 1 3.7 1 1.2 0 1.9-1 3.7-1 1.3 0 2.7.7 3.7 2-3.3 1.8-2.7 6.4 1.6 4.9z" />
    </svg>
  );
}

export function SunIcon() {
  return (
    <svg className="sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden>
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2.5v2.5M12 19v2.5M4.2 4.2l1.8 1.8M18 18l1.8 1.8M2.5 12H5M19 12h2.5M4.2 19.8 6 18M18 6l1.8-1.8" />
    </svg>
  );
}

export function MoonIcon() {
  return (
    <svg className="moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20 14.5A8 8 0 0 1 9.5 4a7 7 0 1 0 10.5 10.5z" />
    </svg>
  );
}

/** Checkmark used in feature lists. */
export function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="m5 12 5 5L20 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
