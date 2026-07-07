'use client';

import { Reveal } from '@/components/Reveal';
import { AppStoreBadge } from '@/components/AppStoreBadge';
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
      <Reveal>
        <AppStoreBadge />
      </Reveal>
    </section>
  );
}
