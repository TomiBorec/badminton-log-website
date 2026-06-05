import { Hero } from '@/components/sections/Hero';
import { SwitchStrip } from '@/components/sections/SwitchStrip';
import { Features } from '@/components/sections/Features';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { PrivacyBand } from '@/components/sections/PrivacyBand';
import { AccessibilityNote } from '@/components/sections/AccessibilityNote';
import { CTA } from '@/components/sections/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <SwitchStrip />
      <Features />
      <hr className="divider" />
      <HowItWorks />
      <PrivacyBand />
      <AccessibilityNote />
      <CTA title="Ready to play?" subtitle="Start tracking your next match in three taps." />
    </>
  );
}
