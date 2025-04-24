import { withContentlayer } from "next-contentlayer";
import nextMdx from "@next/mdx";
import rehypePrism from "rehype-prism-plus";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

// 🛠 Fix for __dirname not existing in ESM:
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const withMDX = nextMdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [rehypePrism],
  },
});

const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  webpack(config) {
    config.resolve.alias["@"] = resolve(__dirname, "src");
    return config;
  },
};

const config = withContentlayer(withMDX(nextConfig));

export default config;

