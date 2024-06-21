import Navbar from "../components/navbar";
import Footer from "../components/footer";

const introduction = `
  Hey there! I'm Davey, a passionate tech entrepreneur driven by a love for creation and a desire to provide value to others through innovative apps. From a young age, I've always enjoyed building things, and this passion has naturally led me to explore web development and entrepreneurship.

  My mission is to make others' lives easier with user-first, integrity-driven solutions. I believe in the power of iteration and feedback, solving problems in ways that make sense to me and then refining those solutions based on user input. This approach ensures that the apps I create truly meet the needs of my users.

  One of my core motivations is to support my passion for creating cool apps while launching a successful tech startup. Projects like "Validate My Idea" and "Why So Moody" are testaments to this ambition, offering practical tools for business validation and mental health tracking.

  What I love most about being a tech entrepreneur is the freedom and limitless creativity it affords me. I strive to continuously innovate, guided by the principles of making a positive impact and enhancing user experiences.

  Beyond my professional pursuits, I enjoy playing piano, guitar, and singing. These hobbies not only provide a creative outlet but also inspire my work in unexpected ways. Balancing my professional and personal life is crucial to staying motivated and focused.

  Join me on this exciting journey as I build in public, share my experiences, and work towards making the world a better place, one app at a time.
`;

export default function About() {
  return (
    <div className="min-h-screen bg-sky-50 flex flex-col">
      <Navbar />

      <main className="flex flex-col items-center justify-center py-10 flex-grow">
        <section id="about" className="w-full text-center px-4 mb-10">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-5xl font-bold text-sky-600 mb-6">About Me</h1>
            <p className="text-lg text-gray-800 whitespace-pre-line leading-relaxed">
              {introduction}
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
