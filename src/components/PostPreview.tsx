import Image from "next/image";
import Link from "next/link";
import { SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { dataset, projectId } from "@/sanity/env";

const builder = imageUrlBuilder({ projectId, dataset });

export default function PostPreview({ post }: { post: SanityDocument }) {
  return (
    <Link href={`/blog/${post.slug.current}`} legacyBehavior>
      <a className="block bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:bg-sky-50">
        {post.mainImage && (
          <Image
            src={builder.image(post.mainImage).width(600).height(400).url()}
            alt={post.mainImage.alt || post.title}
            className="w-full h-48 object-cover"
            width={600}
            height={400}
          />
        )}
        <div className="p-4">
          <h2 className="text-2xl font-bold text-sky-600 mb-2">{post.title}</h2>
          {post.publishedAt && (
            <p className="text-gray-500 text-sm mb-2">
              Published on {new Date(post.publishedAt).toLocaleDateString()}
            </p>
          )}
          {post.description && (
            <p className="text-gray-600 mb-2">{post.description}</p>
          )}
        </div>
      </a>
    </Link>
  );
}


