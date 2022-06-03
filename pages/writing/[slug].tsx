import React from 'react';
import { GetStaticPropsContext, NextPage } from 'next';
import Image from 'next/image';
import ReactHtmlParser from 'react-html-parser';
import { FetchPostService, FetchPostsService } from '../api/posts';
import Layout from '../../components/layout';
import { Heading, Paragraph } from '../../components/typography/styled';
import { IBlogProps } from '../../types/blog';
import { IPostResponse, IPostsResponse } from '../../types/response';
import {
  StyledExternalImageContainer,
  StyledImageContainer,
} from '../../components/image/styled';

interface WritingSlugProps {
  data: IBlogProps;
}

type ContextType = GetStaticPropsContext;

export const getStaticPaths = async () => {
  const res: IPostsResponse<IBlogProps[]> = await FetchPostsService();
  const paths = res.posts.map((post: IBlogProps) => ({
    params: { slug: post.slug },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: ContextType) => {
  const { params } = context;
  const res: IPostResponse<IBlogProps> = await FetchPostService({
    slug: String(params?.slug),
  });
  return {
    props: {
      data: res.post,
    },
    revalidate: 3600,
  };
};

const Slug: NextPage<WritingSlugProps> = ({ data }: WritingSlugProps) => (
  <Layout
    seo={{
      title: data.title,
      description: data.excerpt,
      image: data.displayPicture.url,
    }}
  >
    <>
      <Heading className="title">{data.title}</Heading>

      <StyledExternalImageContainer>
        <StyledImageContainer>
          <Image
            placeholder="blur"
            blurDataURL="L01yLP9FWBofj[WBj[fQD%-;IUof"
            src={data.displayPicture.url}
            alt={data.slug}
            width="100%"
            height="50%"
            sizes="50vw"
            quality={100}
          />
        </StyledImageContainer>
        <Paragraph css={{ fontSize: '11px' }}>
          {ReactHtmlParser(data.imageCredit.html)}
        </Paragraph>
      </StyledExternalImageContainer>

      <Paragraph>{ReactHtmlParser(data.theProcess.html)}</Paragraph>
    </>
  </Layout>
);

export default Slug;
