"use client";
import { motion } from "framer-motion";
import { FadeInView } from "@/components/animations/FadeInView";
import { GlowEffect } from "@/components/ui/GlowEffect";
import { SITE_CONFIG } from "@/lib/constants";

const stats = [
  { value: "1+", label: "Year at Infosys", suffix: "" },
  { value: "3", label: "Production Projects", suffix: "" },
  { value: "10+", label: "AI Technologies", suffix: "" },
  { value: "95", label: "Peak Model Accuracy", suffix: "%" },
];

const terminalLines = [
  { prompt: "$ ", cmd: "whoami", delay: 0.2 },
  { output: "> Praneeth N — AI/ML Engineer @ Infosys", delay: 0.5 },
  { prompt: "$ ", cmd: "cat focus.txt", delay: 0.9 },
  { output: "> Agentic AI · LLM Workflows · RAG Pipelines", delay: 1.2 },
  { output: "> Multi-Agent Systems · FastAPI · AWS", delay: 1.5 },
  { prompt: "$ ", cmd: "cat status.txt", delay: 1.9 },
  { output: "> 🟢 Available for AI Engineering roles", delay: 2.2 },
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-36 overflow-hidden">
      <GlowEffect
        className="w-[500px] h-[500px] -bottom-20 right-0 z-0"
        color="secondary"
        intensity="low"
      />

      <div className="section-container">
        {/* Section header */}
        <FadeInView className="mb-16 text-center">
          <span className="section-label">01 / About</span>
          <h2 className="section-heading about-heading">Who I Am</h2>
        </FadeInView>

        {/* Two-column split: text + terminal */}
        <div className="about-content">
          {/* Left — text */}
          <FadeInView direction="left">
            <p className="about-body-text mb-6">
              I&apos;m an AI/ML engineer with a passion for building systems
              that think — not just compute. My work sits at the intersection
              of{" "}
              <span className="about-link-primary">
                large language models
              </span>
              ,{" "}
              <span className="about-link-secondary">
                agentic architectures
              </span>
              , and production backend engineering.
            </p>
            <p className="about-body-text mb-8">
              At Infosys, I design multi-agent orchestration pipelines using
              LangGraph and LangChain, build RAG systems that retrieve with
              precision, and ship FastAPI backends that power AI products at
              scale on AWS.
            </p>
            <div className="flex flex-wrap gap-4">
              {["SRM University '25", "Infosys — Specialist Programmer", "Hyderabad, India"].map((item) => (
                <span
                  key={item}
                  className="px-5 py-2.5 text-sm font-mono rounded-xl border border-white/15 text-[var(--color-text-muted)] bg-white/[0.04]"
                >
                  {item}
                </span>
              ))}
            </div>
          </FadeInView>

          {/* Right — Terminal */}
          <FadeInView direction="right" delay={0.15}>
            <div className="glass rounded-xl overflow-hidden border border-[var(--color-primary)]/20 shadow-[0_0_40px_rgba(108,99,255,0.08)]">
              {/* Terminal title bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.03] border-b border-white/[0.06]">
                <span className="h-3 w-3 rounded-full bg-red-500/70" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
                <span className="h-3 w-3 rounded-full bg-green-500/70" />
                <span className="ml-3 text-xs font-mono text-[var(--color-text-dim)]">
                  praneeth@ai-lab ~ zsh
                </span>
              </div>
              {/* Terminal body */}
              <div className="p-7 font-mono text-sm space-y-2 min-h-[280px]">
                {terminalLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: line.delay, duration: 0.3 }}
                  >
                    {"prompt" in line ? (
                      <p>
                        <span className="text-[var(--color-primary)]">{line.prompt}</span>
                        <span className="text-[var(--color-text)]">{line.cmd}</span>
                      </p>
                    ) : (
                      <p className="text-[var(--color-success)] pl-2">{line.output}</p>
                    )}
                  </motion.div>
                ))}
                {/* Blinking cursor */}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="inline-block w-2 h-4 bg-[var(--color-primary)] ml-1 align-middle"
                />
              </div>
            </div>
          </FadeInView>
        </div>

        {/* Stats row */}
        <div className="about-stats-grid">
          {stats.map((stat, i) => (
            <FadeInView key={stat.label} delay={i * 0.1} direction="up">
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="glass rounded-2xl p-8 text-center group hover:border-[var(--color-primary)]/40 transition-colors duration-300"
              >
                <div className="about-stat-value gradient-text font-extrabold leading-none mb-2">
                  {stat.value}
                  <span className="text-[var(--color-secondary)]">{stat.suffix}</span>
                </div>
                <p className="text-sm text-[var(--color-text-muted)] font-medium leading-tight">
                  {stat.label}
                </p>
              </motion.div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
