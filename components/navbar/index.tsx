/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import Anchor from '../anchor';
import { Flex } from '../flex/styled';
import { AnchorParagraph } from '../typography/styled';
import Navigation, { NavigationFlex } from './styled';

const NavigationBar = () => (
  <Navigation>
    <Flex>
      <NavigationFlex>
        <AnchorParagraph>
          <Anchor href="/" title="Emmanuel Watila" />
        </AnchorParagraph>
      </NavigationFlex>
    </Flex>
  </Navigation>
);

export default NavigationBar;
