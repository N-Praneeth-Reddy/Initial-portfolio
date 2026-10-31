"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE_CONFIG } from "@/lib/constants";

export function LoadingScreen() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Only show once per session
    if (sessionStorage.getItem("portfolio_loaded")) return;
    setVisible(true);

    const start = performance.now();
    const duration = 1800;

    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);
      if (elapsed < duration) {
        requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          setVisible(false);
          sessionStorage.setItem("portfolio_loaded", "1");
        }, 250);
      }
    };
    requestAnimationFrame(tick);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="loader-bg fixed inset-0 z-[9999] flex flex-col items-center justify-center"
        >
          {/* Ambient glow */}
          <div
            aria-hidden
            className="loader-glow absolute w-[500px] h-[500px] rounded-full blur-3xl opacity-20 pointer-events-none"
          />

          {/* Logo */}
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative mb-10"
          >
            <div
              className="loader-logo w-24 h-24 rounded-3xl flex items-center justify-center text-4xl font-extrabold text-white shadow-[0_0_48px_rgba(108,99,255,0.4)]"
            >
              {SITE_CONFIG.initials}
            </div>
          </motion.div>

          {/* Name */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-sm font-mono text-[var(--color-text-muted)] mb-10 tracking-widest uppercase"
          >
            {SITE_CONFIG.name} · {SITE_CONFIG.title}
          </motion.p>

          {/* Progress bar */}
          <div className="w-48 h-[2px] rounded-full bg-white/10 overflow-hidden">
            <motion.div
              className="loader-progress-fill h-full rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ ease: "linear" }}
            />
          </div>

          {/* Progress number */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-3 text-xs font-mono text-[var(--color-text-dim)]"
          >
            {progress}%
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
