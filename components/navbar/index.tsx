/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import TYPOGRAPHY from '../../styles/token/typography';
import Anchor from '../anchor';
import { Flex } from '../flex/styled';
import { AnchorParagraph, Paragraph } from '../typography/styled';
import Navigation, { NavigationFlex } from './styled';

const NavigationBar = () => (
  <Navigation>
    <Flex>
      <NavigationFlex>
        <AnchorParagraph>
          <Anchor href="/" title="Emmanuel Watila" />
        </AnchorParagraph>

        <Paragraph css={{ fontSize: TYPOGRAPHY.size.pRegular }}>
          A visual designer and full-stack creator obsessed with crafting
          beautiful experiences through interface design, video, photos,{' '}
          <a
            href="https://www.getrevue.co/profile/devsgnr"
            title="The Melancholic Creative"
            target="_blank"
            rel="noreferrer"
          >
            writing
          </a>
          ,{' '}
          <a
            href="https://github.com/devsgnr"
            title="Coding"
            target="_blank"
            rel="noreferrer"
          >
            code
          </a>
          , and{' '}
          <a
            href="https://instagram.com/devsgnr_"
            title="Instagram"
            target="_blank"
            rel="noreferrer"
          >
            graphic design
          </a>
          .
        </Paragraph>
        <Paragraph css={{ fontSize: TYPOGRAPHY.size.pRegular }}>
          Open to collaborating on some graphic design work, hit me up{' '}
          <a href="mailto:hi@devsgnr.xyz" title="hi@devsgnr.xyz">
            hi@devsgnr.xyz
          </a>
          . You can also check out my{' '}
          <a
            href="https://twitter.com/devsgnr_"
            title="Twitter"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>{' '}
          and{' '}
          <a
            href="https://instagram.com/devsgnr_"
            title="Instagram"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </Paragraph>
      </NavigationFlex>
    </Flex>
  </Navigation>
);

export default NavigationBar;
