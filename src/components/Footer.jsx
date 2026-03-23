import React from "react";
import { personalInfo } from "../data/portfolioData";

/**
 * Footer — "GAME OVER" / credits style footer.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-retro-bg border-t-3 border-retro-green/20 py-8 px-4">
      <div className="max-w-5xl mx-auto text-center">
        {/* Game Over text */}
        <div className="mb-4">
          <p className="font-pixel text-[11px] text-retro-green text-shadow-green tracking-wider">
            GAME COMPLETE
          </p>
          <p className="font-retro text-lg text-retro-text-dim mt-1">
            Thanks for playing! You reached the end of this adventure.
          </p>
        </div>

        {/* Credits */}
        <div className="flex items-center justify-center gap-4 mb-4">
          <span className="w-12 h-[2px] bg-retro-border"></span>
          <span className="font-pixel text-[7px] text-retro-text-dim uppercase tracking-wider">
            Credits
          </span>
          <span className="w-12 h-[2px] bg-retro-border"></span>
        </div>

        <p className="font-retro text-lg text-retro-text-dim mb-1">
          Designed & Developed by
        </p>
        <p className="font-pixel text-[9px] text-retro-cyan text-shadow-cyan mb-4">
          {personalInfo.name}
        </p>

        {/* Social row */}
        <div className="flex items-center justify-center gap-4 mb-4">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-retro text-lg text-retro-text-dim hover:text-retro-green transition-colors"
          >
            GitHub
          </a>
          <span className="text-retro-border">|</span>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-retro text-lg text-retro-text-dim hover:text-retro-cyan transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-retro-border">|</span>
          <a
            href={`mailto:${personalInfo.email}`}
            className="font-retro text-lg text-retro-text-dim hover:text-retro-yellow transition-colors"
          >
            Email
          </a>
        </div>

        {/* Copyright */}
        <p className="font-pixel text-[7px] text-retro-text-dim/50">
          © {currentYear} {personalInfo.name} — All Rights Reserved
        </p>

        {/* Easter egg hint */}
        <p className="font-retro text-sm text-retro-text-dim/30 mt-2">
          ↑ ↑ ↓ ↓ ← → ← → B A
        </p>
      </div>
    </footer>
  );
}
