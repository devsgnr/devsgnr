import React from 'react';
import * as Icon from 'react-feather';
import Anchor from '../anchor';
import Container from '../container/styled';
import { Paragraph } from '../typography/styled';
import Navigation, { NavigationFlex, NavigationLinks } from './styled';

interface NavigationBarProps {
  theme: string;
}

const NavigationBar = ({ theme }: NavigationBarProps) => {
  return (
    <Navigation theme={theme}>
      <Container>
        <NavigationFlex theme={theme}>
          <NavigationLinks>
            <Paragraph size="pSmall" weight="normal">
              <Anchor href="/" title="Home" />
            </Paragraph>
            <Paragraph size="pSmall" weight="normal">
              <Anchor href="/writing" title="Writing" />
            </Paragraph>
          </NavigationLinks>
        </NavigationFlex>
      </Container>
    </Navigation>
  );
};

export default NavigationBar;
