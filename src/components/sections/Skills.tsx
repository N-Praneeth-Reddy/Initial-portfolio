"use client";
import { motion } from "framer-motion";
import { FadeInView } from "@/components/animations/FadeInView";
import { Badge } from "@/components/ui/Badge";
import { skillCategories } from "@/lib/data/skills";

export function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-36">
      <div className="section-container">
        {/* Header */}
        <FadeInView className="mb-16 text-center">
          <span className="section-label">02 / Skills</span>
          <h2 className="section-heading">Tech Arsenal</h2>
          <p className="text-[var(--color-text-muted)] mt-4 max-w-xl mx-auto">
            The tools and frameworks I wield to build production AI systems.
          </p>
        </FadeInView>

        {/* Category grid */}
        <div className="skill-card-grid">
          {skillCategories.map((cat, catIdx) => (
            <FadeInView key={cat.category} delay={catIdx * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="glass skill-card rounded-2xl group"
              >
                {/* Category header */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="skill-icon-box">{cat.icon}</div>
                  <h3 className="font-semibold text-[var(--color-text)] text-base">
                    {cat.category}
                  </h3>
                </div>

                {/* Skill badges */}
                <div className="skill-tag-list">
                  {cat.skills.map((skill, skillIdx) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: catIdx * 0.05 + skillIdx * 0.04,
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      <Badge
                        variant={skill.level === 5 ? "primary" : "default"}
                        className="text-sm"
                      >
                        {skill.level === 5 && (
                          <span className="text-[var(--color-primary)]">★</span>
                        )}
                        {skill.name}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </FadeInView>
          ))}
        </div>

        {/* Legend */}
        <FadeInView delay={0.4} className="mt-8 flex justify-center">
          <span className="text-xs text-[var(--color-text-dim)] font-mono flex items-center gap-2">
            <span className="text-[var(--color-primary)]">★</span> Core expertise
          </span>
        </FadeInView>
      </div>
    </section>
  );
}
