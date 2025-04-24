// next.config.mjs  (ES-module)
import { withContentlayer } from "next-contentlayer";
import nextMdx from "@next/mdx";
import rehypePrism from "rehype-prism-plus";

const withMDX = nextMdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [rehypePrism],
  },
});

export default withContentlayer(
  withMDX({
    pageExtensions: ["ts", "tsx", "md", "mdx"],
  })
);

