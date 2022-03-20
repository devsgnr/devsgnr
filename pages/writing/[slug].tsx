import React, { useEffect, useRef, useState } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { useQuery } from 'react-query';
import { FetchPostService } from '../../api/posts';
import Layout from '../../components/layout';
import { Paragraph } from '../../components/typography/styled';
import { IBlogProps } from '../../types/blog';
import { IPostResponse } from '../../types/response';
import { ISeo } from '../../types/seo';

const Slug = () => {
  const [seo, setSeo] = useState<ISeo>({} as ISeo);

  const slug = useRef<string>('');

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
            <Paragraph className="title">{FetchPost.data.post.title}</Paragraph>

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
