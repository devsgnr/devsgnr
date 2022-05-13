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
    return res;
  });

  return (
    <Layout isLoading={fetchHome.isFetching} isError={fetchHome.isError}>
      <>
        {fetchHome.isSuccess && (
          <>
            <Heading className="title">Greeting! &#128075;</Heading>

            <Paragraph>
              {ReactHtmlParser(fetchHome.data.homes[0].about.html)}
            </Paragraph>

            <Paragraph>
              {ReactHtmlParser(fetchHome.data.homes[0].timeline.html)}
            </Paragraph>
          </>
        )}
      </>
    </Layout>
  );
};

export default Home;
