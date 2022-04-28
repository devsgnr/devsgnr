import React, { useState } from 'react';
import { GetServerSidePropsContext, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import ReactHtmlParser from 'react-html-parser';
import { useQuery } from 'react-query';
import { FetchPostService } from '../api/posts';
import Layout from '../../components/layout';
import { Heading, Paragraph } from '../../components/typography/styled';
import { IBlogProps } from '../../types/blog';
import { IPostResponse } from '../../types/response';
import { ISeo } from '../../types/seo';

interface WritingSlugProps {
  params: ParsedUrlQuery;
}

type ContextType = GetServerSidePropsContext;

export const getServerSideProps = async (context: ContextType) => {
  const { params } = context;
  return { props: { params } };
};

const Slug: NextPage<WritingSlugProps> = ({ params }: WritingSlugProps) => {
  const [seo, setSeo] = useState<ISeo>({} as ISeo);

  const FetchPost = useQuery('FetchPost', async () => {
    const res: IPostResponse<IBlogProps> = await FetchPostService({
      slug: String(params.slug),
    });
    if (res) {
      setSeo({
        title: res.post.title,
        description: res.post.excerpt,
        image: res.post.displayPicture.url,
      });
    }
    return res;
  });

  return (
    <Layout
      seo={seo}
      isLoading={FetchPost.isFetching}
      isError={FetchPost.isError}
    >
      <>
        {FetchPost.isSuccess && (
          <>
            <Heading className="title">{FetchPost.data.post.title}</Heading>

            <Paragraph>
              {ReactHtmlParser(FetchPost.data.post.theProcess.html)}
            </Paragraph>
          </>
        )}
      </>
    </Layout>
  );
};

export default Slug;
