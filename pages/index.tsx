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
  AnimatedImageContainer,
  AnimatedText,
} from '../components/animated';
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
  return (
    <div>
      <FullHeightContainer className="mt-5 mb-24">
        <div>
          <AnimatedHeading target="first-heading">
            Creative Developer
          </AnimatedHeading>

          <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
            <AnimatedImageContainer target="me" index={1}>
              <Image
                src="/me.png"
                width="100%"
                height="35%"
                sizes="50vw"
                quality={100}
                objectFit="cover"
                alt="Emmanuel Watila"
                priority
              />
            </AnimatedImageContainer>
          </div>
        </div>
        <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 justify-between content-end pb-7">
          <div className="self-end">
            <AnimatedDiv target="bi-line" index={1}>
              <Paragraph>
                A developer, designer, writer and reader — focusing on front-end
                & creative development. Helping individuals scale their digital
                presense through user centric experiences
              </Paragraph>
            </AnimatedDiv>
          </div>
          <div className="justify-self-end self-end xl:mt-0 lg:mt-0 md:mt-5 sm:mt-5">
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
        <div className="grid xl:grid-cols-7 lg:grid-cols-7 md:grid-cols-2 sm:grid-cols-1 justify-between align-start gap-32">
          <AnimatedDiv
            target="about"
            index={1}
            className="xl:col-span-4 lg:col-span-4 md:col-span-full sm:col-span-full"
          >
            <Heading className="big">{homedata.title}</Heading>
          </AnimatedDiv>

          <div className="xl:col-span-3 lg:col-span-3 md:col-span-full sm:col-span-full">
            <AnimatedDiv target="about" index={2} className="mb-16">
              <Paragraph className="xl:indent-32 lg:indent-32 md:indent-16 sm:indent-0">
                {ReactHtmlParser(homedata.about.html)}
              </Paragraph>
            </AnimatedDiv>

            <AnimatedDiv target="about" index={3} className="mb-16">
              <Paragraph>{ReactHtmlParser(homedata.timeline.html)}</Paragraph>
            </AnimatedDiv>
          </div>
        </div>
      </FullWidthContainer>

      <FullWidthContainer className="mt-10 mb-10">
        <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 justify-between content-end mb-64">
          <div className="col-span-2">
            <AnimatedDiv target="knack-heading" index={3}>
              <Heading className="big">
                A human with a knack for making things look pretty, who stumbled
                upon coding and design and never looked back —
              </Heading>
            </AnimatedDiv>
          </div>

          <div className="col-auto justify-self-end">
            <AnimatedDiv target="knack-bi-line" index={3}>
              <Paragraph className="opacity-50 xl:mt-0 lg:mt-0 md:mt-10 sm:mt-10">
                Where passion and creativity meet
              </Paragraph>
            </AnimatedDiv>
          </div>
        </div>

        <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 justify-between content-end pt-5">
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
                priority
              />
            </AnimatedImageContainer>
          </div>
        </div>
      </FullWidthContainer>

      <div className="mt-10">
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
