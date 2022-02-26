import image from 'next/image';
import React, { useState } from 'react';
import { Download } from 'react-feather';
import { CollectionPhotos } from '../../types/unsplash';
import { Paragraph } from '../typography/styled';
import {
  StyledMindscapeGridItem,
  StyledMindscapeGridItemCredit,
  StyledMindscapeGridDownloadButton,
} from './styled';
import Image from 'next/image';
import { Unsplash } from '../../api/service';
import toast from 'react-hot-toast';
import THEME from '../../styles/token/colors';
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
        width={'100%'}
        height={'100%'}
        sizes="50vw"
        quality={100}
      />
      <StyledMindscapeGridItemCredit
        css={{
          opacity: onHover ? '1' : '0',
          bottom: onHover ? '2%' : '0%',
        }}
      >
        <Paragraph css={{ fontSize: TYPOGRAPHY.size.pSmall }}>
          Image by{' '}
          <a
            href={data.user.links.html}
            title={data.user.name}
            target="_blank"
            rel="noreferrer"
          >
            {data.user.name}
          </a>{' '}
          on{' '}
          <a
            href={data.links.html}
            title="Unsplash"
            target="_blank"
            rel="noreferrer"
          >
            Unsplash
          </a>
        </Paragraph>
      </StyledMindscapeGridItemCredit>{' '}
      <StyledMindscapeGridDownloadButton
        css={{
          opacity: onHover ? '1' : '0',
          bottom: onHover ? '3.5%' : '0%',
        }}
        onClick={() =>
          Unsplash.photos
            .trackDownload({
              downloadLocation: data.links.download_location,
            })
            .then((res) => {
              if (res.type === 'success') {
                toast.success('Image Downloaded', {
                  duration: 5000,
                  style: {
                    background: THEME.dark.background,
                    color: THEME.dark.foreground,
                    boxShadow: `0 0 10px 10px ${THEME.dark.opaque}`,
                  },
                });
              }
            })
        }
      >
        <a
          rel="nofollow noreferrer"
          href={`${data.links.download}&force=true`}
          target="_blank"
          download
        >
          <Download size={18} />
        </a>
      </StyledMindscapeGridDownloadButton>
    </StyledMindscapeGridItem>
  );
};

export default MindscapePhoto;
