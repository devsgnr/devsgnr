import React from 'react';
import Head from 'next/head';
import { ISeo } from '../../types/seo';

interface SEOProps {
  seo?: ISeo;
}

const SEO = ({ seo }: SEOProps) => {
  return (
    <Head>
      <title>{seo?.title ? seo.title : 'Emmanuel Watila, Designer'}</title>
      <meta name="robots" content="index,follow" />
      <meta name="googlebot" content="index,follow" />
      <meta name="theme-color" content="#000" />
      <meta
        name="description"
        content={
          seo?.description
            ? seo.description
            : `Designer, Engineer, Writer, Advocate`
        }
      />
      <meta
        property="og:title"
        content={seo?.title ? seo.title : 'Emmanuel Watila, Designer'}
      />
      <meta property="og:url" content="https://devsgnr.xyz" />
      <meta property="og:site_name" content="Emmanuel Watila, Designer" />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content={
          seo?.description
            ? seo.description
            : `Designer, Engineer, Writer, Advocate`
        }
      />
      <meta
        property="og:image"
        content={seo?.image ? seo.image : 'https://devsgnr.xyz/seo.png'}
      />
      <meta
        property="twitter:title"
        content={seo?.title ? seo.title : 'Emmanuel Watila, Designer'}
      />
      <meta
        property="twitter:image"
        content={seo?.image ? seo.image : 'https://devsgnr.xyz/seo.png'}
      />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:site" content="@devsgnr_" />
      <meta name="twitter:creator" content="@devsgnr_" />
      <meta
        property="twitter:description"
        content={
          seo?.description
            ? seo.description
            : `Designer, Engineer, Writer, Advocate`
        }
      />
      <link rel="icon" href="/favicon.png" />
    </Head>
  );
};

export default SEO;
