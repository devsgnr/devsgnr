import React from 'react';
import { NextPage } from 'next';
import { useQuery } from 'react-query';
import ReactHtmlParser from 'react-html-parser';
import { FetchHomesService } from './api/home';
import Layout from '../components/layout';
import { Heading, Paragraph } from '../components/typography/styled';
import { IHomeProps } from '../types/home';
import { IHomeResponse } from '../types/response';

const Home: NextPage = () => {
  const fetchHome = useQuery('FetchHome', async () => {
    const res: IHomeResponse<IHomeProps[]> = await FetchHomesService();
    return res.homes.find((el: IHomeProps) => res.homes.indexOf(el) === 0);
  });

  return (
    <Layout isLoading={fetchHome.isFetching} isError={fetchHome.isError}>
      <>
        {fetchHome.isSuccess && fetchHome.data && (
          <>
            <Heading className="title">
              Hello, I&apos;m Emmanuel. A full-stack creator, obsessed with
              crafting beautiful interfaces and experiences through the
              combination of writing, design, code, and no-code
            </Heading>

            <Paragraph>{ReactHtmlParser(fetchHome.data.about.html)}</Paragraph>

            <Paragraph>
              {ReactHtmlParser(fetchHome.data.timeline.html)}
            </Paragraph>
          </>
        )}
      </>
    </Layout>
  );
};

export default Home;
