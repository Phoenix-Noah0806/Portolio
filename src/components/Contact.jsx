import React, { useState } from "react";
import SectionHeader from "./SectionHeader";
import PixelButton from "./PixelButton";
import { personalInfo } from "../data/portfolioData";

/**
 * Contact — Final Boss Stage: Game dialogue contact form + social icons.
 */
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate send
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  const socials = [
    {
      name: "GitHub",
      url: personalInfo.github,
      icon: "⌸",
      color: "text-retro-white hover:text-retro-green",
    },
    {
      name: "LinkedIn",
      url: personalInfo.linkedin,
      icon: "▦",
      color: "text-retro-white hover:text-retro-cyan",
    },
    {
      name: "Email",
      url: `mailto:${personalInfo.email}`,
      icon: "✉",
      color: "text-retro-white hover:text-retro-yellow",
    },
  ];

  return (
    <section id="contact" className="section-container bg-retro-bg-light/30">
      <div className="max-w-3xl mx-auto">
        <SectionHeader level="06" title="Contact Me" color="purple" />

        {/* Boss encounter intro */}
        <div className="text-center mb-8">
          <span className="text-5xl inline-block animate-float">👾</span>
          <p className="font-pixel text-[9px] text-retro-purple mt-4 tracking-wider uppercase animate-blink">
            ⚠ Final Boss Encountered ⚠
          </p>
          <p className="font-retro text-xl text-retro-text-dim mt-2">
            Send a message to defeat the final boss and complete the game!
          </p>
        </div>

        {/* Dialogue box contact form */}
        <div className="dialogue-box p-6 md:p-8 mb-8">
          {/* NPC dialogue header */}
          <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-retro-border">
            <div className="w-10 h-10 bg-retro-purple/20 border-2 border-retro-purple/50 flex items-center justify-center text-xl">
              💬
            </div>
            <div>
              <span className="font-pixel text-[8px] text-retro-purple">
                AAYUSHMAAN
              </span>
              <p className="font-retro text-base text-retro-text-dim">
                NPC — Open for opportunities
              </p>
            </div>
          </div>

          {sent ? (
            <div className="text-center py-8">
              <div className="text-5xl mb-4">✨</div>
              <p className="font-pixel text-[11px] text-retro-green text-shadow-green mb-2">
                MESSAGE SENT!
              </p>
              <p className="font-retro text-xl text-retro-text-dim">
                The NPC has received your message. Quest completed!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label className="font-pixel text-[8px] text-retro-text-dim block mb-2 uppercase">
                  ❯ Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name..."
                  className="w-full bg-retro-bg border-2 border-retro-border p-3 font-retro text-xl text-retro-white placeholder:text-retro-text-dim/40 focus:border-retro-purple focus:outline-none transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label className="font-pixel text-[8px] text-retro-text-dim block mb-2 uppercase">
                  ❯ Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email..."
                  className="w-full bg-retro-bg border-2 border-retro-border p-3 font-retro text-xl text-retro-white placeholder:text-retro-text-dim/40 focus:border-retro-purple focus:outline-none transition-colors"
                />
              </div>

              {/* Message */}
              <div>
                <label className="font-pixel text-[8px] text-retro-text-dim block mb-2 uppercase">
                  ❯ Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Type your message..."
                  className="w-full bg-retro-bg border-2 border-retro-border p-3 font-retro text-xl text-retro-white placeholder:text-retro-text-dim/40 focus:border-retro-purple focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>

              {/* Submit */}
              <div className="text-center pt-2">
                <PixelButton type="submit" variant="green">
                  ⚡ Send Message
                </PixelButton>
              </div>
            </form>
          )}
        </div>

        {/* Social links */}
        <div className="text-center">
          <p className="font-pixel text-[8px] text-retro-text-dim mb-4 uppercase tracking-wider">
            ❯ Other Ways to Connect
          </p>
          <div className="flex items-center justify-center gap-4">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-14 h-14 bg-retro-surface border-2 border-retro-border flex items-center justify-center text-2xl ${social.color} transition-all duration-200 hover:border-retro-purple hover:-translate-y-1 hover:shadow-pixel-sm`}
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Direct contact info */}
          <div className="mt-6 space-y-1">
            <p className="font-retro text-lg text-retro-text-dim">
              ✉ {personalInfo.email}
            </p>
            <p className="font-retro text-lg text-retro-text-dim">
              📱 {personalInfo.phone}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
