"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { GitBranch, ExternalLink, Cpu, Zap, Globe } from "lucide-react";

const projects = [
  {
    title: "AI-Powered Agentic Task Management System",
    subtitle: "Multi-Agent AI Orchestration",
    tech: ["Next.js", "Python", "FastAPI", "LangGraph", "PostgreSQL", "WebSockets", "Docker"],
    description:
      "Orchestrated a multi-agent AI system for autonomous task creation, prioritization, and execution. Built with FastAPI, LangGraph, and PostgreSQL with real-time workflow visualization.",
    highlights: [
      "Multi-agent orchestration with LangGraph for autonomous task decomposition",
      "WebSocket-based real-time workflow visualization — 30% faster user interaction",
      "Optimized task execution latency to 50–200ms via LLM-driven orchestration",
      "Docker containerization with async data pipelines for cloud-ready deployment",
    ],
    metrics: { latency: "50–200ms", speed: "+30%", type: "AI / Backend" },
    github: "https://github.com/vignesh1683/agentic-task-management",
    live: "https://agentic-task-management.vercel.app/",
    featured: true,
    icon: Cpu,
    color: "cyan",
  },
  {
    title: "AutoMatch AI Car Advisor",
    subtitle: "Conversational AI Recommendation Engine",
    tech: ["React", "Next.js", "Python", "LLMs", "REST APIs"],
    description:
      "AI-driven vehicle recommendation engine using interactive conversational workflows to process user preferences and surface highly relevant matches.",
    highlights: [
      "Conversational AI workflow for preference-based vehicle matching",
      "Dynamic filtering and personalized recommendation scoring",
      "Clean Next.js front end with real-time streaming responses",
    ],
    metrics: { latency: "Real-time", speed: "AI-driven", type: "AI / Frontend" },
    github: "https://github.com/vignesh1683/autoMatch_AI_car_advisor",
    live: "https://automatch-ai-car-advisor.vercel.app/",
    featured: false,
    icon: Globe,
    color: "purple",
  },
  {
    title: "Agentic Mail",
    subtitle: "Autonomous Email Processing Agent",
    tech: ["Next.js", "FastAPI", "LLMs", "Python", "PostgreSQL"],
    description:
      "Autonomous agentic system that analyzes, categorizes, and generates intelligent draft responses for high-volume email workflows using LLM orchestration.",
    highlights: [
      "LLM-powered email analysis, categorization and triage",
      "Automated draft response generation for common workflow patterns",
      "Scalable FastAPI backend handling high-volume ingestion",
    ],
    metrics: { latency: "Async", speed: "Automated", type: "AI / Automation" },
    github: "https://github.com/vignesh1683/Agentic_Mail",
    live: null,
    featured: false,
    icon: Zap,
    color: "cyan",
  },
];

const colorMap = {
  cyan: {
    border: "border-cyan-500/25",
    text: "text-cyan-400",
    bg: "bg-cyan-500/10",
    glow: "hover:shadow-[0_0_40px_rgba(0,217,255,0.08)]",
    badge: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
    tag: "bg-cyan-500/8 text-cyan-400 border-cyan-500/15",
  },
  purple: {
    border: "border-purple-500/25",
    text: "text-purple-400",
    bg: "bg-purple-500/10",
    glow: "hover:shadow-[0_0_40px_rgba(168,85,247,0.08)]",
    badge: "bg-purple-500/10 text-purple-300 border-purple-500/20",
    tag: "bg-purple-500/8 text-purple-400 border-purple-500/15",
  },
};

export default function ProjectsSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="projects" className="relative py-24 px-6 overflow-hidden">
      {/* Decorative */}
      <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px flex-1 max-w-[40px] bg-cyan-500/50" />
            <span className="text-xs font-mono text-cyan-500 uppercase tracking-widest">
              Selected Work
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight section-line pb-3">
            Agentic{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Projects
            </span>
          </h2>
        </motion.div>

        {/* Featured project */}
        {projects
          .filter((p) => p.featured)
          .map((project, i) => {
            const c = colorMap[project.color as keyof typeof colorMap];
            const Icon = project.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onHoverStart={() => setHovered(-1)}
                onHoverEnd={() => setHovered(null)}
                className={`mb-8 glass-card rounded-2xl border ${c.border} p-6 md:p-8 relative overflow-hidden transition-all duration-300 ${c.glow}`}
              >
                {/* Glow overlay on hover */}
                <motion.div
                  animate={{ opacity: hovered === -1 ? 1 : 0 }}
                  className={`absolute inset-0 ${c.bg} opacity-20 pointer-events-none`}
                />

                <div className="relative grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-2.5 rounded-xl ${c.bg} border ${c.border}`}>
                        <Icon className={`w-5 h-5 ${c.text}`} />
                      </div>
                      <span className={`text-xs font-mono px-2 py-1 rounded-full border ${c.badge}`}>
                        ⭐ Featured Project
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-1 leading-tight">
                      {project.title}
                    </h3>
                    <p className={`text-sm font-mono ${c.text} mb-4`}>{project.subtitle}</p>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className={`px-2.5 py-1 text-xs font-mono rounded-lg border ${c.tag}`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col justify-between">
                    <ul className="space-y-2.5 mb-6">
                      {project.highlights.map((h, j) => (
                        <motion.li
                          key={j}
                          initial={{ opacity: 0, x: 10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: j * 0.05 }}
                          className="flex items-start gap-2 text-sm text-gray-300"
                        >
                          <span className={`${c.text} mt-1 shrink-0`}>▹</span>
                          {h}
                        </motion.li>
                      ))}
                    </ul>

                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-4 py-2 text-sm font-mono text-gray-400 border border-white/10 rounded-xl hover:border-white/25 hover:text-white transition-all"
                      >
                        <GitBranch className="w-4 h-4" />
                        GitHub
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className={`flex items-center gap-2 px-4 py-2 text-sm font-mono ${c.text} border ${c.border} rounded-xl hover:${c.bg} transition-all`}
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}

        {/* Other projects grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects
            .filter((p) => !p.featured)
            .map((project, i) => {
              const c = colorMap[project.color as keyof typeof colorMap];
              const Icon = project.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  onHoverStart={() => setHovered(i)}
                  onHoverEnd={() => setHovered(null)}
                  className={`glass-card rounded-2xl border ${c.border} p-6 flex flex-col transition-all duration-300 ${c.glow} relative overflow-hidden group`}
                >
                  {/* Shimmer on hover */}
                  <div className={`absolute inset-0 ${c.bg} opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none`} />

                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-2 rounded-xl ${c.bg} border ${c.border}`}>
                      <Icon className={`w-4 h-4 ${c.text}`} />
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-600 hover:text-gray-300 transition-colors"
                      >
                        <GitBranch className="w-4 h-4" />
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className={`text-gray-600 hover:${c.text} transition-colors`}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1">{project.title}</h3>
                  <p className={`text-xs font-mono ${c.text} mb-3`}>{project.subtitle}</p>
                  <p className="text-sm text-gray-400 leading-relaxed mb-4 flex-grow">
                    {project.description}
                  </p>

                  <div className="space-y-1.5 mb-4">
                    {project.highlights.slice(0, 2).map((h, j) => (
                      <div key={j} className="flex items-start gap-2 text-xs text-gray-500">
                        <span className={`${c.text} shrink-0`}>▹</span>
                        {h}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-xs font-mono text-gray-500 bg-white/3 border border-white/8 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
