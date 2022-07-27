/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-curly-newline */
import React, { FC } from 'react';
import Anchor from '../anchor';
import { IProjectProps } from '../../types/project';
import { Heading, Paragraph } from '../typography/styled';
import BlogItem from './styled';
import TYPOGRAPHY from '../../styles/token/typography';
import { AnimatedLink } from '../animated';

interface BlogItemComponentProps {
  data: IProjectProps;
}

const BlogItemComponent: FC<BlogItemComponentProps> = ({
  data,
}: BlogItemComponentProps) => {
  return (
    <BlogItem>
      <div
        style={{
          backgroundImage: `url(${data.coverPicture.url})`,
        }}
        className="overlay"
      />
      <div className="content">
        <div>
          <Heading>{data.title}</Heading>
          <Paragraph css={{ fontSize: TYPOGRAPHY.size.pSmall }}>
            {data.role}
          </Paragraph>
        </div>
        <div>
          {data.slug === '#' ? (
            <Anchor
              href={data.slug}
              className="opacity-50 pointer-events-none"
              target="_blank"
            >
              <AnimatedLink identifier={data.id}>IN PROGRESS</AnimatedLink>
            </Anchor>
          ) : (
            <Anchor href={data.slug} target="_blank">
              <AnimatedLink identifier={data.id}>VIEW PROJECT</AnimatedLink>
            </Anchor>
          )}
        </div>
      </div>
    </BlogItem>
  );
};

export default BlogItemComponent;
