import { withContentlayer } from "next-contentlayer";
import nextMdx from "@next/mdx";
import rehypePrism from "rehype-prism-plus";
import path from "path";

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
    webpack(config) {
      config.resolve.alias["@"] = path.resolve(__dirname, "src");
      return config;
    },
  })
);

