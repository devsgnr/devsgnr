/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import Anchor from '../anchor';
import { AnimatedText } from '../animated-heading';
import { AnchorParagraph } from '../typography/styled';
import Navigation, { NavigationFlex } from './styled';

const NavigationBar = () => (
  <Navigation>
    <NavigationFlex>
      <AnchorParagraph>
        <Anchor href="/">
          <AnimatedText>Emmanuel Watila</AnimatedText>
        </Anchor>
      </AnchorParagraph>

      <AnchorParagraph>
        <Anchor href="mailto:hi@devsgnr.xyz">
          <AnimatedText>hi@devsgnr.xyz</AnimatedText>
        </Anchor>
      </AnchorParagraph>
    </NavigationFlex>
  </Navigation>
);

export default NavigationBar;
