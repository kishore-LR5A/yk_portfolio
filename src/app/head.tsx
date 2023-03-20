export default function Head() {
  return (
    <>
      <title>yk_portfolio</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="personal portfolio website" />
      <link rel="icon" href="/logo.png" />
      {/* open graph */}
      <meta property="og:title" content="yk_portfolio" />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://portfolio-yaadava-kishore.netlify.app/"
      />
      {/* <meta property="og:image" content="/og-image.png" /> */}
      <meta
        property="og:description"
        content="Personal portfolio website showcasing my skills, experience and projects."
      />
    </>
  );
}
