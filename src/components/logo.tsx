"use client";

interface LogoProps {
  variant?: "full" | "icon";
  className?: string;
}

export function Logo({ variant = "full", className }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className || ""}`}>
      <svg viewBox="0 0 40 40" className="h-9 w-9" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Elegant minimalist bull — Lamborghini/premium style */}
        {/* Left horn — sweeping curve */}
        <path d="M4 6C5.5 10 7 13 10 15.5" className="stroke-nb-gold" strokeWidth="2" strokeLinecap="round" fill="none" />
        {/* Right horn — sweeping curve */}
        <path d="M36 6C34.5 10 33 13 30 15.5" className="stroke-nb-gold" strokeWidth="2" strokeLinecap="round" fill="none" />
        {/* Head — solid filled shape, angular/geometric */}
        <path
          d="M10 15.5C10 15.5 8 18 8.5 22C9 25 11 28 14 30L17 31.5C18.5 32 19.5 32.5 20 32.5C20.5 32.5 21.5 32 23 31.5L26 30C29 28 31 25 31.5 22C32 18 30 15.5 30 15.5C27 13 24 12 20 12C16 12 13 13 10 15.5Z"
          className="fill-nb-red"
        />
        {/* Forehead line — subtle geometric detail */}
        <path d="M15 15L20 13L25 15" className="stroke-nb-gold/60" strokeWidth="0.8" strokeLinecap="round" fill="none" />
        {/* Eyes — sharp, angular */}
        <path d="M14 20L16.5 19.5L14.5 21" className="stroke-white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M26 20L23.5 19.5L25.5 21" className="stroke-white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        {/* Nose bridge — center line */}
        <path d="M20 22V26" className="stroke-white/30" strokeWidth="0.6" strokeLinecap="round" />
        {/* Nostrils — minimal dots */}
        <ellipse cx="17" cy="27" rx="1.2" ry="0.8" className="fill-white/40" />
        <ellipse cx="23" cy="27" rx="1.2" ry="0.8" className="fill-white/40" />
        {/* Nose ring — subtle gold arc */}
        <path d="M18 29C18 29 19 30.5 20 30.5C21 30.5 22 29 22 29" className="stroke-nb-gold" strokeWidth="1" strokeLinecap="round" fill="none" />
      </svg>
      {variant === "full" && (
        <span className="text-lg font-bold tracking-wider text-foreground">
          NEURO<span className="text-nb-red">BULLS</span>
        </span>
      )}
    </div>
  );
}
