import React from 'react';
import { NextPage } from 'next';
import Anchor from '../components/anchor';
import { Heading, Paragraph } from '../components/typography/styled';
import { StyledSplashScreen } from '../components/layout/styled';
import Container from '../components/container/styled';

const Index: NextPage = () => (
  <StyledSplashScreen>
    <Container>
      <Heading>Ahhhh! 404!!!</Heading>
      <Paragraph>
        I didn&apos;t create the page you&apos;re looking for, let&apos;s get
        you back
        <> </>
        <u>
          <Anchor href="/" title="home" />
        </u>
      </Paragraph>
    </Container>
  </StyledSplashScreen>
);

export default Index;
