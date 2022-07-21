/* eslint-disable arrow-body-style */
import React from 'react';
import { NextPage } from 'next';
import { StyledSplashScreen } from '../components/layout/styled';
import AnimatedHeading, { AnimatedLink } from '../components/animated';
import Anchor from '../components/anchor';

const Comingsoon: NextPage = () => {
  return (
    <div>
      <StyledSplashScreen>
        <div>
          <AnimatedHeading>Coming Soon</AnimatedHeading>
          <Anchor href="mailto:hi@devsgnr.xyz">
            <AnimatedLink>hi@devsgnr.xyz</AnimatedLink>
          </Anchor>
        </div>
      </StyledSplashScreen>
    </div>
  );
};

export default Comingsoon;
