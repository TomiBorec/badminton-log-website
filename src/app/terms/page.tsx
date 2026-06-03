import type { Metadata } from 'next';
import Link from 'next/link';
import { SUPPORT_EMAIL } from '@/components/constants';

export const metadata: Metadata = {
  title: 'Terms of Use — Scorius',
  description: 'Terms of use for the Scorius app.',
};

export default function TermsPage() {
  return (
    <>
      <header className="page-hero">
        <span className="section-kicker">Legal</span>
        <h1>Terms of use.</h1>
        <p className="lead">
          Plain-language terms for using Scorius. By downloading or using the app, you agree to what&apos;s below.
        </p>
        <p className="meta">Last updated · June 2026 · Applies to Scorius 2.0</p>
      </header>

      <article className="article">
        <div className="toc">
          <h4>On this page</h4>
          <ol>
            <li>
              <a href="#accept">Acceptance</a>
            </li>
            <li>
              <a href="#license">Licence to use</a>
            </li>
            <li>
              <a href="#data">Your data &amp; responsibilities</a>
            </li>
            <li>
              <a href="#third">Apple &amp; third-party services</a>
            </li>
            <li>
              <a href="#warranty">No warranty</a>
            </li>
            <li>
              <a href="#liability">Limitation of liability</a>
            </li>
            <li>
              <a href="#changes">Changes</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ol>
        </div>

        <h2 id="accept">1 · Acceptance</h2>
        <p>
          By downloading, installing or using Scorius (the &quot;app&quot;), you agree to these terms. If you do not
          agree, please don&apos;t use the app. These terms are in addition to{' '}
          <a
            className="inline"
            href="https://www.apple.com/legal/internet-services/itunes/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apple&apos;s standard licensed-application terms
          </a>
          , which also apply.
        </p>

        <h2 id="license">2 · Licence to use</h2>
        <p>
          Scorius is licensed, not sold, to you for personal, non-commercial use on Apple devices you own or control, in
          line with the App Store terms. You may not copy, redistribute, reverse-engineer or resell the app except where
          the law expressly permits it.
        </p>

        <h2 id="data">3 · Your data &amp; responsibilities</h2>
        <ul>
          <li>You are responsible for the matches, player names, scores and other content you enter.</li>
          <li>
            Your data is stored in your own iCloud and on your devices. Keeping backups (for example via iCloud and the
            in-app export) is your responsibility.
          </li>
          <li>
            Scores and statistics are recorded for your own reference and are not guaranteed to be free of error — always
            treat the app as a convenience, not an official record.
          </li>
        </ul>

        <h2 id="third">4 · Apple &amp; third-party services</h2>
        <p>
          The app relies on Apple services — iCloud, HealthKit and ActivityKit — which are governed by Apple&apos;s own
          terms and privacy policy. Golf course information comes from a third-party public database; Scorius does not
          control and is not responsible for the accuracy of that data.
        </p>

        <h2 id="warranty">5 · No warranty</h2>
        <p>
          The app is provided <strong>&quot;as is&quot;</strong> and <strong>&quot;as available&quot;</strong>, without
          warranties of any kind, whether express or implied, including fitness for a particular purpose. The developer
          does not warrant that the app will be uninterrupted, error-free or compatible with every device or future OS
          version.
        </p>

        <h2 id="liability">6 · Limitation of liability</h2>
        <p>
          To the maximum extent permitted by law, the developer is not liable for any indirect, incidental or
          consequential damages, or for any loss of data, arising from your use of — or inability to use — the app. Some
          jurisdictions don&apos;t allow these exclusions, so parts may not apply to you.
        </p>

        <h2 id="changes">7 · Changes</h2>
        <p>
          These terms may be updated from time to time. The current version always lives on this page with its date.
          Continuing to use the app after a change means you accept the updated terms.
        </p>

        <h2 id="contact">8 · Contact</h2>
        <p>
          Questions about these terms? Email{' '}
          <a className="inline" href={`mailto:${SUPPORT_EMAIL}`}>
            {SUPPORT_EMAIL}
          </a>
          , use <strong>Settings → Give Feedback</strong> inside the app, or reach out from the{' '}
          <Link className="inline" href="/support#contact">
            Support page
          </Link>
          .
        </p>
      </article>
    </>
  );
}
