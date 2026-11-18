import React from 'react';
import { ArrowUpRight, Github, ExternalLink, Activity, GitFork, ArrowDown } from 'lucide-react';
import { projects } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="py-20 border-t border-white/[0.07] scroll-mt-24">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
        <div className="space-y-2">
          <div className="text-xs font-mono uppercase tracking-wider text-[#FF6B4A] font-semibold">
            Featured Builds
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F4F4F6]">
            Selected Projects
          </h2>
          <p className="text-sm text-[#A1A1AA] max-w-xl">
            Production systems, decentralized escrow pipelines, and embedded IoT architectures built from scratch.
          </p>
        </div>

        <div className="text-xs font-mono text-[#71717A]">
          3 Systems Deployed
        </div>
      </div>

      {/* 3 Horizontal Split Cards */}
      <div className="space-y-8">
        {projects.map((proj) => (
          <div
            key={proj.id}
            className="card-elevation card-elevation-hover rounded-2xl overflow-hidden border border-white/[0.08]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              
              {/* Left Column (60% ~ 7 cols) — Project Details */}
              <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                
                <div className="space-y-4">
                  
                  {/* Index tag & Category */}
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#FF6B4A]">
                      {proj.indexTag}
                    </span>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#71717A]">
                      Architecture & Source
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[#F4F4F6] tracking-tight">
                    {proj.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-sm text-[#A1A1AA] leading-relaxed">
                    {proj.summary}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {proj.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded bg-[#1A1D26] border border-white/[0.06] text-xs font-mono text-[#A1A1AA]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Bottom Action Buttons */}
                <div className="pt-4 flex flex-wrap items-center gap-3 text-xs font-mono">
                  {proj.liveUrl && (
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-[#FF6B4A] text-[#0B0C0F] font-bold uppercase tracking-wider hover:bg-[#FF5430] transition-colors"
                    >
                      <span>Live App</span>
                      <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                    </a>
                  )}

                  {proj.githubUrl && (
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-[#0E1015] border border-white/[0.1] text-[#F4F4F6] font-medium hover:border-white/20 hover:bg-[#181B24] transition-all"
                    >
                      <Github className="w-3.5 h-3.5 text-[#A1A1AA]" />
                      <span>Source Code</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#71717A]" />
                    </a>
                  )}
                </div>

              </div>

              {/* Right Column (40% ~ 5 cols) — Recessed Architecture Diagram Panel */}
              <div className="lg:col-span-5 bg-[#0E1015] border-t lg:border-t-0 lg:border-l border-white/[0.06] p-6 sm:p-7 flex flex-col justify-between">
                
                {/* Panel Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.05]">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B4A]" />
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#A1A1AA] font-semibold">
                      System Topology
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#71717A]">
                    Linear Flow
                  </span>
                </div>

                {/* Vertical Connected Flow Diagram */}
                <div className="space-y-2 relative my-auto py-1">
                  {proj.flowNodes.map((node, nIdx) => (
                    <div key={nIdx} className="space-y-2">
                      <div className="p-3 rounded-lg bg-[#13151C] border border-white/[0.06] flex items-center justify-between gap-3 hover:border-white/15 transition-colors">
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span className="text-[10px] font-mono font-bold text-[#FF6B4A] bg-[#FF6B4A]/10 px-1.5 py-0.5 rounded border border-[#FF6B4A]/20">
                            {node.step}
                          </span>
                          <span className="text-xs font-semibold text-[#F4F4F6] truncate">
                            {node.label}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-[#71717A] shrink-0 text-right">
                          {node.sub}
                        </span>
                      </div>

                      {/* Connector Arrow */}
                      {nIdx < proj.flowNodes.length - 1 && (
                        <div className="flex items-center justify-center -my-1">
                          <div className="w-[1px] h-3 bg-white/10 flex items-center justify-center">
                            <span className="text-[10px] text-white/20 select-none">↓</span>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Diagram Footer */}
                <div className="mt-4 pt-3 border-t border-white/[0.05] flex items-center justify-between text-[10px] font-mono text-[#71717A]">
                  <span>{proj.flowTitle}</span>
                  <span className="text-[#FF6B4A]">Verified</span>
                </div>

              </div>

            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
