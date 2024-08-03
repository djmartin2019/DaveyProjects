import type { SanityClient } from 'next-sanity';
import { createClient } from "@sanity/client";
import { apiVersion, dataset, projectId } from '../env';

const token = process.env.SANITY_API_READ_TOKEN;

export function getClient(previewToken?: string): SanityClient {
  return createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: !previewToken,
    perspective: previewToken ? 'previewDrafts' : 'published',
    stega: {
      enabled: !!previewToken,
      studioUrl: '/studio',
    },
    token: previewToken || token,
  });
}

