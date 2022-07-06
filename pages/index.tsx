import React from 'react';
import { NextPage } from 'next';
import ReactHtmlParser from 'react-html-parser';
import Layout from '../components/layout';
import { IProjectResponse } from '../types/response';
import { FetchProjectsService } from './api/project';
import { IProjectProps } from '../types/project';
import { Paragraph } from '../components/typography/styled';
import BlogItem from '../components/blog-item/styled';
import { Grid } from '../components/flex/styled';
import Anchor from '../components/anchor';

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

const Home: NextPage<HomePageProps> = ({ data }) => {
  return (
    <Layout>
      <div style={{ padding: '50px' }}>
        <Paragraph>
          Front-end developer and visual designer - building some solutions and
          designing some things
        </Paragraph>
      </div>

      <div style={{ padding: '0 20px' }}>
        {data.map((item: IProjectProps, index: number) => (
          <Anchor href={item.slug} key={index + item.title} target="_blank">
            <BlogItem>
              <Grid>
                <div>
                  <Paragraph>{item.title}</Paragraph>
                  <Paragraph>
                    {ReactHtmlParser(item.mainContent.html)}
                  </Paragraph>
                </div>

                <Paragraph css={{ width: 'fit-content' }}>
                  {item.date}
                </Paragraph>
              </Grid>
            </BlogItem>
          </Anchor>
        ))}
      </div>
    </Layout>
  );
};

export default Home;
