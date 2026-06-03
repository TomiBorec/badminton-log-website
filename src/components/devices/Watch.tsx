import type { CSSProperties } from 'react';
import type { GolfVM, MatchVM } from '@/hooks/useMatch';

function StandardScreen({ vm }: { vm: MatchVM }) {
  return (
    <>
      <div className="w-top">
        <span className="w-games">
          {vm.gamesLabel} <b>{vm.games}</b>
        </span>
        <span className="w-time">22:38</span>
      </div>
      <div className="w-score">
        <div className={`w-num a${vm.flashA ? ' pop' : ''}`}>{vm.scoreA}</div>
        <div className="w-colon">
          <span />
          <span />
        </div>
        <div className={`w-num b${vm.flashB ? ' pop' : ''}`}>{vm.scoreB}</div>
      </div>
      <div className="w-taps">
        <div className={`w-tap a${vm.flashA ? ' pop' : ''}`}>P1</div>
        <div className={`w-tap b${vm.flashB ? ' pop' : ''}`}>P2</div>
      </div>
    </>
  );
}

function GolfScreen({ golf }: { golf: GolfVM }) {
  return (
    <div className="w-golf">
      <div className="w-golf-head">
        Hole <b>{golf.hole}</b>/<span>{golf.holes}</span> · Par <b>{golf.par}</b>
      </div>
      <div className={`w-golf-strokes${golf.flash ? ' pop' : ''}`}>{golf.strokes}</div>
      <div className="w-golf-tot">
        <span>{golf.toParLabel}</span> · <span>{golf.thru}</span>
      </div>
    </div>
  );
}

export function Watch({ vm, style }: { vm: MatchVM; style?: CSSProperties }) {
  return (
    <div className="watch" style={style}>
      <div className="watch-screen">{vm.golf ? <GolfScreen golf={vm.golf} /> : <StandardScreen vm={vm} />}</div>
    </div>
  );
}
