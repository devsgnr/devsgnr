import React, { useContext, useEffect, useRef, useState } from 'react';
import { useQuery } from 'react-query';
import { FetchPostService } from '../../api/posts';
import Layout from '../../components/layout';
import { Heading, Paragraph } from '../../components/typography/styled';
import { IBlogProps } from '../../types/blog';
import { IHead } from '../../types/head';
import { IPostResponse } from '../../types/response';
import { ISeo } from '../../types/seo';
import ReactHtmlParser from 'react-html-parser';

const Slug = () => {
  const [seo, setSeo] = useState<ISeo>({} as ISeo);
  const [head, setHead] = useState<IHead>({} as IHead);

  let slug = useRef<string>('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const pathname = window.location.pathname.split('/');
      slug.current = pathname[pathname.length - 1];
    }
  }, []);

  const FetchPost = useQuery('FetchPost', async () => {
    const res: IPostResponse<IBlogProps> = await FetchPostService({
      slug: slug.current,
    });
    if (res) {
      setSeo({
        title: res.post.title,
        description: res.post.excerpt,
        image: res.post.displayPicture.url,
      });
      setHead({ title: res.post.title });
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
            <Heading className="title" size="heading1" weight="bolder">
              {FetchPost.data.post.title}
            </Heading>

            <Paragraph size="pRegular">
              {ReactHtmlParser(FetchPost.data.post.theProcess.html)}
            </Paragraph>
          </>
        )}
      </>
    </Layout>
  );
};

export default Slug;
