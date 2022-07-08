import React, { ReactChild } from 'react';
import { ISeo } from '../../types/seo';
import { FullWidthContainer } from '../container/styled';
import NavigationBar from '../navbar';
import SEO from '../seo';

interface LayoutProps {
  children: ReactChild | ReactChild[];
  seo?: ISeo;
}

const Layout = ({ children, seo }: LayoutProps) => (
  <>
    <div>
      <SEO seo={seo} />
      <NavigationBar />

      <FullWidthContainer>{children}</FullWidthContainer>
    </div>
  </>
);

export default Layout;
