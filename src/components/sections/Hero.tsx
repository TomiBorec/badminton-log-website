'use client';

import { useTheme } from '../ThemeProvider';
import { useMatchLoop } from '@/hooks/useMatchLoop';
import { IOSDevice } from '../devices/IOSDevice';
import { WatchFrame } from '../devices/WatchFrame';
import { PhoneLiveMatch } from '../screens/PhoneLiveMatch';
import { WatchActiveMatch } from '../screens/WatchActiveMatch';

const APPSTORE_HREF = 'https://apps.apple.com/app/id6766060549';
const ACCENT = 'system' as const;

export function Hero() {
  const { theme } = useTheme();
  const dark = theme === 'dark';
  const match = useMatchLoop();

  return (
    <section
      id="top"
      className="bb-hero"
      style={{
        maxWidth: 1280,
        margin: '0 auto',
        padding: '80px 32px 60px',
        display: 'grid',
        gridTemplateColumns: '1.1fr 1fr',
        gap: 40,
        alignItems: 'center',
      }}
    >
      <div>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '6px 12px',
            borderRadius: 999,
            border: '1px solid var(--hairline)',
            background: 'var(--bg-translucent)',
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: 0.4,
            textTransform: 'uppercase',
            color: 'var(--muted)',
            marginBottom: 20,
          }}
        >
          <span
            style={{
              display: 'inline-block',
              width: 6,
              height: 6,
              borderRadius: 3,
              background: '#34C759',
            }}
          />
          Badminton Log is now Scorius
        </div>
        <h1
          style={{
            fontSize: 'clamp(44px, 6vw, 88px)',
            fontWeight: 700,
            letterSpacing: -2.4,
            lineHeight: 0.98,
            margin: 0,
          }}
        >
          Score every game
          <br />
          from your wrist.
        </h1>
        <p
          style={{
            fontSize: 22,
            lineHeight: 1.4,
            color: 'var(--fg)',
            maxWidth: 560,
            marginTop: 24,
            marginBottom: 12,
            fontWeight: 500,
            letterSpacing: -0.3,
          }}
        >
          Badminton, tennis, basketball, football, golf.{' '}
          <span style={{ color: 'var(--muted)' }}>One app. One tap.</span>
        </p>
        <p
          style={{
            fontSize: 17,
            lineHeight: 1.55,
            color: 'var(--muted)',
            maxWidth: 560,
            marginTop: 0,
            marginBottom: 36,
            fontWeight: 400,
          }}
        >
          Scorius keeps score for you on Apple Watch across five sports — with heart rate, calories, and
          per-sport rules built in. iPhone and iPad mirror every point in real time. Match history, tournaments,
          and your player roster sync across devices via iCloud.
        </p>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
          <a
            href={APPSTORE_HREF}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: 'var(--fg)',
              color: 'var(--bg)',
              padding: '14px 24px',
              borderRadius: 999,
              fontWeight: 600,
              fontSize: 15,
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            Download on App Store →
          </a>
          <a
            href="#features"
            style={{
              color: 'var(--fg)',
              padding: '14px 4px',
              fontWeight: 500,
              fontSize: 15,
              textDecoration: 'none',
            }}
          >
            See features
          </a>
        </div>
        <div
          style={{
            marginTop: 48,
            display: 'flex',
            gap: 32,
            fontSize: 13,
            color: 'var(--muted)',
            fontWeight: 500,
          }}
        >
          <Stat label="Sports" value="5" />
          <Stat label="Live sync" value="< 1s" />
          <Stat label="HealthKit" value="Native" />
        </div>
      </div>

      <DeviceStack dark={dark}>
        <PhoneLiveMatch match={match} accent={ACCENT} dark={dark} />
        <WatchActiveMatch match={match} accent={ACCENT} />
      </DeviceStack>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <span
        style={{
          fontSize: 22,
          fontWeight: 700,
          letterSpacing: -0.6,
          fontFeatureSettings: '"tnum"',
          color: 'var(--fg)',
        }}
      >
        {value}
      </span>
      <span
        style={{
          fontSize: 12,
          opacity: 0.8,
          letterSpacing: 0.4,
          textTransform: 'uppercase',
        }}
      >
        {label}
      </span>
    </div>
  );
}

function DeviceStack({
  dark,
  children,
}: {
  dark: boolean;
  children: [React.ReactNode, React.ReactNode];
}) {
  const [phoneScreen, watchScreen] = children;
  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 24,
        minHeight: 720,
      }}
    >
      <div style={{ width: 260, height: 564, position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, transform: 'scale(0.6)', transformOrigin: 'top left' }}>
          <IOSDevice width={402} height={874} dark={dark}>
            {phoneScreen}
          </IOSDevice>
        </div>
      </div>
      <div style={{ filter: 'drop-shadow(0 30px 50px rgba(0,0,0,0.25))', marginTop: 120 }}>
        <WatchFrame>{watchScreen}</WatchFrame>
      </div>
    </div>
  );
}
