import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="sr" className="h-screen">
        <title>darkMix.shop</title>
        <Head>
          {/* Favicon ubaci START */}
          <link rel="icon" href="/favicon.png" sizes="32x32" />
          <link rel="icon" href="/favicon.png" sizes="192x192" />
          {/* Favicon ubaci END */}

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet" /> 
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
