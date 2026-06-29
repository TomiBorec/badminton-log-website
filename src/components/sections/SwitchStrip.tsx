'use client';

import { SportSwitch } from '@/components/SportSwitch';
import { useI18n } from '@/i18n';

export function SwitchStrip() {
  const { t } = useI18n();
  return (
    <section className="switch-strip" id="sports">
      <span className="hint">
        <span className="arrow">↑</span> {t.switchStrip.hint}
      </span>
      <SportSwitch />
    </section>
  );
}
