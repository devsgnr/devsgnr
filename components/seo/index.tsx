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
      <meta
        name="description"
        content={
          seo?.description
            ? seo.description
            : `A design engineer, bookworm, and UX writer obsessed with crafting beautiful interfaces and experiences through the combination of writing & design, interested in NFTs, blockchain technology, content writing, Mythology (mainly Greek and Egyptian), Sci-Fi, and anime.`
        }
      />
      <meta
        property="og:title"
        content={seo?.title ? seo.title : 'Emmanuel Watila, Designer'}
      />
      <meta property="og:url" content="https://devsgnr.xyz" />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content={
          seo?.description
            ? seo.description
            : `A design engineer, bookworm, and UX writer obsessed with crafting beautiful interfaces and experiences through the combination of writing & design, interested in NFTs, blockchain technology, content writing, Mythology (mainly Greek and Egyptian), Sci-Fi, and anime.`
        }
      />
      <meta
        property="og:image"
        content={seo?.image ? seo.image : 'https://devsgnr.xyz/seo.png'}
      />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:site" content="@devsgnr_" />
      <meta
        property="twitter:title"
        content={seo?.title ? seo.title : 'Emmanuel Watila, Designer'}
      />
      <meta
        property="twitter:description"
        content={
          seo?.description
            ? seo.description
            : `A design engineer, bookworm, and UX writer obsessed with crafting beautiful interfaces and experiences through the combination of writing & design, interested in NFTs, blockchain technology, content writing, Mythology (mainly Greek and Egyptian), Sci-Fi, and anime.`
        }
      />
      <meta
        property="twitter:image"
        content={seo?.image ? seo.image : 'https://devsgnr.xyz/seo.png'}
      />
      <link rel="icon" href="/favicon.png" />
    </Head>
  );
};

export default SEO;
