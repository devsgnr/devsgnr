import Link from 'next/link';
import { NextPage } from 'next';
import React from 'react';
import { FetchPostsService } from '../api/posts';
import { StyledInternalA } from '../../components/anchor/styled';
import BlogItem from '../../components/blog-item/styled';
import Layout from '../../components/layout';
import { Paragraph } from '../../components/typography/styled';
import { IBlogProps } from '../../types/blog';
import { IPostsResponse } from '../../types/response';

interface BlogsPageProps {
  data: IBlogProps[];
}

export const getStaticProps = async () => {
  const res: IPostsResponse<IBlogProps[]> = await FetchPostsService();

  return {
    props: {
      data: res.posts,
    },
    revalidate: 3600,
  };
};

const Writing: NextPage<BlogsPageProps> = ({ data }: BlogsPageProps) => {
  return (
    <Layout>
      <div>
        {data.map((item: IBlogProps, index: number) => (
          <div key={index}>
            <Link
              passHref
              href={{ pathname: '/writing/[slug]', query: { slug: item.slug } }}
            >
              <StyledInternalA>
                <BlogItem>
                  <Paragraph>{item.title}</Paragraph>
                </BlogItem>
              </StyledInternalA>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Writing;
