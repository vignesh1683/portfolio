"use client";

import dynamic from "next/dynamic";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import SkillsSection from "../components/SkillsSection";
import ExperienceSection from "../components/ExperienceSection";
import ProjectsSection from "../components/ProjectsSection";
import EducationSection from "../components/EducationSection";
import ContactSection from "../components/ContactSection";

// Particle background is heavy — load it without SSR
const ParticleBackground = dynamic(
  () => import("../components/ParticleBackground"),
  { ssr: false }
);

// Custom cursor is only relevant in the browser
const CustomCursor = dynamic(
  () => import("../components/CustomCursor"),
  { ssr: false }
);

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#020409] text-slate-200 selection:bg-cyan-500/25 selection:text-cyan-100">
      {/* Particle canvas pinned to viewport */}
      <ParticleBackground />

      {/* Custom cursor overlay */}
      <CustomCursor />

      {/* Global ambient glow blobs */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-15%] left-[-10%] w-[50vw] h-[50vw] bg-cyan-900/15 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-15%] right-[-10%] w-[45vw] h-[45vw] bg-purple-900/15 blur-[140px] rounded-full" />
        <div className="absolute top-[40%] left-[60%] w-[25vw] h-[25vw] bg-cyan-800/8 blur-[100px] rounded-full" />
      </div>

      {/* Site content */}
      <div className="relative z-10">
        <NavBar />
        <main>
          <HeroSection />

          {/* Divider */}
          <div className="max-w-5xl mx-auto px-6">
            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>

          <SkillsSection />

          <div className="max-w-5xl mx-auto px-6">
            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>

          <ExperienceSection />

          <div className="max-w-5xl mx-auto px-6">
            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>

          <ProjectsSection />

          <div className="max-w-5xl mx-auto px-6">
            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>

          <EducationSection />

          <div className="max-w-5xl mx-auto px-6">
            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>

          <ContactSection />
        </main>
      </div>
    </div>
  );
}
