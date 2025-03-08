"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Resume() {
  return (
    <div className="min-h-screen bg-sky-50 flex flex-col">
      <Navbar />

      <main className="flex flex-col items-center justify-center flex-grow py-10 px-4 sm:px-6 lg:px-8">
        <section
          className="w-full max-w-4xl bg-white shadow-lg rounded-2xl p-8 sm:p-12 border border-gray-200"
        >
          <h1 className="text-4xl font-bold text-sky-600 text-center mb-6">
            David Martin
          </h1>
          <p className="text-center text-lg text-gray-700 mb-8">
            Software & Data Professional | Technical Project Coordinator | Next.js & Vercel Enthusiast
          </p>

          <div className="border-t border-gray-300 my-6"></div>

          <h2 className="text-2xl font-semibold text-sky-700">Summary</h2>
          <p className="text-gray-800 mt-2 leading-relaxed">
            Technical Project Coordinator with 7 years of experience in software implementation, technical support,
            and customer training. Passionate about helping users adopt and optimize developer tools, web platforms,
            and software solutions. Skilled in Next.js, Vercel, Python, and SQL, with a strong understanding of
            frontend performance, deployment workflows, and cloud-based web applications.
          </p>

          <div className="border-t border-gray-300 my-6"></div>

          <h2 className="text-2xl font-semibold text-sky-700">Experience</h2>

          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Project Coordinator I – HCSS
            </h3>
            <p className="text-gray-600 italic">January 2023 – Present</p>
            <ul className="list-disc list-inside text-gray-800 mt-2 space-y-2">
              <li>Managed 275+ software implementation projects, ensuring smooth onboarding and adoption.</li>
              <li>Created user guides and technical documentation to improve customer experience.</li>
              <li>Collaborated with engineering teams to resolve software issues and optimize workflows.</li>
            </ul>
          </div>

          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Fleet Implementation Associate – HCSS
            </h3>
            <p className="text-gray-600 italic">June 2022 - January 2023</p>
            <ul className="list-disc list-inside text-gray-800 mt-2 space-y-2">
              <li>Guided customers through software setup and data migration processes.</li>
              <li>Provided training sessions to enhance user engagement.</li>
              <li>Utilized SQL for data validation and troubleshooting.</li>
            </ul>
          </div>

          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Fleet Technical Support Analyst – HCSS
            </h3>
            <p className="text-gray-600 italic">May 2019 – June 2022</p>
            <ul className="list-disc list-inside text-gray-800 mt-2 space-y-2">
              <li>Provided software support for fleet management products (desktop & web-based).</li>
              <li>Developed a C# migration tool to automate version upgrades.</li>
              <li>Created SQL-based reports and database models to improve troubleshooting.</li>
            </ul>
          </div>

          <div className="border-t border-gray-300 my-6"></div>

          <h2 className="text-2xl font-semibold text-sky-700">Projects</h2>

          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-900">
              S&P 500 Data Engineering & Analytics
            </h3>
            <ul className="list-disc list-inside text-gray-800 mt-2 space-y-2">
              <li>Built a PostgreSQL database to analyze 2.5M+ rows of historical stock market data.</li>
              <li>Automated data processing using Python and prepared for AWS integration.</li>
              <li>Developed custom financial metrics for trend analysis.</li>
            </ul>
          </div>

          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-900">
              United Church Website Development
            </h3>
            <ul className="list-disc list-inside text-gray-800 mt-2 space-y-2">
              <li>Developed a modern website using Webflow to improve UX and content management.</li>
              <li>Created a documentation site with Mkdocs for easy maintenance.</li>
              <li>Advocated for serverless deployment using Vercel.</li>
            </ul>
          </div>

          <div className="border-t border-gray-300 my-6"></div>

          <h2 className="text-2xl font-semibold text-sky-700">Education</h2>
          <p className="mt-2 text-gray-800">
            <strong>University of Houston – C.T. Bauer College of Business</strong><br />
            Bachelor of Business Administration (BBA), Management Information Systems | May 2019
          </p>

          <div className="border-t border-gray-300 my-6"></div>

          <h2 className="text-2xl font-semibold text-sky-700">Skills</h2>
          <ul className="list-disc list-inside text-gray-800 mt-2 space-y-2">
            <li><strong>Customer Onboarding & Support:</strong> Technical Enablement, Documentation, Training</li>
            <li><strong>Programming:</strong> Python, SQL, JavaScript (Next.js, React)</li>
            <li><strong>Data & Cloud:</strong> PostgreSQL, AWS S3, ETL Pipelines</li>
            <li><strong>Tools:</strong> Vercel, Webflow, Notion, Mkdocs, GitHub Actions</li>
          </ul>

          <div className="border-t border-gray-300 my-6"></div>

          <div className="text-center mt-8">
            <a
              href="/resume.pdf"
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

