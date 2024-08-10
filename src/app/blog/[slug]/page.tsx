"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { SanityDocument } from "next-sanity";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PostContent from "@/components/PostContent";
import { getClient } from "@/sanity/lib/client";
import { token } from "@/sanity/lib/token";
import { POST_QUERY } from "@/sanity/lib/queries";

export default function SinglePost() {
  const { slug } = useParams() as { slug: string };
  const [post, setPost] = useState<SanityDocument | null>(null);
  const [isDraftMode, setIsDraftMode] = useState(false);

  useEffect(() => {
    if (slug) {
      const fetchPost = async () => {
        const client = getClient(isDraftMode ? token : undefined);
        const fetchedPost = await client.fetch<SanityDocument>(POST_QUERY, { slug });
        setPost(fetchedPost);
        setIsDraftMode(Boolean(process.env.SANITY_API_READ_TOKEN));
      };

      fetchPost();
    }
  }, [slug, isDraftMode]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-sky-50 flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-gradient-to-r from-sky-400 to-blue-500 p-4 lg:p-8">
        <section className="w-full max-w-3xl lg:max-w-4xl xl:max-w-5xl bg-white rounded-lg shadow-md p-6 lg:p-10">
          <PostContent post={post} />
        </section>
      </main>
      <Footer />
    </div>
  );
}

