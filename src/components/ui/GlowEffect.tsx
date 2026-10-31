"use client";
import { cn } from "@/lib/utils";

interface GlowEffectProps {
  className?: string;
  color?: "primary" | "secondary" | "both";
  intensity?: "low" | "medium" | "high";
}

export function GlowEffect({
  className,
  color = "primary",
  intensity = "medium",
}: GlowEffectProps) {
  const intensityMap = {
    low: "opacity-20",
    medium: "opacity-40",
    high: "opacity-60",
  };

  const colorMap = {
    primary:
      "bg-[radial-gradient(ellipse_at_center,_var(--color-primary)_0%,_transparent_70%)]",
    secondary:
      "bg-[radial-gradient(ellipse_at_center,_var(--color-secondary)_0%,_transparent_70%)]",
    both: "bg-[radial-gradient(ellipse_at_center,_var(--color-primary)_0%,_var(--color-secondary)_50%,_transparent_70%)]",
  };

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute rounded-full blur-3xl",
        intensityMap[intensity],
        colorMap[color],
        className
      )}
    />
  );
}
