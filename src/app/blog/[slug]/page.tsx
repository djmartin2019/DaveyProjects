import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { useMDXComponent } from "next-contentlayer/hooks";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export function generateStaticParams() {
  return allPosts.map(p => ({ slug: p.slug }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = allPosts.find(p => p.slug === params.slug);
  if (!post) notFound();

  // turn the MDX code string into a React component
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <div className="min-h-screen flex flex-col bg-neutral-950 text-gray-300 selection:bg-cyan-400/30">
      <Navbar />

      <main className="flex-grow">
        <article className="prose prose-invert mx-auto max-w-3xl px-4 py-16">
          <h1 className="mb-0">{post.title}</h1>
          <p className="mt-0 text-sm text-gray-400">
            {new Date(post.date).toLocaleDateString(undefined, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          {/* Render the MDX body */}
          <MDXContent />
        </article>
      </main>

      <Footer />
    </div>
  );
}
