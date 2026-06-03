import Link from 'next/link';
import { Reveal } from '@/components/Reveal';

export function PrivacyBand() {
  return (
    <section className="privacy-band">
      <div className="privacy-inner">
        <Reveal className="section-head">
          <span className="section-kicker">Privacy first</span>
          <h2>Your matches are yours.</h2>
          <p>
            No accounts. No analytics. No third-party SDKs. Scorius never talks to any server other than Apple&apos;s —
            the developer cannot see your data.
          </p>
          <Link className="btn btn-outline btn-sm" href="/privacy" style={{ marginTop: 24 }}>
            Read the privacy policy →
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
              <h4>No accounts, ever</h4>
              <p>Open the app and play. Nothing to sign up for, nothing to remember.</p>
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
              <h4>Stored in your iCloud</h4>
              <p>Data lives in your private iCloud key-value store and Apple Health — not on anyone&apos;s server.</p>
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
              <h4>Nothing tracked</h4>
              <p>Zero telemetry. We don&apos;t know how, when or whether you use the app.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
