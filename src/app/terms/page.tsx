import type { Metadata } from 'next';
import { TermsContent } from './TermsContent';

export const metadata: Metadata = {
  title: 'Terms of Use — Scorius',
  description: 'Terms of use for the Scorius app.',
};

export default function TermsPage() {
  return <TermsContent />;
}
