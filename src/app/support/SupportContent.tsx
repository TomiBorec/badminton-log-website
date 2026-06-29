'use client';

import { Faq } from '@/components/Faq';
import { APPSTORE_URL, REPO_URL, SUPPORT_EMAIL } from '@/components/constants';
import { useI18n } from '@/i18n';

export function SupportContent() {
  const { t } = useI18n();
  const s = t.pages.support;
  return (
    <>
      <header className="page-hero">
        <span className="section-kicker">{s.kicker}</span>
        <h1>{s.title}</h1>
        <p className="lead">{s.lead}</p>
      </header>

      <Faq />

      <div className="contact-band" id="contact">
        <div className="contact-card">
          <div>
            <h3>{s.contactTitle}</h3>
            <p>{s.contactBody}</p>
          </div>
          <div className="hero-cta" style={{ margin: 0 }}>
            <a className="btn btn-primary" href={`mailto:${SUPPORT_EMAIL}`}>
              {s.emailSupport}
            </a>
            <a className="btn btn-outline" href={APPSTORE_URL} target="_blank" rel="noopener noreferrer">
              {s.appStore}
            </a>
            <a className="btn btn-outline" href={REPO_URL} target="_blank" rel="noopener noreferrer">
              {s.openIssue}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
