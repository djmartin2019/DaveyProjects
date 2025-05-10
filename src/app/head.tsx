export default function Head() {
  return (
    <>
      <title>DJM Tech — Blog, Projects, and Experiments</title>
      <meta name="description" content="Exploring Next.js, Rust, serverless, and data — sharing insights, tutorials, and experiments on djm-tech.dev." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Social sharing / Open Graph */}
      <meta property="og:title" content="djm-tech — Blog, Projects, and Experiments" />
      <meta property="og:description" content="Exploring Next.js, Rust, serverless, and data — sharing insights, tutorials, and experiments on djm-tech.dev." />
      <meta property="og:url" content="https://djm-tech.dev" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://djm-tech.dev/og-default.png" />

      {/* Twitter card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="djm-tech — Blog, Projects, and Experiments" />
      <meta name="twitter:description" content="Exploring Next.js, Rust, serverless, and data — sharing insights, tutorials, and experiments on djm-tech.dev." />
      <meta name="twitter:image" content="https://djm-tech.dev/og-image.png" />

      <link rel="icon" href="/favicon.ico" />
    </>
  );
}

