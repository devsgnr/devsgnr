import React from 'react';
import { NextPage } from 'next';
import ReactHtmlParser from 'react-html-parser';
import { IHomeResponse, IProjectResponse } from '../types/response';
import { FetchProjectsService } from './api/project';
import { IProjectProps } from '../types/project';
import { Heading, Paragraph } from '../components/typography/styled';
import Anchor from '../components/anchor';
import AnimatedHeading, { AnimatedText } from '../components/animated-heading';
import TYPOGRAPHY from '../styles/token/typography';
import FooterLinks, {
  FooterContainer,
  FooterLinkGrid,
} from '../components/footer-links/styled';
import {
  FullHeightContainer,
  FullWidthContainer,
} from '../components/container/styled';
import BlogItemComponent from '../components/blog-item';
import { Grid } from '../components/flex/styled';
import { FetchHomesService } from './api/home';
import { IHomeProps } from '../types/home';

export const getStaticProps = async () => {
  const projects: IProjectResponse<IProjectProps[]> =
    await FetchProjectsService();
  const data: IProjectProps[] | undefined = projects.caseStudies;

  const home: IHomeResponse<IHomeProps[]> = await FetchHomesService();
  const homedata: IHomeProps | undefined = home.homes.find(
    (el: IHomeProps) => el,
  );

  return {
    props: {
      data,
      homedata,
    },
    revalidate: 3600,
  };
};

interface HomePageProps {
  data: IProjectProps[];
  homedata: IHomeProps;
}

const Home: NextPage<HomePageProps> = ({ data, homedata }: HomePageProps) => {
  const FooterLinkStyle: React.CSSProperties = {
    fontSize: TYPOGRAPHY.size.pSmall,
    fontFamily: TYPOGRAPHY.family.paragraph,
  };

  return (
    <div>
      <FullHeightContainer>
        <div>
          <AnimatedHeading>A front-end developer —</AnimatedHeading>
          <AnimatedHeading target="second-heading">
            Designing &amp; building websites that kicks ass
          </AnimatedHeading>
          <div style={{ marginTop: '10px' }}>
            <AnimatedText>
              I&apos;m a full-stack developer with focus on front-end & creative
              development
            </AnimatedText>
          </div>
        </div>

        <Grid style={{ alignSelf: 'end' }}>
          <Paragraph css={{ fontSize: TYPOGRAPHY.size.pSmall }}>
            &copy;2022
          </Paragraph>
        </Grid>
      </FullHeightContainer>

      <FullWidthContainer>
        <Grid>
          <Heading>{homedata.title}</Heading>
          <Paragraph>{ReactHtmlParser(homedata.about.html)}</Paragraph>
          <Paragraph>{ReactHtmlParser(homedata.timeline.html)}</Paragraph>
        </Grid>
      </FullWidthContainer>

      <div style={{ marginTop: '150px' }}>
        <FullWidthContainer>
          <Heading className="big">Selected works</Heading>
        </FullWidthContainer>

        <div>
          {data.map((item: IProjectProps, index: number) => (
            <BlogItemComponent data={item} key={index} />
          ))}
        </div>
      </div>

      <FooterContainer>
        <FooterLinkGrid>
          <Anchor href="/mindscape">
            <FooterLinks>
              <div style={FooterLinkStyle}>MINDSCAPE</div>
            </FooterLinks>
          </Anchor>
          <Anchor href="https://instagram.com/devsgnr_" target="_blank">
            <FooterLinks>
              <div style={FooterLinkStyle}>INSTAGRAM</div>
            </FooterLinks>
          </Anchor>
          <Anchor href="https://twitter.com/devsgnr_" target="_blank">
            <FooterLinks>
              <div style={FooterLinkStyle}>TWITTER</div>
            </FooterLinks>
          </Anchor>
          <Anchor href="https://linkedin.com/in/eiwatila" target="_blank">
            <FooterLinks>
              <div style={FooterLinkStyle}>LINKEDIN</div>
            </FooterLinks>
          </Anchor>
          <Anchor
            href="https://www.getrevue.co/profile/devsgnr"
            target="_blank"
          >
            <FooterLinks>
              <div style={FooterLinkStyle}>NEWSLETTER</div>
            </FooterLinks>
          </Anchor>
        </FooterLinkGrid>
      </FooterContainer>
    </div>
  );
};

export default Home;
