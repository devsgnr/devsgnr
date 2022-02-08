import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Layout from '../../components/layout';
import { Paragraph } from '../../components/typography/styled';
import { AxiosResponse } from 'axios';
import {
  MyUnsplashCollectionsPhotosService,
  MyUnsplashCollectionsService,
} from '../../api/unsplash/collections';
import { CollectionMeta, CollectionPhotos } from '../../types/unsplash';
import Image from 'next/image';
import {
  StyledMindscapeGrid,
  StyledMindscapeGridInfiniteScrollLoading,
  StyledMindscapeGridItem,
  StyledMindscapeGridItemCredit,
} from '../../components/mindscape-grid/styled';

import { Waypoint } from 'react-waypoint';

const Mindscape = () => {
  const [id] = useState<string>('DWh7rOjSyvA');
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
            <Paragraph weight="bolder" size="pRegular">
              {MyUnsplashCollection.data.title}
            </Paragraph>
            <Paragraph weight="normal" size="pRegular">
              {MyUnsplashCollection.data.description}
            </Paragraph>
            <Paragraph size="pSmall">
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
                <StyledMindscapeGridItem key={index}>
                  <Image
                    placeholder="blur"
                    src={image.urls.regular}
                    alt={image.user.name}
                    blurDataURL={image.blur_hash}
                    width={'100%'}
                    height={'100%'}
                    sizes="50vw"
                    quality={100}
                  />
                  <StyledMindscapeGridItemCredit>
                    <Paragraph size="pSmall">
                      Image by{' '}
                      <a
                        href={image.user.links.html}
                        title={image.user.name}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {image.user.name}
                      </a>{' '}
                      on{' '}
                      <a
                        href={image.links.html}
                        title="Unsplash"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Unsplash
                      </a>
                    </Paragraph>
                  </StyledMindscapeGridItemCredit>
                </StyledMindscapeGridItem>
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
