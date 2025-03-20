
import React, { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import FeaturedCollection from "@/components/FeaturedCollection";
import AboutSection from "@/components/AboutSection";
import SustainabilitySection from "@/components/SustainabilitySection";
import ContactSection from "@/components/ContactSection";
import BrandHighlight from "@/components/BrandHighlight";

const Index = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="smooth-scroll">
      <HeroSection />
      <BrandHighlight />
      <FeaturedCollection />
      <AboutSection />
      <SustainabilitySection />
      <ContactSection />
    </div>
  );
};

export default Index;
