/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-curly-newline */
import React, { FC } from 'react';
import ReactHtmlParser from 'react-html-parser';
import Anchor from '../anchor';
import { IProjectProps } from '../../types/project';
import { Paragraph } from '../typography/styled';
import BlogItem from './styled';
import TYPOGRAPHY from '../../styles/token/typography';

interface BlogItemComponentProps {
  data: IProjectProps;
}

const BlogItemComponent: FC<BlogItemComponentProps> = ({
  data,
}: BlogItemComponentProps) => {
  return (
    <Anchor href={data.slug} target="_blank">
      <BlogItem>
        <div>
          <Paragraph>{data.title}</Paragraph>
        </div>
        <div>
          <Paragraph css={{ fontSize: TYPOGRAPHY.size.pSmall }}>
            {ReactHtmlParser(data.mainContent.html)}
          </Paragraph>
        </div>
      </BlogItem>
    </Anchor>
  );
};

export default BlogItemComponent;
