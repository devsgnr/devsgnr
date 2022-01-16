import React from 'react';
import Anchor from '../components/anchor';
import { Paragraph } from '../components/typography/styled';
import { StyledSplashScreen } from '../components/layout/styled';

const Index = () => {
  return (
    <StyledSplashScreen>
      <Paragraph size="pRegular" weight="normal">
        {':('} Oops, 404! I didn&apos;t create the page you&apos;re looking for,
        Maybe go back{' '}
        <u>
          <Anchor href="/" title="home" />
        </u>
      </Paragraph>
    </StyledSplashScreen>
  );
};

export default Index;
