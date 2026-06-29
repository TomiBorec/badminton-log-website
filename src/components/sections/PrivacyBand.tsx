'use client';

import Link from 'next/link';
import { Reveal } from '@/components/Reveal';
import { useI18n } from '@/i18n';

export function PrivacyBand() {
  const { t } = useI18n();
  const p = t.privacyBand;
  return (
    <section className="privacy-band">
      <div className="privacy-inner">
        <Reveal className="section-head">
          <span className="section-kicker">{p.kicker}</span>
          <h2>{p.heading}</h2>
          <p>{p.body}</p>
          <Link className="btn btn-outline btn-sm" href="/privacy" style={{ marginTop: 24 }}>
            {p.cta}
          </Link>
        </Reveal>

        <Reveal className="privacy-points" delay={80}>
          <div className="ppoint">
            <div className="pi">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="10" width="16" height="11" rx="2" />
                <path d="M8 10V7a4 4 0 0 1 8 0v3" />
              </svg>
            </div>
            <div>
              <h4>{p.points[0].title}</h4>
              <p>{p.points[0].body}</p>
            </div>
          </div>
          <div className="ppoint">
            <div className="pi">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 15a4 4 0 0 1 4-4h10a4 4 0 0 1 0 8H7a4 4 0 0 1-4-4z" />
                <path d="M12 11V4M9 7l3-3 3 3" />
              </svg>
            </div>
            <div>
              <h4>{p.points[1].title}</h4>
              <p>{p.points[1].body}</p>
            </div>
          </div>
          <div className="ppoint">
            <div className="pi">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3 4 6v6c0 5 3.5 7.5 8 9 4.5-1.5 8-4 8-9V6l-8-3z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <div>
              <h4>{p.points[2].title}</h4>
              <p>{p.points[2].body}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
