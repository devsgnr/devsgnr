import React, { useEffect, useRef } from 'react';
import { NextPage } from 'next';
import ReactHtmlParser from 'react-html-parser';
import { gsap, Power3 } from 'gsap';
import { FetchHomesService } from './api/home';
import Layout from '../components/layout';
import { Paragraph } from '../components/typography/styled';
import { IHomeProps } from '../types/home';
import { IHomeResponse } from '../types/response';
import AnimatedHeading from '../components/animated-heading';

export const getStaticProps = async () => {
  const res: IHomeResponse<IHomeProps[]> = await FetchHomesService();
  const data: IHomeProps | undefined = res.homes.find(
    (el: IHomeProps) => res.homes.indexOf(el) === 0,
  );

  return {
    props: {
      data,
    },
    revalidate: 3600,
  };
};

interface HomePageProps {
  data: IHomeProps;
}

const Home: NextPage<HomePageProps> = ({ data }: HomePageProps) => {
  const ContainerRef = useRef(null);
  const P1Ref = useRef(null);
  const P2Ref = useRef(null);

  useEffect(() => {
    gsap
      .timeline()
      .to(ContainerRef.current, {
        duration: 0,
        opacity: 1,
        ease: Power3.easeIn,
      })
      .to([P1Ref.current, P2Ref.current], {
        duration: 0.6,
        opacity: 1,
        ease: Power3.easeIn,
      });
  }, []);

  return (
    <Layout>
      <div ref={ContainerRef} style={{ opacity: 0 }}>
        <AnimatedHeading>
          Hello, I&apos;m Emmanuel. A full-stack creator, obsessed with crafting
          beautiful interfaces and experiences through the combination of
          writing, design, code, and no-code
        </AnimatedHeading>

        <Paragraph ref={P1Ref} css={{ opacity: 0 }}>
          {ReactHtmlParser(data.about.html)}
        </Paragraph>

        <Paragraph ref={P2Ref} css={{ opacity: 0 }}>
          {ReactHtmlParser(data.timeline.html)}
        </Paragraph>
      </div>
    </Layout>
  );
};

export default Home;
