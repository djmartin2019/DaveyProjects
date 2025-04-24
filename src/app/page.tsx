"use client";

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

type Technology = "NextJS" | "TailwindCSS" | "TypeScript" | "Vercel" | "Supabase";

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
      "A historical and interactive map application designed to help users explore biblical locations with contextual scripture references and historical insights. Built with modern web technologies for a seamless experience.",
    url: "https://biblical-map.vercel.app/", // Update with your real project link
    technologies: ["NextJS", "TailwindCSS", "TypeScript", "Vercel"],
  },
  {
    name: "S&P 500 Data Analytics",
    description:
      "A comprehensive stock market analysis tool leveraging PostgreSQL and Python to track sector performance, stock trends, and volatility metrics. Integrated with Next.js for interactive data visualization.",
    url: "https://github.com/djmartin2019/stock-analysis-project", // Update with your real project link
    technologies: ["NextJS", "TailwindCSS", "TypeScript", "Vercel"],
  },
  {
      name: "ToneLog",
      description: "A music journaling app that allows users to log their music listening habits and create playlists. Built with Next.js, TypeScript, and Tailwind CSS.",
      url: "https://tone-log.vercel.app/", // Update with your real project link
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

const introduction = `
  Hi, I'm David—an entrepreneur and software developer passionate about building modern web applications. I specialize in Next.js, TypeScript, and cloud-based solutions, focusing on seamless user experiences and scalable architectures. Whether it's data-driven applications or interactive platforms, I'm driven by innovation and problem-solving.
`;

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-sky-50 flex flex-col">
      <Navbar />

      <main className="flex flex-col items-center justify-center flex-grow">
        {/* Hero Section */}
        <section
          id="hero"
          className="relative w-full text-center px-4 py-8 sm:py-10 lg:py-12 bg-gradient-to-r from-sky-400 to-blue-500 text-white min-h-screen flex flex-col items-center justify-center"
        >
          <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl mb-6">
              Welcome to My Portfolio
            </h1>
            <p className="text-lg whitespace-pre-line leading-relaxed mb-8">
              {introduction}
            </p>
            <a
              href="#contact"
              className="inline-block rounded-md bg-white px-5 py-3 text-base font-medium text-sky-600 hover:bg-gray-100"
            >
              Let's Connect!
            </a>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="text-center px-4 mt-20 mb-10 w-full">
          <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-5xl font-bold text-sky-600 mb-10">
                  My Skills
                </h1>
              </div>
              <dl className="mt-8 p-5 grid grid-cols-1 gap-6 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-center bg-sky-800 p-8 rounded-lg shadow-sm transition-transform transform hover:scale-105"
                  >
                    <skill.icon className="h-8 w-8 text-white mr-4" />
                    <dt className="text-lg font-medium text-white">
                      {skill.name}
                    </dt>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="text-center px-4 mt-20 mb-10 w-full bg-sky-900">
          <div className="py-24 sm:py-32">
            <h1 className="text-6xl font-bold text-white mb-10">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto pt-10">
              {projects.map((project) => (
                <a
                  key={project.name}
                  href={project.url}
                  className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 group"
                >
                  <div className="flex flex-col h-full">
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-sky-600">
                        {project.name}
                      </h3>
                      <p className="text-gray-700 group-hover:text-gray-900 mb-5">
                        {project.description}
                      </p>
                    </div>
                    <div className="flex justify-center space-x-6 mb-5">
                      {project.technologies.map((tech) => {
                        const Icon = projectTechnologies[tech];
                        return <Icon key={tech} className="h-8 w-8 text-sky-600" />;
                      })}
                    </div>
                    <div className="mt-4">
                      <span className="text-sm font-medium text-sky-600 group-hover:text-sky-800">
                        View Project &rarr;
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="text-center px-4 mt-20 mb-10 w-full">
          <div className="relative isolate bg-white">
            <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 lg:px-8">
              <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
                <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                  <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-sky-100 ring-1 ring-sky-900/10 lg:w-1/2"></div>
                  <h2 className="text-3xl font-bold tracking-tight text-sky-900">
                    Let's Chat!
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-sky-600 whitespace-pre-line">
                    I'm always excited to connect with fellow tech enthusiasts,
                    entrepreneurs, and anyone curious about my projects. Whether
                    you have a question, a suggestion, or just want to say hi,
                    feel free to reach out! Let's collaborate and create
                    something amazing together.
                  </p>
                </div>
              </div>
              <form
                action="https://formspree.io/f/xpwaawlp"
                method="POST"
                className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
              >
                <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                  <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-semibold leading-6 text-sky-900"
                      >
                        First name
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 placeholder:text-sky-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                          required
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-semibold leading-6 text-sky-900"
                      >
                        Last name
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="text"
                          name="last-name"
                          id="last-name"
                          autoComplete="family-name"
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 placeholder:text-sky-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                          required
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold leading-6 text-sky-900"
                      >
                        Email
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          autoComplete="email"
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 placeholder:text-sky-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                          required
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold leading-6 text-sky-900"
                      >
                        Message
                      </label>
                      <div className="mt-2.5">
                        <textarea
                          name="message"
                          id="message"
                          rows={4}
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 placeholder:text-sky-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                          defaultValue={""}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 flex justify-end">
                    <button
                      type="submit"
                      className="rounded-md bg-sky-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                    >
                      Send message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

