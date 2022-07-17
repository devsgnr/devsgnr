import React, { ReactChild, useEffect, useRef } from 'react';
import { gsap, Power3 } from 'gsap';
import { ISeo } from '../../types/seo';
import NavigationBar from '../navbar';
import SEO from '../seo';
import StyledLayout from './styled';

interface LayoutProps {
  children: ReactChild | ReactChild[];
  seo?: ISeo;
}

const Layout = ({ children, seo }: LayoutProps) => {
  const LayoutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(LayoutRef.current, {
      duration: 1,
      opacity: 1,
      ease: Power3.easeOut,
    });
  }, []);

  return (
    <StyledLayout ref={LayoutRef} id="main">
      <SEO seo={seo} />
      <NavigationBar />

      <div>{children}</div>
    </StyledLayout>
  );
};

export default Layout;
