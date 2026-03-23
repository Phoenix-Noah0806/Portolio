import React, { useEffect, useRef, useMemo } from "react";
import { personalInfo } from "../data/portfolioData";

/**
 * Hero — Game Start Screen with pixel star background and "Press Start".
 */
export default function Hero() {
  const canvasRef = useRef(null);

  // Generate stars once
  const stars = useMemo(() => {
    return Array.from({ length: 80 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() > 0.7 ? 3 : 2,
      duration: 2 + Math.random() * 4,
      delay: Math.random() * 5,
    }));
  }, []);

  const scrollToAbout = () => {
    const el = document.getElementById("about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-retro-bg">
      {/* Pixel stars background */}
      <div className="absolute inset-0 pointer-events-none">
        {stars.map((star) => (
          <div
            key={star.id}
            className="pixel-star"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              "--duration": `${star.duration}s`,
              "--delay": `${star.delay}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-retro-bg pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl">
        {/* Small pixel art controller */}
        <div className="text-5xl mb-6 animate-float">🕹️</div>

        {/* Subtitle */}
        <p className="font-pixel text-[9px] md:text-[11px] text-retro-cyan text-shadow-cyan tracking-widest mb-6 uppercase">
          Welcome Player — Insert Coin
        </p>

        {/* Main Title (name) */}
        <h1 className="font-pixel text-xl sm:text-2xl md:text-3xl lg:text-4xl text-retro-white mb-4 leading-relaxed">
          {personalInfo.name.split(" ").map((word, wi) => (
            <span key={wi} className="inline-block mr-[0.3em]">
              {word.split("").map((ch, i) => (
                <span
                  key={`${wi}-${i}`}
                  className="inline-block hover:text-retro-green hover:animate-glitch transition-colors duration-100"
                  style={{ animationDelay: `${(wi * 20 + i) * 30}ms` }}
                >
                  {ch}
                </span>
              ))}
            </span>
          ))}
        </h1>

        {/* Role */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="w-6 h-[2px] bg-retro-green"></span>
          <p className="font-retro text-2xl md:text-3xl text-retro-green text-shadow-green tracking-wider">
            {personalInfo.title}
          </p>
          <span className="w-6 h-[2px] bg-retro-green"></span>
        </div>

        {/* Tagline */}
        <p className="font-retro text-xl text-retro-text-dim mb-10">
          {personalInfo.tagline}
        </p>

        {/* Press Start blinking text */}
        <p className="font-pixel text-[10px] text-retro-yellow text-shadow-yellow animate-blink mb-8 tracking-wider">
          ▶ PRESS START TO ENTER ◀
        </p>

        {/* Start Button */}
        <button onClick={scrollToAbout} className="pixel-btn text-sm">
          START
        </button>

        {/* Scroll indicator */}
        <div className="mt-16 animate-float">
          <div className="flex flex-col items-center gap-2">
            <span className="font-pixel text-[7px] text-retro-text-dim tracking-wider">
              SCROLL DOWN
            </span>
            <div className="flex flex-col items-center gap-1">
              <span className="w-[3px] h-[3px] bg-retro-green"></span>
              <span className="w-[3px] h-[3px] bg-retro-green opacity-60"></span>
              <span className="w-[3px] h-[3px] bg-retro-green opacity-30"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
