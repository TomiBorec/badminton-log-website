import type { Metadata } from 'next';
import Link from 'next/link';
import { SUPPORT_EMAIL } from '@/components/constants';

export const metadata: Metadata = {
  title: 'Privacy — Scorius',
  description:
    'Scorius privacy policy. No accounts, no analytics, no third-party SDKs. Your data lives in your iCloud and Apple Health.',
};

export default function PrivacyPage() {
  return (
    <>
      <header className="page-hero">
        <span className="section-kicker">Privacy</span>
        <h1>Your matches are yours.</h1>
        <p className="lead">
          Scorius is built so the developer never sees your data. No accounts, no analytics, no third-party SDKs — your
          matches stay on your devices and in your iCloud.
        </p>
        <p className="meta">Last updated · June 2026 · Applies to Scorius 2.0</p>
      </header>

      <article className="article">
        <div className="toc">
          <h4>On this page</h4>
          <ol>
            <li>
              <a href="#summary">The short version</a>
            </li>
            <li>
              <a href="#stored">What Scorius stores — and where</a>
            </li>
            <li>
              <a href="#network">Network &amp; third parties</a>
            </li>
            <li>
              <a href="#health">Health data</a>
            </li>
            <li>
              <a href="#control">Your control</a>
            </li>
            <li>
              <a href="#children">Children</a>
            </li>
            <li>
              <a href="#changes">Changes &amp; contact</a>
            </li>
          </ol>
        </div>

        <h2 id="summary">The short version</h2>
        <p>
          Scorius has <strong>no accounts, no analytics, no telemetry and no third-party SDKs</strong>. The app never
          talks to any server other than Apple&apos;s — and one public golf-course database, only when you actively
          search for a course. The developer cannot see your matches, your stats or anything else.
        </p>

        <h2 id="stored">What Scorius stores — and where</h2>
        <p>
          Everything Scorius keeps lives on your own devices and in your own iCloud. Nothing is uploaded to a server run
          by the developer.
        </p>
        <ul>
          <li>
            <strong>Match history, per-sport rules, player roster and settings</strong> are saved in your private iCloud
            key-value store (<span className="mono">NSUbiquitousKeyValueStore</span>), with a local mirror on each device
            for offline reads.
          </li>
          <li>
            <strong>An in-progress match</strong> is stored only on the device scoring it — it is not synced.
          </li>
          <li>
            <strong>Workouts (heart rate, active calories)</strong> are written to Apple Health, and only when you
            explicitly grant access on Apple Watch.
          </li>
        </ul>
        <p>
          Because sync uses your personal iCloud, it is covered by{' '}
          <a className="inline" href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">
            Apple&apos;s privacy policy
          </a>
          . The developer has no access to it.
        </p>

        <h2 id="network">Network &amp; third parties</h2>
        <p>
          Scorius makes exactly one kind of optional outbound request: when you <strong>search for a golf course</strong>,
          the app queries a public golf-course database to fetch course and par information. No personal data is attached
          to that request beyond your search text. If you never search for a course, Scorius makes no third-party network
          calls at all.
        </p>
        <p>There are no advertising SDKs, no crash-reporting services and no usage analytics of any kind.</p>

        <h2 id="health">Health data</h2>
        <p>
          If you start a match from Apple Watch, Scorius can run a workout to record <strong>heart rate</strong> and{' '}
          <strong>active calories</strong>. This data is written to Apple Health on your device and is governed by your
          Health permissions. You can revoke access at any time in <em>Settings → Health → Data Access &amp; Devices</em>.
          Scorius never transmits Health data anywhere.
        </p>

        <h2 id="control">Your control</h2>
        <ul>
          <li>
            <strong>Export &amp; import:</strong> you can export your full match history as JSON or CSV from inside the
            app, and import it back.
          </li>
          <li>
            <strong>Delete:</strong> deleting a match removes it from history and from iCloud sync. Removing the app and
            clearing its iCloud data deletes everything.
          </li>
          <li>
            <strong>Health:</strong> grant or revoke heart-rate and calorie access whenever you like.
          </li>
        </ul>

        <h2 id="children">Children</h2>
        <p>
          Scorius does not collect any personal information from anyone, including children. It is safe to use at any age,
          and it requires no account or profile.
        </p>

        <h2 id="changes">Changes &amp; contact</h2>
        <p>
          If this policy ever changes, the updated version will appear here with a new date. Questions about privacy?
          Email{' '}
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
