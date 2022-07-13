import React, { ReactChild, useEffect, useRef } from 'react';
import { gsap, Power3 } from 'gsap';
import { ISeo } from '../../types/seo';
import NavigationBar from '../navbar';
import SEO from '../seo';
import { Paragraph } from '../typography/styled';
import { StyledSplashScreen } from './styled';

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
    <div ref={LayoutRef}>
      <SEO seo={seo} />
      <NavigationBar />

      <div>{children}</div>
    </div>
  );
};

const LoadingScreen = () => (
  <StyledSplashScreen>
    <Paragraph>Loading...</Paragraph>
  </StyledSplashScreen>
);

export default Layout;
export { LoadingScreen };
