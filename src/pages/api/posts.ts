// src/pages/api/posts.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { getClient } from '@/sanity/lib/client';
import { POSTS_QUERY } from '@/sanity/lib/queries';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const client = getClient();
  const posts = await client.fetch(POSTS_QUERY);
  res.status(200).json(posts);
}

