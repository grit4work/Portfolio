'use client';

import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import TechStack from '@/components/TechStack';
import CodingProfiles from '@/components/CodingProfiles';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function HomePage() {
  // Smooth page entrance
  useEffect(() => {
    document.body.style.opacity = '0';
    requestAnimationFrame(() => {
      document.body.style.transition = 'opacity 0.4s ease';
      document.body.style.opacity = '1';
    });
  }, []);

  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <TechStack />
      <CodingProfiles />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}
