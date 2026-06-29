'use client';

import Link from 'next/link';
import { Reveal } from '@/components/Reveal';
import { MatchWatch } from '@/components/match/MatchDevices';
import { useI18n } from '@/i18n';

export function Features() {
  const { t } = useI18n();
  const f = t.features;
  return (
    <section className="section" id="features">
      <Reveal className="section-head">
        <span className="section-kicker">{f.kicker}</span>
        <h2>{f.heading}</h2>
      </Reveal>

      {/* spotlight: score from wrist */}
      <Reveal className="spotlight">
        <div className="stext">
          <span className="section-kicker">{f.spotlight.kicker}</span>
          <h3>{f.spotlight.title}</h3>
          <p>{f.spotlight.body}</p>
          <div className="hero-cta" style={{ marginTop: 24 }}>
            <Link className="btn btn-outline btn-sm" href="/features">
              {f.spotlight.cta}
            </Link>
          </div>
        </div>
        <div className="swatch-row">
          <MatchWatch style={{ transform: 'scale(1.15)' }} />
        </div>
      </Reveal>

      {/* grid */}
      <div className="feat-grid">
        <Reveal className="card hover">
          <div className="ico">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="14" rx="2" />
              <path d="M8 21h8M12 18v3M7 9l2.5 2.5L7 14M13 14h4" />
            </svg>
          </div>
          <h3>{f.cards[0].title}</h3>
          <p>{f.cards[0].body}</p>
        </Reveal>

        <Reveal className="card hover" delay={60}>
          <div className="ico">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 15a4 4 0 0 1 4-4h10a4 4 0 0 1 0 8H7a4 4 0 0 1-4-4z" />
              <path d="M7 11a4 4 0 0 1 4-4h6a4 4 0 0 0-4-4H9" />
            </svg>
          </div>
          <h3>{f.cards[1].title}</h3>
          <p>{f.cards[1].body}</p>
        </Reveal>

        <Reveal className="card hover" delay={120}>
          <div className="ico">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 12h3l2-5 4 10 2-5h7" />
            </svg>
          </div>
          <h3>{f.cards[2].title}</h3>
          <p>{f.cards[2].body}</p>
        </Reveal>

        <Reveal className="card hover wide">
          <div className="ico">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 19V9M9 19V5M14 19v-7M19 19v-11" />
            </svg>
          </div>
          <h3>{f.cards[3].title}</h3>
          <p>{f.cards[3].body}</p>
        </Reveal>

        <Reveal className="card hover" delay={60}>
          <div className="ico">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 21s-7-4.3-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.7-7 10-7 10z" />
            </svg>
          </div>
          <h3>{f.cards[4].title}</h3>
          <p>{f.cards[4].body}</p>
        </Reveal>
      </div>
    </section>
  );
}
