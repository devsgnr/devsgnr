import React from 'react';
import { NextPage } from 'next';
import ReactHtmlParser from 'react-html-parser';
import { IHomeResponse, IProjectResponse } from '../types/response';
import { FetchProjectsService } from './api/project';
import { IProjectProps } from '../types/project';
import { Heading, Paragraph } from '../components/typography/styled';
import Anchor from '../components/anchor';
import AnimatedHeading, {
  AnimatedDiv,
  AnimatedText,
} from '../components/animated';
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
        <div style={{ marginTop: '100px' }}>
          <AnimatedHeading target="first-heading">
            A front-end developer —
          </AnimatedHeading>
          <AnimatedHeading target="second-heading">
            Designing &amp; building websites that kicks ass
          </AnimatedHeading>
          <div style={{ marginTop: '10px' }}>
            <AnimatedText>
              I&apos;m a full-stack developer, focusing on front-end & creative
              development
            </AnimatedText>
          </div>
        </div>
      </FullHeightContainer>

      <FullWidthContainer>
        <Grid>
          <div>
            <AnimatedDiv target="about" index={1}>
              <Heading>{homedata.title}</Heading>
            </AnimatedDiv>
          </div>

          <div>
            <AnimatedDiv target="about" index={2}>
              <Paragraph>{ReactHtmlParser(homedata.about.html)}</Paragraph>
            </AnimatedDiv>
          </div>

          <div>
            <AnimatedDiv target="about" index={3}>
              <Paragraph>{ReactHtmlParser(homedata.timeline.html)}</Paragraph>
            </AnimatedDiv>
          </div>
        </Grid>
      </FullWidthContainer>

      <FullWidthContainer css={{ marginBottom: '100px', marginTop: '100px' }}>
        <Grid>
          <Heading className="big">
            A human with a knack for making things look pretty, who stumbled
            upon coding and design and never looked back —
          </Heading>
          <AnimatedDiv index={1}>
            <Paragraph css={{ fontSize: TYPOGRAPHY.size.pSmall }}>
              Where passion and creativity meet
            </Paragraph>
          </AnimatedDiv>
        </Grid>
      </FullWidthContainer>

      <div style={{ marginTop: '150px' }}>
        <FullWidthContainer>
          <AnimatedHeading target="selected-works-heading">
            Selected works
          </AnimatedHeading>
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
