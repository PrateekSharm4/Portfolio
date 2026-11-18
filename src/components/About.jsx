import React from 'react';
import { Activity, Compass } from 'lucide-react';
import { aboutCards } from '../data/portfolioData';

const cardIcons = [Activity, Compass];

export default function About() {
  return (
    <section id="about" className="py-20 border-t border-white/[0.07] scroll-mt-24">
      
      {/* Section Header */}
      <div className="space-y-2 mb-12">
        <div className="text-xs font-mono uppercase tracking-wider text-[#FF6B4A] font-semibold">
          Founder-Fit Character
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F4F4F6]">
          Beyond the Terminal
        </h2>
        <p className="text-sm text-[#A1A1AA] max-w-xl">
          Physical stamina, pitch strategy, and mountain resilience that translate into fast-paced engineering stamina.
        </p>
      </div>

      {/* 2-Column Elevated Card Pair */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {aboutCards.map((card, idx) => {
          const Icon = cardIcons[idx] || Activity;
          return (
            <div
              key={card.id}
              className="card-elevation card-elevation-hover p-6 sm:p-8 rounded-2xl flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                
                {/* Header Tag & Icon */}
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#FF6B4A]">
                      {card.index}
                    </span>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#71717A]">
                      Discipline & Grit
                    </span>
                  </div>
                  <div className="p-2 rounded-lg bg-[#0E1015] border border-white/[0.06] text-[#FF6B4A]">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#F4F4F6] tracking-tight">
                  {card.title}
                </h3>

                {/* Tagline */}
                <div className="text-xs font-mono text-[#FF6B4A] bg-[#FF6B4A]/10 px-3 py-1.5 rounded-md border border-[#FF6B4A]/20 w-fit">
                  {card.tagline}
                </div>

                {/* Story Body */}
                <p className="text-sm text-[#A1A1AA] leading-relaxed pt-1">
                  {card.body}
                </p>

              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
