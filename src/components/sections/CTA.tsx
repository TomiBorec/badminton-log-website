import { APPSTORE_URL } from '@/components/constants';
import { AppleGlyph } from '@/components/icons';
import { Reveal } from '@/components/Reveal';

export function CTA({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="cta">
      <Reveal as="span" className="section-kicker">
        Free · iPhone, iPad &amp; Apple Watch
      </Reveal>
      <Reveal as="h2">{title}</Reveal>
      <Reveal as="p">{subtitle}</Reveal>
      <Reveal className="badges">
        <a className="app-store-badge" href={APPSTORE_URL} target="_blank" rel="noopener noreferrer">
          <AppleGlyph />
          <span className="t">
            <small>Download on the</small>
            <b>App Store</b>
          </span>
        </a>
      </Reveal>
    </section>
  );
}
