/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import Anchor from '../anchor';
import { AnchorParagraph, Paragraph } from '../typography/styled';
import Navigation, { NavigationFlex } from './styled';

const NavigationBar = () => (
  <Navigation>
    <NavigationFlex>
      <Paragraph>
        <Anchor href="/">
          <>Emmanuel Watila</>
        </Anchor>
      </Paragraph>

      <div className="flex items-center gap-1">
        <AnchorParagraph>
          <Anchor href="/about">About</Anchor>
        </AnchorParagraph>
        <Paragraph>,</Paragraph>
        <AnchorParagraph>
          <Anchor href="mailto:hi@devsgnr.xyz">Contact</Anchor>
        </AnchorParagraph>
      </div>
    </NavigationFlex>
  </Navigation>
);

export default NavigationBar;
