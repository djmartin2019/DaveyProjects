"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { SanityDocument } from "next-sanity";
import dynamic from "next/dynamic";
import { getClient } from "@/sanity/lib/client";
import { token } from "@/sanity/lib/token";
import { POST_QUERY } from "@/sanity/lib/queries";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Post from "@/components/Post";

const PostPreview = dynamic(() => import("@/components/PostPreview"), { ssr: false });

export default function SinglePost() {
  const { slug } = useParams();
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
          <div className="mt-8">
            {isDraftMode ? (
              <PostPreview post={post} />
            ) : (
              <Post post={post} />
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
