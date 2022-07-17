/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-curly-newline */
import React, { FC } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { ArrowUpRight } from 'react-feather';
import { Grid } from '../flex/styled';
import Anchor from '../anchor';
import TYPOGRAPHY from '../../styles/token/typography';
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
        <Grid>
          <div>
            <Heading css={{ marginBottom: '20px' }}>{data.title}</Heading>
            <Paragraph css={{ fontSize: TYPOGRAPHY.size.pSmall }}>
              {ReactHtmlParser(data.mainContent.html)}
            </Paragraph>
          </div>

          <div>
            <Paragraph>
              <ArrowUpRight size={24} />
            </Paragraph>
          </div>
        </Grid>
      </BlogItem>
    </Anchor>
  );
};

export default BlogItemComponent;
