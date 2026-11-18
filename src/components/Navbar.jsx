import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { personal } from '../data/portfolioData';

const SECTIONS = [
  { id: 'projects', label: 'Projects' },
  { id: 'stack', label: 'Stack' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0B0C0F]/80 backdrop-blur-md border-b border-white/[0.07] transition-all">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Left: Monogram Badge & Name */}
        <button
          onClick={() => scrollTo('home')}
          className="group flex items-center gap-3 text-left focus:outline-none"
          aria-label="Scroll to home"
        >
          <div className="w-8 h-8 rounded-md bg-[#FF6B4A]/10 border border-[#FF6B4A]/30 flex items-center justify-center font-mono text-xs font-bold text-[#FF6B4A] group-hover:bg-[#FF6B4A]/20 transition-colors">
            PS
          </div>
          <span className="text-sm font-semibold tracking-tight text-[#F4F4F6] group-hover:text-white transition-colors">
            {personal.name}
          </span>
        </button>

        {/* Right Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex items-center space-x-7 text-xs font-mono uppercase tracking-wider" aria-label="Main Navigation">
            {SECTIONS.map((sec) => {
              const isActive = activeSection === sec.id;
              return (
                <button
                  key={sec.id}
                  onClick={() => scrollTo(sec.id)}
                  className={`relative py-1 transition-colors duration-150 ${
                    isActive ? 'text-[#F4F4F6] font-semibold' : 'text-[#A1A1AA] hover:text-[#F4F4F6]'
                  }`}
                >
                  {sec.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FF6B4A] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          <button
            onClick={() => scrollTo('contact')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#13151C] border border-white/[0.1] text-xs font-mono text-[#F4F4F6] hover:border-[#FF6B4A]/50 hover:bg-[#181B24] transition-all"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-3 h-3 text-[#FF6B4A]" />
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-[#A1A1AA] hover:text-[#F4F4F6] focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

      </div>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div className="md:hidden border-b border-white/[0.07] bg-[#0E1015]/95 backdrop-blur-lg px-6 py-4 space-y-3">
          {SECTIONS.map((sec) => {
            const isActive = activeSection === sec.id;
            return (
              <button
                key={sec.id}
                onClick={() => scrollTo(sec.id)}
                className={`flex items-center justify-between w-full text-left text-sm py-2 transition-colors ${
                  isActive ? 'text-[#FF6B4A] font-semibold' : 'text-[#A1A1AA] hover:text-[#F4F4F6]'
                }`}
              >
                <span>{sec.label}</span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B4A]" />}
              </button>
            );
          })}
          <div className="pt-2 border-t border-white/[0.06]">
            <button
              onClick={() => scrollTo('contact')}
              className="w-full py-2.5 rounded-md bg-[#FF6B4A] text-[#0B0C0F] text-xs font-mono font-bold uppercase tracking-wider text-center"
            >
              Get in Touch
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
