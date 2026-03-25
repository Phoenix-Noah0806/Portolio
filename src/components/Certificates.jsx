import React from "react";
import SectionHeader from "./SectionHeader";
import { certificates, achievements } from "../data/portfolioData";

/**
 * Certificates — Level 4: Achievement badge grid with shimmer effect.
 */
export default function Certificates() {
  return (
    <section id="certificates" className="section-container retro-reveal bg-retro-bg-light/30">
      <div className="max-w-5xl mx-auto">
        <SectionHeader level="04" title="Certificates" color="magenta" />

        {/* Certificates Grid */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-xl">📜</span>
            <h3 className="font-pixel text-[10px] text-retro-magenta uppercase">
              Certifications
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="achievement-card game-card p-5 hover:border-retro-magenta group"
              >
                <div className="relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-retro-magenta/10 border-2 border-retro-magenta/40 flex items-center justify-center text-3xl shrink-0">
                      {cert.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-pixel text-[9px] text-retro-magenta text-shadow-magenta leading-relaxed mb-1 group-hover:text-retro-white transition-colors">
                        {cert.title}
                      </h4>
                      <p className="font-retro text-lg text-retro-text-dim">
                        Issued by {cert.issuer}
                      </p>
                      <span className="font-pixel text-[7px] text-retro-text-dim mt-2 inline-block">
                        ✦ {cert.date}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Grid */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <span className="text-xl">🏅</span>
            <h3 className="font-pixel text-[10px] text-retro-yellow uppercase">
              Achievements Unlocked
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {achievements.map((item, index) => (
              <div
                key={index}
                className="achievement-card game-card p-5 hover:border-retro-yellow group"
              >
                <div className="relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-retro-yellow/10 border-2 border-retro-yellow/40 flex items-center justify-center text-3xl shrink-0">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-pixel text-[9px] text-retro-yellow text-shadow-yellow leading-relaxed mb-1 group-hover:text-retro-white transition-colors">
                        {item.title}
                      </h4>
                      <p className="font-retro text-lg text-retro-text">
                        {item.detail}
                      </p>
                      <span className="font-pixel text-[7px] text-retro-text-dim mt-2 inline-block">
                        ✦ {item.date}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
