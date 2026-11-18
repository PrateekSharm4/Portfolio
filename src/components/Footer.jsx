import React from 'react';
import { ArrowUp } from 'lucide-react';
import { personal } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-white/[0.07] text-xs font-mono text-[#71717A] flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <span className="w-6 h-6 rounded bg-[#FF6B4A]/10 border border-[#FF6B4A]/30 text-[#FF6B4A] flex items-center justify-center font-bold text-[10px]">
          PS
        </span>
        <span>© {new Date().getFullYear()} {personal.name}. All systems operational.</span>
      </div>

      <div className="flex items-center gap-6">
        <span>Hand-built with React, Vite & Tailwind CSS</span>
        <button
          onClick={scrollToTop}
          className="p-2 rounded bg-[#13151C] border border-white/[0.08] text-[#A1A1AA] hover:text-[#FF6B4A] hover:border-[#FF6B4A]/40 transition-all"
          aria-label="Back to top"
          title="Back to Top"
        >
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
}
