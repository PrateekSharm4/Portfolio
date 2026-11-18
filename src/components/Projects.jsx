import React from 'react';
import { projects } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="py-16 border-t border-[#26262C] scroll-mt-20">
      
      {/* Section Heading */}
      <div className="mb-8">
        <h2 className="text-xl font-bold tracking-tight text-[#F4F4F6]">
          Selected Projects
        </h2>
        <p className="text-sm text-[#A1A1AA] mt-1">
          Full-stack web applications, decentralized systems, and hardware integrations.
        </p>
      </div>

      {/* Vertical Stacked Cards */}
      <div className="space-y-6">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="p-6 rounded-lg bg-[#16161A] border border-[#26262C] hover:border-[#32323A] transition-colors duration-150 space-y-4"
          >
            {/* Title & External Links */}
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <h3 className="text-base font-semibold text-[#F4F4F6]">
                {proj.title}
              </h3>
              <div className="flex items-center gap-3 text-xs sm:text-sm font-medium shrink-0">
                {proj.liveUrl && (
                  <a
                    href={proj.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#3B82F6] hover:underline transition-colors duration-150"
                  >
                    Live Demo ↗
                  </a>
                )}
                {proj.githubUrl && (
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#3B82F6] hover:underline transition-colors duration-150"
                  >
                    GitHub ↗
                  </a>
                )}
              </div>
            </div>

            {/* Summary */}
            <p className="text-sm text-[#A1A1AA] leading-relaxed">
              {proj.summary}
            </p>

            {/* Tech Tags */}
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 pt-1 text-xs font-mono text-[#A1A1AA]">
              {proj.tags.map((tag, tIdx) => (
                <React.Fragment key={tIdx}>
                  <span className="bg-[#0E0E10] px-2 py-0.5 rounded border border-[#26262C] text-[#A1A1AA]">
                    {tag}
                  </span>
                  {tIdx < proj.tags.length - 1 && (
                    <span className="text-[#3F3F46] select-none hidden sm:inline">·</span>
                  )}
                </React.Fragment>
              ))}
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}
