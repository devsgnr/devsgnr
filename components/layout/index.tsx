import React, { ReactChild } from 'react';
import { ISeo } from '../../types/seo';
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

      {children}
    </div>
  </>
);

export default Layout;
