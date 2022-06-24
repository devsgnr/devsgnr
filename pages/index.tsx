import React from 'react';
import { NextPage } from 'next';
import ReactHtmlParser from 'react-html-parser';
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
  return (
    <Layout>
      <div>
        <Heading className="title">
          Hello, I&apos;m Emmanuel. A full-stack creator, obsessed with crafting
          beautiful interfaces and experiences through the combination of
          writing, design, code, and no-code
        </Heading>

        <Paragraph>{ReactHtmlParser(data.about.html)}</Paragraph>

        <Paragraph>{ReactHtmlParser(data.timeline.html)}</Paragraph>
      </div>
    </Layout>
  );
};

export default Home;
