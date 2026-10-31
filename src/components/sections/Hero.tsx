"use client";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowDown, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GlowEffect } from "@/components/ui/GlowEffect";
import { SITE_CONFIG } from "@/lib/constants";

// Three.js canvas — must be dynamically imported, no SSR
const NeuralBackground = dynamic(
  () => import("@/components/three/NeuralBackground").then((m) => m.NeuralBackground),
  { ssr: false }
);

function AnimatedName({ name }: { name: string }) {
  return (
    <motion.h1
      aria-label={name}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="hero-name font-extrabold tracking-tight overflow-hidden"
    >
      {name.split("").map((char, i) => (
        <span
          key={i}
          className={
            i < name.indexOf(" ")
              ? "gradient-text inline-block"
              : "text-[var(--color-text)] inline-block"
          }
        >
          {char === " " ? "\u00a0" : char}
        </span>
      ))}
    </motion.h1>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-40"
    >
      {/* Neural network 3D background */}
      <div className="absolute inset-0 z-[1]">
        <NeuralBackground />
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0 z-[2] bg-[rgba(8,11,20,0.22)] backdrop-blur-[1px]"
      />

      {/* Ambient glow orbs */}
      <GlowEffect
        className="w-[700px] h-[700px] -top-48 -left-48 z-[2]"
        color="primary"
        intensity="low"
      />
      <GlowEffect
        className="w-[500px] h-[500px] -top-20 -right-32 z-[2]"
        color="secondary"
        intensity="low"
      />

      {/* Bottom fade to background */}
      <div
        aria-hidden="true"
        className="hero-fade-bottom absolute bottom-0 left-0 right-0 h-48 z-[5] pointer-events-none"
      />

      {/* ── Main content ── */}
      <div className="relative z-[10] flex flex-col items-center text-center px-8 md:px-14 xl:px-20 max-w-4xl mx-auto pt-36 pb-28">

        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hero-badge"
        >
          <span className="relative flex h-2 w-2">
            <span
              className="hero-badge__ping absolute inline-flex h-full w-full rounded-full opacity-75"
            />
            <span
              className="hero-badge__dot relative inline-flex h-2 w-2 rounded-full"
            />
          </span>
          Available for AI Engineering roles
        </motion.div>

        {/* Animated name */}
        <div className="mb-5">
          <AnimatedName name="PRANEETH N" />
        </div>

        {/* Accent line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="hero-accent-bar h-[3px] w-32 rounded-full mb-8"
          aria-hidden="true"
        />

        {/* Typewriter tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="hero-tagline mb-5"
        >
          <TypeAnimation
            sequence={SITE_CONFIG.taglines.flatMap((t) => [t, 2400])}
            wrapper="span"
            repeat={Infinity}
            cursor
            className="hero-tagline__animation"
          />
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="hero-bio max-w-2xl text-[var(--color-text-muted)] leading-relaxed mb-10"
        >
          {SITE_CONFIG.bio}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.6 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          <Button variant="primary" size="lg" magnetic href="#projects" className="hero-cta">
            View Projects <ExternalLink size={18} />
          </Button>
          <Button
            variant="ghost"
            size="lg"
            href={SITE_CONFIG.resumeUrl}
            external
            className="hero-cta"
          >
            <Download size={18} />
            Download Resume
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.6 }}
          className="hero-scroll-indicator flex flex-col items-center gap-2 text-[var(--color-text-dim)]"
        >
          <span className="uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={18} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
