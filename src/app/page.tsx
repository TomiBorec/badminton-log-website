import { Hero } from '@/components/sections/Hero';
import { Features } from '@/components/sections/Features';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Sports } from '@/components/sections/Sports';
import { HistoryShowcase } from '@/components/sections/HistoryShowcase';
import { CTA } from '@/components/sections/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <Sports />
      <HistoryShowcase />
      <CTA />
    </>
  );
}
