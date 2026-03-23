import React from "react";

/**
 * PixelButton — Retro game-style button with press-down effect.
 * @param {string} children - Button text
 * @param {function} onClick - Click handler
 * @param {string} variant - "green" | "cyan" | "magenta" | "yellow"
 * @param {string} href - If provided, renders as an anchor tag
 * @param {string} className - Additional CSS classes
 */
export default function PixelButton({
  children,
  onClick,
  variant = "green",
  href,
  className = "",
  type = "button",
  ...rest
}) {
  const variants = {
    green: "pixel-btn",
    cyan: "pixel-btn pixel-btn-cyan",
    magenta:
      "pixel-btn bg-retro-magenta shadow-[0_6px_0_#5c0a2a,0_8px_8px_rgba(0,0,0,0.4)] hover:bg-[#ff4d8f] hover:shadow-[0_6px_0_#5c0a2a,0_8px_8px_rgba(0,0,0,0.4),0_0_20px_rgba(255,41,117,0.4)] active:translate-y-1 active:shadow-[0_2px_0_#5c0a2a,0_3px_4px_rgba(0,0,0,0.3)]",
    yellow:
      "pixel-btn bg-retro-yellow shadow-[0_6px_0_#5c4a0a,0_8px_8px_rgba(0,0,0,0.4)] hover:bg-[#fff08a] hover:shadow-[0_6px_0_#5c4a0a,0_8px_8px_rgba(0,0,0,0.4),0_0_20px_rgba(255,230,109,0.4)] active:translate-y-1 active:shadow-[0_2px_0_#5c4a0a,0_3px_4px_rgba(0,0,0,0.3)]",
  };

  const btnClass = `${variants[variant] || variants.green} ${className}`;

  // If href is provided, render as link
  if (href) {
    return (
      <a
        href={href}
        className={btnClass}
        target="_blank"
        rel="noopener noreferrer"
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={btnClass} type={type} {...rest}>
      {children}
    </button>
  );
}
