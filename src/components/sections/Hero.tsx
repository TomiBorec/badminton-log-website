'use client';

import { APPSTORE_URL } from '@/components/constants';
import { AppleGlyph } from '@/components/icons';
import { HeroStage } from '@/components/match/MatchDevices';
import { useI18n } from '@/i18n';

export function Hero() {
  const { t } = useI18n();
  return (
    <header className="hero">
      <div>
        <span className="eyebrow">
          <span className="tick">{t.hero.eyebrowTick}</span> · {t.hero.eyebrow}
        </span>
        <h1>{t.hero.title}</h1>
        <p className="hero-lead">{t.hero.lead}</p>
        <p className="hero-sub">{t.hero.sub}</p>
        <div className="hero-cta">
          <a className="btn btn-primary" href={APPSTORE_URL} target="_blank" rel="noopener noreferrer">
            <AppleGlyph width={17} height={17} />
            {t.hero.download}
          </a>
          <a className="btn btn-ghost" href="#sports">
            {t.hero.see}
          </a>
        </div>
        <div className="hero-stats">
          <div className="hero-stat">
            <div className="v">5</div>
            <div className="l">{t.hero.stats.sports}</div>
          </div>
          <div className="hero-stat">
            <div className="v">&lt;1s</div>
            <div className="l">{t.hero.stats.sync}</div>
          </div>
          <div className="hero-stat">
            <div className="v">0</div>
            <div className="l">{t.hero.stats.accounts}</div>
          </div>
        </div>
      </div>

      <HeroStage />
    </header>
  );
}
