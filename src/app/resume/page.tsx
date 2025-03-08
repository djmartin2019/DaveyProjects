"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

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

// Experience Data
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
    date: "June 2022 - January 2023",
    responsibilities: [
      "Guided clients through software installation, configuration, and data migrations.",
      "Provided targeted training sessions to improve user confidence and system usage.",
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
      "Developed SQL reports and database models for efficient customer support issue resolution.",
      "Expanded ‘The Hub’ training platform, onboarding 200+ users and improving knowledge-sharing across the organization.",
    ],
  },
  {
    title: "Administrative Student Assistant",
    company: "Office of the VP of Student Affairs",
    date: "August 2017 - May 2019",
    responsibilities: [
      "Streamlined event and travel management workflows through Excel automation using VBA.",
      "Created Power BI dashboards for visualizing operational metrics to support stakeholder decision-making.",
    ],
  },
];

// Project Data
const projects: ProjectItem[] = [
  {
    title: "S&P 500 Data Engineering & Analytics",
    details: [
      "Developing a PostgreSQL-based pipeline to manage and analyze 2.5M+ rows of historical stock market data.",
      "Building automated Python scripts to fetch, process, and store financial data, enabling detailed market trend analysis.",
      "Designing an interactive frontend using Next.js and TailwindCSS to visualize sector performance, top performers, volatility metrics, and moving averages.",
    ],
  },
  {
    title: "United City Church Website Development",
    details: [
      "Designing a responsive, modern website with Webflow focused on enhancing user experience and accessibility.",
      "Created a custom documentation site using Mkdocs, enabling non-technical stakeholders to manage updates.",
      "Collaborated with stakeholders to define project requirements, ensuring scalability and long-term functionality.",
    ],
  },
];

export default function Resume() {
  return (
    <div className="min-h-screen bg-sky-50 flex flex-col">
      <Navbar />

      <main className="flex flex-col items-center justify-center flex-grow py-10 px-4 sm:px-6 lg:px-8">
        <section className="w-full max-w-4xl bg-white shadow-lg rounded-2xl p-8 sm:p-12 border border-gray-200">
          {/* Header */}
          <h1 className="text-4xl font-bold text-sky-600 text-center mb-6">
            David Martin
          </h1>
          <p className="text-center text-lg text-gray-700 mb-8">
            Software & Data Professional | Technical Project Coordinator | Next.js & Vercel Enthusiast
          </p>

          <div className="border-t border-gray-300 my-6"></div>

          {/* Summary */}
          <h2 className="text-2xl font-semibold text-sky-700">Summary</h2>
          <p className="text-gray-800 mt-2 leading-relaxed">
            Experienced Technical Project Coordinator with 7 years focused on software implementation, client training, technical support, and project management. Passionate about guiding users through successful software onboarding experiences, bridging technical and non-technical teams effectively. Enthusiastic advocate for modern web technologies (Next.js, Vercel) with practical experience through personal projects and continuous learning.
          </p>

          <div className="border-t border-gray-300 my-6"></div>

          {/* Experience Section */}
          <h2 className="text-2xl font-semibold text-sky-700">Experience</h2>
          {experiences.map((job, index) => (
            <div key={index} className="mt-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  {job.title} {job.company && `– ${job.company}`}
                </h3>
                <p className="text-gray-600 italic sm:text-right">{job.date}</p>
              </div>
              <ul className="list-disc list-inside text-gray-800 mt-2 space-y-2">
                {job.responsibilities.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}

          <div className="border-t border-gray-300 my-6"></div>

          {/* Projects Section */}
          <h2 className="text-2xl font-semibold text-sky-700">Projects</h2>
          {projects.map((project, index) => (
            <div key={index} className="mt-4">
              <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
              <ul className="list-disc list-inside text-gray-800 mt-2 space-y-2">
                {project.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}

          <div className="border-t border-gray-300 my-6"></div>

          {/* Education */}
          <h2 className="text-2xl font-semibold text-sky-700">Education</h2>
          <p className="mt-2 text-gray-800">
            <strong>University of Houston – C.T. Bauer College of Business</strong><br />
            Bachelor of Business Administration (BBA), Management Information Systems | May 2019
          </p>

          <div className="border-t border-gray-300 my-6"></div>

          {/* Skills */}
          <h2 className="text-2xl font-semibold text-sky-700">Skills</h2>
          <ul className="list-disc list-inside text-gray-800 mt-2 space-y-2">
            <li><strong>Programming:</strong> Python, SQL, JavaScript (Next.js, React)</li>
            <li><strong>Data & Cloud:</strong> PostgreSQL, AWS S3, ETL Pipelines</li>
            <li><strong>Tools:</strong> Vercel, Webflow, Notion, Mkdocs, GitHub Actions</li>
          </ul>

          <div className="border-t border-gray-300 my-6"></div>

          {/* Resume Download */}
          <div className="text-center mt-8">
            <a
              href="/david_martin_resume.pdf"
              download
              className="inline-block bg-sky-600 hover:bg-sky-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all"
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

