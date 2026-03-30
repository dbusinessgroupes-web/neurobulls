"use client";

interface LogoProps {
  variant?: "full" | "icon";
  className?: string;
}

export function Logo({ variant = "full", className }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className || ""}`}>
      <svg viewBox="0 0 40 40" className="h-8 w-8" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Bull horns */}
        <path d="M6 8C6 8 3 14 4 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="text-nb-gold" />
        <path d="M34 8C34 8 37 14 36 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="text-nb-gold" />
        {/* Bull head outline */}
        <path d="M10 16C10 16 8 20 10 26C12 32 16 34 20 35C24 34 28 32 30 26C32 20 30 16 30 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-nb-red" />
        {/* Top of head connecting to horns */}
        <path d="M10 16C12 12 16 10 20 10C24 10 28 12 30 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-nb-red" />
        {/* Eyes */}
        <circle cx="15" cy="20" r="1.5" className="fill-foreground" />
        <circle cx="25" cy="20" r="1.5" className="fill-foreground" />
        {/* Nose ring */}
        <path d="M17 28C17 28 18.5 30 20 30C21.5 30 23 28 23 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-nb-gold" />
        {/* Nostrils */}
        <circle cx="17" cy="26" r="1" className="fill-nb-red" />
        <circle cx="23" cy="26" r="1" className="fill-nb-red" />
      </svg>
      {variant === "full" && (
        <span className="text-lg font-bold tracking-wider text-foreground">
          NEURO<span className="text-nb-red">BULLS</span>
        </span>
      )}
    </div>
  );
}
