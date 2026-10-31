"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  magnetic?: boolean;
  href?: string;
  external?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  magnetic = false,
  href,
  external,
  children,
  className,
  ...props
}: ButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [magnetPos, setMagnetPos] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: React.MouseEvent) {
    if (!magnetic || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    setMagnetPos({
      x: (e.clientX - cx) * 0.35,
      y: (e.clientY - cy) * 0.35,
    });
  }

  function handleMouseLeave() {
    setMagnetPos({ x: 0, y: 0 });
  }

  const sizeClasses = {
    sm: "min-h-10 px-6 py-2.5 text-sm",
    md: "min-h-12 px-8 py-3.5 text-base",
    lg: "min-h-14 px-10 py-4 text-lg",
  };

  const variantClasses = {
    primary: [
      "bg-[var(--color-primary)] text-white font-medium",
      "hover:shadow-[0_0_24px_var(--color-primary-glow),0_0_48px_var(--color-primary-glow)]",
      "active:scale-[0.97]",
    ].join(" "),
    ghost: [
      "bg-transparent text-[var(--color-text-muted)] border-[1.5px] border-white/15",
      "hover:bg-white/5 hover:text-[var(--color-text)] hover:border-white/30",
    ].join(" "),
    outline: [
      "bg-transparent text-[var(--color-primary)] border-[1.5px] border-[var(--color-primary)]/50",
      "hover:bg-[var(--color-primary)]/10 hover:border-[var(--color-primary)]/80",
      "hover:shadow-[0_0_20px_var(--color-primary-glow)]",
    ].join(" "),
  };

  const baseClasses = cn(
    "relative inline-flex min-w-0 items-center justify-center gap-3 rounded-2xl font-semibold leading-none",
    "transition-all duration-300 cursor-pointer select-none outline-none",
    "focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background)]",
    sizeClasses[size],
    variantClasses[variant],
    className
  );

  const motionStyle = magnetic
    ? { x: magnetPos.x, y: magnetPos.y }
    : {};

  const content = (
    <motion.div
      ref={ref}
      style={motionStyle}
      animate={motionStyle}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative inline-flex"
    >
      {href ? (
        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className={cn(baseClasses, "whitespace-nowrap")}
        >
          {children}
        </a>
      ) : (
        <button className={cn(baseClasses, "whitespace-nowrap")} {...props}>
          {children}
        </button>
      )}
    </motion.div>
  );

  return content;
}
