import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import { SanityDocument } from "next-sanity";
import { dataset, projectId } from "@/sanity/env";

const builder = imageUrlBuilder({ projectId, dataset });

export default function Post({ post }: { post: SanityDocument }) {
  return (
    <Link href={`/blog/${post.slug.current}`} legacyBehavior>
      <a className="block bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:bg-sky-50">
        {post.mainImage && (
          <Image
            src={builder.image(post.mainImage).width(1200).height(600).url()}
            alt={post.mainImage.alt || post.title}
            className="w-full h-auto object-cover rounded-lg mb-6"
            width={1200}
            height={600}
          />
        )}
        <div className="p-6 lg:p-10">
          <h1 className="text-3xl font-bold text-sky-600 mb-4">{post.title}</h1>
          {post.publishedAt && (
            <p className="text-gray-500 text-sm mb-6">
              Published on {new Date(post.publishedAt).toLocaleDateString()}
            </p>
          )}
          <div className="prose max-w-none">
            <PortableText value={post.body} />
          </div>
        </div>
      </a>
    </Link>
  );
}


