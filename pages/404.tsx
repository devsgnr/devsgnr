import React from 'react';
import Anchor from '../components/anchor';
import { Heading, Paragraph } from '../components/typography/styled';
import { StyledSplashScreen } from '../components/layout/styled';
import Container from '../components/container/styled';

const Index = () => {
  return (
    <StyledSplashScreen>
      <Container>
        <Heading size="heading1" weight="bolder">
          Ahhhh! 404!!!
        </Heading>
        <Paragraph size="pRegular" weight="normal">
          I didn&apos;t create the page you&apos;re looking for, let&apos;s get
          you back{' '}
          <u>
            <Anchor href="/" title="home" />
          </u>
        </Paragraph>
      </Container>
    </StyledSplashScreen>
  );
};

export default Index;
