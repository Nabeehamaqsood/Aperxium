
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/Landing_page/Hero";
import ServicesSection from "@/components/ServicesSection";
import AboutUs from "@/components/Landing_page/AboutUs";
import WhyChooseApex from "@/components/Landing_page/WhyChooseApex";
import TechStackCarousel from "@/components/TechStackCarousel";
import TeamSection from "@/components/Landing_page/TeamSection";
import CTA from "@/components/Landing_page/CTA";
import Footer from "@/components/Landing_page/Footer";
import SparkleEffect from "@/components/Landing_page/SparkleEffect";
import Industries from "@/components/Landing_page/Industries";



export default function ApexiumLanding() {
  const [scrollY, setScrollY] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Navbar */}
      <Navbar onGetStartedClick={() => router.push("/contact")} />
      
      {/* Hero Section - Sticky with transform effect */}
      <Hero scrollY={scrollY} onGetStartedClick={() => router.push("/contact")} />
      
      {/* Main Content - Higher z-index to slide over hero */}
      <div className="relative z-10">
        {/* Services Section with overlap effect */}
        <div className="bg-white rounded-t-3xl -mt-20 pt-20 shadow-2xl relative z-20">
          <ServicesSection />
        </div>
        
        {/* Rest of the sections */}
        <div className="bg-white relative z-20">
          <Industries />
          <AboutUs />
          <WhyChooseApex />
          <TechStackCarousel />
          <TeamSection />
          <CTA />
          <Footer />
        </div>
      </div>
      
      {/* SparkleEffect - Adjust z-index if needed */}
      <div className="relative z-5">
        <SparkleEffect />
      </div>
    </div>
  );
}