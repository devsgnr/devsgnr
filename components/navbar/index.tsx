/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { NavigationContainerStyle } from '../../styles/utils';
import Anchor from '../anchor';
import { AnchorParagraph } from '../typography/styled';
import Navigation, { NavigationFlex } from './styled';

const NavigationBar = () => (
  <Navigation css={NavigationContainerStyle}>
    <NavigationFlex>
      <AnchorParagraph>
        <Anchor
          href="/"
          title="Emmanuel Watila"
          style={{ mixBlendMode: 'difference' }}
        />
      </AnchorParagraph>
    </NavigationFlex>
  </Navigation>
);

export default NavigationBar;
