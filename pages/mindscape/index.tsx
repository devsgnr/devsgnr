/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import { NextPage } from 'next';
import { useQuery } from 'react-query';
import { Waypoint } from 'react-waypoint';
import { AxiosResponse } from 'axios';
import Layout from '../../components/layout';
import { Paragraph } from '../../components/typography/styled';
import {
  MyUnsplashCollectionsPhotosService,
  MyUnsplashCollectionsService,
} from '../api/unsplash/collections';
import { CollectionMeta, CollectionPhotos } from '../../types/unsplash';
import {
  StyledMindscapeGrid,
  StyledMindscapeGridInfiniteScrollLoading,
} from '../../components/mindscape-grid/styled';
import { process } from '../api/service';
import MindscapePhoto from '../../components/mindscape-grid';
import AnimatedHeading from '../../components/animated-heading';

const Mindscape: NextPage = () => {
  const [id] = useState<string>(process.env.NEXT_PUBLIC_COLLECTION_ID);
  const [images, setImages] = useState<Array<CollectionPhotos>>([]);
  const [page, setPage] = useState<number>(1);
  const [pages, setPages] = useState<number>(0);

  const MyUnsplashCollection = useQuery(['ReturnCollections'], async () => {
    const res: AxiosResponse<CollectionMeta> =
      await MyUnsplashCollectionsService(id);
    return res.data;
  });

  const MyUnsplashCollectionPhotos = useQuery(
    ['ReturnCollectionsPhotos', page],
    async () => {
      const res: AxiosResponse<CollectionPhotos[]> =
        await MyUnsplashCollectionsPhotosService(id, page);

      setPages(
        Math.ceil(
          Number(res.headers['x-total']) / Number(res.headers['x-per-page']),
        ),
      );

      res.data.forEach((image: CollectionPhotos) => {
        setImages((old) => [...old, image]);
      });
    },
  );

  return (
    <Layout>
      <>
        {MyUnsplashCollection.isSuccess && (
          <div style={{ padding: '0 50px' }}>
            <AnimatedHeading>{MyUnsplashCollection.data.title}</AnimatedHeading>
          </div>
        )}
      </>

      <>
        {images.length > 0 && (
          <>
            <StyledMindscapeGrid css={{ padding: '25px 0' }}>
              {images.map((image: CollectionPhotos, index: number) => (
                <MindscapePhoto key={index} data={image} />
              ))}

              <Waypoint onEnter={() => page < pages && setPage(page + 1)} />
            </StyledMindscapeGrid>
            <>
              {MyUnsplashCollectionPhotos.isFetching && (
                <StyledMindscapeGridInfiniteScrollLoading>
                  <Paragraph css={{ textAlign: 'center' }}>
                    &bull; &bull; &bull;
                  </Paragraph>
                </StyledMindscapeGridInfiniteScrollLoading>
              )}
            </>
          </>
        )}
      </>
    </Layout>
  );
};

export default Mindscape;
