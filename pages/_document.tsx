import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { getCssText } from '../stitches.config';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
          <meta
            name="p:domain_verify"
            content="4348bfb639483da0f6d8b1192598d753"
          />
          <meta name="robots" content="index,follow" />
          <meta name="googlebot" content="index,follow" />
          <meta name="theme-color" content="#151718" />
          <meta name="description" content="Fullstack Creator" />
          <meta property="twitter:title" content="Emmanuel Watila" />
          <meta
            property="twitter:image"
            content={'https://devsgnr.xyz/seo.png'}
          />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:site" content="@devsgnr_" />
          <meta name="twitter:creator" content="@devsgnr_" />
          <meta property="twitter:description" content="Fullstack Creator" />
          <meta property="og:title" content="Emmanuel Watila" />
          <meta property="og:url" content="https://devsgnr.xyz" />
          <meta property="og:site_name" content="Emmanuel Watila" />
          <meta property="og:type" content="website" />
          <meta property="og:description" content="Fullstack Creator" />
          <meta property="og:image" content={'https://devsgnr.xyz/seo.png'} />
          <link rel="icon" href="/favicon.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
