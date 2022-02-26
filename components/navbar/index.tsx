import React from 'react';
import * as Icon from 'react-feather';
import TYPOGRAPHY from '../../styles/token/typography';
import Anchor from '../anchor';
import Container from '../container/styled';
import { AnchorParagraph, Paragraph } from '../typography/styled';
import Navigation, { NavigationFlex, NavigationLinks } from './styled';

const NavigationBar = () => {
  return (
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
          </NavigationLinks>
        </NavigationFlex>
      </Container>
    </Navigation>
  );
};

export default NavigationBar;
