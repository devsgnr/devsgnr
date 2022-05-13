import React, { useState } from 'react';
import { GetServerSidePropsContext, NextPage } from 'next';
import Image from 'next/image';
import { ParsedUrlQuery } from 'querystring';
import ReactHtmlParser from 'react-html-parser';
import { useQuery } from 'react-query';
import { FetchPostService } from '../api/posts';
import Layout from '../../components/layout';
import { Heading, Paragraph } from '../../components/typography/styled';
import { IBlogProps } from '../../types/blog';
import { IPostResponse } from '../../types/response';
import { ISeo } from '../../types/seo';
import {
  StyledExternalImageContainer,
  StyledImageContainer,
} from '../../components/image/styled';
import decodeBlurhash from '../../utils/decodeBlurhash';

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

            <StyledExternalImageContainer>
              <StyledImageContainer>
                <Image
                  placeholder="blur"
                  blurDataURL={decodeBlurhash('L01yLP9FWBofj[WBj[fQD%-;IUof')}
                  src={FetchPost.data.post.displayPicture.url}
                  alt={FetchPost.data.post.slug}
                  width="100%"
                  height="50%"
                  sizes="50vw"
                  quality={100}
                />
              </StyledImageContainer>
              <Paragraph css={{ fontSize: '11px' }}>
                {ReactHtmlParser(FetchPost.data.post.imageCredit.html)}
              </Paragraph>
            </StyledExternalImageContainer>

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
