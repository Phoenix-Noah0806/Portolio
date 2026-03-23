import React, { useState, useEffect } from "react";

/**
 * ScrollSprite — A small pixel character that moves along the page as user scrolls.
 */
export default function ScrollSprite() {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = right, -1 = left
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollTop = window.scrollY;
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

          setDirection(scrollTop > lastScroll ? 1 : -1);
          setLastScroll(scrollTop);
          setScrollPercent(percent);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScroll]);

  // Only show after scrolling a bit
  if (scrollPercent < 2) return null;

  return (
    <div
      className="fixed bottom-16 z-40 transition-all duration-200 pointer-events-none hidden md:block"
      style={{
        left: `${Math.min(Math.max(scrollPercent, 2), 92)}%`,
      }}
    >
      <div
        className="animate-sprite-walk text-2xl"
        style={{
          transform: `scaleX(${direction})`,
        }}
      >
        🏃
      </div>
      {/* Shadow */}
      <div
        className="w-5 h-1 bg-black/30 rounded-full mx-auto mt-[-2px]"
        style={{ filter: "blur(1px)" }}
      ></div>
    </div>
  );
}
