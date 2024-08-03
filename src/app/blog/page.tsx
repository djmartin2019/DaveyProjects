"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { SanityDocument } from "next-sanity";
import dynamic from "next/dynamic";
import { getClient } from "@/sanity/lib/client";
import { token } from "@/sanity/lib/token";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import Posts from "@/components/Posts";

const PostsPreview = dynamic(() => import("@/components/PostsPreview"), { ssr: false });

export default function Blog() {
  const [posts, setPosts] = useState<SanityDocument[]>([]);
  const [isDraftMode, setIsDraftMode] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      const client = getClient(isDraftMode ? token : undefined);
      const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY);
      setPosts(posts);
      setIsDraftMode(Boolean(process.env.SANITY_API_READ_TOKEN));
    };

    fetchPosts();
  }, [isDraftMode]);

  return (
    <div className="min-h-screen bg-sky-50 flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-gradient-to-r from-sky-400 to-blue-500 p-4 lg:p-8">
        <section className="w-full max-w-5xl bg-white rounded-lg shadow-md p-6 lg:p-10">
          <h1 className="text-4xl font-bold text-center text-sky-600 mb-6">Blog</h1>
          <div className="mt-8">
            {isDraftMode ? (
              <PostsPreview posts={posts} />
            ) : (
              <Posts posts={posts} />
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

