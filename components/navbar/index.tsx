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
        <AnchorParagraph className="blend">
          <Anchor href="/" title="Emmanuel Watila" />
        </AnchorParagraph>

        <div>
          <AnchorParagraph className="blend">
            <Anchor href="/mindscape" title="Mindscape" />
          </AnchorParagraph>
        </div>
      </NavigationFlex>
    </Flex>
  </Navigation>
);

export default NavigationBar;
