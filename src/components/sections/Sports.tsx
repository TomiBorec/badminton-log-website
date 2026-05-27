type SportKey = 'badminton' | 'tennis' | 'basketball' | 'football' | 'golf';

const SPORTS: {
  key: SportKey;
  name: string;
  scoring: string;
  setup: string;
}[] = [
  {
    key: 'badminton',
    name: 'Badminton',
    scoring: 'Rally points · win-by-two · sudden-death cap',
    setup: 'Singles / Doubles · up to 4 players',
  },
  {
    key: 'tennis',
    name: 'Tennis',
    scoring: '0 · 15 · 30 · 40 · AD · sets · tiebreak · No-Ad',
    setup: 'Singles / Doubles · up to 4 players',
  },
  {
    key: 'basketball',
    name: 'Basketball',
    scoring: '+1 / +2 / +3 · periods with clock · OT',
    setup: 'Variable team size · 1–10',
  },
  {
    key: 'football',
    name: 'Football',
    scoring: '+1 goal · halves with clock · extra time',
    setup: 'Variable team size · 1–22 with subs',
  },
  {
    key: 'golf',
    name: 'Golf',
    scoring: 'Per-hole strokes · to-par chip',
    setup: '1–4 player flight · course search or manual par',
  },
];

export function Sports() {
  return (
    <section id="sports" style={{ maxWidth: 1200, margin: '0 auto', padding: '100px 32px 60px' }}>
      <div
        className="bb-rules-card"
        style={{
          background: 'var(--fg)',
          color: 'var(--bg)',
          borderRadius: 28,
          padding: '72px 56px',
          display: 'grid',
          gridTemplateColumns: '1fr 1.1fr',
          gap: 48,
          alignItems: 'center',
        }}
      >
        <div>
          <div
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: 1.6,
              textTransform: 'uppercase',
              opacity: 0.55,
              marginBottom: 16,
            }}
          >
            Five sports. One scorer.
          </div>
          <h2
            style={{
              fontSize: 'clamp(34px, 4vw, 52px)',
              fontWeight: 700,
              letterSpacing: -1.4,
              lineHeight: 1,
              margin: 0,
              textWrap: 'balance',
            }}
          >
            Whatever you&rsquo;re playing, the app calls game.
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.55, opacity: 0.65, marginTop: 20, marginBottom: 0 }}>
            Score Buddy enforces the official rules for every sport it supports — so you never argue whether
            21–20 is game, what a tennis tiebreak ends on, or what happens when the basketball clock hits zero.
            Or override anything: caps, periods, tiebreaks, hole counts — all editable per sport.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: 1.4,
              textTransform: 'uppercase',
              opacity: 0.45,
              marginBottom: 12,
            }}
          >
            Supported sports
          </div>
          {SPORTS.map((s) => (
            <SportRow key={s.key} sport={s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SportRow({ sport }: { sport: (typeof SPORTS)[number] }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '52px 1fr',
        gap: 18,
        alignItems: 'center',
        padding: '18px 0',
        borderTop: '1px solid rgba(127,127,127,0.2)',
      }}
    >
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: 12,
          background: 'rgba(127,127,127,0.16)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <SportIcon kind={sport.key} />
      </div>
      <div>
        <div style={{ fontSize: 17, fontWeight: 600, marginBottom: 4 }}>{sport.name}</div>
        <div style={{ fontSize: 13, lineHeight: 1.45, opacity: 0.65 }}>
          {sport.scoring} <span style={{ opacity: 0.55 }}>· {sport.setup}</span>
        </div>
      </div>
    </div>
  );
}

function SportIcon({ kind }: { kind: SportKey }) {
  const s = { width: 22, height: 22, color: 'currentColor' as const };
  if (kind === 'badminton')
    return (
      <svg style={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 20l5-5" />
        <path d="M9 15l9-3 1-7-7 1-3 9z" />
        <circle cx="6.5" cy="17.5" r="1.2" fill="currentColor" />
      </svg>
    );
  if (kind === 'tennis')
    return (
      <svg style={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="12" r="9" />
        <path d="M3.5 9c4 1 8 1 11.5-1.5M3.5 15c4-1 8-1 11.5 1.5" />
      </svg>
    );
  if (kind === 'basketball')
    return (
      <svg style={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3v18M5.5 5.5c2 2 2 11 0 13M18.5 5.5c-2 2-2 11 0 13" />
      </svg>
    );
  if (kind === 'football')
    return (
      <svg style={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7l4 3-1.5 5h-5L8 10z" fill="currentColor" stroke="none" opacity="0.85" />
      </svg>
    );
  return (
    <svg style={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 21h12" />
      <path d="M12 21V5" />
      <path d="M12 5l6-2-1 4-5 1" fill="currentColor" stroke="none" />
      <circle cx="9" cy="21" r="1.2" fill="currentColor" />
    </svg>
  );
}
