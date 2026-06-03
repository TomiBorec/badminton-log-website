import type { Metadata } from 'next';
import { Faq } from '@/components/Faq';
import { APPSTORE_URL, REPO_URL, SUPPORT_EMAIL } from '@/components/constants';

export const metadata: Metadata = {
  title: 'Support — Scorius',
  description:
    'Scorius support and frequently asked questions. Devices, sports, iCloud sync, Apple Watch, golf course search and feedback.',
};

export default function SupportPage() {
  return (
    <>
      <header className="page-hero">
        <span className="section-kicker">Support</span>
        <h1>Questions? Answered.</h1>
        <p className="lead">
          The quick answers to the things people ask most. Can&apos;t find it? Send feedback straight from the app.
        </p>
      </header>

      <Faq />

      <div className="contact-band" id="contact">
        <div className="contact-card">
          <div>
            <h3>Still stuck?</h3>
            <p>
              Email <strong>{SUPPORT_EMAIL}</strong>, tap <strong>Settings → Give Feedback</strong> inside the app, or
              open an issue on the project repo.
            </p>
          </div>
          <div className="hero-cta" style={{ margin: 0 }}>
            <a className="btn btn-primary" href={`mailto:${SUPPORT_EMAIL}`}>
              Email support
            </a>
            <a className="btn btn-outline" href={APPSTORE_URL} target="_blank" rel="noopener noreferrer">
              App Store
            </a>
            <a className="btn btn-outline" href={REPO_URL} target="_blank" rel="noopener noreferrer">
              Open an issue
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
