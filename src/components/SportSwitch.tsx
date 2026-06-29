'use client';

import { SPORTS, useAppState } from './state';
import { SportIcon } from './icons';
import { useI18n } from '@/i18n';

/**
 * Segmented sport switcher. Selecting a sport re-tints every `--accent*` token
 * (via [data-sport] on <html>) and resets the live-match previews.
 */
export function SportSwitch() {
  const { sport, setSport } = useAppState();
  const { t } = useI18n();
  return (
    <div className="sport-switch" role="tablist" aria-label={t.switchStrip.hint}>
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
          {t.sports[s]}
        </button>
      ))}
    </div>
  );
}
