"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { SITE_CONFIG, NAV_LINKS } from "@/lib/constants";

export function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const socials = [
    { icon: Github, href: SITE_CONFIG.github, label: "GitHub" },
    { icon: Linkedin, href: SITE_CONFIG.linkedin, label: "LinkedIn" },
    { icon: Mail, href: `mailto:${SITE_CONFIG.email}`, label: "Email" },
  ];

  return (
    <footer className="relative border-t border-white/[0.09] bg-[var(--color-surface)] py-16 px-8 md:px-14 xl:px-20">
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="font-bold text-lg text-[var(--color-text)]">
            {SITE_CONFIG.name}
          </span>
          <span className="text-sm text-[var(--color-text-dim)]">
            Crafted with precision — Next.js + Framer Motion
          </span>
        </div>

        {/* Nav */}
        <nav className="flex items-center gap-5">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Socials + Back to top */}
        <div className="flex items-center gap-6">
          {socials.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ scale: 1.15, color: "var(--color-primary)" }}
              whileTap={{ scale: 0.9 }}
              className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
            >
              <Icon size={21} />
            </motion.a>
          ))}
          <div className="w-px h-7 bg-white/10" />
          <motion.button
            onClick={scrollTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Back to top"
            className="p-2 rounded-lg border border-white/10 text-[var(--color-text-muted)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)]/30 transition-all duration-200"
          >
            <ArrowUp size={18} />
          </motion.button>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-center text-xs text-[var(--color-text-dim)] mt-6">
        © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
      </p>
    </footer>
  );
}
