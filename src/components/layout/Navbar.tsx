"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SITE_CONFIG, NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Intersection Observer for active section
  useEffect(() => {
    const sections = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.4 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Desktop / mobile top bar */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-[900] transition-all duration-300",
          scrolled
            ? "bg-[rgba(5,5,8,0.85)] backdrop-blur-xl border-b border-white/[0.06] py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="max-w-screen-2xl mx-auto px-8 md:px-14 xl:px-20 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="relative flex items-center gap-2 group"
            aria-label="Home"
          >
            <div className="relative h-10 w-10 rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] flex items-center justify-center font-bold text-base text-white shadow-[0_0_20px_var(--color-primary-glow)]">
              {SITE_CONFIG.initials}
            </div>
            <span className="hidden sm:block text-lg font-semibold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors duration-200">
              {SITE_CONFIG.name}
            </span>
          </motion.a>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Primary">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={cn(
                    "relative px-4 py-2 text-[15px] rounded-lg transition-all duration-200",
                    "hover:text-[var(--color-text)] hover:bg-white/5",
                    isActive
                      ? "text-[var(--color-text)]"
                      : "text-[var(--color-text-muted)]"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-lg bg-white/5"
                      transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <Button
              variant="primary"
              size="sm"
              magnetic
              href={SITE_CONFIG.resumeUrl}
              external
              className="flex items-center gap-2 leading-none"
            >
              <Download size={16} />
              Resume
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-[850] bg-[rgba(5,5,8,0.97)] backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            <nav className="flex flex-col items-center gap-4" aria-label="Mobile">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.3 }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-3xl font-semibold text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors duration-200"
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Button
                variant="primary"
                size="lg"
                href={SITE_CONFIG.resumeUrl}
                external
                className="gap-2"
              >
                <Download size={16} />
                Download Resume
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
