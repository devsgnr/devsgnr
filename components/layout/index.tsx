import React, { ReactChild } from 'react';
import { ISeo } from '../../types/seo';
import Container from '../container/styled';
import Divider from '../divider/styled';
import NavigationBar from '../navbar';
import SEO from '../seo';
import { Paragraph } from '../typography/styled';
import { StyledSplashScreen } from './styled';

interface LayoutProps {
  children: ReactChild | ReactChild[];
  seo?: ISeo;
  isLoading: boolean;
  isError: boolean;
}

const Layout = ({ isLoading, isError, children, seo }: LayoutProps) => {
  if (isLoading) {
    return (
      <StyledSplashScreen>
        <Container>
          <Paragraph>Loading &bull;&bull;&bull;</Paragraph>
        </Container>
      </StyledSplashScreen>
    );
  }

  if (!isLoading) {
    return (
      <div>
        <SEO seo={seo} />
        <NavigationBar />
        <Container>
          {children}
          <Divider />
        </Container>
      </div>
    );
  }

  if (isError) {
    return (
      <StyledSplashScreen>
        <Container>
          <Paragraph>Oh! No!!!</Paragraph>
          <Paragraph>
            :( Oops, did someone unplug the cord? maybe you&apos;re looking for
            something that doesn&apos;t exist.
            <a title="contant" href="mailto:ei.watila@gmail.com">
              Contact
            </a>
            me, if you think it&apos;s my error.
          </Paragraph>
        </Container>
      </StyledSplashScreen>
    );
  }

  return <></>;
};

export default Layout;
