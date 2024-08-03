"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { SanityDocument } from "next-sanity";
import dynamic from "next/dynamic";
import Posts from "@/components/Posts";

const PostsPreview = dynamic(() => import("../../components/PostsPreview"), { ssr: false });

export default function Blog() {
  const [posts, setPosts] = useState<SanityDocument[]>([]);
  const [isDraftMode, setIsDraftMode] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/posts');
      const posts = await response.json();
      setPosts(posts);
      setIsDraftMode(Boolean(process.env.SANITY_API_READ_TOKEN));
    };

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-sky-50 flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-gradient-to-r from-sky-400 to-blue-500">
        <section className="w-full max-w-3xl bg-white rounded-lg shadow-md p-8">
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
