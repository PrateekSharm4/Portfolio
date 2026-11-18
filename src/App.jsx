import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Stack from './components/Stack';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0E0E10] text-[#F4F4F6] font-sans antialiased selection:bg-zinc-800 selection:text-zinc-100">
      
      {/* Sticky Top Navbar */}
      <Navbar />

      {/* Centered Single-Column Container */}
      <main className="max-w-4xl mx-auto px-6">
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
