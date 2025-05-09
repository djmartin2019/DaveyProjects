import Head from "next/head";
import { allPosts } from "../../../../.contentlayer/generated";
import { notFound } from "next/navigation";
import { useMDXComponent } from "next-contentlayer/hooks";
import type { Metadata } from "next";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const SITE_URL = "https://www.djm-tech.dev";
const SITE_NAME = "DJM Tech";
const FAVICON   = `${SITE_URL}/favicon.ico`;
const CANONICAL = (slug: string) => `${SITE_URL}/blog/${slug}`;
const OG_IMAGE = `${SITE_URL}/og-default.png`;

export async function generateMetadata({
    params,
}: {
    params: { slug: string },
}): Promise<Metadata> {
    const post = allPosts.find((p) => p.slug === params.slug);
    if (!post) return {};

  const canonical = `${SITE_URL}/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title:       post.title,
      description: post.summary,
      url:         canonical,
      siteName:    SITE_NAME,
      images: [
        {
          url:    OG_IMAGE,
          alt:    SITE_NAME,
          width:  1200,
          height: 630
        }
      ],
      type: "article",
    },
    twitter: {
      card:        "summary_large_image",
      title:       post.title,
      description: post.summary,
      images:      [OG_IMAGE],
    },
    icons: {
      icon: FAVICON,
    },
    alternates: {
      canonical,
    },
  };
}

export function generateStaticParams() {
  return allPosts.map(p => ({ slug: p.slug }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = allPosts.find(p => p.slug === params.slug);
  if (!post) notFound();

  const url = `${SITE_URL}/blog/${post.slug}`;

  // turn the MDX code string into a React component
  const MDXContent = useMDXComponent(post.body.code);

  return (
      <>
      <Head>
        {/* Standard SEO */}
        <title>{post.title}</title>
        <meta name="description"       content={post.summary} />
        <link rel="canonical"           href={url} />

        {/* Open Graph */}
        <meta property="og:type"        content="article" />
        <meta property="og:title"       content={post.title} />
        <meta property="og:description" content={post.summary} />
        <meta property="og:url"         content={url} />
        <meta property="og:image"       content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height"content="630" />

        {/* Twitter Card */}
        <meta name="twitter:card"        content="summary_large_image" />
        <meta name="twitter:title"       content={post.title} />
        <meta name="twitter:description" content={post.summary} />
        <meta name="twitter:image"       content={OG_IMAGE} />
        <meta name="twitter:image:alt"   content="DJM Tech" />
      </Head>
    <div className="min-h-screen flex flex-col bg-neutral-950 text-gray-300 selection:bg-cyan-400/30">
      <Navbar />

      <main className="flex-grow">
        <article className="prose prose-invert mx-auto max-w-3xl px-4 py-16">
          <h1 className="mb-0">{post.title}</h1>
          <p className="mt-4 text-sm text-gray-400">
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
    </>
  );
}
