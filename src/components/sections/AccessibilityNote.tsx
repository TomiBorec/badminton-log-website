'use client';

import Link from 'next/link';
import { Reveal } from '@/components/Reveal';
import { useI18n } from '@/i18n';

export function AccessibilityNote() {
  const { t } = useI18n();
  const a = t.a11yNote;
  return (
    <section className="a11y-note" id="accessibility">
      <Reveal as="span" className="section-kicker">
        {a.kicker}
      </Reveal>
      <Reveal as="h2">{a.heading}</Reveal>
      <Reveal as="p">{a.body}</Reveal>
      <Reveal className="a11y-pills">
        {a.pills.map((f) => (
          <span key={f} className="a11y-pill">
            {f}
          </span>
        ))}
      </Reveal>
      <Reveal>
        <Link className="btn btn-outline btn-sm" href="/accessibility">
          {a.cta}
        </Link>
      </Reveal>
    </section>
  );
}
