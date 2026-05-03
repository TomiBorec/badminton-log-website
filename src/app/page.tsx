import { Hero } from '@/components/sections/Hero';
import { Features } from '@/components/sections/Features';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { BWFRules } from '@/components/sections/BWFRules';
import { HistoryShowcase } from '@/components/sections/HistoryShowcase';
import { CTA } from '@/components/sections/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <BWFRules />
      <HistoryShowcase />
      <CTA />
    </>
  );
}
