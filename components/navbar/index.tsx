/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import Anchor from '../anchor';
import { AnchorParagraph } from '../typography/styled';
import Navigation, { NavigationFlex } from './styled';

const NavigationBar = () => (
  <Navigation>
    <NavigationFlex>
      <AnchorParagraph>
        <Anchor href="/">
          <>Emmanuel Watila</>
        </Anchor>
      </AnchorParagraph>

      <AnchorParagraph>
        <Anchor href="mailto:hi@devsgnr.xyz">
          <>hi@devsgnr.xyz</>
        </Anchor>
      </AnchorParagraph>
    </NavigationFlex>
  </Navigation>
);

export default NavigationBar;
