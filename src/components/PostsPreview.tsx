import { QueryParams, SanityDocument } from "next-sanity";
import { useLiveQuery } from "next-sanity/preview";
import Post from "./Post";
import { POST_QUERY } from "@/sanity/lib/queries";

export default function PostsPreview({
  post,
  params = {}, // Make params optional with a default value
}: {
  post: SanityDocument;
  params?: QueryParams;
}) {
  const [data] = useLiveQuery<SanityDocument>(post, POST_QUERY, params);

  return <Post post={data} />;
}

