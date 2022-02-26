import React, { ReactChild } from 'react';
import { ISeo } from '../../types/seo';
import Container from '../container/styled';
import Divider from '../divider/styled';
import NavigationBar from '../navbar';
import SEO from '../seo';
import { Heading, Paragraph } from '../typography/styled';
import { StyledSplashScreen } from './styled';

interface LayoutProps {
  children: ReactChild | ReactChild[];
  seo?: ISeo;
  isLoading: boolean;
  isError: boolean;
}

const Layout = ({ isLoading, isError, children, seo }: LayoutProps) => {
  return (
    <>
      {isLoading ? (
        <StyledSplashScreen>
          <Container>
            <Paragraph size="pRegular" weight="normal">
              Loading &bull;&bull;&bull;
            </Paragraph>
          </Container>
        </StyledSplashScreen>
      ) : isError ? (
        <StyledSplashScreen>
          <Container>
            <Heading size="heading1" weight="bolder">
              Oh! No!!!
            </Heading>
            <Paragraph size="pRegular" weight="normal">
              {':('} Oops, did someone unplug the cord? maybe you&apos;re
              looking for something that doesn&apos;t exist.{' '}
              <a title="contant" href="mailto:ei.watila@gmail.com">
                Contact
              </a>{' '}
              me, if you think it&apos;s my error.
            </Paragraph>
          </Container>
        </StyledSplashScreen>
      ) : (
        <div>
          <SEO seo={seo} />
          <NavigationBar />
          <Container>
            {children}
            <Divider />
          </Container>
        </div>
      )}
    </>
  );
};

export default Layout;
