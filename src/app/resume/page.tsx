"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

/* ────────────────  DATA  ──────────────── */

type ExperienceItem = {
  title: string;
  company?: string;
  date: string;
  responsibilities: string[];
};

type ProjectItem = {
  title: string;
  details: string[];
};

const experiences: ExperienceItem[] = [
  {
    title: "Project Coordinator I",
    company: "HCSS",
    date: "January 2023 – Present",
    responsibilities: [
      "Coordinated 275+ successful software implementations, managing client onboarding and adoption processes.",
      "Developed user guides, training materials, and technical documentation, improving user experience and system utilization.",
      "Facilitated communication between customers and internal engineering teams, resolving technical issues and optimizing workflows.",
    ],
  },
  {
    title: "Fleet Implementation Associate",
    company: "HCSS",
    date: "June 2022 – January 2023",
    responsibilities: [
      "Guided clients through software installation, configuration, and data migrations.",
      "Delivered targeted training sessions to improve user confidence and system usage.",
      "Leveraged SQL for data validation, troubleshooting, and resolving client issues.",
    ],
  },
  {
    title: "Fleet Technical Support Analyst",
    company: "HCSS",
    date: "May 2019 – June 2022",
    responsibilities: [
      "Provided technical support and troubleshooting for desktop and web-based fleet management solutions.",
      "Created a scalable C# migration tool, reducing support overhead and manual troubleshooting.",
      "Developed SQL reports and database models for efficient customer-issue resolution.",
      "Expanded “The Hub” training platform, onboarding 200+ users and improving knowledge-sharing across the organization.",
    ],
  },
  {
    title: "Administrative Student Assistant",
    company: "Office of the VP of Student Affairs, University of Houston",
    date: "August 2017 – May 2019",
    responsibilities: [
      "Streamlined event and travel management workflows with Excel automation (VBA).",
      "Developed Power BI dashboards to visualize operational metrics and support stakeholder decision-making.",
    ],
  },
];

const projects: ProjectItem[] = [
  {
    title: "S&P 500 Data Engineering & Analytics",
    details: [
      "Building a PostgreSQL pipeline to manage and analyze 2.5 M+ rows of historical stock data.",
      "Automating Python scripts to fetch, process, and store financial data for market-trend insights.",
      "Designing an interactive Next.js + Tailwind dashboard to visualize sector performance, volatility, and moving averages.",
    ],
  },
  {
    title: "United City Church Website Development",
    details: [
      "Designing a responsive, accessible site in Webflow to elevate user experience.",
      "Created a custom documentation portal with MkDocs, empowering non-technical stakeholders to manage updates.",
      "Collaborated with leadership to define requirements, ensuring scalability and long-term maintainability.",
    ],
  },
];

export default function Resume() {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-950 text-gray-300 selection:bg-cyan-400/30">
      <Navbar />

      <main className="flex flex-col items-center flex-grow py-16 px-4 sm:px-6 lg:px-8">
        {/* ——— Glass card ——— */}
        <section className="w-full max-w-4xl rounded-2xl border border-neutral-800 bg-neutral-900/70 backdrop-blur-md p-8 sm:p-12 shadow-xl">
          {/* Header */}
          <h1 className="mb-2 text-center text-4xl font-extrabold tracking-tight text-cyan-400">
            David&nbsp;Martin
          </h1>
          <p className="mb-8 text-center text-lg">
            Software&nbsp;&amp;&nbsp;Data Professional&nbsp;| Technical Project Coordinator&nbsp;|&nbsp;Next.js&nbsp;&amp;&nbsp;Vercel&nbsp;Enthusiast
          </p>

          <hr className="my-6 border-neutral-800" />

          {/* Summary */}
          <h2 className="text-2xl font-semibold text-cyan-400">Summary</h2>
          <p className="mt-2 leading-relaxed">
            Experienced Technical Project Coordinator with 7 years in software implementation,
            client training, and technical support. Passionate about guiding users through
            smooth onboarding, and an advocate for modern web stacks (Next.js, Vercel) via
            personal projects and continuous learning.
          </p>

          <hr className="my-6 border-neutral-800" />

          {/* Experience */}
          <h2 className="text-2xl font-semibold text-cyan-400">Experience</h2>
          {experiences.map((job, i) => (
            <div key={i} className="mt-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <h3 className="text-lg font-semibold text-gray-100">
                  {job.title}
                  {job.company && ` – ${job.company}`}
                </h3>
                <p className="italic text-gray-400 sm:text-right">{job.date}</p>
              </div>
              <ul className="mt-2 space-y-2 list-disc list-inside">
                {job.responsibilities.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}

          <hr className="my-6 border-neutral-800" />

          {/* Projects */}
          <h2 className="text-2xl font-semibold text-cyan-400">Projects</h2>
          {projects.map((p, i) => (
            <div key={i} className="mt-4">
              <h3 className="text-lg font-semibold text-gray-100">{p.title}</h3>
              <ul className="mt-2 space-y-2 list-disc list-inside">
                {p.details.map((d, idx) => (
                  <li key={idx}>{d}</li>
                ))}
              </ul>
            </div>
          ))}

          <hr className="my-6 border-neutral-800" />

          {/* Education */}
          <h2 className="text-2xl font-semibold text-cyan-400">Education</h2>
          <p className="mt-2">
            <strong className="text-gray-100">
              University of Houston – C.T. Bauer College of Business
            </strong>
            <br />
            Bachelor of Business Administration (BBA), Management Information Systems — May 2019
          </p>

          <hr className="my-6 border-neutral-800" />

          {/* Skills */}
          <h2 className="text-2xl font-semibold text-cyan-400">Skills</h2>
          <ul className="mt-2 space-y-2 list-disc list-inside">
            <li>
              <strong>Programming:</strong> Python, SQL, JavaScript (Next.js, React)
            </li>
            <li>
              <strong>Data &amp; Cloud:</strong> PostgreSQL, AWS S3, ETL Pipelines
            </li>
            <li>
              <strong>Tools:</strong> Vercel, Webflow, Notion, Mkdocs, GitHub Actions
            </li>
          </ul>

          <hr className="my-6 border-neutral-800" />

          {/* Download */}
          <div className="mt-8 text-center">
            <a
              href="/david_martin_resume.pdf"
              download
              className="inline-block rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-neutral-900 shadow-md transition hover:bg-cyan-300"
            >
              Download Resume (PDF)
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

