/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        pixel: ['"Press Start 2P"', 'cursive'],
        retro: ['"VT323"', 'monospace'],
      },
      colors: {
        'retro-bg': '#0f0e17',
        'retro-bg-light': '#1a1932',
        'retro-surface': '#232946',
        'retro-border': '#2e3a5e',
        'retro-green': '#2de84a',
        'retro-cyan': '#00fff5',
        'retro-yellow': '#ffe66d',
        'retro-magenta': '#ff2975',
        'retro-orange': '#ff8c42',
        'retro-purple': '#b14aed',
        'retro-blue': '#4a9eff',
        'retro-text': '#eebbc3',
        'retro-text-dim': '#8892b0',
        'retro-white': '#fffffe',
      },
      boxShadow: {
        'pixel': '4px 4px 0px #000',
        'pixel-sm': '2px 2px 0px #000',
        'pixel-green': '4px 4px 0px #0a5c1a, 0 0 15px rgba(45,232,74,0.3)',
        'pixel-cyan': '4px 4px 0px #005c57, 0 0 15px rgba(0,255,245,0.3)',
        'pixel-magenta': '4px 4px 0px #5c0a2a, 0 0 15px rgba(255,41,117,0.3)',
        'pixel-yellow': '4px 4px 0px #5c4a0a, 0 0 15px rgba(255,230,109,0.3)',
        'glow-green': '0 0 20px rgba(45,232,74,0.4), 0 0 40px rgba(45,232,74,0.15)',
        'glow-cyan': '0 0 20px rgba(0,255,245,0.4), 0 0 40px rgba(0,255,245,0.15)',
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pixelFadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        pressDown: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(4px)' },
          '100%': { transform: 'translateY(0)' },
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(2px, -2px)' },
          '60%': { transform: 'translate(-1px, 1px)' },
          '80%': { transform: 'translate(1px, -1px)' },
        },
        loadBar: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        spriteWalk: {
          '0%, 100%': { transform: 'translateY(0) scaleX(1)' },
          '25%': { transform: 'translateY(-3px) scaleX(1)' },
          '50%': { transform: 'translateY(0) scaleX(1)' },
          '75%': { transform: 'translateY(-3px) scaleX(1)' },
        },
      },
      animation: {
        blink: 'blink 1s steps(2) infinite',
        float: 'float 3s ease-in-out infinite',
        'pixel-fade': 'pixelFadeIn 0.6s ease-out both',
        scanline: 'scanline 8s linear infinite',
        twinkle: 'twinkle 3s ease-in-out infinite',
        'slide-right': 'slideRight 0.5s ease-out',
        'press-down': 'pressDown 0.15s ease-in-out',
        glitch: 'glitch 0.3s ease-in-out',
        'load-bar': 'loadBar 2.5s ease-in-out forwards',
        'sprite-walk': 'spriteWalk 0.6s steps(4) infinite',
      },
    },
  },
  plugins: [],
};
