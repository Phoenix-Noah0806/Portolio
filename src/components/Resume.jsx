import React from "react";
import SectionHeader from "./SectionHeader";
import PixelButton from "./PixelButton";
import { achievements, certificates, projects, skills } from "../data/portfolioData";

/**
 * Resume — Inventory Section: Resume preview + download button.
 */
export default function Resume() {
  const totalSkills =
    skills.languages.length + skills.frameworks.length + skills.tools.length;

  const downloadUrl = async (url, filename) => {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed to fetch ${url}`);
    const blob = await res.blob();

    const objectUrl = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = objectUrl;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(objectUrl);
  };

  const handleDownload = async () => {
    try {
      await downloadUrl("/resume.pdf", "Aayushmaan_Jaiswal_Resume.pdf");
    } catch {
      await downloadUrl("/cv-snapshot.png", "Aayushmaan_Jaiswal_Resume.png");
    }
  };

  return (
    <section id="resume" className="section-container retro-reveal">
      <div className="max-w-3xl mx-auto">
        <SectionHeader level="05" title="Resume" color="orange" />

        {/* Inventory-style container */}
        <div className="pixel-border bg-retro-bg-light p-6 md:p-8">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-retro-border">
            <span className="text-3xl">🎒</span>
            <div>
              <h3 className="font-pixel text-[11px] text-retro-orange uppercase">
                Inventory
              </h3>
              <p className="font-retro text-lg text-retro-text-dim">
                Items collected on this journey
              </p>
            </div>
          </div>

          {/* Resume Item */}
          <div className="game-card p-5 mb-6 hover:border-retro-orange group">
            <div className="flex items-center gap-4">
              {/* Item icon */}
              <div className="w-16 h-16 bg-retro-orange/10 border-2 border-retro-orange/40 flex items-center justify-center text-4xl shrink-0 group-hover:border-retro-orange transition-colors">
                📄
              </div>

              {/* Item details */}
              <div className="flex-1">
                <h4 className="font-pixel text-[10px] text-retro-orange mb-1">
                  Resume.pdf
                </h4>
                <p className="font-retro text-lg text-retro-text-dim mb-1">
                  Aayushmaan Jaiswal — Full Stack Developer
                </p>
                <div className="flex items-center gap-3 font-pixel text-[7px] text-retro-text-dim">
                  <span>📊 Rarity: Legendary</span>
                  <span>⚡ Type: Document</span>
                </div>
              </div>
            </div>
          </div>

          {/* Preview */}
          <div className="mb-6">
            <p className="font-pixel text-[8px] text-retro-text-dim mb-3 uppercase tracking-wider">
              ▶ Preview
            </p>
            <a
              href="/cv-snapshot.png"
              target="_blank"
              rel="noopener noreferrer"
              className="block pixel-border bg-retro-bg p-3"
              title="Open preview"
            >
              <img
                src="/cv-snapshot.png"
                alt="Resume preview"
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </a>
          </div>

          {/* Stats preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {[
              { label: "Projects", value: String(projects.length), icon: "⚔️" },
              { label: "Skills", value: String(totalSkills), icon: "🛡️" },
              { label: "Certs", value: String(certificates.length), icon: "📜" },
              { label: "Awards", value: String(achievements.length), icon: "🏅" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-retro-surface border-2 border-retro-border p-3 text-center"
              >
                <div className="text-2xl mb-1">{stat.icon}</div>
                <div className="font-pixel text-[10px] text-retro-white mb-1">
                  {stat.value}
                </div>
                <div className="font-pixel text-[7px] text-retro-text-dim uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Download button */}
          <div className="text-center">
            <PixelButton variant="green" onClick={handleDownload}>
              ⬇ Download Resume
            </PixelButton>
            <p className="font-retro text-base text-retro-text-dim mt-3">
              ▶ Downloads resume.pdf if present; otherwise downloads the CV snapshot
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
