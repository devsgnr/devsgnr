/* eslint-disable arrow-body-style */
import React from 'react';
import { NextPage } from 'next';
import { IProjectResponse } from '../types/response';
import { FetchProjectsService } from './api/project';
import { IProjectProps } from '../types/project';
import { Heading, Paragraph } from '../components/typography/styled';
import AnimatedHeading, {
  AnimatedDiv,
  AnimatedHeadingWords,
  AnimatedImageContainer,
} from '../components/animated';
import {
  FullHeightContainer,
  FullWidthContainer,
} from '../components/container/styled';
import BlogItemComponent from '../components/blog-item';
import ThreeDBoxScene from '../components/3dScenes/box';

export const getStaticProps = async () => {
  const projects: IProjectResponse<IProjectProps[]> =
    await FetchProjectsService();
  const data: IProjectProps[] | undefined = projects.caseStudies;

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
  return (
    <div>
      <FullHeightContainer className="flex justify-center items-center mt-3">
        <div className="w-full h-full absolute top-0 left-0 left-2">
          <ThreeDBoxScene />
        </div>
        <div className="mb-1 h-fit mix-blend-difference">
          <AnimatedHeadingWords className="w-fit h-fit big">
            Front-end Developer &amp; Designer
          </AnimatedHeadingWords>
        </div>
      </FullHeightContainer>

      <FullWidthContainer className="mt-16" id="about">
        <div className="grid xl:grid-cols-7 lg:grid-cols-7 md:grid-cols-2 sm:grid-cols-1 justify-between items-start relative">
          <AnimatedDiv className="xl:col-span-3 lg:col-span-2 md:col-span-4 sm:col-span-full">
            <Heading className="opacity-50 sticky">About</Heading>
          </AnimatedDiv>

          <AnimatedDiv className="xl:col-start-4 xl:col-end-7 lg:col-start-4 lg:col-end-7 md:col-span-full sm:col-span-full mb-16">
            <Heading className="indent-32 mb-16">
              Creating new perspectives - and adding values to individuals and
              teams by building visually appealing and performant websites.
            </Heading>

            <Paragraph className="leading-normal mb-16">
              A designer &amp; front-end developer with 4+ years of experience
              designing and developing consumer-facing digital interfaces. I
              harness my passion for design, code and the web to helping propel
              ideas forward to fruition
            </Paragraph>

            <Paragraph className="leading-normal mb-16">
              I&apos;m currently helping various teams and individuals with
              creative projects in the fields of interface design, creative
              development and content creation. These days you&apos;ll find me
              focusing on improving my creative development skills from
              uncoventional layouts, WebGL(Three.js) and various animation
              methods.
            </Paragraph>

            <Paragraph className="leading-normal mb-16">
              Over the years, I have worked with a couple of agencies shipping
              delighful front-end experiences that scale for; early-stage
              startups, SMEs, and academia, while that was fun, I wanted to work
              on new &amp; exciting creative websites projects to level up, so
              here we are.
            </Paragraph>
          </AnimatedDiv>
        </div>
      </FullWidthContainer>

      <FullWidthContainer className="mt-10 mb-38">
        <div className="grid xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-1 sm:grid-cols-1 justify-between content-end relative">
          <div className="col-span-4 z-50 mix-blend-difference">
            <AnimatedHeadingWords className="text-white big">
              A knack for making things look pretty using coding and design
            </AnimatedHeadingWords>
          </div>

          <div className="xl:col-span-1 lg:col-span-1 md:col-span-full sm:col-span-full justify-self-end text-right gap-5">
            <AnimatedDiv>
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
            <AnimatedDiv>
              <Paragraph className="opacity-50 mb-1">
                Working with amazing individuals &amp; teams
              </Paragraph>
            </AnimatedDiv>
            <AnimatedHeading target="selected-works-heading">
              Selected works
            </AnimatedHeading>
          </div>
        </FullWidthContainer>

        <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-1 sm:grid-cols-1">
          {data.map((item: IProjectProps, index: number) => (
            <BlogItemComponent className="col-span-2" data={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
