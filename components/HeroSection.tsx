"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Terminal, Mail, GitBranch, Phone, MapPin, ChevronDown } from "lucide-react";

const TITLES = [
  "FullStack Developer",
  "React & Next.js Engineer",
  "FastAPI Architect",
  "AI Systems Builder",
  "Microservices Engineer",
];

function TypewriterText({ texts }: { texts: string[] }) {
  const [displayed, setDisplayed] = useState("");
  const [titleIdx, setTitleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const current = texts[titleIdx];

    if (!deleting && charIdx <= current.length) {
      setDisplayed(current.slice(0, charIdx));
      timeoutRef.current = setTimeout(() => setCharIdx((c) => c + 1), 60);
    } else if (!deleting && charIdx > current.length) {
      timeoutRef.current = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIdx >= 0) {
      setDisplayed(current.slice(0, charIdx));
      timeoutRef.current = setTimeout(() => setCharIdx((c) => c - 1), 35);
    } else if (deleting && charIdx < 0) {
      setDeleting(false);
      setTitleIdx((i) => (i + 1) % texts.length);
      setCharIdx(0);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [charIdx, deleting, titleIdx, texts]);

  return (
    <span className="text-cyan-400 font-mono">
      {displayed}
      <span className="cursor-blink text-cyan-300">|</span>
    </span>
  );
}

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "60%", label: "Backend Boost" },
  { value: "1M+", label: "Transactions/Day" },
  { value: "50ms", label: "Task Latency" },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden"
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-purple-500/8 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 mb-8 rounded-full bg-white/3 border border-white/10 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
          </span>
          <span className="text-sm font-mono text-gray-300">
            Available for immediate joining
          </span>
          <span className="text-xs font-mono text-cyan-500 border border-cyan-500/30 px-2 py-0.5 rounded-full">
            Chennai, India
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-6xl md:text-8xl font-black tracking-tighter mb-4 leading-none"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-gray-500">
            Srivignesh 
          </span>
          <span> </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-300 to-purple-400">
            M
          </span>
        </motion.h1>

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex items-center justify-center gap-3 text-xl md:text-2xl mb-6 font-mono min-h-[2rem]"
        >
          <Terminal className="w-5 h-5 text-purple-400 shrink-0" />
          <TypewriterText texts={TITLES} />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed mb-10"
        >
          I architect highly concurrent microservices and orchestrate multi-agent AI
          workflows — bridging reactive{" "}
          <span className="text-cyan-400">Next.js interfaces</span> with robust{" "}
          <span className="text-purple-400">Python/FastAPI backends</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <a
            href="mailto:vignesh.m1683@gmail.com"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-cyan-500/10 border border-cyan-500/40 text-cyan-400 rounded-xl font-mono text-sm hover:bg-cyan-500/20 hover:border-cyan-400 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,217,255,0.2)]"
          >
            <Mail className="w-4 h-4" />
            Get in Touch
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a
            href="https://github.com/vignesh1683"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-white/3 border border-white/10 text-gray-300 rounded-xl font-mono text-sm hover:bg-white/8 hover:border-white/20 transition-all duration-300"
          >
            <GitBranch className="w-4 h-4" />
            GitHub Profile
          </a>
          <a
            href="https://www.linkedin.com/in/srivignesh-m/"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-blue-500/8 border border-blue-500/20 text-blue-400 rounded-xl font-mono text-sm hover:bg-blue-500/15 hover:border-blue-400/50 transition-all duration-300"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
        </motion.div>

        {/* Contact chips */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16 text-sm font-mono text-gray-500"
        >
          <span className="flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-cyan-600" />
            vignesh.m1683@gmail.com
          </span>
          <span className="w-1 h-1 rounded-full bg-gray-700" />
          <span className="flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-cyan-600" />
            +91 8438357790
          </span>
          <span className="w-1 h-1 rounded-full bg-gray-700" />
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-cyan-600" />
            Chennai, India
          </span>
          <span className="w-1 h-1 rounded-full bg-gray-700" />
          <span className="flex items-center gap-1.5">
            <GitBranch className="w-3.5 h-3.5 text-cyan-600" />
            github.com/vignesh1683
          </span>
          <span className="w-1 h-1 rounded-full bg-gray-700" />
          <a
            href="https://www.linkedin.com/in/srivignesh-m/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 hover:text-blue-400 transition-colors"
          >
            <svg className="w-3.5 h-3.5 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            linkedin.com/in/srivignesh-m
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto"
        >
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4 + i * 0.1 }}
              className="glass-card rounded-xl p-4 text-center group hover:border-cyan-500/30 transition-all duration-300"
            >
              <div className="text-2xl font-black text-white group-hover:text-cyan-400 transition-colors">
                {s.value}
              </div>
              <div className="text-xs font-mono text-gray-500 mt-1">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600"
      >
        <span className="text-xs font-mono">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
