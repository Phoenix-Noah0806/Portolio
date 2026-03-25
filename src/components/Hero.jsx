import React, { useEffect, useMemo, useRef, useState } from "react";
import { personalInfo } from "../data/portfolioData";
import PixelButton from "./PixelButton";

/**
 * Hero — Game Start Screen with pixel star background and "Press Start".
 */
export default function Hero() {
  const canvasRef = useRef(null);
  const [titleIndex, setTitleIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const titles = useMemo(() => {
    const list = Array.isArray(personalInfo.titles) ? personalInfo.titles : [];
    const fallback = personalInfo.title ? [personalInfo.title] : [];
    return (list.length ? list : fallback).filter(Boolean);
  }, []);

  const maxTitleChars = useMemo(() => {
    return titles.reduce((maxLen, t) => Math.max(maxLen, String(t).length), 0);
  }, [titles]);

  useEffect(() => {
    if (titles.length <= 1) return;

    const intervalMs = 2200;
    const fadeMs = 250;
    let timeoutId;

    const intervalId = setInterval(() => {
      setIsFading(true);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setTitleIndex((prev) => (prev + 1) % titles.length);
        setIsFading(false);
      }, fadeMs);
    }, intervalMs);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, [titles]);

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

        {/* Profile photo */}
        <div className="mx-auto mb-6 w-fit pixel-border bg-retro-bg-light/60 backdrop-blur-sm p-2">
          <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 overflow-hidden bg-retro-surface">
            <img
              src="/profile.jpg"
              alt={personalInfo.name}
              className="w-full h-full object-cover image-smooth"
              decoding="async"
            />
          </div>
        </div>

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
          <p
            className="font-retro text-2xl md:text-3xl text-retro-green text-shadow-green tracking-wider transition-opacity duration-300 inline-block"
            style={{
              opacity: isFading ? 0 : 1,
              minWidth: maxTitleChars ? `${maxTitleChars}ch` : undefined,
            }}
            aria-live="polite"
            aria-atomic="true"
          >
            {titles[titleIndex]}
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

        {/* Social shortcuts */}
        <div className="mt-5 flex items-center justify-center gap-3 flex-wrap">
          <PixelButton href={personalInfo.github} variant="cyan" className="text-sm">
            GITHUB
          </PixelButton>
          <PixelButton href={personalInfo.linkedin} variant="magenta" className="text-sm">
            LINKEDIN
          </PixelButton>
        </div>

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
