import React from 'react';
import Head from 'next/head';
import { ISeo } from '../../types/seo';

interface SEOProps {
  seo?: ISeo;
}

const SEO = ({ seo }: SEOProps) => {
  return (
    <Head>
      <title>{seo?.title && seo.title}</title>
    </Head>
  );
};

export default SEO;
