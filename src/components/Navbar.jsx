import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { personal } from '../data/portfolioData';

const SECTIONS = [
  { id: 'projects', label: 'Projects' },
  { id: 'stack', label: 'Stack' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sectionIds = ['home', 'projects', 'stack', 'about', 'contact'];
    const elements = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);

    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-30% 0px -60% 0px',
        threshold: 0,
      }
    );

    elements.forEach((el) => observer.observe(el));

    const handleScroll = () => {
      if (window.scrollY < 80) {
        setActiveSection('home');
      } else if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
        setActiveSection('contact');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0E0E10]/90 backdrop-blur-sm border-b border-[#26262C]">
      <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
        
        {/* Left: Clean plain name */}
        <button
          onClick={() => scrollTo('home')}
          className="text-sm font-semibold tracking-tight text-[#F4F4F6] hover:text-white transition-colors duration-150"
        >
          {personal.name}
        </button>

        {/* Right Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-6 text-sm" aria-label="Main Navigation">
          {SECTIONS.map((sec) => {
            const isActive = activeSection === sec.id;
            return (
              <button
                key={sec.id}
                onClick={() => scrollTo(sec.id)}
                className={`transition-colors duration-150 ${
                  isActive ? 'text-[#F4F4F6] font-medium' : 'text-[#A1A1AA] hover:text-[#F4F4F6]'
                }`}
              >
                {sec.label}
              </button>
            );
          })}
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-1.5 text-[#A1A1AA] hover:text-[#F4F4F6] transition-colors duration-150"
          aria-label="Toggle Navigation Menu"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

      </div>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div className="md:hidden border-b border-[#26262C] bg-[#0E0E10] px-6 py-4 space-y-3">
          {SECTIONS.map((sec) => (
            <button
              key={sec.id}
              onClick={() => scrollTo(sec.id)}
              className="block w-full text-left text-sm text-[#A1A1AA] hover:text-[#F4F4F6] transition-colors duration-150 py-1"
            >
              {sec.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
