import React from 'react';
import { useQuery } from 'react-query';
import { FetchHomesService } from '../api/home';
import Layout from '../components/layout';
import { Heading, Paragraph } from '../components/typography/styled';
import { IHomeProps } from '../types/home';
import { IHomeResponse } from '../types/response';
import ReactHtmlParser from 'react-html-parser';

const Home = () => {
  const FetchHome = useQuery('FetchHome', async () => {
    const res: IHomeResponse<IHomeProps[]> = await FetchHomesService();
    return res;
  });

  return (
    <Layout isLoading={FetchHome.isFetching} isError={FetchHome.isError}>
      <>
        {FetchHome.isSuccess && (
          <>
            <Heading className="title" size="heading1" weight="bolder">
              {FetchHome.data.homes[0].title}
            </Heading>
            <Paragraph size="pRegular" weight="normal">
              {ReactHtmlParser(FetchHome.data.homes[0].about.html)}
            </Paragraph>
            <Paragraph size="pRegular" weight="normal">
              {ReactHtmlParser(FetchHome.data.homes[0].heading.html)}
            </Paragraph>
          </>
        )}
      </>
    </Layout>
  );
};

export default Home;
