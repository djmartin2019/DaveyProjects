import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function About() {
  return (
    <div className="min-h-screen bg-sky-50 flex flex-col">
      <Navbar />

      <main className="flex flex-col items-center justify-center py-10 flex-grow">
        <section id="about" className="w-full text-center px-4 mb-10">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg text-left">
            <h1 className="text-5xl font-bold text-sky-600 mb-6 text-center">
              About Me
            </h1>

            {/* Introduction */}
            <p className="text-lg text-gray-800 leading-relaxed mb-4">
              I'm <strong>David Martin</strong>, a software developer and tech
              entrepreneur passionate about building scalable, user-focused
              applications. My journey into technology began with a curiosity
              for problem-solving, which quickly evolved into a mission to
              create innovative solutions that enhance productivity, efficiency,
              and user experiences.
            </p>

            {/* Tech Focus */}
            <p className="text-lg text-gray-800 leading-relaxed mb-4">
              With a background in web development, data analytics, and cloud
              architecture, I specialize in{" "}
              <strong>Next.js, TypeScript, and serverless deployments</strong>.
              My approach centers on <strong>iterative development</strong>,
              ensuring that every product I build evolves based on real-world
              feedback and continuous refinement.
            </p>

            {/* What Drives Me */}
            <h2 className="text-2xl font-semibold text-sky-600 mt-6 mb-3">
              What Drives Me
            </h2>
            <ul className="list-disc list-inside text-gray-800 text-lg space-y-2">
              <li>
                <strong>Empowering users:</strong> I design applications that
                solve real problems and improve workflows.
              </li>
              <li>
                <strong>Building scalable solutions:</strong> I focus on
                performance, maintainability, and future-proofing applications.
              </li>
              <li>
                <strong>Bridging technology and business:</strong> I leverage
                technical expertise to drive innovation and product-market fit.
              </li>
            </ul>

            {/* Projects */}
            <h2 className="text-2xl font-semibold text-sky-600 mt-6 mb-3">
              Current Projects
            </h2>
            <p className="text-lg text-gray-800 leading-relaxed">
              My current projects include:
            </p>
            <ul className="list-disc list-inside text-gray-800 text-lg space-y-2">
              <li>
                <strong>Biblical Map App:</strong> An interactive tool that
                provides historical context and scriptural references.
              </li>
              <li>
                <strong>S&P 500 Data Analytics:</strong> A stock market analysis
                platform leveraging Python, PostgreSQL, and Next.js for
                real-time insights.
              </li>
            </ul>

            {/* Music & Creativity */}
            <h2 className="text-2xl font-semibold text-sky-600 mt-6 mb-3">
              Beyond Tech
            </h2>
            <p className="text-lg text-gray-800 leading-relaxed">
              Outside of software development, I'm a musician—I play piano,
              guitar, and sing. Music and coding share a common thread: both
              require creativity, precision, and a deep understanding of
              patterns. This balance between technical and creative work
              keeps me inspired.
            </p>

            {/* Closing Statement */}
            <p className="text-lg text-gray-800 leading-relaxed mt-6">
              Whether it's launching a SaaS product, refining an open-source
              project, or solving complex data challenges, I'm always eager to
              collaborate and push the boundaries of what's possible in tech.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
