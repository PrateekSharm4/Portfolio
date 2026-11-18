import React from 'react';
import { Layers, Server, Database, Cpu, Trophy, Sparkles, GitPullRequest } from 'lucide-react';
import { stackCategories, milestones } from '../data/portfolioData';

const categoryIcons = {
  Frontend: Layers,
  "Backend & APIs": Server,
  Database: Database,
  "Systems & IoT": Cpu,
};

const milestoneIcons = [Trophy, Sparkles, GitPullRequest];

export default function Stack() {
  return (
    <section id="stack" className="py-20 border-t border-white/[0.07] scroll-mt-24">
      
      {/* Section Header */}
      <div className="space-y-2 mb-12">
        <div className="text-xs font-mono uppercase tracking-wider text-[#FF6B4A] font-semibold">
          Capability Matrix
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F4F4F6]">
          Technical Stack & Milestones
        </h2>
        <p className="text-sm text-[#A1A1AA] max-w-xl">
          Core technologies used to build resilient client applications, high-concurrency APIs, and embedded sensor pipelines.
        </p>
      </div>

      {/* 2x2 Grid of Elevated Slate Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {stackCategories.map((group) => {
          const Icon = categoryIcons[group.category] || Layers;
          return (
            <div
              key={group.category}
              className="card-elevation card-elevation-hover p-6 rounded-2xl flex flex-col justify-between space-y-6"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#0E1015] border border-white/[0.06] text-[#FF6B4A]">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-[#F4F4F6]">
                      {group.category}
                    </h3>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#71717A]">
                      {group.tag}
                    </span>
                  </div>
                </div>
              </div>

              {/* Tactile Pills */}
              <div className="flex flex-wrap gap-2">
                {group.items.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-[#1A1D26] border border-white/[0.06] hover:border-white/20 text-xs font-mono text-[#F4F4F6] transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* 3-Column Milestone Bar Below */}
      <div className="mt-10 card-elevation p-6 rounded-2xl border border-white/[0.08]">
        <div className="text-xs font-mono uppercase tracking-wider text-[#FF6B4A] font-semibold mb-4 flex items-center gap-2">
          <span>Engineering Milestones</span>
          <span className="h-[1px] flex-1 bg-white/[0.06]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/[0.06]">
          {milestones.map((m, idx) => {
            const MIcon = milestoneIcons[idx] || Trophy;
            return (
              <div
                key={idx}
                className={`pt-4 md:pt-0 ${idx > 0 ? 'md:pl-6' : ''} flex items-start gap-3.5`}
              >
                <div className="p-2 rounded-md bg-[#0E1015] border border-white/[0.06] text-[#FF6B4A] shrink-0 mt-0.5">
                  <MIcon className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#71717A] block font-semibold">
                    {m.role}
                  </span>
                  <h4 className="text-sm font-semibold text-[#F4F4F6] mt-0.5">
                    {m.title}
                  </h4>
                  <p className="text-xs text-[#A1A1AA] font-mono mt-0.5">
                    {m.project}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}
