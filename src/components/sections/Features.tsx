import Link from 'next/link';
import { Reveal } from '@/components/Reveal';
import { MatchWatch } from '@/components/match/MatchDevices';

export function Features() {
  return (
    <section className="section" id="features">
      <Reveal className="section-head">
        <span className="section-kicker">Built for the way you play</span>
        <h2>Everything a scorekeeper needs. Nothing it doesn&apos;t.</h2>
      </Reveal>

      {/* spotlight: score from wrist */}
      <Reveal className="spotlight">
        <div className="stext">
          <span className="section-kicker">From your wrist</span>
          <h3>Keep both hands on the racquet.</h3>
          <p>
            Score a whole match from Apple&nbsp;Watch with a tap. Starting a match kicks off a native Apple&nbsp;Watch
            workout automatically — heart rate and active calories are logged in Apple&nbsp;Health, so there&apos;s no
            second fitness app to remember to open. The score lands on your iPhone, iPad and Lock&nbsp;Screen in under a
            second.
          </p>
          <div className="hero-cta" style={{ marginTop: 24 }}>
            <Link className="btn btn-outline btn-sm" href="/features">
              How it works →
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
          <h3>Five sports, one app</h3>
          <p>
            Badminton, tennis, basketball, football and golf — each with its own rules engine, scorer and stats. Switch
            sport, the app re-tunes itself.
          </p>
        </Reveal>

        <Reveal className="card hover" delay={60}>
          <div className="ico">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 15a4 4 0 0 1 4-4h10a4 4 0 0 1 0 8H7a4 4 0 0 1-4-4z" />
              <path d="M7 11a4 4 0 0 1 4-4h6a4 4 0 0 0-4-4H9" />
            </svg>
          </div>
          <h3>iCloud sync</h3>
          <p>
            Match history, rules, your player roster and per-sport settings ride along on every device. No accounts, no
            sign-in — it just appears.
          </p>
        </Reveal>

        <Reveal className="card hover" delay={120}>
          <div className="ico">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 12h3l2-5 4 10 2-5h7" />
            </svg>
          </div>
          <h3>Live Activities</h3>
          <p>
            Score, period clock and game state on the Lock&nbsp;Screen and in the Dynamic&nbsp;Island — glance down, stay
            in the match.
          </p>
        </Reveal>

        <Reveal className="card hover wide">
          <div className="ico">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 19V9M9 19V5M14 19v-7M19 19v-11" />
            </svg>
          </div>
          <h3>Owner-perspective stats &amp; tournaments</h3>
          <p>
            Head-to-head record against every opponent, win streaks and win-rate by format — plus singles or doubles
            brackets with automatic seeding and per-tournament rules.
          </p>
        </Reveal>

        <Reveal className="card hover" delay={60}>
          <div className="ico">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 21s-7-4.3-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.7-7 10-7 10z" />
            </svg>
          </div>
          <h3>HealthKit workouts</h3>
          <p>
            Start a match and a native Apple&nbsp;Watch workout starts with it — heart rate and active calories land in
            Apple&nbsp;Health. No separate fitness app to open.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
