import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Stack from './components/Stack';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useActiveSection } from './hooks/useActiveSection';

const SECTION_IDS = ['home', 'projects', 'stack', 'about', 'contact'];

export default function App() {
  const activeSection = useActiveSection(SECTION_IDS, 'home');

  return (
    <div className="min-h-screen text-[#F4F4F6] font-sans antialiased selection:bg-[#FF6B4A]/25 selection:text-white">
      
      {/* Sticky Glassmorphic Navbar with Scroll-Spy & Coral Active Indicator */}
      <Navbar activeSection={activeSection} />

      {/* Main Centered Container with Engineered Dot-Grid Canvas Texture */}
      <main className="max-w-5xl mx-auto px-6">
        <Hero />
        <Projects />
        <Stack />
        <About />
        <Contact />
        <Footer />
      </main>

    </div>
  );
}
