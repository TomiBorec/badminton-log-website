import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — Score Buddy',
  description:
    'Score Buddy stores your match data on your own device, in your private iCloud, and in Apple Health. The developer operates no server and cannot access your data.',
};

const sectionStyle = { marginTop: 40 } as const;
const h2Style = {
  fontSize: 14,
  fontWeight: 700,
  letterSpacing: 1.6,
  textTransform: 'uppercase' as const,
  color: 'var(--muted)',
  marginBottom: 16,
  marginTop: 0,
};
const pStyle = {
  fontSize: 16,
  lineHeight: 1.65,
  color: 'var(--fg)',
  margin: '0 0 14px 0',
};
const ulStyle = {
  margin: '0 0 14px 0',
  paddingLeft: 22,
  fontSize: 16,
  lineHeight: 1.7,
  color: 'var(--fg)',
};

export default function PrivacyPage() {
  return (
    <article
      style={{
        maxWidth: 720,
        margin: '0 auto',
        padding: '80px 32px 120px',
      }}
    >
      <header>
        <div
          style={{
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: 1.6,
            textTransform: 'uppercase',
            color: 'var(--muted)',
            marginBottom: 14,
          }}
        >
          Legal
        </div>
        <h1
          style={{
            fontSize: 'clamp(36px, 5vw, 56px)',
            fontWeight: 700,
            letterSpacing: -1.4,
            lineHeight: 1.05,
            margin: 0,
          }}
        >
          Privacy Policy
        </h1>
        <p
          style={{
            marginTop: 16,
            marginBottom: 0,
            fontSize: 14,
            color: 'var(--muted)',
            fontFeatureSettings: '"tnum"',
          }}
        >
          Last updated: 3 May 2026
        </p>
      </header>

      <p style={{ ...pStyle, marginTop: 40, fontSize: 17 }}>
        Score Buddy (&ldquo;the app&rdquo;, formerly Badminton Log) is committed to protecting your privacy. This
        policy describes what information the app collects, how it is stored, and your rights.
      </p>

      <section style={sectionStyle}>
        <h2 style={h2Style}>What we collect</h2>
        <p style={pStyle}>The app records the following data while you use it:</p>
        <ul style={ulStyle}>
          <li>Match scores and game / period / hole results across all supported sports</li>
          <li>Match duration</li>
          <li>
            Heart rate and active calories burned during matches (from Apple Health, if you grant permission)
          </li>
          <li>Your player roster (names you enter yourself) and tournament brackets</li>
          <li>User-configured match rules and preferences per sport</li>
        </ul>
        <p style={pStyle}>The app does NOT collect:</p>
        <ul style={ulStyle}>
          <li>Name, email, or any personally identifying information</li>
          <li>Location data</li>
          <li>Device identifiers for tracking</li>
          <li>Analytics or crash reports</li>
          <li>Any data from outside the app</li>
        </ul>
      </section>

      <section style={sectionStyle}>
        <h2 style={h2Style}>Where your data is stored</h2>
        <p style={pStyle}>All data is stored in three places, all owned by you:</p>
        <ol style={ulStyle}>
          <li>Locally on your device</li>
          <li>In your private iCloud Key-Value Store, synced between your devices via your Apple ID</li>
          <li>In your private Apple Health database (heart rate and workout records)</li>
        </ol>
        <p style={pStyle}>
          The developer does not operate any server. There is no database, no logs, and no way for the developer
          to access your data. Apple&rsquo;s iCloud and HealthKit services handle all storage and synchronization.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={h2Style}>Third parties</h2>
        <p style={pStyle}>
          Score Buddy uses no third-party SDKs, no analytics services, and no advertising networks. Your data is
          not shared with anyone.
        </p>
        <p style={pStyle}>
          One narrow exception: when you actively search for a golf course inside the Golf setup screen, the app
          queries a public golf-course database for course names and hole pars. The search query is sent over the
          network for that one request only. No identifier, no match data, and no personal information is sent —
          and nothing is sent at all unless you press search.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={h2Style}>Your rights</h2>
        <p style={pStyle}>You can at any time:</p>
        <ul style={ulStyle}>
          <li>Delete the app to remove local data</li>
          <li>Disable iCloud sync via iOS Settings → [your name] → iCloud</li>
          <li>Revoke Apple Health access via the Health app → Sharing → Apps</li>
          <li>Manage your iCloud Key-Value Storage via your Apple ID account</li>
        </ul>
        <p style={pStyle}>
          Because the app does not transmit data to the developer, the developer cannot delete data on your
          behalf. Removing the app and signing out of iCloud removes all data the developer could ever reach.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={h2Style}>Children</h2>
        <p style={pStyle}>The app does not knowingly collect any data from children under 13.</p>
      </section>

      <section style={sectionStyle}>
        <h2 style={h2Style}>Changes to this policy</h2>
        <p style={pStyle}>
          This policy may be updated when the app gains new features. The updated policy will be available at
          this URL.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={h2Style}>Contact</h2>
        <p style={pStyle}>
          Questions?{' '}
          <a
            href="mailto:kalmus.tom@icloud.com"
            style={{ color: 'var(--fg)', textDecoration: 'underline', textUnderlineOffset: 3 }}
          >
            kalmus.tom@icloud.com
          </a>
        </p>
      </section>
    </article>
  );
}
