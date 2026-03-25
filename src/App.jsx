import React, { useState, useCallback, useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SoundToggle, { playClickSound } from "./components/SoundToggle";
import ScrollSprite from "./components/ScrollSprite";

/**
 * App — Main application component.
 * Assembles all sections with loading screen, sound effects,
 * scroll sprite, and scanline overlay.
 */
export default function App() {
  const [loading, setLoading] = useState(true);
  const [soundOn, setSoundOn] = useState(false);

  // Handle loading completion
  const handleLoadComplete = useCallback(() => {
    setLoading(false);
  }, []);

  // Toggle sound
  const toggleSound = useCallback(() => {
    setSoundOn((prev) => !prev);
    if (!soundOn) playClickSound();
  }, [soundOn]);

  // Global click sound effect
  useEffect(() => {
    const handleClick = (e) => {
      if (soundOn && (e.target.tagName === "BUTTON" || e.target.tagName === "A")) {
        playClickSound();
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [soundOn]);

  // Keyboard shortcut: press any key to skip loading
  useEffect(() => {
    const handleKeyDown = () => {
      if (loading) {
        setLoading(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [loading]);

  // Konami code easter egg
  useEffect(() => {
    const konamiCode = [
      "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
      "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
      "KeyB", "KeyA",
    ];
    let konamiIndex = 0;

    const handleKonami = (e) => {
      if (e.code === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
          // Easter egg: rainbow mode!
          document.body.style.animation = "none";
          document.body.classList.toggle("rainbow-mode");
          konamiIndex = 0;

          // Show achievement popup
          const popup = document.createElement("div");
          popup.innerHTML = `
            <div style="
              position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
              background: #1a1932; border: 4px solid #ffe66d; padding: 30px 40px;
              z-index: 10000; text-align: center; box-shadow: 6px 6px 0px #000;
            ">
              <div style="font-size: 48px; margin-bottom: 12px;">🏆</div>
              <p style="font-family: 'Press Start 2P', cursive; font-size: 11px; color: #ffe66d; margin-bottom: 8px;">
                ACHIEVEMENT UNLOCKED!
              </p>
              <p style="font-family: 'VT323', monospace; font-size: 20px; color: #fffffe;">
                Secret Code Master
              </p>
            </div>
          `;
          document.body.appendChild(popup);
          setTimeout(() => popup.remove(), 3000);
        }
      } else {
        konamiIndex = 0;
      }
    };

    window.addEventListener("keydown", handleKonami);
    return () => window.removeEventListener("keydown", handleKonami);
  }, []);

  // Reveal sections on scroll (subtle, professional)
  useEffect(() => {
    if (loading) return;

    document.body.classList.add("js-reveal");
    const sections = Array.from(document.querySelectorAll(".retro-reveal"));
    if (!sections.length) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion || typeof IntersectionObserver === "undefined") {
      sections.forEach((el) => el.classList.add("is-revealed"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -6% 0px" }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [loading]);

  return (
    <>
      {/* Loading Screen */}
      {loading && <LoadingScreen onComplete={handleLoadComplete} />}

      {/* Scanline overlay for CRT effect */}
      <div className="scanline-overlay"></div>

      {/* Navigation */}
      <Navbar />

      {/* Scroll Sprite */}
      <ScrollSprite />

      {/* Sound Toggle */}
      <SoundToggle soundOn={soundOn} onToggle={toggleSound} />

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Projects />
        <Education />
        <Certificates />
        <Resume />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
