'use client';

import { LANGS } from './state';
import { useI18n } from '@/i18n';

/** Compact CZ / EN segmented switch. Mirrors the sport switcher's pill styling. */
export function LangSwitch() {
  const { lang, setLang, t } = useI18n();
  return (
    <div className="lang-switch" role="group" aria-label={t.langSwitch.aria}>
      {LANGS.map((l) => (
        <button
          key={l}
          type="button"
          className={`lang-pill${lang === l ? ' active' : ''}`}
          aria-pressed={lang === l}
          title={l === 'cs' ? t.langSwitch.csTitle : t.langSwitch.enTitle}
          onClick={() => setLang(l)}
        >
          {l === 'cs' ? t.langSwitch.cs : t.langSwitch.en}
        </button>
      ))}
    </div>
  );
}
