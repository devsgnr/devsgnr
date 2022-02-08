import React from 'react';
import { Twitter } from 'react-feather';
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
          <Paragraph size="pSmall" weight="normal">
            <Anchor href="/" title="Home" />
          </Paragraph>
          <NavigationLinks>
            <Paragraph size="pSmall" weight="normal">
              <Anchor href="/mindscape" title="Mindscape" />
            </Paragraph>
            <Paragraph size="pSmall" weight="normal">
              <Anchor href="/writing" title="Writing" />
            </Paragraph>
            <Paragraph size="pSmall" weight="normal">
              <Anchor
                href="https://read.cv/devsgnr_"
                target="_blank"
                title="Resume"
              />
            </Paragraph>
            <Paragraph size="pSmall" weight="normal">
              <Anchor
                href="https://twitter.com/devsgnr_"
                target="_blank"
                rel="noreferrer"
              >
                <Twitter />
              </Anchor>
            </Paragraph>
          </NavigationLinks>
        </NavigationFlex>
      </Container>
    </Navigation>
  );
};

export default NavigationBar;
