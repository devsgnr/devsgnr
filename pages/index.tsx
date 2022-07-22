/* eslint-disable arrow-body-style */
import React from 'react';
import { NextPage } from 'next';
import ReactHtmlParser from 'react-html-parser';
import Image from 'next/image';
import { IHomeResponse, IProjectResponse } from '../types/response';
import { FetchProjectsService } from './api/project';
import { IProjectProps } from '../types/project';
import { Heading, Paragraph } from '../components/typography/styled';
import AnimatedHeading, {
  AnimatedDiv,
  AnimatedHeadingWords,
  AnimatedImageContainer,
  AnimatedLink,
  AnimatedText,
} from '../components/animated';
import {
  FullHeightContainer,
  FullWidthContainer,
} from '../components/container/styled';
import BlogItemComponent from '../components/blog-item';
import { FetchHomesService } from './api/home';
import { IHomeProps } from '../types/home';
import Anchor from '../components/anchor';
import TYPOGRAPHY from '../styles/token/typography';

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
  return (
    <div>
      <FullHeightContainer className="flex flex-col justify-between pt-12">
        <div className="grid xl:grid-cols-5 lg:grid-col-5 md:grid-cols-1 sm:grid-cols-1">
          <div className="col-start-1 col-end-4 big">
            <AnimatedHeading target="first-heading">
              Creative Developer
            </AnimatedHeading>
          </div>

          <div className="xl:col-start-4 lg:col-start-4 xl:col-end-6 lg:col-end-6 md:col-span-full sm:col-span-fulls">
            <AnimatedImageContainer target="me" index={1}>
              <Image
                src="/me.png"
                width="100%"
                height="45%"
                sizes="50vw"
                quality={100}
                objectFit="cover"
                alt="Emmanuel Watila"
                priority
              />
            </AnimatedImageContainer>
          </div>
        </div>

        <div className="w-full">
          <hr className="opacity-30" />
          <div className="grid xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-1 sm:grid-cols-1 mt-5">
            <div className="opacity-50 col-span-1">
              <AnimatedText>Welcome...</AnimatedText>
            </div>

            <AnimatedHeadingWords target="first-heading" className="col-span-3">
              Adding value to teams &amp; individuals — Building visual
              appealing &amp; performant websites
            </AnimatedHeadingWords>

            <Paragraph
              css={{ fontSize: TYPOGRAPHY.size.pSmall }}
              className="opacity-50 justify-self-end self-end w-fit"
            >
              Scroll down
            </Paragraph>
          </div>
        </div>
      </FullHeightContainer>

      <FullWidthContainer>
        <div className="grid xl:grid-cols-7 lg:grid-cols-7 md:grid-cols-2 sm:grid-cols-1 justify-between align-start gap-32">
          <AnimatedDiv
            target="about"
            index={1}
            className="xl:col-span-2 lg:col-span-2 md:col-span-4 sm:col-span-full"
          >
            <Paragraph className="opacity-50">{homedata.title}</Paragraph>
          </AnimatedDiv>

          <div className="xl:col-span-5 lg:col-span-5 md:col-span-3 sm:col-span-full">
            <AnimatedDiv target="about" index={2} className="mb-16">
              <Heading className="leading-normal">
                {ReactHtmlParser(homedata.about.html)}
              </Heading>
            </AnimatedDiv>

            <AnimatedDiv target="about" index={3} className="mb-16">
              <Heading className="leading-normal">
                {ReactHtmlParser(homedata.timeline.html)}
              </Heading>
            </AnimatedDiv>
          </div>
        </div>
      </FullWidthContainer>

      <FullWidthContainer className="mt-10 mb-32">
        <div className="grid xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-1 sm:grid-cols-1 justify-between content-end relative">
          <div className="col-span-3 z-50 mix-blend-difference">
            <AnimatedHeadingWords className="big">
              A human with a knack for making things look pretty, who stumbled
              upon coding and design and never looked back
            </AnimatedHeadingWords>
          </div>

          <div className="xl:col-start-4 lg:col-start-4 xl:col-end-6 lg:col-end-6 md:col-span-full sm:col-span-full justify-self-end text-right">
            <AnimatedDiv target="knack-bi-line" index={3}>
              <Paragraph className="opacity-50 xl:mt-0 lg:mt-0 md:mt-10 sm:mt-10">
                Where passion and creativity meet
              </Paragraph>
            </AnimatedDiv>
          </div>

          <div className="xl:col-start-3 lg:col-start-3 xl:col-end-6 lg:col-end-6 md:col-span-full sm:col-span-full justify-self-end w-full xl:absolute lg:absolute md:static sm:static top-32 right-0 z-0">
            <AnimatedImageContainer target="me_two" index={1}>
              <Image
                src="/me_two.png"
                width="100%"
                height="45%"
                sizes="50vw"
                quality={100}
                objectFit="cover"
                alt="Emmanuel Watila"
                priority
              />
            </AnimatedImageContainer>
          </div>
        </div>
      </FullWidthContainer>

      <div className="mt-32">
        <FullWidthContainer>
          <AnimatedDiv target="selected-works-by-line" index={3}>
            <Paragraph className="opacity-50 mb-1">
              Things I&apos;ve enjoyed working on
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
    </div>
  );
};

export default Home;
