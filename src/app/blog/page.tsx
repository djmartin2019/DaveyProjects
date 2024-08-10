"use client";

import { useEffect, useState } from "react";
import { SanityDocument } from "next-sanity";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PostPreview from "@/components/PostPreview";
import { getClient } from "@/sanity/lib/client";
import { token } from "@/sanity/lib/token";
import { POSTS_QUERY } from "@/sanity/lib/queries";

export default function Blog() {
  const [posts, setPosts] = useState<SanityDocument[]>([]);
  const [isDraftMode, setIsDraftMode] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      const client = getClient(isDraftMode ? token : undefined);
      const fetchedPosts = await client.fetch<SanityDocument[]>(POSTS_QUERY);
      setPosts(fetchedPosts);
      setIsDraftMode(Boolean(process.env.SANITY_API_READ_TOKEN));
    };

    fetchPosts();
  }, [isDraftMode]);

  return (
    <div className="min-h-screen bg-sky-50 flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-gradient-to-r from-sky-400 to-blue-500">
        <section className="w-full max-w-6xl bg-white rounded-lg shadow-md p-8 mt-5 mb-5">
          <h1 className="text-4xl font-bold text-center text-sky-600 mb-6">Blog</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {posts.map((post) => (
              <PostPreview key={post._id} post={post} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}


