import { Reveal } from '@/components/Reveal';

export function HowItWorks() {
  return (
    <section className="section">
      <Reveal className="section-head">
        <span className="section-kicker">From first serve to final whistle</span>
        <h2>Three taps to a tracked match.</h2>
      </Reveal>
      <div className="steps">
        <Reveal className="step">
          <div className="bar" />
          <h3>Pick a sport</h3>
          <p>Choose badminton, tennis, basketball, football or golf. Scorius loads the right rules — games, sets, periods, holes.</p>
        </Reveal>
        <Reveal className="step" delay={80}>
          <div className="bar" />
          <h3>Tap to score</h3>
          <p>Score from your wrist or your phone. Rally points, 15/30/40, +2/+3, goals or strokes — handled for you.</p>
        </Reveal>
        <Reveal className="step" delay={160}>
          <div className="bar" />
          <h3>Keep the record</h3>
          <p>Match lands in your history and stats, synced over iCloud, with a workout in Apple&nbsp;Health.</p>
        </Reveal>
      </div>
    </section>
  );
}
