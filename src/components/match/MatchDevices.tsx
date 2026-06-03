'use client';

import type { CSSProperties } from 'react';
import { useAppState } from '@/components/state';
import { useMatch } from '@/hooks/useMatch';
import { Iphone } from '@/components/devices/Iphone';
import { Watch } from '@/components/devices/Watch';
import { LiveActivity } from '@/components/devices/LiveActivity';

/** Hero device stage: an iPhone + Watch sharing one live match, on a glow. */
export function HeroStage() {
  const { sport } = useAppState();
  const vm = useMatch(sport);
  return (
    <div className="device-stage">
      <div className="device-glow" />
      <Iphone vm={vm} />
      <Watch vm={vm} />
    </div>
  );
}

/** A standalone Watch running its own live match (synced to the page sport). */
export function MatchWatch({ style }: { style?: CSSProperties }) {
  const { sport } = useAppState();
  const vm = useMatch(sport);
  return <Watch vm={vm} style={style} />;
}

/** A standalone iPhone running its own live match. */
export function MatchPhone({ style }: { style?: CSSProperties }) {
  const { sport } = useAppState();
  const vm = useMatch(sport);
  return <Iphone vm={vm} style={style} />;
}

/** A Live-Activity island running its own live match. */
export function MatchIsland() {
  const { sport } = useAppState();
  const vm = useMatch(sport);
  return <LiveActivity vm={vm} />;
}
