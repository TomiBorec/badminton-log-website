'use client';

import { Reveal } from '@/components/Reveal';
import { useI18n } from '@/i18n';

export function HowItWorks() {
  const { t } = useI18n();
  const h = t.howItWorks;
  return (
    <section className="section">
      <Reveal className="section-head">
        <span className="section-kicker">{h.kicker}</span>
        <h2>{h.heading}</h2>
      </Reveal>
      <div className="steps">
        <Reveal className="step">
          <div className="bar" />
          <h3>{h.steps[0].title}</h3>
          <p>{h.steps[0].body}</p>
        </Reveal>
        <Reveal className="step" delay={80}>
          <div className="bar" />
          <h3>{h.steps[1].title}</h3>
          <p>{h.steps[1].body}</p>
        </Reveal>
        <Reveal className="step" delay={160}>
          <div className="bar" />
          <h3>{h.steps[2].title}</h3>
          <p>{h.steps[2].body}</p>
        </Reveal>
      </div>
    </section>
  );
}
