import React from 'react';
import { NextPage } from 'next';
import ReactHtmlParser from 'react-html-parser';
import { CSS } from '@stitches/react';
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
import FooterLinks, { FooterLinkGrid } from '../components/footer-links/styled';
import { FullWidthContainer } from '../components/container/styled';
import { ContainerStyle } from '../styles/utils';

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

const Home: NextPage<HomePageProps> = ({ data }: HomePageProps) => {
  const FooterLinkStyle: CSS = { fontSize: TYPOGRAPHY.size.pSmall };

  return (
    <Layout>
      <FullWidthContainer css={ContainerStyle}>
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
      </FullWidthContainer>

      <FullWidthContainer css={{ marginTop: '50px' }}>
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
      </FullWidthContainer>

      <footer style={{ padding: '0 20px' }}>
        <FooterLinkGrid css={{ padding: '100px 0 25px 0' }}>
          <Anchor href="/mindscape">
            <FooterLinks>
              <Paragraph css={FooterLinkStyle}>MINDSCAPE</Paragraph>
            </FooterLinks>
          </Anchor>
          <Anchor href="https://instagram.com/devsgnr_" target="_blank">
            <FooterLinks>
              <Paragraph css={FooterLinkStyle}>INSTAGRAM</Paragraph>
            </FooterLinks>
          </Anchor>
          <Anchor href="https://twitter.com/devsgnr_" target="_blank">
            <FooterLinks>
              <Paragraph css={FooterLinkStyle}>TWITTER</Paragraph>
            </FooterLinks>
          </Anchor>
          <Anchor href="https://linkedin.com/in/eiwatila" target="_blank">
            <FooterLinks>
              <Paragraph css={FooterLinkStyle}>LINKEDIN</Paragraph>
            </FooterLinks>
          </Anchor>
          <Anchor
            href="https://www.getrevue.co/profile/devsgnr"
            target="_blank"
          >
            <FooterLinks>
              <Paragraph css={FooterLinkStyle}>NEWSLETTER</Paragraph>
            </FooterLinks>
          </Anchor>
        </FooterLinkGrid>
      </footer>
    </Layout>
  );
};

export default Home;
