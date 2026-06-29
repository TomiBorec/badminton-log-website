import type { Metadata } from 'next';
import { PrivacyContent } from './PrivacyContent';

export const metadata: Metadata = {
  title: 'Privacy — Scorius',
  description:
    'Scorius privacy policy. No accounts, no analytics, no third-party SDKs. Your data lives in your iCloud and Apple Health.',
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
