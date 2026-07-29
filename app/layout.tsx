import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Srivignesh M — FullStack Developer",
  description:
    "FullStack Developer specializing in React, Next.js, FastAPI, and AI-powered systems. Building scalable microservices and multi-agent AI workflows.",
  keywords: [
    "FullStack Developer",
    "React",
    "Next.js",
    "FastAPI",
    "Python",
    "LangGraph",
    "AI Engineer",
    "Chennai",
  ],
  authors: [{ name: "Srivignesh M" }],
  openGraph: {
    title: "Srivignesh M — FullStack Developer",
    description:
      "FullStack Developer specializing in React, Next.js, FastAPI, and AI-powered systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#020409] text-slate-200">{children}</body>
    </html>
  );
}
