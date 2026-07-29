"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Calendar, MapPin, ChevronRight, Zap } from "lucide-react";

const experiences = [
  {
    role: "Solution Engineer 1",
    company: "Whirldata Inc",
    period: "Feb 2024 – May 2026",
    location: "Chennai, India",
    type: "Full-time",
    achievements: [
      {
        icon: "🔄",
        text: "Led end-to-end migration of legacy monolithic PHP applications to a highly concurrent microservices architecture using React and FastAPI — zero downtime, seamless feature delivery.",
      },
      {
        icon: "⚡",
        text: "Architected responsive React and Redux analytics dashboards, reducing UI load times by 30% while migrating to cost-effective open-source component libraries.",
      },
      {
        icon: "🚀",
        text: "Engineered multithreaded RESTful APIs with Python and FastAPI, boosting backend server throughput by 60% for 100K+ daily data-heavy transactions.",
      },
      {
        icon: "📊",
        text: "Designed robust database sharding strategies for 1M+ high-volume transactions, enabling highly scalable bulk processing.",
      },
      {
        icon: "🔧",
        text: "Automated CI/CD pipelines using Bitbucket, Docker, and Azure virtual machines — reduced deployment latency by 60%.",
      },
      {
        icon: "🗄️",
        text: "Optimized complex SQL execution plans and introduced strategic indexing, drastically accelerating KPI dashboard query performance.",
      },
      {
        icon: "🏗️",
        text: "Refactored monolithic Laravel/Lumen controllers into reusable service layers — reduced codebase complexity by 50%, enabling future enterprise scaling.",
      },
      {
        icon: "🔐",
        text: "Built hierarchical workflow systems with custom Role-Based Access Control (RBAC), reducing manual operational errors in auditing and case management.",
      },
      {
        icon: "👥",
        text: "Collaborated on architectural decisions and conducted peer code reviews to ensure design consistency and code quality.",
      },
    ],
    metrics: [
      { label: "UI Load Time", value: "−30%" },
      { label: "Backend Throughput", value: "+60%" },
      { label: "Deploy Latency", value: "−60%" },
      { label: "Code Complexity", value: "−50%" },
    ],
    stack: ["React", "Next.js", "FastAPI", "Python", "Docker", "Azure", "PostgreSQL", "MySQL", "Bitbucket", "PHP", "Laravel"],
  },
];

export default function ExperienceSection() {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section id="experience" className="relative py-24 px-6 overflow-hidden">
      {/* Decorative */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px flex-1 max-w-[40px] bg-purple-500/50" />
            <span className="text-xs font-mono text-purple-500 uppercase tracking-widest">
              Work History
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight section-line pb-3">
            Professional{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Experience
            </span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-purple-500/30 to-transparent hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative md:pl-16"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-0 top-5 w-12 h-12 items-center justify-center">
                  <div className="relative">
                    <div className="w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(0,217,255,0.8)]" />
                    <div className="absolute inset-0 rounded-full bg-cyan-400/30 animate-ping" style={{ animationDuration: "3s" }} />
                  </div>
                </div>

                {/* Card */}
                <div className="glass-card rounded-2xl border border-white/8 overflow-hidden hover:border-cyan-500/20 transition-all duration-300">
                  {/* Header */}
                  <button
                    className="w-full p-6 text-left"
                    onClick={() => setExpanded(expanded === i ? null : i)}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <Briefcase className="w-4 h-4 text-cyan-400 shrink-0" />
                          <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                          <span className="text-xs font-mono px-2 py-0.5 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded-full">
                            {exp.type}
                          </span>
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-sm font-mono text-gray-400">
                          <span className="text-purple-400 font-semibold">{exp.company}</span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5" />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: expanded === i ? 90 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-gray-500 mt-1 shrink-0"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </motion.div>
                    </div>

                    {/* Metrics always visible */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-5">
                      {exp.metrics.map((m, j) => (
                        <div
                          key={j}
                          className="text-center p-3 rounded-xl bg-white/3 border border-white/5"
                        >
                          <div className="text-xl font-black text-cyan-400">{m.value}</div>
                          <div className="text-xs font-mono text-gray-500 mt-0.5">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  </button>

                  {/* Expandable details */}
                  <AnimatePresence>
                    {expanded === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 border-t border-white/5 pt-5">
                          <ul className="space-y-3 mb-6">
                            {exp.achievements.map((item, j) => (
                              <motion.li
                                key={j}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: j * 0.04 }}
                                className="flex items-start gap-3 text-sm text-gray-300 leading-relaxed"
                              >
                                <span className="text-base shrink-0 mt-0.5">{item.icon}</span>
                                {item.text}
                              </motion.li>
                            ))}
                          </ul>

                          {/* Stack */}
                          <div className="flex flex-wrap gap-2">
                            {exp.stack.map((tech) => (
                              <span
                                key={tech}
                                className="px-2.5 py-1 text-xs font-mono text-gray-400 bg-white/3 border border-white/8 rounded-lg"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Engineering impact callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 p-6 rounded-2xl border border-purple-500/20 bg-purple-500/5 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative flex items-center gap-3 mb-3">
            <Zap className="w-5 h-5 text-purple-400" />
            <span className="font-bold text-white">Engineering Impact</span>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed relative">
            Over 2+ years of production-level experience shipping features used by real enterprise clients —
            from migrating legacy monoliths to architecting AI-driven workflows that handle millions of
            daily data operations.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
