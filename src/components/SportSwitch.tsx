'use client';

import { SPORTS, type Sport, useAppState } from './state';
import { SportIcon } from './icons';

const LABELS: Record<Sport, string> = {
  badminton: 'Badminton',
  tennis: 'Tennis',
  basketball: 'Basketball',
  football: 'Football',
  golf: 'Golf',
};

/**
 * Segmented sport switcher. Selecting a sport re-tints every `--accent*` token
 * (via [data-sport] on <html>) and resets the live-match previews.
 */
export function SportSwitch() {
  const { sport, setSport } = useAppState();
  return (
    <div className="sport-switch" role="tablist" aria-label="Choose a sport">
      {SPORTS.map((s) => (
        <button
          key={s}
          type="button"
          role="tab"
          aria-selected={sport === s}
          className={`sport-pill${sport === s ? ' active' : ''}`}
          onClick={() => setSport(s)}
        >
          <SportIcon sport={s} className="si" />
          {LABELS[s]}
        </button>
      ))}
    </div>
  );
}
