import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { ServicesSection } from '../components/ServicesSection';
import { ToolsSection } from '../components/ToolsSection';
import { AboutSection } from '../components/AboutSection';
import { ContactSection } from '../components/ContactSection';
import { RevealOnScroll } from '../components/RevealOnScroll';

export const HomePage = () => {
  return (
    <>
      <HeroSection />
      <RevealOnScroll>
        <ServicesSection />
      </RevealOnScroll>
      <RevealOnScroll>
        <ToolsSection />
      </RevealOnScroll>
      <RevealOnScroll>
        <AboutSection />
      </RevealOnScroll>
      <RevealOnScroll>
        <ContactSection />
      </RevealOnScroll>
    </>
  );
};