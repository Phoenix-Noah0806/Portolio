import React from "react";

/**
 * SectionHeader — "LEVEL X" style header with blinking cursor
 * @param {string} level - Level number (e.g., "01")
 * @param {string} title - Section title
 * @param {string} color - Accent color class (green, cyan, magenta, yellow)
 */
export default function SectionHeader({ level, title, color = "green" }) {
  const colorMap = {
    green: {
      text: "text-retro-green",
      shadow: "text-shadow-green",
      border: "border-retro-green",
      bg: "bg-retro-green",
    },
    cyan: {
      text: "text-retro-cyan",
      shadow: "text-shadow-cyan",
      border: "border-retro-cyan",
      bg: "bg-retro-cyan",
    },
    magenta: {
      text: "text-retro-magenta",
      shadow: "text-shadow-magenta",
      border: "border-retro-magenta",
      bg: "bg-retro-magenta",
    },
    yellow: {
      text: "text-retro-yellow",
      shadow: "text-shadow-yellow",
      border: "border-retro-yellow",
      bg: "bg-retro-yellow",
    },
    orange: {
      text: "text-retro-orange",
      shadow: "text-shadow-yellow",
      border: "border-retro-orange",
      bg: "bg-retro-orange",
    },
    purple: {
      text: "text-retro-purple",
      shadow: "text-shadow-magenta",
      border: "border-retro-purple",
      bg: "bg-retro-purple",
    },
  };

  const c = colorMap[color] || colorMap.green;

  return (
    <div className="mb-12 text-center">
      {/* Level badge */}
      <div className="inline-flex items-center gap-3 mb-4">
        <span className={`w-8 h-[3px] ${c.bg} inline-block`}></span>
        <span
          className={`font-pixel text-[10px] tracking-wider ${c.text} uppercase`}
        >
          Level {level}
        </span>
        <span className={`w-8 h-[3px] ${c.bg} inline-block`}></span>
      </div>

      {/* Title */}
      <h2
        className={`font-pixel text-xl md:text-2xl ${c.text} ${c.shadow} uppercase`}
      >
        {title}
        <span className="animate-blink ml-2 inline-block">_</span>
      </h2>

      {/* Decorative underline */}
      <div className="flex items-center justify-center gap-2 mt-4">
        <span className={`w-4 h-1 ${c.bg} pixel-pulse`}></span>
        <span className={`w-2 h-1 ${c.bg} opacity-60 pixel-pulse`} style={{ animationDelay: "120ms" }}></span>
        <span className={`w-1 h-1 ${c.bg} opacity-30 pixel-pulse`} style={{ animationDelay: "240ms" }}></span>
      </div>
    </div>
  );
}
