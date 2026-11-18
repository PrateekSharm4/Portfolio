import React from 'react';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Layers, Cpu, Award } from 'lucide-react';
import { personal, heroPillars } from '../data/portfolioData';

const pillarIcons = [Layers, Cpu, Award];

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="pt-16 pb-20 scroll-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        
        {/* Left Column (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Degree & Location Badge Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#13151C] border border-white/[0.08] shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B4A]" />
            <span className="text-xs font-mono text-[#A1A1AA]">
              {personal.locationPill}
            </span>
          </div>

          {/* Headline & Subtitle */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#F4F4F6]">
              {personal.name}
            </h1>
            <p className="text-lg sm:text-xl text-[#FF6B4A] font-medium font-sans">
              {personal.role}
            </p>
          </div>

          {/* Bio paragraph */}
          <p className="text-base text-[#A1A1AA] leading-relaxed max-w-xl">
            {personal.bio}
          </p>

          {/* Actions & Plain Text Links */}
          <div className="pt-2 flex flex-wrap items-center gap-4 text-sm">
            
            <button
              onClick={() => scrollTo('projects')}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FF6B4A] text-[#0B0C0F] font-semibold rounded-md shadow-md hover:bg-[#FF5430] transition-colors duration-150"
            >
              <span>View Projects</span>
              <ArrowDown className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>

            <button
              onClick={() => scrollTo('contact')}
              className="px-5 py-2.5 bg-[#13151C] text-[#F4F4F6] border border-white/[0.1] font-medium rounded-md hover:bg-[#181B24] hover:border-white/20 transition-all duration-150 shadow-inset-top"
            >
              Contact Me
            </button>

            <div className="flex items-center gap-4 pl-2 text-xs font-mono">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#A1A1AA] hover:text-[#FF6B4A] transition-colors duration-150"
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <span className="text-white/10">|</span>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#A1A1AA] hover:text-[#FF6B4A] transition-colors duration-150"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

        {/* Right Column (5 cols) — Tactile 3-Card Stack */}
        <div className="lg:col-span-5 space-y-3.5">
          <div className="text-[11px] font-mono uppercase tracking-wider text-[#71717A] px-1 font-semibold flex items-center gap-2">
            <span>Engineering Focus</span>
            <span className="h-[1px] flex-1 bg-white/[0.06]" />
          </div>

          <div className="space-y-3">
            {heroPillars.map((pillar, idx) => {
              const Icon = pillarIcons[idx] || Layers;
              return (
                <div
                  key={idx}
                  className="card-elevation card-elevation-hover p-4 rounded-xl flex items-start gap-3.5 group"
                >
                  <div className="p-2 rounded-lg bg-[#0E1015] border border-white/[0.06] text-[#FF6B4A] group-hover:border-[#FF6B4A]/40 transition-colors shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-sm font-semibold text-[#F4F4F6] truncate group-hover:text-white">
                        {pillar.title}
                      </h4>
                      <span className="text-[10px] font-mono text-[#71717A] shrink-0 uppercase">
                        {pillar.category}
                      </span>
                    </div>
                    <p className="text-xs text-[#A1A1AA] mt-0.5 leading-relaxed">
                      {pillar.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
