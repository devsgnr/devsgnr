/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-curly-newline */
import React, { FC } from 'react';
import ReactHtmlParser from 'react-html-parser';
import gsap, { Power4 } from 'gsap';
import Anchor from '../anchor';
import { IProjectProps } from '../../types/project';
import { Heading, Paragraph } from '../typography/styled';
import BlogItem from './styled';
import THEME from '../../styles/token/colors';

interface BlogItemComponentProps {
  data: IProjectProps;
}

const BlogItemComponent: FC<BlogItemComponentProps> = ({
  data,
}: BlogItemComponentProps) => {
  const makeIntoView = () => {
    gsap.to('.cursor', {
      duration: 0.25,
      width: '180px',
      height: '180px',
      top: '-90px',
      left: '-90px',
      css: {
        content: 'view',
        backgroundColor: THEME.light.background,
        color: THEME.light.background,
      },
      ease: Power4.easeInOut,
    });
  };

  const revert = () => {
    gsap.to('.cursor', {
      duration: 0.25,
      width: '15px',
      height: '15px',
      top: '-7.5px',
      left: '-7.5px',
      css: {
        content: '',
        backgroundColor: 'transparent',
        color: 'transparent',
      },
      ease: Power4.easeInOut,
    });
  };

  return (
    <Anchor href={data.slug} target="_blank">
      <BlogItem
        onMouseEnter={() => makeIntoView()}
        onMouseLeave={() => revert()}
      >
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
