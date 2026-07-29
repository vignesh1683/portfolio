"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar, MapPin, Star } from "lucide-react";

const certifications = [
  { name: "Data Engineer", issuer: "DataCamp", color: "cyan" },
  { name: "Data Engineer Associate", issuer: "DataCamp", color: "purple" },
  { name: "SQL Associate", issuer: "DataCamp", color: "cyan" },
  { name: "SnowPro Associate: Platform", issuer: "Snowflake", color: "purple" },
  { name: "OOP in C++", issuer: "NIIT", color: "cyan" },
  { name: "C Programming", issuer: "NIIT", color: "purple" },
];

export default function EducationSection() {
  return (
    <section id="education" className="relative py-24 px-6 overflow-hidden">
      {/* Decorative */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

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
              Academic & Credentials
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight section-line pb-3">
            Education &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Certifications
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl border border-purple-500/20 p-6 relative overflow-hidden hover:border-purple-500/40 transition-all duration-300 hover:shadow-[0_0_40px_rgba(168,85,247,0.08)]"
          >
            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20">
                  <GraduationCap className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <span className="text-xs font-mono text-purple-500 uppercase tracking-widest">
                    Bachelor of Engineering
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-1 leading-tight">
                Computer Science & Engineering
              </h3>
              <p className="text-purple-300 font-semibold mb-4">
                Meenakshi Sundararajan Engineering College
              </p>

              <div className="flex flex-wrap gap-4 text-sm font-mono text-gray-400 mb-5">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-purple-500" />
                  2020 – 2024
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-purple-500" />
                  Chennai, India
                </span>
              </div>

              {/* CGPA */}
              <div className="p-4 rounded-xl bg-white/3 border border-white/8">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-mono text-gray-400">CGPA</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                    <span className="text-2xl font-black text-white">8.52</span>
                    <span className="text-gray-500 font-mono text-sm">/10</span>
                  </div>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "85.2%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                    className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                <Award className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <span className="text-xs font-mono text-cyan-500 uppercase tracking-widest">
                  Certifications
                </span>
              </div>
            </div>

            <div className="grid gap-3">
              {certifications.map((cert, i) => {
                const isCyan = cert.color === "cyan";
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className={`flex items-center justify-between p-4 rounded-xl glass-card border transition-all duration-300 group ${
                      isCyan
                        ? "border-cyan-500/15 hover:border-cyan-500/35 hover:bg-cyan-500/5"
                        : "border-purple-500/15 hover:border-purple-500/35 hover:bg-purple-500/5"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          isCyan ? "bg-cyan-400" : "bg-purple-400"
                        } shadow-[0_0_6px_currentColor]`}
                      />
                      <div>
                        <div className="text-sm font-semibold text-white">{cert.name}</div>
                        <div className="text-xs font-mono text-gray-500">{cert.issuer}</div>
                      </div>
                    </div>
                    <Award
                      className={`w-4 h-4 opacity-30 group-hover:opacity-80 transition-opacity ${
                        isCyan ? "text-cyan-400" : "text-purple-400"
                      }`}
                    />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
