"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

// ---------------------------------------------
// Central nav definition so it stays in one spot
// ---------------------------------------------
const navigation = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
  { name: "Skills", href: "/#skills" },
  { name: "Projects", href: "/#projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  // keep state local so every page using <Navbar/> just works
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-neutral-950/70 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/40 ring-1 ring-neutral-800">
      {/* Desktop / mobile shared container */}
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-4"
        aria-label="Global"
      >
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 inline-flex items-center gap-2">
            <span className="sr-only">DJM Tech</span>
            {/* minimal lightning bolt */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6 text-cyan-400 drop-shadow-[0_0_6px_theme('colors.cyan.400')]"
            >
              <path d="M13.5 2 3 14h6l-1.5 8L21 10h-6l1.5-8Z" />
            </svg>
            <span className="text-lg font-bold tracking-tight text-gray-100">DJM Tech</span>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <div className="lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-100 hover:text-cyan-400 focus:outline-none"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop links */}
        <div className="hidden lg:flex lg:gap-x-10">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile dialog */}
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        {/* overlay */}
        <div className="fixed inset-0 z-40" aria-hidden="true" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full max-w-xs overflow-y-auto bg-neutral-950 ring-1 ring-neutral-800 px-6 py-6">
          {/* header */}
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="-m-1.5 p-1.5 inline-flex items-center gap-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">DJM Tech</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6 text-cyan-400"
              >
                <path d="M13.5 2 3 14h6l-1.5 8L21 10h-6l1.5-8Z" />
              </svg>
              <span className="text-lg font-bold tracking-tight text-gray-100">DJM Tech</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-100 hover:text-cyan-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* nav list */}
          <div className="mt-8 flow-root">
            <div className="-my-6 divide-y divide-neutral-800">
              <div className="space-y-4 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block rounded-lg px-3 py-2 text-base font-medium text-gray-300 hover:bg-neutral-800 hover:text-cyan-400"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}

