import React, { useState, useEffect } from "react";
import { navLinks } from "../data/portfolioData";

/**
 * Navbar — Fixed retro game menu navigation bar.
 * Highlights active section, smooth scrolls on click, hamburger on mobile.
 */
export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll for background change
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Intersection Observer for active section
  useEffect(() => {
    const sections = navLinks.map((l) => document.getElementById(l.id));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((s) => s && observer.observe(s));
    return () => sections.forEach((s) => s && observer.unobserve(s));
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-retro-bg/95 backdrop-blur-sm border-b-2 border-retro-green/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-14">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-pixel text-[10px] text-retro-green text-shadow-green hover:text-retro-cyan transition-colors"
        >
          {"<AJ/>"}
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`font-pixel text-[8px] px-3 py-2 transition-all duration-200 uppercase tracking-wider
                ${
                  activeSection === link.id
                    ? "text-retro-bg bg-retro-green shadow-pixel-sm"
                    : "text-retro-text-dim hover:text-retro-green hover:bg-retro-green/10"
                }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden font-pixel text-retro-green text-sm p-2"
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-retro-bg/98 border-t-2 border-retro-green/30 animate-pixel-fade">
          <div className="flex flex-col py-2">
            {navLinks.map((link, i) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`font-pixel text-[9px] px-6 py-3 text-left uppercase tracking-wider transition-all
                  ${
                    activeSection === link.id
                      ? "text-retro-bg bg-retro-green"
                      : "text-retro-text-dim hover:text-retro-green hover:bg-retro-green/10"
                  }`}
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <span className="text-retro-green/50 mr-2">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
