/* app/about/page.tsx (Next 13/14 app router) */
"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-950 text-gray-300 selection:bg-cyan-400/30">
      <Navbar />

      <main className="flex flex-col items-center flex-grow py-16 px-4">
        {/* ——— About Card ——— */}
        <section
          id="about"
          className="w-full max-w-4xl rounded-2xl border border-neutral-800 bg-neutral-900/70 backdrop-blur-md p-10 shadow-xl"
        >
          <h1 className="mb-8 text-center text-5xl font-extrabold tracking-tight text-cyan-400">
            About&nbsp;Me
          </h1>

        {/* Intro */}
        <p className="mb-5 leading-relaxed">
          I’m <strong className="text-gray-100">David Martin</strong>—a software developer with a shipping problem and a soft spot for clean DX.
          Most of what I do lives somewhere between{" "}
          <strong className="text-gray-100">
            clean DX&nbsp;&&nbsp;don’t-wake-me-up-at-2AM architecture
          </strong>.
          Whether it’s an MVP or a full-scale rebuild, I’m here to ship stuff that works—and looks decent while doing it.
        </p>

        {/* Tech Focus */}
        <p className="mb-5 leading-relaxed">
          These days, I’m usually wrangling{" "}
          <span className="text-gray-100">Next.js&nbsp;14, TypeScript</span>, and serverless tools like Vercel Functions, Edge, and Supabase.
          I’m a big believer in <em>iterate-to-greatness</em>: ship fast, learn from the mess, and make it better as you go.
        </p>


          {/* What Drives Me */}
          <h2 className="mt-10 mb-4 text-2xl font-semibold text-cyan-400">
            What&nbsp;Drives&nbsp;Me
          </h2>
          <ul className="space-y-2 pl-5 marker:text-cyan-400 list-disc">
            <li>
              <strong>Empowering users</strong> – tooling that erases friction and sparks joy.
            </li>
            <li>
              <strong>Scalability</strong> – performance today, maintainability tomorrow.
            </li>
            <li>
              <strong>Tech&nbsp;×&nbsp;Business</strong>  – code is only great when it moves
              the needle.
            </li>
          </ul>

          {/* Projects */}
          <h2 className="mt-10 mb-4 text-2xl font-semibold text-cyan-400">
            Current&nbsp;Projects
          </h2>
          <ul className="space-y-2 pl-5 marker:text-cyan-400 list-disc">
            <li>
              <strong>Biblical Map App</strong> – interactive cartography +
              contextual scripture insights.
            </li>
            <li>
              <strong>S&amp;P 500 Analytics</strong> – Python&nbsp;+&nbsp;
              PostgreSQL pipeline with a Next.js dashboard.
            </li>
            <li>
              <strong>ToneLog</strong> – cyber-punky music-practice journal
              tracking sets, exercises, and listening habits.
            </li>
          </ul>

          {/* Music & Creativity */}
          <h2 className="mt-10 mb-4 text-2xl font-semibold text-cyan-400">
            Beyond&nbsp;Tech
          </h2>
          <p className="leading-relaxed">
            When I’m not slinging code, I’m on bass, guitar, or keys—sometimes
            all three in the same set. Music and programming share the same
            secret sauce: patterns, groove, and relentless iteration.
          </p>

          {/* CTA */}
          <p className="mt-10 leading-relaxed">
            Got an ambitious idea or just want to geek out about edge caching
            and chorus pedals?{" "}</p>
            <br />
            <a
              href="/#contact"
              className="flex justify-center font-semibold text-cyan-400 hover:underline"
            >
              Let’s&nbsp;talk&nbsp;→
            </a>
        </section>
      </main>

      <Footer />
    </div>
  );
}

