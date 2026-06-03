'use client';

import { type ReactNode, useState } from 'react';
import Link from 'next/link';

const ITEMS: { q: string; a: ReactNode }[] = [
  {
    q: 'How much does Scorius cost?',
    a: (
      <>
        Scorius is a free download on the App Store for iPhone, iPad and Apple Watch — and every feature is included
        free, with no subscription. The only optional purchase is a set of alternative app-icon designs if you&apos;d
        like to change how Scorius looks on your Home Screen; it&apos;s purely cosmetic.
      </>
    ),
  },
  {
    q: 'Do I need an account?',
    a: (
      <>
        No. There is nothing to sign up for. Open the app and start scoring. Sync happens through your own iCloud
        automatically — no username, no password.
      </>
    ),
  },
  {
    q: 'Which devices are supported?',
    a: (
      <>
        iPhone and iPad on iOS 17 or later, and Apple Watch on watchOS 10 or later. The Watch app is optional — you can
        score entirely from your phone if you prefer.
      </>
    ),
  },
  {
    q: 'Do I need an Apple Watch?',
    a: (
      <>
        No. Everything works on iPhone and iPad on their own. An Apple Watch unlocks wrist scoring plus heart rate and
        calorie tracking, but it isn&apos;t required.
      </>
    ),
  },
  {
    q: 'Which sports can I track?',
    a: (
      <>
        Badminton, tennis, basketball, football and golf — each with its own proper scoring rules, which you can
        configure per sport.
      </>
    ),
  },
  {
    q: 'Does it work offline?',
    a: (
      <>
        Yes. Scoring works fully offline. Each device keeps a local copy, and changes sync through iCloud the next time
        you&apos;re online. The only feature needing a connection is golf course search.
      </>
    ),
  },
  {
    q: 'How does golf course search work?',
    a: (
      <>
        When you set up a golf round you can search a public course database to pull in holes and pars, or enter pars
        manually. The search sends only your query text — nothing personal.
      </>
    ),
  },
  {
    q: 'Can I export my data?',
    a: (
      <>
        Yes. Export your full match history as JSON or CSV from inside the app, and import it back whenever you like.
        Your data is never locked in.
      </>
    ),
  },
  {
    q: 'Is my data private?',
    a: (
      <>
        Completely. No accounts, no analytics, no third-party SDKs. Your data stays in your iCloud and Apple Health — the
        developer can&apos;t see it. See the{' '}
        <Link className="inline" href="/privacy">
          privacy policy
        </Link>{' '}
        for detail.
      </>
    ),
  },
];

function Chevron() {
  return (
    <svg className="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function Faq() {
  // The first answer is open by default; items toggle independently.
  const [open, setOpen] = useState<Set<number>>(() => new Set([0]));

  const toggle = (i: number) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });

  return (
    <section className="faq-list">
      {ITEMS.map((item, i) => {
        const isOpen = open.has(i);
        return (
          <div key={item.q} className={`faq-item${isOpen ? ' open' : ''}`}>
            <button className="faq-q" onClick={() => toggle(i)} aria-expanded={isOpen}>
              {item.q} <Chevron />
            </button>
            <div className="faq-a">
              <div className="inner">{item.a}</div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
