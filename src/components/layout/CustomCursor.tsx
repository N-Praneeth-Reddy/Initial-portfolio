"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function CustomCursor() {
  const reducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);

  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);

  // Dot follows mouse exactly
  const dotX = useSpring(rawX, { stiffness: 1200, damping: 80, mass: 0.2 });
  const dotY = useSpring(rawY, { stiffness: 1200, damping: 80, mass: 0.2 });

  // Ring follows with spring delay
  const ringX = useSpring(rawX, { stiffness: 280, damping: 34, mass: 0.35 });
  const ringY = useSpring(rawY, { stiffness: 280, damping: 34, mass: 0.35 });

  useEffect(() => {
    // Only show on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
      setVisible(true);
    };

    const onEnter = (e: PointerEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest(
        "a, button, [role='button'], input, textarea, select, [data-cursor-hover]"
      );
      const related = e.relatedTarget as Node | null;
      if (interactive && (!related || !interactive.contains(related))) {
        setHovering(true);
      }
    };

    const onLeave = (e: PointerEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest(
        "a, button, [role='button'], input, textarea, select, [data-cursor-hover]"
      );
      const related = e.relatedTarget as Node | null;
      if (interactive && (!related || !interactive.contains(related))) {
        setHovering(false);
      }
    };

    const onMouseDown = () => setClicking(true);
    const onMouseUp = () => setClicking(false);
    const onLeaveWindow = () => setVisible(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("pointerover", onEnter);
    window.addEventListener("pointerout", onLeave);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.documentElement.addEventListener("mouseleave", onLeaveWindow);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("pointerover", onEnter);
      window.removeEventListener("pointerout", onLeave);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.documentElement.removeEventListener("mouseleave", onLeaveWindow);
    };
  }, [rawX, rawY]);

  if (reducedMotion) return null;

  return (
    <>
      {/* Outer ring */}
      <motion.div
        aria-hidden="true"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: hovering ? 1.6 : clicking ? 0.7 : 1,
          opacity: visible ? (hovering ? 0.6 : 0.35) : 0,
          borderColor: hovering
            ? "var(--color-secondary)"
            : "var(--color-primary)",
        }}
        transition={{ duration: 0.18, ease: "easeOut" }}
        className="fixed top-0 left-0 z-[9999] pointer-events-none h-9 w-9 rounded-full border-[1.5px]"
      />

      {/* Inner dot */}
      <motion.div
        aria-hidden="true"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: clicking ? 0.6 : hovering ? 0 : 1,
          opacity: visible ? 1 : 0,
          backgroundColor: hovering
            ? "var(--color-secondary)"
            : "var(--color-primary)",
        }}
        transition={{ duration: 0.14, ease: "easeOut" }}
        className="fixed top-0 left-0 z-[9999] pointer-events-none h-[7px] w-[7px] rounded-full"
      />
    </>
  );
}
