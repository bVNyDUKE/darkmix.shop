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
