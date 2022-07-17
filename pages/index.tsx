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
      <FullHeightContainer className="mt-28">
        <div>
          <AnimatedHeading target="first-heading">
            Creative Developer
          </AnimatedHeading>

          <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 mt-3">
            <AnimatedImageContainer target="me" index={1}>
              <Image
                src="/me.png"
                width="100%"
                height="40%"
                sizes="50vw"
                quality={100}
                objectFit="cover"
                alt="Emmanuel Watila"
              />
            </AnimatedImageContainer>
          </div>
        </div>
        <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 justify-between content-end pb-5">
          <div className="self-end">
            <AnimatedDiv target="bi-line" index={1}>
              <Paragraph>
                A developer, designer, writer and reader — focusing on front-end
                & creative development. Helping individuals scale their digital
                presense through user centric experiences
              </Paragraph>
            </AnimatedDiv>
          </div>
          <div>
            <AnimatedDiv target="bi-line" index={2}>
              <Heading className="big text-right">Emmanuel</Heading>
            </AnimatedDiv>
            <AnimatedDiv target="bi-line" index={3}>
              <Heading className="big text-right">Watila</Heading>
            </AnimatedDiv>
          </div>
        </div>
      </FullHeightContainer>

      <FullWidthContainer>
        <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 justify-between align-start gap-16">
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
        </div>
      </FullWidthContainer>

      <FullWidthContainer className="mt-10 mb-10">
        <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 justify-between content-end mb-48">
          <div className="col-span-2">
            <AnimatedDiv target="knack-heading" index={2}>
              <Heading className="big">
                A human with a knack for making things look pretty, who stumbled
                upon coding and design and never looked back —
              </Heading>
            </AnimatedDiv>
          </div>

          <div className="col-auto justify-self-end">
            <AnimatedDiv target="knack-bi-line" index={2}>
              <Paragraph className="opacity-50">
                Where passion and creativity meet...
              </Paragraph>
            </AnimatedDiv>
          </div>
        </div>

        <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 justify-between content-end pt-5 mt-10">
          <div className="justify-self-start self-start opcaity-50">
            <AnimatedText>{`${new Date().getFullYear()}`}</AnimatedText>
          </div>

          <div>
            <AnimatedImageContainer target="me_two" index={1}>
              <Image
                src="/me_two.png"
                width="100%"
                height="45%"
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
          <AnimatedDiv target="selected-works-by-line" index={2}>
            <Paragraph className="opacity-50 mb-5">
              Things I&apos;ve enjoyed working on...
            </Paragraph>
          </AnimatedDiv>
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

      <div className="mt-10">
        <FullWidthContainer>
          <AnimatedDiv target="selected-works-by-line" index={2}>
            <Paragraph className="opacity-50 mb-5">
              Things I can do for you...?
            </Paragraph>
          </AnimatedDiv>
          <AnimatedHeading target="selected-works-heading">
            Let&apos;s see
          </AnimatedHeading>
        </FullWidthContainer>

        <div />
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
