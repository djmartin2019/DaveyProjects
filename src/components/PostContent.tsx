import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { dataset, projectId } from "@/sanity/env";

const builder = imageUrlBuilder({ projectId, dataset });

export default function PostContent({ post }: { post: SanityDocument }) {
  return (
    <article className="bg-white rounded-lg p-6 lg:p-10">
      {post.mainImage && (
        <Image
          src={builder.image(post.mainImage).width(1200).height(600).url()}
          alt={post.mainImage.alt || post.title}
          className="w-full h-auto object-cover rounded-lg mb-6"
          width={1200}
          height={600}
        />
      )}
      <h1 className="text-4xl font-bold text-sky-600 mb-4">{post.title}</h1>
      {post.publishedAt && (
        <p className="text-gray-500 text-sm mb-6">
          Published on {new Date(post.publishedAt).toLocaleDateString()}
        </p>
      )}
      <div className="prose max-w-none">
        <PortableText value={post.body} />
      </div>
    </article>
  );
}

