export const token = process.env.NEXT_PUBLIC_SANITY_API_READ_TOKEN;

if (!token) {
  throw new Error('Missing NEXT_PUBLIC_SANITY_API_READ_TOKEN');
}
