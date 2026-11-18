import React from 'react';
import { aboutText } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-16 border-t border-[#26262C] scroll-mt-20">
      <div className="space-y-4">
        <h2 className="text-xl font-bold tracking-tight text-[#F4F4F6]">
          About
        </h2>
        <p className="text-base text-[#A1A1AA] leading-relaxed max-w-3xl">
          {aboutText}
        </p>
      </div>
    </section>
  );
}
