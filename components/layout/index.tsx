import React, { ReactChild, useEffect, useRef } from 'react';
import { gsap, Power3 } from 'gsap';
import { ISeo } from '../../types/seo';
import NavigationBar from '../navbar';
import SEO from '../seo';

interface LayoutProps {
  children: ReactChild | ReactChild[];
  seo?: ISeo;
}

const Layout = ({ children, seo }: LayoutProps) => {
  const LayoutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(LayoutRef.current, {
      duration: 0,
      opacity: 1,
      ease: Power3.easeOut,
    });
  }, []);

  return (
    <>
      <div ref={LayoutRef}>
        <SEO seo={seo} />
        <NavigationBar />

        {children}
      </div>
    </>
  );
};

export default Layout;
