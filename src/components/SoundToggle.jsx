import React, { useState, useCallback } from "react";

/**
 * SoundToggle — Mute/unmute toggle for click sound effects.
 * Creates a retro beep sound using Web Audio API.
 */

// Shared audio context
let audioCtx = null;

export function playClickSound() {
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.type = "square";
    osc.frequency.setValueAtTime(660, audioCtx.currentTime);
    osc.frequency.setValueAtTime(440, audioCtx.currentTime + 0.05);

    gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.12);

    osc.start(audioCtx.currentTime);
    osc.stop(audioCtx.currentTime + 0.12);
  } catch (e) {
    // Silently fail if audio isn't available
  }
}

export default function SoundToggle({ soundOn, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="fixed bottom-4 right-4 z-50 w-10 h-10 bg-retro-surface border-2 border-retro-border flex items-center justify-center text-lg hover:border-retro-green transition-colors"
      title={soundOn ? "Mute sounds" : "Unmute sounds"}
      aria-label={soundOn ? "Mute sounds" : "Unmute sounds"}
    >
      {soundOn ? "🔊" : "🔇"}
    </button>
  );
}
