import React from 'react';
import Head from 'next/head';
import { ISeo } from '../../types/seo';

interface SEOProps {
  seo?: ISeo;
}

const SEO = ({ seo }: SEOProps) => (
  <Head>
    <title>{seo?.title ? seo.title : 'Emmanuel Watila'}</title>
  </Head>
);

export default SEO;
