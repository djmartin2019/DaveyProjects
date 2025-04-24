/* app/blog/page.tsx */
"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { allPosts } from "contentlayer/generated";
import Link from "next/link";

export default function BlogIndex() {
  // Newest first
  const posts = allPosts.sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="min-h-screen flex flex-col bg-neutral-950 text-gray-300 selection:bg-cyan-400/30">
      <Navbar />

      <main className="flex-grow px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-12 text-4xl font-extrabold tracking-tight text-cyan-400">
            Blog
          </h1>

          {posts.length === 0 ? (
            <p className="text-center text-gray-400">
              No posts published yet—add an MDX file under
              <code className="mx-1 rounded bg-neutral-800 px-1.5 py-0.5 text-sm text-cyan-300">
                content/posts
              </code>
              and restart your dev server.
            </p>
          ) : (
            <ul className="space-y-8">
              {posts.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/blog/${p.slug}`}
                    className="group block rounded-xl border border-neutral-800 bg-neutral-900/70 p-6 transition hover:border-cyan-400 hover:bg-neutral-900"
                  >
                    <h2 className="text-2xl font-semibold text-gray-100 group-hover:text-cyan-300">
                      {p.title}
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                      {new Date(p.date).toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>

                    <p className="mt-4 text-gray-300">{p.summary}</p>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

