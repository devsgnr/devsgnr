import { FC } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Grid } from '../flex/styled';
import Anchor from '../anchor';
import TYPOGRAPHY from '../../styles/token/typography';
import { IProjectProps } from '../../types/project';
import { Paragraph } from '../typography/styled';
import BlogItem from './styled';
import { ArrowUpRight } from 'react-feather';
import { CSS } from '@stitches/react';

interface BlogItemComponentProps {
  data: IProjectProps;
}

const BlogItemComponent: FC<BlogItemComponentProps> = ({
  data,
}: BlogItemComponentProps) => {
  const Relative: CSS = {
    position: 'relative',
  };

  return (
    <Anchor href={data.slug} target="_blank">
      <BlogItem css={Relative}>
        <Grid>
          <div>
            <Paragraph>{data.title}</Paragraph>
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
