/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import Anchor from '../anchor';
import { AnchorParagraph, Paragraph } from '../typography/styled';
import Navigation, { NavigationFlex } from './styled';

const NavigationBar = () => (
  <Navigation>
    <NavigationFlex>
      <AnchorParagraph>
        <Anchor href="/">E — W</Anchor>
      </AnchorParagraph>

      <div className="flex items-center gap-2">
        <AnchorParagraph>
          <Anchor href="/about">About</Anchor>
        </AnchorParagraph>
        <Paragraph css={{ pointerEvents: 'none' }}>—</Paragraph>
        <AnchorParagraph>
          <Anchor href="mailto:hi@devsgnr.xyz">Contact</Anchor>
        </AnchorParagraph>
      </div>
    </NavigationFlex>
  </Navigation>
);

export default NavigationBar;
