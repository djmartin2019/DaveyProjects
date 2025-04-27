"use client";

import Head from "next/head";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useState } from "react";
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
} from "react-icons/si";
import { IconType } from "react-icons";
import { allPosts } from "contentlayer/generated";

// -----------------------------
// SEO + Structured‑Data helpers
// -----------------------------
const seo = {
  title: "David Martin | Full‑Stack Developer & Entrepreneur",
  description:
    "Portfolio of David Martin – showcasing modern web, data & music projects built with Next.js, TypeScript, Vercel & Supabase.",
  url: "https://davidmartin.dev/", // <- set to your canonical domain
  image: "https://davidmartin.dev/og-image.png", // <- optional social image
};

// JSON‑LD structured data (Person)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "David Martin",
  url: seo.url,
  sameAs: [
    "https://github.com/djmartin2019",
    "https://www.linkedin.com/in/davidmartin/",
  ],
  jobTitle: "Software Developer & Entrepreneur",
};

// -----------------------------
// Blog Posts
// -----------------------------
const latestPosts = allPosts
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 4);

// -----------------------------
// Types & Sample Data
// -----------------------------

type Technology =
  | "NextJS"
  | "TailwindCSS"
  | "TypeScript"
  | "Vercel"
  | "Supabase";

const projectTechnologies: Record<Technology, IconType> = {
  NextJS: SiNextdotjs,
  TailwindCSS: SiTailwindcss,
  TypeScript: SiTypescript,
  Vercel: SiVercel,
  Supabase: SiSupabase,
};

interface Project {
  name: string;
  description: string;
  url: string;
  technologies: Technology[];
}

const projects: Project[] = [
  {
    name: "Biblical Map App",
    description:
      "Interactive map for exploring biblical locations with scripture & historical context.",
    url: "https://biblical-map.vercel.app/",
    technologies: ["NextJS", "TailwindCSS", "TypeScript", "Vercel"],
  },
  {
    name: "S&P 500 Analytics",
    description:
      "Comprehensive market‑analysis dashboard using PostgreSQL, Python & Next.js.",
    url: "https://github.com/djmartin2019/stock-analysis-project",
    technologies: ["NextJS", "TailwindCSS", "TypeScript", "Vercel"],
  },
  {
    name: "ToneLog",
    description:
      "Cyber‑punk‑esque music journal for tracking practice & playlists.",
    url: "https://www.tonelog.com/",
    technologies: ["NextJS", "TailwindCSS", "TypeScript", "Vercel"],
  },
];

const skills = [
  { name: "JavaScript", icon: SiJavascript },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss3 },
  { name: "TypeScript", icon: SiTypescript },
];

const introduction = `Hi, I'm David — an entrepreneur & developer obsessed with shipping delightful, scalable experiences. I wield Next.js + TypeScript on Vercel to turn ideas into reality — fast.`;

// -----------------------------
// Component
// -----------------------------

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-950 text-gray-200 flex flex-col selection:bg-cyan-400/40">
      {/* <head> for SEO */}
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href={seo.url} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="David Martin Portfolio" />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:url" content={seo.url} />
        {seo.image && <meta property="og:image" content={seo.image} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        {seo.image && <meta name="twitter:image" content={seo.image} />}
        <script
          type="application/ld+json"
          // eslint‑disable‑next‑line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <Navbar />

      <main className="flex flex-col items-center justify-center flex-grow">
        {/* Hero */}
        <section
          id="hero"
          className="relative w-full text-center px-4 py-16 lg:py-24 flex flex-col items-center justify-center bg-gradient-to-br from-cyan-500/30 via-blue-800/40 to-neutral-950"
        >
          <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-cyan-400 drop-shadow-[0_0_8px_theme('colors.cyan.400')]">
              Building Future‑Proof Web Experiences
            </h1>
            <p className="mt-8 text-lg md:text-xl leading-relaxed whitespace-pre-line">
              {introduction}
            </p>
            <a
              href="#contact"
              className="mt-10 inline-block rounded-lg bg-cyan-500/80 px-6 py-3 text-lg font-semibold text-neutral-950 shadow-xl backdrop-blur hover:bg-cyan-400/90 transition-colors"
            >
              Let’s Connect ↗
            </a>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="w-full py-24 px-6">
          <h2 className="text-center text-4xl font-bold text-cyan-400 mb-16">
            Tech Arsenal
          </h2>
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
          <h2 className="text-center text-4xl font-bold text-cyan-400 mb-16">
            Projects
          </h2>
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
                    const Icon = projectTechnologies[tech];
                    return <Icon key={tech} className="h-7 w-7 text-cyan-400" />;
                  })}
                </div>
              </a>
            ))}
          </div>
        </section>

    {/* Blog */}
        <section id="blog" className="w-full py-24 px-6">
          <h2 className="text-center text-4xl font-bold text-cyan-400 mb-16">
            Latest&nbsp;Posts
          </h2>

          {latestPosts.length === 0 ? (
            <p className="text-center text-gray-500">
              No posts yet — check back soon!
            </p>
          ) : (
            <div className="mx-auto grid max-w-6xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {latestPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col rounded-xl bg-neutral-900 ring-1 ring-neutral-700 p-6 hover:ring-cyan-500/60 hover:-translate-y-1 transition"
                >
                  <h3 className="text-lg font-semibold text-gray-100 group-hover:text-cyan-400">
                    {post.title}
                  </h3>

                  <p className="mt-1 text-xs text-gray-500">
                    {new Date(post.date).toLocaleDateString(undefined, {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </p>

                  <p className="mt-4 text-sm text-gray-400 line-clamp-3">{post.summary}</p>

                  <span className="mt-auto pt-4 text-xs font-medium text-cyan-400">
                    Read&nbsp;→
                  </span>
                </Link>
              ))}
            </div>
          )}
        </section>


        {/* Contact */}
        <section id="contact" className="w-full py-24 px-6 bg-neutral-900">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold text-cyan-400 mb-6">Let’s Chat</h2>
            <p className="text-gray-400 mb-12">
              Have a project in mind or just want to talk tech, music, or startups? Drop a
              message and let’s make something epic.
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
  );
}

