'use client';

import React, { useState, useEffect } from 'react';
import Navigation from '@/components/portfolio/Navigation';
import HeroSection from '@/components/portfolio/HeroSection';
import PortfolioSection from '@/components/portfolio/PortfolioSection';
import ProjectsSection from '@/components/portfolio/ProjectsSection';
import ExperienceSection from '@/components/portfolio/ExperienceSection';
import AboutSection from '@/components/portfolio/AboutSection';
import ContactSection from '@/components/portfolio/ContactSection';
import Footer from '@/components/portfolio/Footer';
import BackgroundGrid from '@/components/portfolio/BackgroundGrid';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);

      const sections = ['home', 'portfolio', 'projects', 'experience', 'about', 'contact'];
      let current = 'home';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className="min-h-screen font-sans"
      style={{ backgroundColor: '#000319', color: '#fafafa' }}
    >
      {/* Background grid pattern */}
      <BackgroundGrid />

      {/* Desktop Navigation - sticky top */}
      <Navigation
        activeSection={activeSection}
        onNavigate={scrollToSection}
        variant="desktop"
      />

      {/* Main content */}
      <div className="page flex flex-col gap-20 pb-20">
        <HeroSection />
        <PortfolioSection />
        <ProjectsSection />
        <ExperienceSection />
        <AboutSection />
        <ContactSection />
      </div>

      {/* Footer */}
      <Footer />

      {/* Mobile Navigation - fixed bottom */}
      <Navigation
        activeSection={activeSection}
        onNavigate={scrollToSection}
        variant="mobile"
      />

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="hidden sm:flex justify-center items-center fixed bottom-5 right-5 z-50 w-11 h-11 rounded-full shadow-lg transition-all duration-300 hover:scale-110 text-white"
        style={{
          backgroundColor: '#c492ff',
          opacity: showScrollTop ? 1 : 0,
          transform: showScrollTop ? 'scale(1)' : 'scale(0)',
          pointerEvents: showScrollTop ? 'auto' : 'none',
        }}
        aria-label="Scroll to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m5 12 7-7 7 7" />
          <path d="M12 19V5" />
        </svg>
      </button>
    </div>
  );
}
