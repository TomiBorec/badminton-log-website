import { APPSTORE_URL } from '@/components/constants';
import { AppleGlyph } from '@/components/icons';
import { HeroStage } from '@/components/match/MatchDevices';

export function Hero() {
  return (
    <header className="hero">
      <div>
        <span className="eyebrow">
          <span className="tick">2.0</span> · Now multi-sport
        </span>
        <h1>
          Score every game
          <br />
          from your <span className="accent">wrist.</span>
        </h1>
        <p className="hero-lead">
          Badminton, tennis, basketball, football, golf. <span className="muted">One app. One tap.</span>
        </p>
        <p className="hero-sub">
          Scorius keeps score for you on Apple&nbsp;Watch across five sports — with heart rate, calories and per-sport
          rules built in. iPhone and iPad mirror every point live, and everything syncs over iCloud.
        </p>
        <div className="hero-cta">
          <a className="btn btn-primary" href={APPSTORE_URL} target="_blank" rel="noopener noreferrer">
            <AppleGlyph width={17} height={17} />
            Download on App Store
          </a>
          <a className="btn btn-ghost" href="#sports">
            See it in action →
          </a>
        </div>
        <div className="hero-stats">
          <div className="hero-stat">
            <div className="v">5</div>
            <div className="l">Sports</div>
          </div>
          <div className="hero-stat">
            <div className="v">&lt;1s</div>
            <div className="l">Live sync</div>
          </div>
          <div className="hero-stat">
            <div className="v">0</div>
            <div className="l">Accounts</div>
          </div>
        </div>
      </div>

      <HeroStage />
    </header>
  );
}
