"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { Send, Mail, Github, Linkedin, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { FadeInView } from "@/components/animations/FadeInView";
import { GlowEffect } from "@/components/ui/GlowEffect";
import { SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const socials = [
  { icon: Github, label: "GitHub", href: SITE_CONFIG.github, color: "hover:text-[var(--color-text)]" },
  { icon: Linkedin, label: "LinkedIn", href: SITE_CONFIG.linkedin, color: "hover:text-[var(--color-secondary)]" },
  { icon: Mail, label: "Email", href: `mailto:${SITE_CONFIG.email}`, color: "hover:text-[var(--color-primary)]" },
];

function InputField({
  label,
  id,
  error,
  textarea,
  ...props
}: {
  label: string;
  id: string;
  error?: string;
  textarea?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>) {
  const inputClass = cn(
    "form-input",
    textarea && "form-input--textarea",
    error && "form-input--error"
  );

  return (
    <div className="form-field">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      {textarea ? (
        <textarea
          id={id}
          rows={5}
          className={inputClass}
          {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input id={id} className={inputClass} {...(props as React.InputHTMLAttributes<HTMLInputElement>)} />
      )}
      {error && (
        <span className="text-xs text-red-400 flex items-center gap-1">
          <AlertCircle size={11} /> {error}
        </span>
      )}
    </div>
  );
}

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-36 overflow-hidden">
      <GlowEffect className="w-[600px] h-[600px] bottom-0 left-1/2 -translate-x-1/2" color="both" intensity="low" />

      <div className="section-container section-container--narrow">
        {/* Header */}
        <FadeInView className="contact-header text-center">
          <span className="section-label">05 / Contact</span>
          <h2 className="section-heading mb-3">Let&apos;s Build Something</h2>
          <p className="text-[var(--color-text-muted)] max-w-lg mx-auto leading-relaxed">
            Open to AI engineering roles, freelance projects, and interesting collaborations.
            Drop a message and I&apos;ll get back to you.
          </p>
        </FadeInView>

        {/* Contact card */}
        <FadeInView delay={0.1} className="contact-card-wrap">
          <div className="relative rounded-2xl overflow-hidden">
            {/* Gradient border */}
            <div aria-hidden className="contact-gradient-border" />

            <div className="contact-card-inner glass rounded-2xl">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center gap-4 py-12 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 18 }}
                    >
                      <CheckCircle2 size={56} className="text-[var(--color-success)]" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-[var(--color-text)]">Message sent!</h3>
                    <p className="text-[var(--color-text-muted)] text-sm">I&apos;ll get back to you shortly.</p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-8"
                    noValidate
                  >
                    <div className="contact-form-row">
                      <InputField
                        label="Name"
                        id="name"
                        placeholder="Your name"
                        error={errors.name?.message}
                        {...register("name", { required: "Name is required" })}
                      />
                      <InputField
                        label="Email"
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        error={errors.email?.message}
                        {...register("email", {
                          required: "Email is required",
                          pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email" },
                        })}
                      />
                    </div>
                    <InputField
                      label="Message"
                      id="message"
                      textarea
                      placeholder="Tell me about your project or opportunity..."
                      error={errors.message?.message}
                      {...register("message", {
                        required: "Message is required",
                        minLength: { value: 20, message: "Please write at least 20 characters" },
                      })}
                    />

                    {status === "error" && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-sm text-red-400 flex items-center gap-2"
                      >
                        <AlertCircle size={14} /> Something went wrong. Please try emailing directly.
                      </motion.p>
                    )}

                    {/* Submit row */}
                    <div className="contact-submit-row">
                      <a
                        href={`mailto:${SITE_CONFIG.email}`}
                        className="text-sm text-[var(--color-text-dim)] font-mono hover:text-[var(--color-primary)] transition-colors"
                      >
                        {SITE_CONFIG.email}
                      </a>
                      <motion.button
                        type="submit"
                        disabled={status === "loading"}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="contact-submit-btn"
                      >
                        {status === "loading" ? (
                          <><Loader2 size={15} className="animate-spin" /> Sending…</>
                        ) : (
                          <><Send size={15} /> Send Message</>
                        )}
                      </motion.button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </FadeInView>

        {/* Social links */}
        <FadeInView delay={0.2} className="contact-social flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
          {socials.map(({ icon: Icon, label, href, color }) => (
            <motion.a
              key={label}
              href={href}
              target={label !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ scale: 1.12, y: -2 }}
              whileTap={{ scale: 0.92 }}
              className={cn(
                "flex items-center gap-2.5 text-[var(--color-text-muted)] text-base transition-colors duration-200",
                color
              )}
            >
              <Icon size={26} />
              <span className="hidden sm:inline">{label}</span>
            </motion.a>
          ))}
        </FadeInView>
      </div>
    </section>
  );
}
