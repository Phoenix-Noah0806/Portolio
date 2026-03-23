import React, { useState, useEffect } from "react";

/**
 * LoadingScreen — Retro game loading animation.
 * Shows a pixel loading bar then fades out.
 */
export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [dots, setDots] = useState("");

  useEffect(() => {
    // Animate progress bar
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setFadeOut(true), 300);
          setTimeout(() => onComplete && onComplete(), 800);
          return 100;
        }
        return prev + Math.random() * 8 + 2;
      });
    }, 80);

    return () => clearInterval(interval);
  }, [onComplete]);

  // Animate dots
  useEffect(() => {
    const dotInterval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 400);
    return () => clearInterval(dotInterval);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-retro-bg flex flex-col items-center justify-center transition-opacity duration-500 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Scanline effect */}
      <div className="scanline-overlay"></div>

      {/* Pixel art decoration */}
      <div className="mb-8 text-center">
        <div className="text-4xl mb-4">🎮</div>
        <h1 className="font-pixel text-retro-green text-shadow-green text-sm md:text-base tracking-wider">
          LOADING GAME{dots}
        </h1>
      </div>

      {/* Progress bar container */}
      <div className="w-64 md:w-80">
        <div className="hp-bar-container mb-3">
          <div
            className="hp-bar-fill bg-retro-green"
            style={{ width: `${Math.min(progress, 100)}%` }}
          ></div>
        </div>

        {/* Progress text */}
        <div className="flex justify-between items-center">
          <span className="font-pixel text-[8px] text-retro-text-dim">
            PROGRESS
          </span>
          <span className="font-pixel text-[8px] text-retro-green">
            {Math.min(Math.floor(progress), 100)}%
          </span>
        </div>
      </div>

      {/* Tip text */}
      <p className="font-retro text-retro-text-dim text-lg mt-8 animate-blink">
        ▶ PRESS ANY KEY TO CONTINUE
      </p>
    </div>
  );
}
