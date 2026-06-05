import type { Metadata } from 'next';
import Link from 'next/link';
import { Reveal } from '@/components/Reveal';
import { SportSwitch } from '@/components/SportSwitch';
import { CheckIcon } from '@/components/icons';
import { MatchWatch, MatchPhone, MatchIsland } from '@/components/match/MatchDevices';
import { CTA } from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: 'Features — Scorius',
  description:
    'Everything Scorius does: score from your wrist, five sports, Live Activities, stats, tournaments, HealthKit and iCloud sync.',
};

export default function FeaturesPage() {
  return (
    <>
      <header className="page-hero">
        <Reveal as="span" className="section-kicker">
          Features
        </Reveal>
        <Reveal as="h1">
          A scorekeeper for
          <br />
          every sport you play.
        </Reveal>
        <Reveal as="p" className="lead">
          Five sports, three devices, one consistent app. Pick a sport below — the previews update to match.
        </Reveal>
        <div className="switch-strip" style={{ alignItems: 'flex-start', padding: '24px 0 0', margin: 0 }}>
          <SportSwitch />
        </div>
      </header>

      {/* Score from wrist */}
      <section className="fblock">
        <Reveal className="fcopy">
          <span className="section-kicker">Apple Watch</span>
          <h2>Score from your wrist.</h2>
          <p>
            The whole match lives on your wrist — tap a side to score, twist the crown to undo. Starting a match
            automatically starts a native Apple&nbsp;Watch workout, so heart rate and calories land in Apple&nbsp;Health
            with no second fitness app to open.
          </p>
          <ul className="flist">
            <li>
              <CheckIcon />
              Per-sport scorer tuned to each game&apos;s rules
            </li>
            <li>
              <CheckIcon />
              Starts a native Apple&nbsp;Watch workout — heart rate &amp; calories, no extra app
            </li>
            <li>
              <CheckIcon />
              Mirrors to iPhone &amp; iPad in under a second
            </li>
          </ul>
        </Reveal>
        <Reveal className="fvisual" delay={80}>
          <div className="surface">
            <MatchWatch style={{ transform: 'scale(1.25)' }} />
          </div>
        </Reveal>
      </section>

      {/* Five sports */}
      <section className="fblock flip">
        <Reveal className="fcopy">
          <span className="section-kicker">Five sports</span>
          <h2>One app that speaks every game.</h2>
          <p>
            Each sport has its own scoring engine — not a generic counter with labels swapped. Rally points, 15/30/40,
            period clocks, goals or strokes are all modelled properly, with configurable rules per sport.
          </p>
        </Reveal>
        <Reveal className="fvisual" delay={80}>
          <div className="surface" style={{ padding: 28 }}>
            <MatchPhone style={{ transform: 'scale(.82)' }} />
          </div>
        </Reveal>
      </section>

      <Reveal className="sports-table">
        <table className="stable">
          <thead>
            <tr>
              <th>Sport</th>
              <th>Scoring</th>
              <th>Setup</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="sname">
                <span className="sdot dot-bad" />
                Badminton
              </td>
              <td>Rally points, games to win the match, optional sudden-death cap</td>
              <td>Singles / Doubles, up to 4 players</td>
            </tr>
            <tr>
              <td className="sname">
                <span className="sdot dot-ten" />
                Tennis
              </td>
              <td>0/15/30/40/AD, sets, tiebreak, optional final-set TB / No-Ad</td>
              <td>Singles / Doubles, up to 4 players</td>
            </tr>
            <tr>
              <td className="sname">
                <span className="sdot dot-bas" />
                Basketball
              </td>
              <td>+1 / +2 / +3 per shot, periods with countdown clock + OT</td>
              <td>Variable team size 1–10</td>
            </tr>
            <tr>
              <td className="sname">
                <span className="sdot dot-foo" />
                Football
              </td>
              <td>+1 goal per shot, halves with countdown clock + ET</td>
              <td>Team size 1–22 (starters + subs)</td>
            </tr>
            <tr>
              <td className="sname">
                <span className="sdot dot-gol" />
                Golf
              </td>
              <td>Per-hole strokes, 1–4 player flight, to-par chip</td>
              <td>Course search (API) or manual par editor</td>
            </tr>
          </tbody>
        </table>
      </Reveal>

      {/* Live Activities */}
      <section className="fblock">
        <Reveal className="fcopy">
          <span className="section-kicker">Lock Screen &amp; Dynamic Island</span>
          <h2>Glance down, stay in the game.</h2>
          <p>
            A Live Activity puts the score, period clock and game state on your Lock&nbsp;Screen and in the
            Dynamic&nbsp;Island. Golf shows only your own strokes — no opponent column to peek at.
          </p>
          <ul className="flist">
            <li>
              <CheckIcon />
              Updates live as the match runs
            </li>
            <li>
              <CheckIcon />
              End-of-period buzzer with haptics &amp; sound
            </li>
          </ul>
        </Reveal>
        <Reveal className="fvisual" delay={80}>
          <div className="surface" style={{ background: '#0b0b0d', borderColor: 'rgba(255,255,255,.08)' }}>
            <MatchIsland />
          </div>
        </Reveal>
      </section>

      {/* Stats & tournaments */}
      <section className="fblock flip">
        <Reveal className="fcopy">
          <span className="section-kicker">Stats &amp; tournaments</span>
          <h2>Know your record. Run the bracket.</h2>
          <p>
            Owner-perspective stats give you a head-to-head record against every opponent, win streaks and win-rate by
            format. Spin up singles or doubles tournaments with automatic seeding and per-tournament rules.
          </p>
          <ul className="flist">
            <li>
              <CheckIcon />
              Head-to-head vs every player on your roster
            </li>
            <li>
              <CheckIcon />
              Reusable player roster, synced via iCloud
            </li>
            <li>
              <CheckIcon />
              Auto-seeded brackets, configurable rules
            </li>
          </ul>
        </Reveal>
        <Reveal className="fvisual" delay={80}>
          <div className="surface" style={{ flexDirection: 'column', alignItems: 'stretch', gap: 14 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <span style={{ fontWeight: 700, fontSize: 15 }}>Head-to-head · Tom vs Bob</span>
              <span className="mono" style={{ color: 'var(--accent)', fontWeight: 700 }}>
                68%
              </span>
            </div>
            <div style={{ height: 10, borderRadius: 6, background: 'var(--hairline)', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: '68%', background: 'var(--accent)', borderRadius: 6 }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12, marginTop: 8 }}>
              <div style={{ background: 'var(--card)', border: '1px solid var(--hairline)', borderRadius: 14, padding: 16 }}>
                <div className="mono" style={{ fontSize: 24, fontWeight: 700 }}>
                  17
                </div>
                <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 4 }}>Wins</div>
              </div>
              <div style={{ background: 'var(--card)', border: '1px solid var(--hairline)', borderRadius: 14, padding: 16 }}>
                <div className="mono" style={{ fontSize: 24, fontWeight: 700 }}>
                  8
                </div>
                <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 4 }}>Losses</div>
              </div>
              <div style={{ background: 'var(--card)', border: '1px solid var(--hairline)', borderRadius: 14, padding: 16 }}>
                <div className="mono" style={{ fontSize: 24, fontWeight: 700, color: 'var(--accent)' }}>
                  W5
                </div>
                <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 4 }}>Streak</div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <hr className="divider" />

      {/* privacy + accessibility grid */}
      <section className="section">
        <div className="feat-grid" style={{ gridTemplateColumns: 'repeat(2,1fr)' }}>
          <Reveal className="card mono">
            <div className="ico">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3 4 6v6c0 5 3.5 7.5 8 9 4.5-1.5 8-4 8-9V6l-8-3z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <h3>Private by design</h3>
            <p>
              No accounts, no analytics, no third-party SDKs. Data lives in your iCloud and Apple Health — the developer
              can&apos;t see it.{' '}
              <Link href="/privacy" style={{ color: 'var(--accent)', fontWeight: 600 }}>
                Read the policy →
              </Link>
            </p>
          </Reveal>
          <Reveal className="card mono" delay={60}>
            <div className="ico">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 8v.01M11 12h1v4h1" />
              </svg>
            </div>
            <h3>Accessible to everyone</h3>
            <p>
              VoiceOver, a full dark interface and Differentiate Without Color — Scorius supports Apple&apos;s
              accessibility features on iPhone, iPad and Apple&nbsp;Watch.{' '}
              <Link href="/accessibility" style={{ color: 'var(--accent)', fontWeight: 600 }}>
                See what we support →
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      <CTA title="Try it on your next match." subtitle="Three taps from download to a tracked game." />
    </>
  );
}
