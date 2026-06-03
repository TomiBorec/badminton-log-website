import Link from 'next/link';

/** Wordmark with the accent dot (the dot reflects the current sport accent). */
export function Brand() {
  return (
    <Link className="brand" href="/">
      <span className="dot" />
      Scorius
    </Link>
  );
}
