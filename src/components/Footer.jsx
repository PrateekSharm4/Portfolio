import React from 'react';
import { personal } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-[#26262C] text-xs text-[#A1A1AA] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono">
      <div>
        © {currentYear} {personal.name}
      </div>
      <div>
        Built with React, Vite & Tailwind CSS
      </div>
    </footer>
  );
}
