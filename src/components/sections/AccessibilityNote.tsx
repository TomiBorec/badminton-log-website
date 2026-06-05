import Link from 'next/link';
import { Reveal } from '@/components/Reveal';

const SUPPORTED = ['VoiceOver', 'Dark Interface', 'Differentiate Without Color'];

export function AccessibilityNote() {
  return (
    <section className="a11y-note" id="accessibility">
      <Reveal as="span" className="section-kicker">
        Accessibility
      </Reveal>
      <Reveal as="h2">Everyone should get to keep score.</Reveal>
      <Reveal as="p">
        We want Scorius open to as many people as possible. It supports VoiceOver, a full dark interface and
        Differentiate Without Color on every device — and accessibility is never finished. If something gets in your
        way, or you have an idea that would make it better, we genuinely want to hear it.
      </Reveal>
      <Reveal className="a11y-pills">
        {SUPPORTED.map((f) => (
          <span key={f} className="a11y-pill">
            {f}
          </span>
        ))}
      </Reveal>
      <Reveal>
        <Link className="btn btn-outline btn-sm" href="/accessibility">
          See what we support →
        </Link>
      </Reveal>
    </section>
  );
}
