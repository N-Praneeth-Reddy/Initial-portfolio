"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, X, ArrowUpRight } from "lucide-react";
import { FadeInView } from "@/components/animations/FadeInView";
import { Badge } from "@/components/ui/Badge";
import { GlowEffect } from "@/components/ui/GlowEffect";
import { projects } from "@/lib/data/projects";
import type { Project } from "@/types";

function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: (p: Project) => void;
}) {
  return (
    <FadeInView delay={index * 0.12} direction="up">
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
        onClick={() => onOpen(project)}
        className="glass project-card rounded-2xl overflow-hidden cursor-pointer group h-full flex flex-col"
      >
        {/* Gradient accent strip */}
        <div
          className={`h-2 w-full ${
            index === 0
              ? "project-strip-0"
              : index === 1
              ? "project-strip-1"
              : "project-strip-2"
          }`}
        />
        <div className="project-card-meta flex items-center justify-between">
          <span className="text-sm font-mono uppercase tracking-widest text-[var(--color-text-dim)]">
            Project 0{index + 1}
          </span>
          <span className="text-2xl">{index === 0 ? "🤖" : index === 1 ? "📊" : "🚦"}</span>
        </div>

        {/* Content */}
        <div className="project-card-body">
          <h3 className="font-bold text-[var(--color-text)] text-xl mb-4 group-hover:text-[var(--color-primary)] transition-colors duration-200 leading-snug">
            {project.title}
          </h3>
          <p className="project-description text-[var(--color-text-muted)] text-base mb-6 flex-1">
            {project.description}
          </p>

          {/* Impact metric */}
          <div className="project-impact mb-6 rounded-xl bg-[var(--color-primary)]/8 border border-[var(--color-primary)]/20 text-sm text-[var(--color-primary)] font-mono">
            ⚡ {project.impact}
          </div>

          {/* Tags */}
          <div className="project-tag-list mb-6">
            {project.tags.slice(0, 4).map((tag) => (
              <Badge key={tag} variant="default" className="text-xs">
                {tag}
              </Badge>
            ))}
            {project.tags.length > 4 && (
              <Badge variant="outline" className="text-xs">
                +{project.tags.length - 4}
              </Badge>
            )}
          </div>

          {/* Links */}
          <div className="project-card-links flex items-center gap-6 border-t border-white/[0.08]">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1.5 text-xs text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
              >
                <Github size={13} /> GitHub
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1.5 text-xs text-[var(--color-text-muted)] hover:text-[var(--color-secondary)] transition-colors"
              >
                <ExternalLink size={13} /> Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </FadeInView>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[800] flex items-center justify-center p-4 md:p-8"
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ type: "spring", stiffness: 260, damping: 25 }}
          onClick={(e) => e.stopPropagation()}
          className="relative glass rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto border border-[var(--color-primary)]/20 shadow-[0_0_80px_rgba(108,99,255,0.15)]"
        >
          <div className={`h-40 bg-gradient-to-br ${project.gradient} relative`}>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
              aria-label="Close"
            >
              <X size={16} />
            </button>
          </div>
          <div className="p-8">
            <h3 className="text-2xl font-bold text-[var(--color-text)] mb-3">
              {project.title}
            </h3>
            <p className="text-[var(--color-text-muted)] leading-relaxed mb-5">
              {project.longDescription}
            </p>
            <div className="mb-5 px-4 py-3 rounded-xl bg-[var(--color-primary)]/8 border border-[var(--color-primary)]/15 text-sm text-[var(--color-primary)] font-mono">
              ⚡ Impact: {project.impact}
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="primary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="flex gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--color-primary)] text-white text-sm font-medium hover:shadow-[0_0_20px_var(--color-primary-glow)] transition-all"
                >
                  <Github size={15} /> View on GitHub
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-24 md:py-36 overflow-hidden">
      <GlowEffect
        className="w-[600px] h-[600px] -top-20 left-1/2 -translate-x-1/2 z-0"
        color="primary"
        intensity="low"
      />

      <div className="section-container relative z-10">
        {/* Header */}
        <FadeInView className="mb-16 text-center">
          <span className="section-label">03 / Projects</span>
          <h2 className="section-heading">
            Selected Work
          </h2>
          <p className="text-[var(--color-text-muted)] mt-4 max-w-xl mx-auto">
            Production-grade AI systems, not academic experiments.
          </p>
        </FadeInView>

        {/* Cards */}
        <div className="project-card-grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} onOpen={setSelected} />
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
