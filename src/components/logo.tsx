"use client";

interface LogoProps {
  variant?: "full" | "icon";
  className?: string;
}

export function Logo({ variant = "full", className }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className || ""}`}>
      <div className="h-2 w-2" />
      {variant === "full" && (
        <span className="text-lg font-bold tracking-wider text-foreground">
          NEURO<span className="text-nb-red">BULLS</span>
        </span>
      )}
    </div>
  );
}
