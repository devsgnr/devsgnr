/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-curly-newline */
import React, { FC } from 'react';
import ReactHtmlParser from 'react-html-parser';
import Anchor from '../anchor';
import { IProjectProps } from '../../types/project';
import { Heading, Paragraph } from '../typography/styled';
import BlogItem from './styled';

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
          <Heading>{data.title}</Heading>
        </div>
        <div>
          <Paragraph>{ReactHtmlParser(data.mainContent.html)}</Paragraph>
        </div>
      </BlogItem>
    </Anchor>
  );
};

export default BlogItemComponent;
