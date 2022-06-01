import Link from 'next/link';
import { NextPage } from 'next';
import React from 'react';
import { useQuery } from 'react-query';
import { FetchPostsService } from '../api/posts';
import { StyledInternalA } from '../../components/anchor/styled';
import BlogItem from '../../components/blog-item/styled';
import Layout from '../../components/layout';
import { Paragraph } from '../../components/typography/styled';
import { IBlogProps } from '../../types/blog';
import { IPostsResponse } from '../../types/response';

const Writing: NextPage = () => {
  const FetchPosts = useQuery('FetchPosts', async () => {
    const res: IPostsResponse<IBlogProps[]> = await FetchPostsService();
    return res;
  });

  return (
    <Layout isLoading={FetchPosts.isFetching} isError={FetchPosts.isError}>
      <>
        {FetchPosts.isSuccess &&
          FetchPosts.data.posts.map((item: IBlogProps, index: number) => (
            <Link
              key={index}
              passHref
              href={{ pathname: '/writing/[slug]', query: { slug: item.slug } }}
            >
              <StyledInternalA>
                <BlogItem>
                  <Paragraph>{item.title}</Paragraph>
                </BlogItem>
              </StyledInternalA>
            </Link>
          ))}
      </>
    </Layout>
  );
};

export default Writing;
