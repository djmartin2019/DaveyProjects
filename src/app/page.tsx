"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiTypescript,
  SiVercel,
  SiSupabase,
} from "react-icons/si"
import { motion } from "framer-motion"
import type { IconType } from "react-icons"
import { allPosts } from "contentlayer/generated"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

// -----------------------------
// SEO + Structured‑Data helpers
// -----------------------------
const seo = {
  title: "David Martin | Full‑Stack Developer & Entrepreneur",
  description:
    "Portfolio of David Martin – showcasing modern web, data & music projects built with Next.js, TypeScript, Vercel & Supabase.",
  url: "https://davidmartin.dev/",
  image: "https://davidmartin.dev/og-image.png",
}

// JSON‑LD structured data (Person)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "David Martin",
  url: seo.url,
  sameAs: ["https://github.com/djmartin2019", "https://www.linkedin.com/in/davidmartin/"],
  jobTitle: "Software Developer & Entrepreneur",
}

// -----------------------------
// Blog Posts
// -----------------------------
const latestPosts = allPosts.sort((a, b) => b.date.localeCompare(a.date)).slice(0, 4)

// -----------------------------
// Types & Sample Data
// -----------------------------

type Technology = "NextJS" | "TailwindCSS" | "TypeScript" | "Vercel" | "Supabase"

const projectTechnologies: Record<Technology, IconType> = {
  NextJS: SiNextdotjs,
  TailwindCSS: SiTailwindcss,
  TypeScript: SiTypescript,
  Vercel: SiVercel,
  Supabase: SiSupabase,
}

interface Project {
  name: string
  description: string
  url: string
  technologies: Technology[]
}

const projects: Project[] = [
    {
      name: "DaveyPics",
      description: "My photography portfolio and blog powered by Next.js and Contentful.",
      url: "https://www.daveypicsstudio.com/",
      technologies: ["NextJS", "TailwindCSS", "TypeScript", "Vercel"],
  },
  {
    name: "Biblical Map App",
    description: "Interactive map for exploring biblical locations with scripture & historical context.",
    url: "https://biblical-map.vercel.app/",
    technologies: ["NextJS", "TailwindCSS", "TypeScript", "Vercel"],
  },
  {
    name: "S&P 500 Analytics",
    description: "Comprehensive market‑analysis dashboard using PostgreSQL, Python & Next.js.",
    url: "https://github.com/djmartin2019/stock-analysis-project",
    technologies: ["NextJS", "TailwindCSS", "TypeScript", "Vercel"],
  },
  {
    name: "ToneLog",
    description: "Cyber‑punk‑esque music journal for tracking practice & playlists.",
    url: "https://www.tonelog.com/",
    technologies: ["NextJS", "TailwindCSS", "TypeScript", "Vercel"],
  },
]

const skills = [
  { name: "JavaScript", icon: SiJavascript },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss3 },
  { name: "TypeScript", icon: SiTypescript },
]

const introduction = `Hi, I'm David — a developer driven by curiosity, always exploring how to build better, faster, and smarter with Next.js, TypeScript, and Vercel.`;


// -----------------------------
// Component
// -----------------------------

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSkillIndex, setActiveSkillIndex] = useState(0)

  // Cycle through skills for animation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSkillIndex((prev) => (prev + 1) % skills.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-neutral-950 text-gray-200 flex flex-col selection:bg-cyan-400/40">
      <Navbar />

      <main className="flex flex-col items-center justify-center flex-grow">
        {/* Hero Section */}
        <section
          id="hero"
          className="relative w-full px-4 sm:px-6 py-16 md:py-20 lg:py-28 flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 via-blue-800/40 to-neutral-950">
            <div className="absolute top-0 left-0 w-full h-full">
              <motion.div
                className="absolute top-1/4 -left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"
                animate={{
                  x: [0, 30, 0],
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />
              <motion.div
                className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl"
                animate={{
                  x: [0, -40, 0],
                  y: [0, 30, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />
            </div>
          </div>

          {/* Content container */}
            <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">

              {/* Text content */}
              <div className="flex flex-col space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-500/30 backdrop-blur-sm w-fit"
                >
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
                  </span>
                  <span className="text-sm font-medium text-cyan-400">Exploring new ideas</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-5xl md:text-6xl font-extrabold tracking-tight text-cyan-400 drop-shadow-[0_0_8px_theme('colors.cyan.600')] leading-tight"
                >
                  Building Future‑Proof Web Experiences
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-base md:text-xl leading-relaxed text-gray-300"
                >
                  {introduction}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex flex-wrap gap-4 pt-4 md:pt-6"
                >
                  <Link
                    href="#contact"
                    className="inline-flex h-12 items-center justify-center rounded-lg bg-cyan-500/90 px-6 py-3 text-base md:text-lg font-semibold text-neutral-950 shadow-lg hover:bg-cyan-400 transition-colors"
                  >
                    Let's Connect
                  </Link>
                  <Link
                    href="#projects"
                    className="inline-flex h-12 items-center justify-center rounded-lg bg-transparent border border-cyan-500/50 px-6 py-3 text-base md:text-lg font-semibold text-cyan-400 hover:bg-cyan-500/10 transition-colors"
                  >
                    View Projects
                  </Link>
                </motion.div>
              </div>

              {/* Desktop-only image */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="hidden lg:block"
                >
                  <Image
                    src="/djm-image.png"
                    alt="DJM logo"
                    width={448}
                    height={448}
                    className="w-full max-w-md mx-auto"
                    priority
                  />
                </motion.div>



            {/* Visual element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative aspect-square max-w-sm sm:max-w-md mx-auto lg:ml-auto"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-800/10 border border-cyan-500/20 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                {/* Code editor mockup */}
                <div className="relative w-5/6 h-5/6 rounded-xl bg-neutral-900/80 border border-cyan-500/20 overflow-hidden shadow-2xl">
                  {/* Editor header */}
                  <div className="h-8 bg-neutral-800 flex items-center px-4 border-b border-neutral-700">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="mx-auto text-xs text-neutral-400 font-mono">portfolio.tsx</div>
                  </div>

                  {/* Code content */}
                  <div className="p-4 font-mono text-sm">
                    <div className="text-neutral-500">// David Martin</div>
                    <div className="text-cyan-400">
                      const <span className="text-yellow-400">developer</span> = {"{"}
                    </div>
                    <div className="pl-4">
                      <div>
                        <span className="text-purple-400">name</span>:{" "}
                        <span className="text-green-400">"David Martin"</span>,
                      </div>
                      <div>
                        <span className="text-purple-400">skills</span>: [
                        <motion.span
                          key={activeSkillIndex}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="text-green-400"
                        >
                          "{skills[activeSkillIndex].name}"
                        </motion.span>
                        ],
                      </div>
                      <div>
                        <span className="text-purple-400">passion</span>:{" "}
                        <span className="text-green-400">"Building scalable web experiences"</span>,
                      </div>
                    </div>
                    <div className="text-cyan-400">{"}"}</div>

                    <div className="mt-4 text-neutral-500">// Let's build something amazing</div>
                    <div className="text-cyan-400">
                      export default <span className="text-yellow-400">developer</span>;
                    </div>
                  </div>
                </div>

                {/* Floating tech icons */}
                {skills.slice(0, 5).map((skill, index) => {
                  const Icon = skill.icon
                  const positions = [
                    "-top-6 right-10",
                    "top-10 -right-6",
                    "bottom-10 -right-6",
                    "-bottom-6 right-10",
                    "-left-6 top-1/2 -translate-y-1/2",
                  ]
                  return (
                    <motion.div
                      key={skill.name}
                      className={`absolute ${positions[index]}`}
                      animate={{
                        y: [0, -10, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                        delay: index * 0.5,
                      }}
                    >
                      <div className="bg-neutral-900/80 p-3 rounded-full border border-cyan-500/30 backdrop-blur-sm shadow-lg">
                        <Icon className="h-8 w-8 text-cyan-400" />
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="w-full py-24 px-6">
          <h2 className="text-center text-4xl font-bold text-cyan-400 mb-16">Tech Arsenal</h2>
          <ul className="mx-auto grid max-w-6xl grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {skills.map(({ name, icon: Icon }) => (
              <li
                key={name}
                className="flex flex-col items-center justify-center rounded-xl bg-neutral-900 ring-1 ring-neutral-800 p-6 hover:ring-cyan-500/60 transition-all"
              >
                <Icon className="h-9 w-9 text-cyan-400 mb-4" />
                <span className="text-sm font-medium">{name}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Projects */}
        <section id="projects" className="w-full bg-neutral-900 py-24 px-6">
          <h2 className="text-center text-4xl font-bold text-cyan-400 mb-16">Projects</h2>
          <div className="mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-2 gap-10">
            {projects.map((project) => (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between rounded-xl bg-neutral-800 ring-1 ring-neutral-700 p-8 hover:ring-cyan-500/60 transition-transform hover:-translate-y-1"
              >
                <div>
                  <h3 className="text-2xl font-semibold text-gray-100 group-hover:text-cyan-400 mb-4">
                    {project.name}
                  </h3>
                  <p className="text-gray-400 mb-6">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-4">
                  {project.technologies.map((tech) => {
                    const Icon = projectTechnologies[tech]
                    return <Icon key={tech} className="h-7 w-7 text-cyan-400" />
                  })}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Blog */}
        <section id="blog" className="w-full py-24 px-6">
          <h2 className="text-center text-4xl font-bold text-cyan-400 mb-16">Latest&nbsp;Posts</h2>

          {latestPosts.length === 0 ? (
            <p className="text-center text-gray-500">No posts yet — check back soon!</p>
          ) : (
            <div className="mx-auto grid max-w-6xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {latestPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col justify-between h-full rounded-xl bg-neutral-900 ring-1 ring-neutral-700 p-6 hover:ring-cyan-500/60 hover:-translate-y-1 transition"
                >
                  <h3 className="text-lg font-semibold text-gray-100 group-hover:text-cyan-400">{post.title}</h3>

                  <p className="mt-1 text-xs text-gray-500">
                    {new Date(post.date).toLocaleDateString(undefined, {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </p>

                  <p className="mt-4 text-sm text-gray-400 line-clamp-3">{post.summary}</p>

                  <span className="mt-auto pt-4 text-xs font-medium text-cyan-400">Read&nbsp;→</span>
                </Link>
              ))}
            </div>
          )}
        </section>

        {/* Contact */}
        <section id="contact" className="w-full py-24 px-6 bg-neutral-900">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold text-cyan-400 mb-6">Let's Chat</h2>
            <p className="text-gray-400 mb-12">
              Have a project in mind or just want to talk tech, music, or startups? Drop a message and let's make
              something epic.
            </p>
            <form
              action="https://formspree.io/f/xpwaawlp"
              method="POST"
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              <input
                className="col-span-1 sm:col-span-2 rounded-md bg-neutral-900 ring-1 ring-neutral-700 px-4 py-3 text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-cyan-500"
                placeholder="Name"
                type="text"
                name="name"
                required
              />
              <input
                className="col-span-1 sm:col-span-2 rounded-md bg-neutral-900 ring-1 ring-neutral-700 px-4 py-3 text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-cyan-500"
                placeholder="Email"
                type="email"
                name="email"
                required
              />
              <textarea
                className="col-span-1 sm:col-span-2 rounded-md bg-neutral-900 ring-1 ring-neutral-700 px-4 py-3 text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-cyan-500"
                placeholder="Message"
                name="message"
                rows={5}
                required
              />
              <button
                type="submit"
                className="sm:col-span-2 justify-self-center rounded-lg bg-cyan-500 px-8 py-3 font-semibold text-neutral-950 shadow-lg hover:bg-cyan-400 transition-colors"
              >
                Send ✉️
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

