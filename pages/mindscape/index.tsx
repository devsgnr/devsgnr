/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Waypoint } from 'react-waypoint';
import { AxiosResponse } from 'axios';
import Layout from '../../components/layout';
import { Paragraph } from '../../components/typography/styled';
import {
  MyUnsplashCollectionsPhotosService,
  MyUnsplashCollectionsService,
} from '../../api/unsplash/collections';
import { CollectionMeta, CollectionPhotos } from '../../types/unsplash';
import {
  StyledMindscapeGrid,
  StyledMindscapeGridInfiniteScrollLoading,
} from '../../components/mindscape-grid/styled';
import { process } from '../../api/service';
import MindscapePhoto from '../../components/mindscape-grid';
import TYPOGRAPHY from '../../styles/token/typography';

const Mindscape = () => {
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
    <Layout
      isLoading={images.length === 0}
      isError={MyUnsplashCollection.isError}
    >
      <>
        {MyUnsplashCollection.isSuccess && (
          <>
            <Paragraph css={{ fontWeight: 'bold' }}>
              {MyUnsplashCollection.data.title}
            </Paragraph>
            <Paragraph>{MyUnsplashCollection.data.description}</Paragraph>
            <Paragraph
              css={{ fontSize: TYPOGRAPHY.size.pSmall, margin: '20px 0' }}
            >
              Powered by{' '}
              <a
                href="https://unsplash.com"
                title="Unsplash"
                target="_blank"
                rel="noreferrer"
              >
                Unsplash
              </a>
            </Paragraph>
          </>
        )}
      </>

      <>
        {images.length > 0 && (
          <>
            <StyledMindscapeGrid>
              {images.map((image: CollectionPhotos, index: number) => (
                <MindscapePhoto key={index} data={image} />
              ))}

              <Waypoint onEnter={() => page < pages && setPage(page + 1)} />
            </StyledMindscapeGrid>
            <>
              {MyUnsplashCollectionPhotos.isFetching && (
                <StyledMindscapeGridInfiniteScrollLoading>
                  <Paragraph>&bull; &bull; &bull;</Paragraph>
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
