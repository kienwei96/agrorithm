import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CustomerSegments from "@/components/CustomerSegments";
import SocialProof from "@/components/SocialProof";
import WhyNow from "@/components/WhyNow";
import AgriPod from "@/components/AgriPod";
import AgenticAI from "@/components/AgenticAI";
import WhatYouGet from "@/components/WhatYouGet";
import AsAService from "@/components/AsAService";
import WhereWeOperate from "@/components/WhereWeOperate";
import ContactSection from "@/components/ContactSection";
import ClosingCTA from "@/components/ClosingCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-parchment">
      <Header />
      <main>
        <HeroSection />
        <CustomerSegments />
        <SocialProof />
        <WhyNow />
        <AgriPod />
        <AgenticAI />
        <WhatYouGet />
        <AsAService />
        <WhereWeOperate />
        <ClosingCTA />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
