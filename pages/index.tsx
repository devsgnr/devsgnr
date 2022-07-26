/* eslint-disable arrow-body-style */
import React from 'react';
import { NextPage } from 'next';
import ReactHtmlParser from 'react-html-parser';
import { IHomeResponse, IProjectResponse } from '../types/response';
import { FetchProjectsService } from './api/project';
import { IProjectProps } from '../types/project';
import { Heading, Paragraph } from '../components/typography/styled';
import AnimatedHeading, {
  AnimatedDiv,
  AnimatedHeadingWords,
  AnimatedImageContainer,
  AnimatedLink,
} from '../components/animated';
import {
  FullHeightContainer,
  FullWidthContainer,
} from '../components/container/styled';
import BlogItemComponent from '../components/blog-item';
import { FetchHomesService } from './api/home';
import { IHomeProps } from '../types/home';
import Anchor from '../components/anchor';

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
      <FullHeightContainer className="mt-3">
        <div className="flex flex-wrap justify-between items-center mb-8">
          <AnimatedHeadingWords className="big w-fit h-fit">
            Front-end Developer &amp; Designer
          </AnimatedHeadingWords>
          <Anchor href="#" className="h-fit">
            <AnimatedLink>SEE MORE</AnimatedLink>
          </Anchor>
        </div>

        <AnimatedImageContainer className="" target="me" index={1}>
          <img src="/me.png" alt="Emmanuel Watila" />
        </AnimatedImageContainer>
      </FullHeightContainer>

      <FullWidthContainer className="mt-16">
        <div className="grid xl:grid-cols-7 lg:grid-cols-7 md:grid-cols-2 sm:grid-cols-1 justify-between items-start relative">
          <AnimatedDiv
            target="about"
            index={2}
            className="xl:col-span-3 lg:col-span-2 md:col-span-4 sm:col-span-full"
          >
            <Heading className="opacity-50 sticky">{homedata.title}</Heading>
          </AnimatedDiv>

          <AnimatedDiv
            target="about"
            index={2}
            className="xl:col-start-4 xl:col-end-7 lg:col-start-4 lg:col-end-7 md:col-span-full sm:col-span-full mb-16"
          >
            <Heading className="indent-32 mb-16">
              Creating new perspectives - and adding values to individuals and
              teams by building visually appealing and performant websites.
            </Heading>

            <Paragraph className="leading-normal mb-16">
              {ReactHtmlParser(homedata.about.html)}
            </Paragraph>

            <Paragraph className="leading-normal mb-16">
              {ReactHtmlParser(homedata.timeline.html)}
            </Paragraph>
          </AnimatedDiv>
        </div>
      </FullWidthContainer>

      <FullWidthContainer className="mt-10 mb-38">
        <div className="grid xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-1 sm:grid-cols-1 justify-between content-end relative">
          <div className="col-span-3 z-50 mix-blend-difference">
            <AnimatedHeadingWords className="text-white big">
              A human with a knack for making things look pretty, who stumbled
              upon coding and design
            </AnimatedHeadingWords>
          </div>

          <div className="xl:col-start-4 lg:col-start-4 xl:col-end-6 lg:col-end-6 md:col-span-full sm:col-span-full justify-self-end text-right gap-5">
            <AnimatedDiv target="knack-bi-line" index={3}>
              <Paragraph className="opacity-50 xl:mt-0 lg:mt-0 md:mb-10 sm:mb-10">
                Where passion and creativity meet
              </Paragraph>
            </AnimatedDiv>
          </div>

          <div className="xl:col-start-3 lg:col-start-3 xl:col-end-6 lg:col-end-6 md:col-span-full sm:col-span-full justify-self-end w-full">
            <AnimatedImageContainer target="me_two" index={1}>
              <img src="/me_two.png" alt="Emmanuel Watila" />
            </AnimatedImageContainer>
          </div>
        </div>
      </FullWidthContainer>

      <div className="mt-32 mb-32">
        <FullWidthContainer className="grid xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-1 sm:grid-cols-1">
          <div className="xl:col-span-full lg:col-span-full md:col-span-full sm:col-span-full">
            <AnimatedDiv target="selected-works-by-line" index={3}>
              <Paragraph className="opacity-50 mb-1">
                Working with amazing individuals &amp; teams
              </Paragraph>
            </AnimatedDiv>
            <AnimatedHeading target="selected-works-heading">
              Selected works
            </AnimatedHeading>
          </div>
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
