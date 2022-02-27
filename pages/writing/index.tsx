import Link from 'next/link';
import React from 'react';
import { useQuery } from 'react-query';
import { FetchPostsService } from '../../api/posts';
import Anchor from '../../components/anchor';
import { StyledInternalA } from '../../components/anchor/styled';
import BlogItem from '../../components/blog-item/styled';
import Layout from '../../components/layout';
import { Paragraph } from '../../components/typography/styled';
import { IBlogProps } from '../../types/blog';
import { IPostsResponse } from '../../types/response';

const Writing = () => {
  const FetchPosts = useQuery('FetchPosts', async () => {
    const res: IPostsResponse<IBlogProps[]> = await FetchPostsService();
    return res;
  });

  return (
    <Layout isLoading={FetchPosts.isFetching} isError={FetchPosts.isError}>
      <>
        {FetchPosts.isSuccess &&
          FetchPosts.data.posts.map((item: IBlogProps, index: number) => (
            <Link key={index} passHref href={`/writing/${item.slug}`}>
              <StyledInternalA href={`/writing/${item.slug}`}>
                <BlogItem>
                  <Paragraph>{item.title}</Paragraph>
                  <Paragraph>{new Date(item.date).toDateString()}</Paragraph>
                </BlogItem>
              </StyledInternalA>
            </Link>
          ))}
      </>
    </Layout>
  );
};

export default Writing;
