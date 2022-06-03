import React, { ReactChild } from 'react';
import { ISeo } from '../../types/seo';
import Container from '../container/styled';
import Divider from '../divider/styled';
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
      <Container>
        {children}
        <Divider />
      </Container>
    </div>
  </>
);

export default Layout;
