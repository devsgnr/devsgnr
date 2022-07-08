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
import AnimatedHeading from '../components/animated-heading';
import TYPOGRAPHY from '../styles/token/typography';

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
        <AnimatedHeading>
          A front-end developer and designer — designing &amp; building apps and
          websites that kicks ass
        </AnimatedHeading>

        <div>
          <Paragraph>
            I&apos;m a full-stack developer with focus on front-end development
            — primarily working with React, Next.js, and Typescript to build
            solutions that scale.
          </Paragraph>
        </div>
      </div>

      <div>
        {data.map((item: IProjectProps, index: number) => (
          <Anchor href={item.slug} key={index + item.title} target="_blank">
            <BlogItem>
              <Grid>
                <div>
                  <Paragraph>{item.title}</Paragraph>
                  <Paragraph css={{ fontSize: TYPOGRAPHY.size.pSmall }}>
                    {ReactHtmlParser(item.mainContent.html)}
                  </Paragraph>
                </div>

                <Paragraph>{item.date}</Paragraph>
              </Grid>
            </BlogItem>
          </Anchor>
        ))}
      </div>
    </Layout>
  );
};

export default Home;
