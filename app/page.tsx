"use client"
import { useState, useEffect } from "react";

import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import WebDevSection from "@/components/web-dev-section"
import ParallaxEarth from "@/components/parallax-earth"
import Loading from "@/components/loading-section";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000); 
  }, []);  

  if (isLoading) {
    return <Loading />;
  }
  return (
    <main className="relative overflow-hidden">
      {/* Parallax Earth component that follows scroll */}
      <ParallaxEarth />

      {/* Main content sections */}
      <div className="relative z-10 containerfull mx-auto">
        <HeroSection />
        <AboutSection />
        <WebDevSection />
      </div>
    </main>
  )
}

