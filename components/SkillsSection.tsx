"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Server, Cloud, Database, Cpu, Star } from "lucide-react";

const skillCategories = [
  {
    id: "languages",
    label: "Languages",
    icon: Code2,
    color: "cyan",
    skills: [
      { name: "JavaScript (ES6+)", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Python", level: 90 },
      { name: "SQL", level: 85 },
      { name: "HTML5 / CSS3", level: 92 },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    icon: Star,
    color: "purple",
    skills: [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 92 },
      { name: "Redux Toolkit", level: 88 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    icon: Server,
    color: "cyan",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "FastAPI", level: 92 },
      { name: "Flask", level: 80 },
      { name: "Laravel / Lumen", level: 78 },
      { name: "REST APIs", level: 95 },
      { name: "WebSockets", level: 85 },
      { name: "LangGraph", level: 82 },
    ],
  },
  {
    id: "devops",
    label: "Cloud & DevOps",
    icon: Cloud,
    color: "purple",
    skills: [
      { name: "Azure (VM, Blob, Key Vault)", level: 80 },
      { name: "Docker", level: 88 },
      { name: "Kubernetes", level: 72 },
      { name: "GitHub Actions", level: 85 },
      { name: "Bitbucket Pipelines", level: 82 },
      { name: "CI/CD Automation", level: 88 },
      { name: "Linux", level: 85 },
    ],
  },
  {
    id: "databases",
    label: "Databases",
    icon: Database,
    color: "cyan",
    skills: [
      { name: "MySQL", level: 88 },
      { name: "PostgreSQL", level: 90 },
      { name: "MongoDB", level: 82 },
    ],
  },
  {
    id: "ai",
    label: "AI & Core",
    icon: Cpu,
    color: "purple",
    skills: [
      { name: "Data Structures & Algorithms", level: 85 },
      { name: "Performance Tuning", level: 88 },
      { name: "Debugging", level: 92 },
      { name: "Agile / Scrum", level: 90 },
    ],
  },
];

const colorMap = {
  cyan: {
    border: "border-cyan-500/30",
    bg: "bg-cyan-500/10",
    text: "text-cyan-400",
    bar: "bg-gradient-to-r from-cyan-500 to-cyan-300",
    glow: "shadow-[0_0_20px_rgba(0,217,255,0.15)]",
    icon: "text-cyan-400",
    activeBg: "bg-cyan-500/10 border-cyan-500/40",
  },
  purple: {
    border: "border-purple-500/30",
    bg: "bg-purple-500/10",
    text: "text-purple-400",
    bar: "bg-gradient-to-r from-purple-500 to-purple-300",
    glow: "shadow-[0_0_20px_rgba(168,85,247,0.15)]",
    icon: "text-purple-400",
    activeBg: "bg-purple-500/10 border-purple-500/40",
  },
};

export default function SkillsSection() {
  const [active, setActive] = useState("languages");

  const activeCategory = skillCategories.find((c) => c.id === active)!;
  const colors = colorMap[activeCategory.color as keyof typeof colorMap];

  return (
    <section id="skills" className="relative py-24 px-6 overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

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
              Technical Arsenal
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight section-line pb-3">
            Skills &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Expertise
            </span>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex lg:flex-col gap-2 flex-wrap lg:w-52 shrink-0"
          >
            {skillCategories.map((cat) => {
              const Icon = cat.icon;
              const c = colorMap[cat.color as keyof typeof colorMap];
              const isActive = active === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActive(cat.id)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-mono transition-all duration-300 text-left ${
                    isActive
                      ? `${c.activeBg} ${c.text} border`
                      : "text-gray-500 hover:text-gray-300 hover:bg-white/5 border border-transparent"
                  }`}
                >
                  <Icon className={`w-4 h-4 shrink-0 ${isActive ? c.icon : ""}`} />
                  {cat.label}
                </button>
              );
            })}
          </motion.div>

          {/* Skills Panel */}
          <div className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className={`glass-card rounded-2xl p-6 border ${colors.border} ${colors.glow}`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2 rounded-lg ${colors.bg}`}>
                    <activeCategory.icon className={`w-5 h-5 ${colors.icon}`} />
                  </div>
                  <h3 className={`text-lg font-bold ${colors.text}`}>
                    {activeCategory.label}
                  </h3>
                  <span className="ml-auto text-xs font-mono text-gray-600">
                    {activeCategory.skills.length} skills
                  </span>
                </div>

                <div className="space-y-4">
                  {activeCategory.skills.map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-sm text-gray-300 font-mono">
                          {skill.name}
                        </span>
                        <span className={`text-xs font-mono ${colors.text}`}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ delay: i * 0.05 + 0.1, duration: 0.8, ease: "easeOut" }}
                          className={`h-full rounded-full ${colors.bar}`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Quick tags cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 p-6 glass-card rounded-2xl border border-white/5"
        >
          <p className="text-xs font-mono text-gray-600 mb-4 uppercase tracking-widest">
            All Technologies
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "React", "Next.js", "TypeScript", "Python", "FastAPI", "Node.js",
              "PostgreSQL", "MongoDB", "MySQL", "Redis", "Docker", "Kubernetes",
              "Azure", "GitHub Actions", "Bitbucket", "LangGraph", "LangChain",
              "Redux", "Tailwind CSS", "REST APIs", "WebSockets", "Flask",
              "Laravel", "Lumen", "CI/CD", "Linux", "GCP",
            ].map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs font-mono text-gray-400 bg-white/3 border border-white/8 rounded-lg hover:border-cyan-500/30 hover:text-cyan-400 transition-all duration-200 cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
