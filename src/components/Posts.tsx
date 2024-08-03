import { SanityDocument } from "next-sanity";
import Link from "next/link";
import Image from "next/image";
import imageUrlBuilder from '@sanity/image-url';
import { dataset, projectId } from '@/sanity/env';

const builder = imageUrlBuilder({ projectId, dataset });

function urlFor(source) {
  return builder.image(source).url();
}

export default function Posts({ posts }: { posts: SanityDocument[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts?.length > 0 ? (
        posts.map((post) => (
          <Link key={post._id} href={`/blog/${post.slug.current}`} legacyBehavior>
            <a className="block bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105">
              {post.mainImage && (
                <Image
                  src={urlFor(post.mainImage)}
                  alt={post.mainImage.alt || post.title}
                  className="w-full h-48 object-cover"
                  width={600}
                  height={400}
                />
              )}
              <div className="p-4">
                <h2 className="text-2xl font-bold text-sky-600 mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-2">{post.description}</p>
                <p className="text-gray-500 text-sm">{new Date(post.publishedAt).toLocaleDateString()}</p>
              </div>
            </a>
          </Link>
        ))
      ) : (
        <div className="p-4 text-red-500">No posts found</div>
      )}
    </div>
  );
}

