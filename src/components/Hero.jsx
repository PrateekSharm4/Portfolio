import React from 'react';
import { personal } from '../data/portfolioData';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="pt-20 pb-16 scroll-mt-20">
      <div className="space-y-6">
        
        {/* Name & Title */}
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F4F4F6]">
            {personal.name}
          </h1>
          <p className="text-base sm:text-lg text-[#A1A1AA] font-normal">
            {personal.role}
          </p>
        </div>

        {/* Bio */}
        <p className="text-base text-[#A1A1AA] leading-relaxed max-w-2xl">
          {personal.bio}
        </p>

        {/* Actions & Plain Text External Links */}
        <div className="pt-2 flex flex-wrap items-center gap-4 text-sm">
          
          <button
            onClick={() => scrollTo('projects')}
            className="px-4 py-2 bg-[#E4E4E7] text-[#0E0E10] font-medium rounded hover:bg-white transition-colors duration-150"
          >
            View Projects
          </button>

          <button
            onClick={() => scrollTo('contact')}
            className="px-4 py-2 bg-transparent text-[#F4F4F6] border border-[#26262C] font-medium rounded hover:bg-[#16161A] hover:border-[#32323A] transition-colors duration-150"
          >
            Contact Me
          </button>

          <div className="flex items-center gap-4 pl-2 text-sm">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3B82F6] hover:underline transition-colors duration-150"
            >
              GitHub ↗
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3B82F6] hover:underline transition-colors duration-150"
            >
              LinkedIn ↗
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
