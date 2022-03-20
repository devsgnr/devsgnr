/* eslint-disable react/jsx-curly-newline */
import React, { useState } from 'react';
import Image from 'next/image';
import { CollectionPhotos } from '../../types/unsplash';
import { Paragraph } from '../typography/styled';
import {
  StyledMindscapeGridItem,
  StyledMindscapeGridItemCredit,
} from './styled';

import { Unsplash } from '../../api/service';
import TYPOGRAPHY from '../../styles/token/typography';

interface MindscapePhotoProps {
  data: CollectionPhotos;
}

const MindscapePhoto = ({ data }: MindscapePhotoProps) => {
  const [onHover, setOnHover] = useState<boolean>(false);

  return (
    <StyledMindscapeGridItem
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
    >
      <Image
        placeholder="blur"
        src={data.urls.regular}
        alt={data.user.name}
        blurDataURL={data.blur_hash}
        width="100%"
        height="100%"
        sizes="50vw"
        quality={100}
      />
      <StyledMindscapeGridItemCredit
        css={{
          opacity: onHover ? '1' : '0',
          bottom: onHover ? '-2%' : '-50%',
        }}
      >
        <Paragraph css={{ fontSize: TYPOGRAPHY.size.pSmall }}>
          Photo by
          <a
            href={data.user.links.html}
            title={data.user.name}
            target="_blank"
            rel="noreferrer"
          >
            {data.user.name}
          </a>
          on
          <a
            href={data.links.html}
            title="Unsplash"
            target="_blank"
            rel="noreferrer"
            onClick={() =>
              Unsplash.photos.trackDownload({
                downloadLocation: data.links.download_location,
              })
            }
          >
            Unsplash
          </a>
        </Paragraph>
      </StyledMindscapeGridItemCredit>
    </StyledMindscapeGridItem>
  );
};

export default MindscapePhoto;
