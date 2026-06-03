import { SportSwitch } from '@/components/SportSwitch';

export function SwitchStrip() {
  return (
    <section className="switch-strip" id="sports">
      <span className="hint">
        <span className="arrow">↑</span> Tap a sport to preview its scorer
      </span>
      <SportSwitch />
    </section>
  );
}
