"use client";

interface LogoProps {
  variant?: "full" | "icon";
  className?: string;
}

export function Logo({ variant = "full", className }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className || ""}`}>
      <svg viewBox="0 0 40 40" className="h-8 w-8" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Bull head - geometric/angular style with circuit nodes */}
        <path d="M20 4L8 14L4 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-nb-red" />
        <path d="M20 4L32 14L36 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-nb-red" />
        <path d="M8 14L12 24L16 28L20 32L24 28L28 24L32 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-nb-red" />
        <path d="M16 18L20 22L24 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-nb-gold" />
        <circle cx="14" cy="18" r="1.5" className="fill-nb-gold" />
        <circle cx="26" cy="18" r="1.5" className="fill-nb-gold" />
        <circle cx="20" cy="4" r="1.5" className="fill-nb-red" />
        {/* Circuit dots on horns */}
        <circle cx="6" cy="12" r="1" className="fill-nb-gold opacity-60" />
        <circle cx="34" cy="12" r="1" className="fill-nb-gold opacity-60" />
      </svg>
      {variant === "full" && (
        <span className="text-lg font-bold tracking-wider text-foreground">
          NEURO<span className="text-nb-red">BULLS</span>
        </span>
      )}
    </div>
  );
}
