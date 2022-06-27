import React from 'react';
import { NextPage } from 'next';
import Anchor from '../components/anchor';
import { Heading, Paragraph } from '../components/typography/styled';
import { StyledSplashScreen } from '../components/layout/styled';
import Container from '../components/container/styled';
import TYPOGRAPHY from '../styles/token/typography';

const Index: NextPage = () => (
  <StyledSplashScreen>
    <Container>
      <Heading
        css={{
          fontSize: TYPOGRAPHY.size.headingfooting,
          fontFamily: TYPOGRAPHY.family.footing,
        }}
      >
        404
      </Heading>
      <Paragraph>
        Page does not exist! Go back{' '}
        <u>
          <Anchor href="/" title="home" />
        </u>
      </Paragraph>
    </Container>
  </StyledSplashScreen>
);

export default Index;
