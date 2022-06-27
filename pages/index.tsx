import React from 'react';
import { NextPage } from 'next';
import Layout from '../components/layout';
import { IProjectResponse } from '../types/response';
import { FetchProjectsService } from './api/project';
import { IProjectProps } from '../types/project';
import { Paragraph } from '../components/typography/styled';

export const getStaticProps = async () => {
  const res: IProjectResponse<IProjectProps[]> = await FetchProjectsService();
  const data: IProjectProps[] | undefined = res.caseStudies;

  return {
    props: {
      data,
    },
    revalidate: 3600,
  };
};

interface HomePageProps {
  data: IProjectProps[];
}

const Home: NextPage<HomePageProps> = () => {
  return (
    <Layout>
      <div style={{ padding: '0 50px' }}>
        <Paragraph>Case Studies - Coming soon</Paragraph>
        {/* {data.map((item: IProjectProps, index: number) => (
          <Anchor href={item.slug} key={index + item.title} target="_blank">
            <BlogItem>
              <Flex>
                <Paragraph>{item.title}</Paragraph>
                <Paragraph css={{ textAlign: 'right' }}>{item.date}</Paragraph>
              </Flex>
            </BlogItem>
          </Anchor>
        ))} */}
      </div>
    </Layout>
  );
};

export default Home;
