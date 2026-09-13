import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";

import { WhatWeDo } from "@/components/home/WhatWeDo";
import { CapabilityCards } from "@/components/home/CapabilityCards";
import { B2BAudiences } from "@/components/home/B2BAudiences";
import { ConsumerAudiences } from "@/components/home/ConsumerAudiences";
import { GlobalReach } from "@/components/home/GlobalReach";
import { QualityValidation } from "@/components/home/QualityValidation";
import { ForAgencies } from "@/components/home/ForAgencies";
import { PilotCTA } from "@/components/home/PilotCTA";

export const metadata: Metadata = {
  title: "Inexra Research & Analytics | Survey Sample & Respondent Recruitment",
  description:
    "Inexra provides targeted consumer and B2B survey sample across India and 50+ international markets. Partner with us for your research sample needs.",
  openGraph: {
    title: "Inexra Research & Analytics | Survey Sample & Respondent Recruitment",
    description:
      "Targeted consumer and B2B survey sample across India and international markets. Request feasibility for your next research project.",
  },
};

import { MovingStrip } from "@/components/shared/MovingStrip";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MovingStrip />
      <WhatWeDo />
      <CapabilityCards />
      <B2BAudiences />
      <ConsumerAudiences />
      <GlobalReach />
      <QualityValidation />
      <ForAgencies />
      <PilotCTA />
    </>
  );
}
