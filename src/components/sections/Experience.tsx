"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Calendar, CheckCircle2 } from "lucide-react";
import { FadeInView } from "@/components/animations/FadeInView";
import { experiences } from "@/lib/data/experience";

export function Experience() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative py-24 md:py-36" ref={sectionRef}>
      <div className="section-container section-container--md">
        {/* Header */}
        <FadeInView className="mb-16 text-center">
          <span className="section-label">04 / Experience</span>
          <h2 className="section-heading">Work Timeline</h2>
        </FadeInView>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line — hidden on mobile */}
          <div className="timeline-line hidden md:block" />

          <div className="exp-timeline-list">
            {experiences.map((exp, i) => {
              const dotClass = exp.id === "pwc" ? "timeline-dot timeline-dot--pwc" : "timeline-dot timeline-dot--infosys";
              const roleClass = exp.id === "pwc" ? "exp-role--pwc" : "exp-role--infosys";

              return (
                <FadeInView key={exp.id} delay={i * 0.15} direction="up">
                  <div className="exp-timeline-item">
                    {/* Timeline dot */}
                    <div className="hidden md:flex flex-col items-center flex-shrink-0 relative w-14">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 300, damping: 20, delay: i * 0.15 }}
                        className={dotClass}
                      >
                        {exp.company.slice(0, 2).toUpperCase()}
                      </motion.div>
                    </div>

                    {/* Content card */}
                    <motion.div
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      className="glass exp-card rounded-2xl"
                    >
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-bold text-[var(--color-text)] text-2xl">
                              {exp.company}
                            </h3>
                            {exp.current && (
                              <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-[var(--color-success)]/10 text-[var(--color-success)] border border-[var(--color-success)]/20">
                                Current
                              </span>
                            )}
                          </div>
                          <p className={`text-lg font-medium ${roleClass}`}>{exp.role}</p>
                        </div>
                        <div className="flex flex-col items-start sm:items-end gap-1 text-sm text-[var(--color-text-dim)] font-mono flex-shrink-0">
                          <span className="flex items-center gap-1.5">
                            <Calendar size={11} /> {exp.period}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <MapPin size={11} /> {exp.location}
                          </span>
                        </div>
                      </div>

                      {/* Bullets */}
                      <ul className="exp-bullet-list">
                        {exp.bullets.map((bullet, bi) => (
                          <motion.li
                            key={bi}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 + bi * 0.08 }}
                            className="exp-bullet"
                          >
                            <CheckCircle2
                              size={16}
                              className={`exp-bullet-icon ${roleClass}`}
                            />
                            <span>{bullet}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </FadeInView>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
