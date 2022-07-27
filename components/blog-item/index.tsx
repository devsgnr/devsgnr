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
      <div>
        <Heading>{data.title}</Heading>
        <Paragraph css={{ fontSize: TYPOGRAPHY.size.pSmall }}>
          {data.role}
        </Paragraph>
      </div>
      <div>
        {data.slug === '#' ? (
          <></>
        ) : (
          <Anchor href={data.slug} target="_blank">
            <AnimatedLink identifier={data.id}>VIEW PROJECT</AnimatedLink>
          </Anchor>
        )}
      </div>
    </BlogItem>
  );
};

export default BlogItemComponent;
