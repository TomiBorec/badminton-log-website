import type { Metadata } from 'next';
import { AccessibilityContent } from './AccessibilityContent';

export const metadata: Metadata = {
  title: 'Accessibility — Scorius',
  description:
    'Scorius supports Apple accessibility features — VoiceOver, a dark interface and Differentiate Without Color — on iPhone, iPad and Apple Watch.',
};

export default function AccessibilityPage() {
  return <AccessibilityContent />;
}
