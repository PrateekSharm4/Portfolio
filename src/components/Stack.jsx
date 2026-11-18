import React from 'react';
import { stack, milestones } from '../data/portfolioData';

export default function Stack() {
  return (
    <section id="stack" className="py-16 border-t border-[#26262C] scroll-mt-20">
      
      {/* Section Heading */}
      <div className="mb-8">
        <h2 className="text-xl font-bold tracking-tight text-[#F4F4F6]">
          Technical Stack & Milestones
        </h2>
        <p className="text-sm text-[#A1A1AA] mt-1">
          Languages, frameworks, databases, and embedded environments I work with daily.
        </p>
      </div>

      {/* 2-Column Key-Value Stack Table */}
      <div className="rounded-lg border border-[#26262C] divide-y divide-[#26262C] bg-[#16161A]">
        {stack.map((group, idx) => (
          <div
            key={idx}
            className="p-4 sm:p-5 grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4 text-sm"
          >
            <div className="font-mono text-xs uppercase tracking-wider text-[#A1A1AA] font-semibold md:col-span-1">
              {group.category}
            </div>
            <div className="text-[#F4F4F6] md:col-span-3 font-normal leading-relaxed">
              {group.items}
            </div>
          </div>
        ))}
      </div>

      {/* Highlights Strip */}
      <div className="mt-8 pt-6 border-t border-[#26262C] space-y-3">
        <h3 className="text-xs font-mono uppercase tracking-wider text-[#A1A1AA] font-semibold">
          Engineering Highlights
        </h3>
        <ul className="space-y-2 text-sm text-[#F4F4F6]">
          {milestones.map((m, idx) => (
            <li key={idx} className="flex items-baseline gap-2">
              <span className="text-[#A1A1AA] select-none text-xs">•</span>
              <span>
                <strong className="font-medium text-[#F4F4F6]">{m.title}</strong>{' '}
                <span className="text-[#A1A1AA]">({m.context})</span>
              </span>
            </li>
          ))}
        </ul>
      </div>

    </section>
  );
}
