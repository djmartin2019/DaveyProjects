import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const socialLinks = [
  { name: "Twitter", href: "https://x.com/daveybitstech", icon: FaTwitter },
  { name: "GitHub", href: "https://github.com/djmartin2019", icon: FaGithub },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/david-martin-uh-bauer2019/",
    icon: FaLinkedin,
  },
];

export default function Footer() {
  return (
    <footer className="bg-sky-600">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <div className="mt-10 flex justify-center space-x-10">
          {socialLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-white hover:text-gray-300"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-10 text-center text-xs leading-5 text-gray-200">
          &copy; 2024 DaveyBits. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
