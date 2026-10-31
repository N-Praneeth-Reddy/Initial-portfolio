"use client";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "secondary" | "outline";
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "ui-badge inline-flex items-center gap-2 rounded-full text-sm font-medium tracking-wide transition-all duration-200",
        {
          default:
            "bg-white/[0.06] text-[var(--color-text-muted)] border border-white/15 hover:border-white/25",
          primary:
            "bg-[var(--color-primary)]/12 text-[var(--color-primary)] border border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/20",
          secondary:
            "bg-[var(--color-secondary)]/12 text-[var(--color-secondary)] border border-[var(--color-secondary)]/30 hover:bg-[var(--color-secondary)]/20",
          outline:
            "bg-transparent text-[var(--color-text-muted)] border border-white/15 hover:border-white/30",
        }[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
