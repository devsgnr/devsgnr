import Link from 'next/link';
import { NextPage } from 'next';
import React, { useEffect, useRef } from 'react';
import { gsap, Power3 } from 'gsap';
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
  };
};

const Writing: NextPage<BlogsPageProps> = ({ data }: BlogsPageProps) => {
  const ContainerRef = useRef(null);
  const BlogItemRef = useRef(null);

  useEffect(() => {
    gsap.to(ContainerRef.current, {
      duration: 0,
      opacity: 1,
      ease: Power3.easeIn,
    });

    data.forEach((value: IBlogProps, index: number) => {
      gsap
        .timeline({ delay: index * 0.3 })
        .from(`.${value.slug}`, {
          duration: 0.2,
          opacity: 0,
          ease: Power3.easeOut,
        })
        .to(`.${value.slug}`, {
          duration: 0.2,
          opacity: 1,
          ease: Power3.easeOut,
          stagger: 0.25,
        });
    });
  }, []);

  return (
    <Layout>
      <div ref={ContainerRef} style={{ opacity: 0 }}>
        {data.map((item: IBlogProps, index: number) => (
          <div
            className={item.slug}
            key={index}
            ref={BlogItemRef}
            style={{ opacity: 0 }}
          >
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
