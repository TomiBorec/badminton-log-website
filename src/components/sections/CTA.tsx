'use client';

import { APPSTORE_URL } from '@/components/constants';
import { AppleGlyph } from '@/components/icons';
import { Reveal } from '@/components/Reveal';
import { useI18n } from '@/i18n';

export function CTA({ variant }: { variant: 'home' | 'features' }) {
  const { t } = useI18n();
  const copy = t.cta[variant];
  return (
    <section className="cta">
      <Reveal as="span" className="section-kicker">
        {t.cta.kicker}
      </Reveal>
      <Reveal as="h2">{copy.title}</Reveal>
      <Reveal as="p">{copy.subtitle}</Reveal>
      <Reveal className="badges">
        <a className="app-store-badge" href={APPSTORE_URL} target="_blank" rel="noopener noreferrer">
          <AppleGlyph />
          <span className="t">
            <small>{t.cta.downloadSmall}</small>
            <b>{t.cta.appStore}</b>
          </span>
        </a>
      </Reveal>
    </section>
  );
}
