"use client";

import { motion } from "framer-motion";
import { Mail, GitBranch, Phone, MapPin, ExternalLink, Terminal } from "lucide-react";

const LinkedInIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const links = [
  {
    icon: Mail,
    label: "Email",
    value: "vignesh.m1683@gmail.com",
    href: "mailto:vignesh.m1683@gmail.com",
    color: "cyan",
  },
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/srivignesh-m",
    href: "https://www.linkedin.com/in/srivignesh-m/",
    color: "blue",
  },
  {
    icon: GitBranch,
    label: "GitHub",
    value: "github.com/vignesh1683",
    href: "https://github.com/vignesh1683",
    color: "purple",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8438357790",
    href: "tel:+918438357790",
    color: "cyan",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Chennai, India",
    href: null,
    color: "purple",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-24 px-6 overflow-hidden">
      {/* Decorative */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-10 bg-cyan-500/50" />
            <span className="text-xs font-mono text-cyan-500 uppercase tracking-widest">
              Let&apos;s Connect
            </span>
            <div className="h-px w-10 bg-cyan-500/50" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Touch
            </span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
            Open to new opportunities, collaborations, and interesting engineering challenges.
            Drop a message and I&apos;ll get back to you.
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {links.map((link, i) => {
            const Icon = link.icon;
            const colorStyles = {
              cyan: {
                border: "border-cyan-500/15 hover:border-cyan-500/40 hover:shadow-[0_0_25px_rgba(0,217,255,0.08)]",
                iconWrap: "bg-cyan-500/10 border border-cyan-500/20",
                iconColor: "text-cyan-400",
                extLink: "text-cyan-400",
              },
              blue: {
                border: "border-blue-500/15 hover:border-blue-500/40 hover:shadow-[0_0_25px_rgba(59,130,246,0.12)]",
                iconWrap: "bg-blue-500/10 border border-blue-500/20",
                iconColor: "text-blue-400",
                extLink: "text-blue-400",
              },
              purple: {
                border: "border-purple-500/15 hover:border-purple-500/40 hover:shadow-[0_0_25px_rgba(168,85,247,0.08)]",
                iconWrap: "bg-purple-500/10 border border-purple-500/20",
                iconColor: "text-purple-400",
                extLink: "text-purple-400",
              },
            }[link.color] ?? {
              border: "border-white/10",
              iconWrap: "bg-white/5 border border-white/10",
              iconColor: "text-gray-400",
              extLink: "text-gray-400",
            };

            const card = (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`glass-card rounded-2xl border p-5 flex flex-col items-center justify-between text-center gap-3 h-36 transition-all duration-300 group ${colorStyles.border} ${link.href ? "cursor-pointer" : "cursor-default"}`}
              >
                <div className={`p-3 rounded-xl ${colorStyles.iconWrap}`}>
                  <Icon className={`w-5 h-5 ${colorStyles.iconColor}`} />
                </div>
                <div className="w-full">
                  <div className="text-xs font-mono text-gray-600 mb-1 uppercase tracking-widest">
                    {link.label}
                  </div>
                  <div className="text-sm font-mono text-gray-300 truncate w-full">{link.value}</div>
                </div>
                {link.href && (
                  <ExternalLink
                    className={`w-3.5 h-3.5 opacity-0 group-hover:opacity-60 transition-opacity ${colorStyles.extLink}`}
                  />
                )}
              </motion.div>
            );

            return link.href ? (
              <a key={i} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                {card}
              </a>
            ) : (
              <div key={i}>{card}</div>
            );
          })}
        </div>

        {/* Terminal-style footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl border border-white/8 p-6 font-mono text-sm"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
            </div>
            <span className="text-gray-600 text-xs ml-2">terminal</span>
          </div>
          <div className="space-y-1.5">
            <div className="flex gap-2 text-gray-500">
              <span className="text-green-500">❯</span>
              <span className="text-cyan-400">node</span>
              <span>-e</span>
              <span className="text-yellow-300/70">&quot;console.log(&apos;Available for opportunities&apos;)&quot;</span>
            </div>
            <div className="text-gray-300 pl-4">Available for opportunities</div>
            <div className="flex gap-2 text-gray-500">
              <span className="text-green-500">❯</span>
              <span className="text-cyan-400">cat</span>
              <span>status.json</span>
            </div>
            <div className="text-gray-300 pl-4">
              <span className="text-white">{"{"}</span>
              <span className="text-cyan-300"> &quot;status&quot;</span>
              <span>: </span>
              <span className="text-green-400">&quot;open_to_work&quot;</span>
              <span>,</span>
              <span className="text-cyan-300"> &quot;location&quot;</span>
              <span>: </span>
              <span className="text-green-400">&quot;Chennai, India&quot;</span>
              <span>,</span>
              <span className="text-cyan-300"> &quot;type&quot;</span>
              <span>: </span>
              <span className="text-green-400">&quot;fulltime&quot;</span>
              <span className="text-white"> {"}"}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500 pt-1">
              <span className="text-green-500">❯</span>
              <span className="cursor-blink">█</span>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-600"
        >
          <div className="flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-cyan-600" />
            <span>Built with Next.js, TypeScript & Tailwind CSS</span>
          </div>
          <div>
            <span className="text-gray-700">&#169; {new Date().getFullYear()} </span>
            <span className="text-cyan-600">Srivignesh M</span>
            <span className="text-gray-700"> — All rights reserved</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
