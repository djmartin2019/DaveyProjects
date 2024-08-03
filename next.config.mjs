/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      domains: ['https://www.daveyprojects.com/'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

export default nextConfig;
