import { groq } from "next-sanity";

export const POSTS_QUERY = groq`
  *[_type == "post" && defined(slug.current)]{
    _id,
    title,
    slug,
    description,
    publishedAt,
    mainImage
  } | order(publishedAt desc)
`;

export const POST_QUERY = groq`
  *[_type == "post" && slug.current == $slug][0]{
    title,
    slug,
    body,
    mainImage,
    publishedAt
  }
`;

export const POSTS_SLUG_QUERY = groq`
  *[_type == "post" && defined(slug.current)][]{
    "params": { "slug": slug.current }
  }
`;



/*import { groq } from "next-sanity";

export const POSTS_QUERY = groq`*[_type == "post" && defined(slug)]`;

export const POSTS_SLUG_QUERY = groq`*[_type == "post" && defined(slug.current)][]{
  "params": { "slug": slug.current }
}`;

export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]`;

export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  content, // Ensure this is a string or HTML
  "author": author->name,
  publishedAt,
  mainImage{
    asset->{
      _id,
      url
    },
    alt
  }
}`;*/

