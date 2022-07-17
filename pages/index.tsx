/* eslint-disable arrow-body-style */
import React from 'react';
import { NextPage } from 'next';
import ReactHtmlParser from 'react-html-parser';
import Image from 'next/image';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import { IHomeResponse, IProjectResponse } from '../types/response';
import { FetchProjectsService } from './api/project';
import { IProjectProps } from '../types/project';
import { Heading, Paragraph } from '../components/typography/styled';
import Anchor from '../components/anchor';
import AnimatedHeading, {
  AnimatedDiv,
  AnimatedImageContainer,
  AnimatedLink,
  AnimatedText,
} from '../components/animated';
import {
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
  useLocomotiveScroll();

  return (
    <div>
      <FullHeightContainer style={{ marginTop: '100px' }}>
        <div>
          <AnimatedHeading target="first-heading">
            Creative Developer —
          </AnimatedHeading>
          <AnimatedHeading target="second-heading">
            Designing &amp; building awesome digital experiences
          </AnimatedHeading>
          <div className="mt-7">
            <AnimatedText>
              I&apos;m a full-stack developer, focusing on front-end & creative
              development
            </AnimatedText>
          </div>
        </div>
        <div className="grid grid-cols-2 justify-between content-end pb-5">
          <div>
            <AnimatedImageContainer target="me" index={1}>
              <Image
                src="/me.png"
                width="100%"
                height="35%"
                sizes="50vw"
                quality={100}
                objectFit="cover"
                alt="Emmanuel Watila"
              />
            </AnimatedImageContainer>
          </div>

          <div className="justify-self-end self-end">
            <AnimatedText>{`${new Date().getFullYear()}`}</AnimatedText>
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

      <FullWidthContainer className="mt-10 mb-10">
        <Grid>
          <Heading className="big">
            A human with a knack for making things look pretty, who stumbled
            upon coding and design and never looked back —
          </Heading>
          <AnimatedDiv index={1}>
            <Paragraph>Where passion and creativity meet</Paragraph>
          </AnimatedDiv>
        </Grid>

        <div className="grid grid-cols-2 justify-between content-end pt-5 mt-10">
          <div className="justify-self-start self-start">
            <AnimatedText>{`${new Date().getFullYear()}`}</AnimatedText>
          </div>

          <div>
            <AnimatedImageContainer target="me" index={1}>
              <Image
                src="/me.png"
                width="100%"
                height="35%"
                sizes="50vw"
                quality={100}
                objectFit="cover"
                alt="Emmanuel Watila"
              />
            </AnimatedImageContainer>
          </div>
        </div>
      </FullWidthContainer>

      <div className="mt-10">
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
            <AnimatedLink>MINDSCAPE</AnimatedLink>
          </Anchor>
          <Anchor href="https://instagram.com/devsgnr_" target="_blank">
            <AnimatedLink>INSTAGRAM</AnimatedLink>
          </Anchor>
          <Anchor href="https://twitter.com/devsgnr_" target="_blank">
            <AnimatedLink>TWITTER</AnimatedLink>
          </Anchor>
          <Anchor href="https://linkedin.com/in/eiwatila" target="_blank">
            <AnimatedLink>LINKEDIN</AnimatedLink>
          </Anchor>
          <Anchor
            href="https://www.getrevue.co/profile/devsgnr"
            target="_blank"
          >
            <AnimatedLink>NEWSLETTER</AnimatedLink>
          </Anchor>
        </FooterLinkGrid>
      </FooterContainer>
    </div>
  );
};

export default Home;
