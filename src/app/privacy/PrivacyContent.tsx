'use client';

import { useI18n } from '@/i18n';

export function PrivacyContent() {
  const { t } = useI18n();
  const p = t.pages.privacy;
  return (
    <>
      <header className="page-hero">
        <span className="section-kicker">{p.kicker}</span>
        <h1>{p.title}</h1>
        <p className="lead">{p.lead}</p>
        <p className="meta">{p.meta}</p>
      </header>

      <article className="article">{p.article}</article>
    </>
  );
}
