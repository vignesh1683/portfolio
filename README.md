# Srivignesh M — Portfolio

A futuristic, highly interactive personal portfolio built with **Next.js 16**, **React 19**, **Three.js**, and **Framer Motion**. Features a 3D particle background, custom cursor, smooth scroll animations, and a fully responsive layout.

**Live:** [srivignesh.dev](https://srivignesh-dev.vercel.app/) &nbsp;|&nbsp; **LinkedIn:** [linkedin.com/in/srivignesh-m](https://www.linkedin.com/in/srivignesh-m/) &nbsp;|&nbsp; **GitHub:** [github.com/vignesh1683](https://github.com/vignesh1683)

---

## Features

- **3D Particle Background** — dual-layer starfield (cyan stars + purple nebula dust) with mouse parallax via `@react-three/fiber`
- **Custom Cursor** — magnetic dot + ring that reacts to hover and click states
- **Typewriter Hero** — cycles through 5 role titles with realistic typing and deleting
- **Tabbed Skills** — animated skill bars across 6 categories with a full tag cloud
- **Experience Timeline** — accordion cards with impact metrics and expandable achievements
- **Projects Showcase** — featured project (two-column layout) + card grid for others
- **Education & Certs** — animated CGPA progress bar and certification grid
- **Contact Section** — uniform card grid with a terminal-style footer
- **Responsive NavBar** — sticky with animated active indicator and mobile hamburger menu

---

## Tech Stack

| Layer | Technologies |
|---|---|
| Framework | Next.js 16.2 (App Router, Turbopack) |
| UI | React 19, Tailwind CSS v4 |
| Animation | Framer Motion 12 |
| 3D | Three.js, @react-three/fiber, @react-three/drei |
| Icons | lucide-react |
| Fonts | Space Grotesk, JetBrains Mono (Google Fonts) |
| Language | TypeScript 5 |

---

## Project Structure

```
portfolio/
├── app/
│   ├── globals.css          # Global styles, CSS variables, utility classes
│   ├── layout.tsx           # Root layout, fonts, SEO metadata
│   └── page.tsx             # Main page — composes all sections
├── components/
│   ├── ParticleBackground.tsx  # Three.js 3D starfield canvas
│   ├── CustomCursor.tsx        # Magnetic cursor overlay
│   ├── NavBar.tsx              # Sticky responsive navigation
│   ├── HeroSection.tsx         # Typewriter, stats, CTAs
│   ├── SkillsSection.tsx       # Tabbed skills with progress bars
│   ├── ExperienceSection.tsx   # Accordion work timeline
│   ├── ProjectsSection.tsx     # Featured + grid projects
│   ├── EducationSection.tsx    # Degree + certifications
│   └── ContactSection.tsx      # Contact cards + terminal footer
└── public/                  # Static assets
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repo
git clone https://github.com/vignesh1683/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

---

## Customization

All content is co-located with its component — no external CMS or config file needed.

| What to change | Where |
|---|---|
| Name, roles, tagline, stats | `components/HeroSection.tsx` |
| Skills and proficiency levels | `components/SkillsSection.tsx` |
| Work experience and achievements | `components/ExperienceSection.tsx` |
| Projects (title, links, stack) | `components/ProjectsSection.tsx` |
| Education and certifications | `components/EducationSection.tsx` |
| Contact links | `components/ContactSection.tsx` |
| Colors, fonts, CSS utilities | `app/globals.css` |
| SEO metadata | `app/layout.tsx` |

---

## License

MIT © 2024 Srivignesh M
