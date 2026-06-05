import type { Metadata } from 'next';
import Link from 'next/link';
import { Reveal } from '@/components/Reveal';
import { A11yIcon, VoiceOverIcon, DarkInterfaceIcon, DifferentiateIcon, CheckIcon } from '@/components/icons';
import { SUPPORT_EMAIL } from '@/components/constants';

export const metadata: Metadata = {
  title: 'Accessibility — Scorius',
  description:
    'Scorius supports Apple accessibility features — VoiceOver, a dark interface and Differentiate Without Color — on iPhone, iPad and Apple Watch.',
};

const DEVICES = [
  { name: 'iPhone', note: 'Requires iOS 17 or later' },
  { name: 'iPad', note: 'Requires iPadOS 17 or later' },
  { name: 'Apple Watch', note: 'Requires watchOS 10 or later' },
];

const SUPPORTED = ['VoiceOver', 'Dark Interface', 'Differentiate Without Color Alone'];

export default function AccessibilityPage() {
  return (
    <>
      <header className="page-hero">
        <Reveal as="span" className="section-kicker">
          Accessibility
        </Reveal>
        <Reveal as="h1">
          Made to be used
          <br />
          by everyone.
        </Reveal>
        <Reveal as="p" className="lead">
          Scorius supports Apple&apos;s built-in accessibility features across iPhone, iPad and Apple&nbsp;Watch — so
          keeping score works the way you need it to.
        </Reveal>
      </header>

      {/* Per-device supported features — mirrors the App Store accessibility label. */}
      <section className="section" style={{ paddingTop: 24 }}>
        <div className="feat-grid">
          {DEVICES.map((d, i) => (
            <Reveal key={d.name} className="card" delay={i ? i * 60 : undefined}>
              <div className="ico">
                <A11yIcon />
              </div>
              <h3>{d.name}</h3>
              <p style={{ fontSize: 13, color: 'var(--faint)' }}>{d.note}</p>
              <ul className="a11y-list">
                {SUPPORTED.map((f) => (
                  <li key={f}>
                    <CheckIcon />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      <hr className="divider" />

      {/* What each feature means */}
      <section className="section">
        <Reveal className="section-head">
          <span className="section-kicker">What we support</span>
          <h2>Accessibility, built in.</h2>
          <p>Scorius leans on Apple&apos;s frameworks, so these work the way you already expect across the whole app.</p>
        </Reveal>
        <div className="feat-grid">
          <Reveal className="card">
            <div className="ico">
              <VoiceOverIcon />
            </div>
            <h3>VoiceOver</h3>
            <p>
              Every control — scoring, history and stats — is labelled for Apple&apos;s screen reader, so you can run a
              whole match without looking.
            </p>
          </Reveal>
          <Reveal className="card" delay={60}>
            <div className="ico">
              <DarkInterfaceIcon />
            </div>
            <h3>Dark Interface</h3>
            <p>A full dark theme that follows your system appearance — easier on the eyes courtside or in low light.</p>
          </Reveal>
          <Reveal className="card" delay={120}>
            <div className="ico">
              <DifferentiateIcon />
            </div>
            <h3>Differentiate Without Color</h3>
            <p>Scores and match states never lean on colour alone — shapes, labels and symbols carry the meaning too.</p>
          </Reveal>
        </div>
      </section>

      {/* Report an issue */}
      <div className="contact-band">
        <div className="contact-card">
          <div>
            <h3>Hit an accessibility barrier?</h3>
            <p>
              Tell us and we&apos;ll fix it — email <strong>{SUPPORT_EMAIL}</strong> or use{' '}
              <strong>Settings → Give Feedback</strong> inside the app.
            </p>
          </div>
          <div className="hero-cta" style={{ margin: 0 }}>
            <a className="btn btn-primary" href={`mailto:${SUPPORT_EMAIL}`}>
              Email support
            </a>
            <Link className="btn btn-outline" href="/support">
              Support
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
