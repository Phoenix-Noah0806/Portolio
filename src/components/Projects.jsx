import React from "react";
import SectionHeader from "./SectionHeader";
import { projects } from "../data/portfolioData";

/**
 * Projects — Level 2: Game tile project cards with hover unlock effect.
 */
export default function Projects() {
  return (
    <section id="projects" className="section-container retro-reveal bg-retro-bg-light/30">
      <div className="max-w-5xl mx-auto">
        <SectionHeader level="02" title="Projects" color="cyan" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="game-card p-5 flex flex-col group relative"
            >
              {/* Level unlocked badge */}
              <div className="flex items-center justify-between mb-3">
                <span className="level-badge level-badge-anim" style={{ borderColor: '#00fff5', color: '#00fff5' }}>
                  ⚡ Stage {index + 1}
                </span>
                <span className="font-pixel text-[7px] text-retro-text-dim">
                  {project.date}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-pixel text-[10px] text-retro-cyan text-shadow-cyan mb-1 leading-relaxed group-hover:text-retro-white transition-colors">
                {project.title}
              </h3>
              <p className="font-retro text-lg text-retro-text-dim mb-3">
                {project.subtitle}
              </p>

              {/* Description */}
              <p className="font-retro text-lg text-retro-text leading-relaxed mb-4 flex-grow">
                {project.description}
              </p>

              {/* Highlights */}
              {project.highlights?.length ? (
                <ul className="font-retro text-base text-retro-text-dim leading-relaxed mb-4 list-disc pl-5 space-y-1">
                  {project.highlights.slice(0, 3).map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              ) : null}

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="font-retro text-sm px-2 py-0.5 bg-retro-cyan/10 border border-retro-cyan/30 text-retro-cyan"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3 mt-auto pt-3 border-t-2 border-retro-border">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-pixel text-[8px] text-retro-text-dim hover:text-retro-green transition-colors flex items-center gap-1"
                  >
                    <span>⌸</span> github
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-pixel text-[8px] text-retro-text-dim hover:text-retro-cyan transition-colors flex items-center gap-1"
                  >
                    <span>◉</span> Live Demo
                  </a>
                )}
              </div>

              {/* Hover unlock overlay */}
              <div className="absolute inset-0 bg-retro-cyan/0 group-hover:bg-retro-cyan/[0.02] transition-colors duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
