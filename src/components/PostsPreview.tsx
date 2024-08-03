"use client"; // Ensure this file is treated as a client component

import { useEffect, useState } from "react";
import { SanityDocument } from "next-sanity";
import { getClient } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import Posts from "./Posts";

export default function PostsPreview({ posts = [] }: { posts: SanityDocument[] }) {
  const [data, setData] = useState(posts);

  useEffect(() => {
    const fetchData = async () => {
      const client = getClient();
      const livePosts = await client.fetch<SanityDocument[]>(POSTS_QUERY);
      setData(livePosts);
    };

    fetchData();
  }, []);

  return <Posts posts={data} />;
}

