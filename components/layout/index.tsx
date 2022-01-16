import React, { ReactChild } from 'react';
import { ISeo } from '../../types/seo';
import Anchor from '../anchor';
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
          <Paragraph size="pRegular" weight="normal">
            Loading &bull;&bull;&bull;
          </Paragraph>
        </StyledSplashScreen>
      ) : isError ? (
        <StyledSplashScreen>
          <Paragraph size="pRegular" weight="normal">
            {':('} Oops, did someone plug the cord? If no, please try again or{' '}
            <a title="contant" href="mailto:ei.watila@gmail.com">
              contact
            </a>{' '}
            me.
          </Paragraph>
        </StyledSplashScreen>
      ) : (
        <>
          <SEO seo={seo} />
          <NavigationBar theme={'dark'} />
          <Container>
            {children}
            <Divider />
          </Container>
        </>
      )}
    </>
  );
};

export default Layout;
