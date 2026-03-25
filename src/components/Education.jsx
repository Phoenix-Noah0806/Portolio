import React from "react";
import SectionHeader from "./SectionHeader";
import { education, training } from "../data/portfolioData";

/**
 * Education — Level 3: Vertical timeline with milestone flags.
 */
export default function Education() {
  return (
    <section id="education" className="section-container retro-reveal">
      <div className="max-w-4xl mx-auto">
        <SectionHeader level="03" title="Education" color="yellow" />

        {/* Timeline */}
        <div className="relative pl-12 md:pl-16">
          {/* The dashed line */}
          <div className="timeline-line"></div>

          {education.map((item, index) => (
            <div key={index} className="relative mb-10 last:mb-0">
              {/* Timeline dot */}
              <div className="timeline-dot"></div>

              {/* Card */}
              <div className="game-card p-5 ml-4 group hover:border-retro-yellow">
                {/* Flag / milestone header */}
                <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h3 className="font-pixel text-[9px] text-retro-yellow text-shadow-yellow leading-relaxed">
                        {item.institution}
                      </h3>
                      <p className="font-retro text-base text-retro-text-dim">
                        {item.location}
                      </p>
                    </div>
                  </div>
                  <span className="level-badge level-badge-anim" style={{ borderColor: '#ffe66d', color: '#ffe66d' }}>
                    🚩 {item.period}
                  </span>
                </div>

                {/* Degree + Score */}
                <div className="bg-retro-bg/50 p-3 border-l-3 border-retro-yellow/30">
                  <p className="font-retro text-xl text-retro-white mb-1">
                    {item.degree}
                  </p>
                  <p className="font-retro text-lg text-retro-green">
                    ✦ {item.score}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Training - special entry */}
          <div className="relative mb-0">
            <div className="timeline-dot" style={{ background: '#ff8c42' }}></div>
            <div className="game-card p-5 ml-4 group hover:border-retro-orange">
              <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🎯</span>
                  <div>
                    <h3 className="font-pixel text-[9px] text-retro-orange leading-relaxed">
                      {training.title}
                    </h3>
                    <p className="font-retro text-base text-retro-text-dim">
                      {training.organization} — {training.role}
                    </p>
                  </div>
                </div>
                <span className="level-badge level-badge-anim" style={{ borderColor: '#ff8c42', color: '#ff8c42' }}>
                  🚩 {training.period}
                </span>
              </div>
              <div className="bg-retro-bg/50 p-3 border-l-3 border-retro-orange/30">
                <p className="font-retro text-xl text-retro-text leading-relaxed">
                  {training.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
