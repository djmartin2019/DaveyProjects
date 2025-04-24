/* components/footer.tsx */
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const socialLinks = [
  { name: "Twitter / X", href: "https://x.com/daveybitstech", icon: FaTwitter },
  { name: "GitHub",        href: "https://github.com/djmartin2019", icon: FaGithub },
  { name: "LinkedIn",      href: "https://www.linkedin.com/in/david-martin-uh-bauer2019/", icon: FaLinkedin },
];

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
        {/* social icons */}
        <div className="flex justify-center space-x-10">
          {socialLinks.map(({ name, href, icon: Icon }) => (
            <a
              key={name}
              href={href}
              aria-label={name}
              className="text-gray-400 transition hover:text-cyan-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon className="h-6 w-6" />
            </a>
          ))}
        </div>

        {/* copyright */}
        <p className="mt-10 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} DJM&nbsp;Tech. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

