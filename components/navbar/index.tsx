import React from 'react';
import TYPOGRAPHY from '../../styles/token/typography';
import Anchor from '../anchor';
import Container from '../container/styled';
import { AnchorParagraph } from '../typography/styled';
import Navigation, { NavigationFlex, NavigationLinks } from './styled';

const NavigationBar = () => (
  <Navigation>
    <Container>
      <NavigationFlex>
        <NavigationLinks>
          <AnchorParagraph css={{ fontSize: TYPOGRAPHY.size.pSmall }}>
            <Anchor href="/" title="Home" />
          </AnchorParagraph>
          <AnchorParagraph css={{ fontSize: TYPOGRAPHY.size.pSmall }}>
            <Anchor href="/writing" title="Writing" />
          </AnchorParagraph>
          <AnchorParagraph css={{ fontSize: TYPOGRAPHY.size.pSmall }}>
            <Anchor href="/mindscape" title="Mindscape" />
          </AnchorParagraph>
        </NavigationLinks>
      </NavigationFlex>
    </Container>
  </Navigation>
);

export default NavigationBar;
