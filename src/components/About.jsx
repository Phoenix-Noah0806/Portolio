import React, { useState, useEffect, useRef } from "react";
import SectionHeader from "./SectionHeader";
import { personalInfo, skills, softSkills } from "../data/portfolioData";

/**
 * About — Level 1: Pixel avatar, intro, HP-bar skills.
 */
export default function About() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  // Trigger animations when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Skill bar color rotation
  const barColors = [
    "bg-retro-green",
    "bg-retro-cyan",
    "bg-retro-yellow",
    "bg-retro-magenta",
    "bg-retro-orange",
    "bg-retro-blue",
    "bg-retro-purple",
  ];

  const SkillCategory = ({ title, items, startColorIndex = 0 }) => (
    <div className="mb-8">
      <h4 className="font-pixel text-[9px] text-retro-cyan text-shadow-cyan mb-4 uppercase tracking-wider">
        ❯ {title}
      </h4>
      <div className="space-y-3">
        {items.map((skill, i) => (
          <div key={skill.name}>
            <div className="flex justify-between items-center mb-1">
              <span className="font-retro text-lg text-retro-white">
                {skill.name}
              </span>
              <span className="font-pixel text-[7px] text-retro-text-dim">
                {skill.level}/100
              </span>
            </div>
            <div className="hp-bar-container">
              <div
                className={`hp-bar-fill ${
                  barColors[(startColorIndex + i) % barColors.length]
                }`}
                style={{
                  width: visible ? `${skill.level}%` : "0%",
                  transitionDelay: `${i * 100}ms`,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="about" className="section-container" ref={sectionRef}>
      <div className="max-w-5xl mx-auto">
        <SectionHeader level="01" title="About Me" color="green" />

        <div className="grid md:grid-cols-5 gap-8">
          {/* LEFT: Avatar + Bio */}
          <div className="md:col-span-2">
            {/* Pixel avatar card */}
            <div className="pixel-border bg-retro-bg-light p-5 mb-6 text-center">
              {/* Avatar - CV snapshot */}
              <div className="w-36 h-36 mx-auto mb-4 border-4 border-retro-green/50 overflow-hidden bg-retro-surface">
                <img
                  src="/cv-snapshot.png"
                  alt="Aayushmaan Jaiswal"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="font-pixel text-[10px] text-retro-green mb-2">
                {personalInfo.name}
              </h3>
              <p className="font-retro text-xl text-retro-cyan">
                {personalInfo.title}
              </p>
            </div>

            {/* Bio */}
            <div className="dialogue-box p-5">
              <p className="font-retro text-xl leading-relaxed text-retro-text pr-4">
                {personalInfo.bio}
              </p>
            </div>

            {/* Soft Skills Badges */}
            <div className="mt-6">
              <h4 className="font-pixel text-[9px] text-retro-yellow text-shadow-yellow mb-3 uppercase">
                ❯ Traits
              </h4>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill) => (
                  <span
                    key={skill}
                    className="font-retro text-base px-3 py-1 bg-retro-surface border-2 border-retro-yellow/40 text-retro-yellow"
                  >
                    ★ {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Skills HP Bars */}
          <div className="md:col-span-3 bg-retro-bg-light pixel-border p-6">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-lg">⚔️</span>
              <h3 className="font-pixel text-[11px] text-retro-green">
                SKILL STATS
              </h3>
            </div>

            <SkillCategory
              title="Languages"
              items={skills.languages}
              startColorIndex={0}
            />
            <SkillCategory
              title="Frameworks"
              items={skills.frameworks}
              startColorIndex={2}
            />
            <SkillCategory
              title="Tools & Platforms"
              items={skills.tools}
              startColorIndex={4}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
