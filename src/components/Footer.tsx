import Link from 'next/link';
import { Brand } from './Brand';
import { APPSTORE_URL } from './constants';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Brand />
          <p>
            A native multi-sport match tracker for iPhone, iPad and Apple Watch. Score from your wrist, sync via iCloud.
          </p>
        </div>
        <div className="footer-col">
          <h4>Product</h4>
          <Link href="/features">Features</Link>
          <Link href="/#sports">Sports</Link>
          <Link href="/accessibility">Accessibility</Link>
          <a href={APPSTORE_URL} target="_blank" rel="noopener noreferrer">
            App Store
          </a>
        </div>
        <div className="footer-col">
          <h4>Support</h4>
          <Link href="/support">FAQ</Link>
          <Link href="/support#contact">Give feedback</Link>
        </div>
        <div className="footer-col">
          <h4>Legal</h4>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms of use</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Scorius. Made for people who keep score.</span>
        <span className="mono">v2.0</span>
      </div>
    </footer>
  );
}
