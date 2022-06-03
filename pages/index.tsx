import React, { useEffect, useRef } from 'react';
import { NextPage } from 'next';
import ReactHtmlParser from 'react-html-parser';
import { gsap, Power3 } from 'gsap';
import { FetchHomesService } from './api/home';
import Layout from '../components/layout';
import { Heading, Paragraph } from '../components/typography/styled';
import { IHomeProps } from '../types/home';
import { IHomeResponse } from '../types/response';

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
  const HeaderRef = useRef(null);
  const P1Ref = useRef(null);
  const P2Ref = useRef(null);

  useEffect(() => {
    gsap
      .timeline()
      .to(HeaderRef.current, {
        duration: 0.8,
        opacity: 1,
        ease: Power3.easeOut,
      })
      .to(P1Ref.current, {
        duration: 0.4,
        opacity: 1,
        ease: Power3.easeOut,
      })
      .to(P2Ref.current, {
        duration: 0.2,
        opacity: 1,
        ease: Power3.easeOut,
      });
  }, []);

  return (
    <Layout>
      <>
        <Heading className="title" ref={HeaderRef} css={{ opacity: 0 }}>
          Hello, I&apos;m Emmanuel. A full-stack creator, obsessed with crafting
          beautiful interfaces and experiences through the combination of
          writing, design, code, and no-code
        </Heading>

        <Paragraph ref={P1Ref} css={{ opacity: 0 }}>
          {ReactHtmlParser(data.about.html)}
        </Paragraph>

        <Paragraph ref={P2Ref} css={{ opacity: 0 }}>
          {ReactHtmlParser(data.timeline.html)}
        </Paragraph>
      </>
    </Layout>
  );
};

export default Home;
