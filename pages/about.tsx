/* eslint-disable arrow-body-style */
import React from 'react';
import { NextPage } from 'next';
import ReactHtmlParser from 'react-html-parser';
import { IServiceResponse } from '../types/response';
import { FetchServicesService } from './api/services';
import { IServiceProps } from '../types/services';
import { Paragraph, Heading } from '../components/typography/styled';
import AnimatedHeading, {
  AnimatedDiv,
  AnimatedHeadingWords,
  AnimatedImageContainer,
} from '../components/animated';
import {
  FullHeightContainer,
  FullWidthContainer,
} from '../components/container/styled';
import TYPOGRAPHY from '../styles/token/typography';

export const getStaticProps = async () => {
  const services: IServiceResponse<IServiceProps[]> =
    await FetchServicesService();
  const data: IServiceProps[] | undefined = services.services;

  return {
    props: {
      data,
    },
    revalidate: 3600,
  };
};

interface HomePageProps {
  data: IServiceProps[];
}

const Home: NextPage<HomePageProps> = ({ data }: HomePageProps) => {
  return (
    <div>
      <FullHeightContainer className="mt-3">
        <AnimatedHeadingWords className="big mb-8" target="first-heading">
          Creative a new perspective
        </AnimatedHeadingWords>

        <AnimatedImageContainer target="me_three" index={1}>
          <img src="https://i.imgur.com/P2Fptsu.gif" alt="Emmanuel Watila" />
        </AnimatedImageContainer>
      </FullHeightContainer>

      <FullWidthContainer className="mb-8">
        <div className="grid xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-1 sm:grid-col-1 gap-16 mt-10">
          <div className="col-span-2">
            <AnimatedDiv target="things-i-can-do-by-line" index={3}>
              <Paragraph className="opacity-50 mb-1">
                Hello, I&apos;m Emmanuel - nice to meet you
              </Paragraph>
            </AnimatedDiv>
          </div>
          <div className="col-span-2">
            <AnimatedDiv target="quirky-by-line" index={1}>
              <Heading className="indent-32 mb-16">
                Hey! I&apos;m Emmanuel, a twenty-two year old, front-end
                creative devloper building cool websites. Currently based in
                Nigeria - working remotely.
              </Heading>
              <Heading className="mb-16">
                Curious developer, and a more curious human. I&apos;m
                extraordinary - I take your project from idea to cool websites.
              </Heading>
              <Paragraph className="xl:indent-36 lg:indent-36 md:indent-16 sm:indent-0">
                I&apos;m a very quirky human, based in Nigeria, collaborating
                with agencies and individuals around the world. I try to read as
                often as I can, I try to write when I have something to say, I
                watch Netflix and Prime Video a little too much, but most
                importantly I take my craft to heart and make sure I&apos;m not
                just delivering the fancy but also the value.
              </Paragraph>
            </AnimatedDiv>
          </div>
        </div>
      </FullWidthContainer>

      <FullWidthContainer>
        <div className="grid xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-1 sm:grid-col-1 gap-16 mt-10 h-full">
          <div className="col-start-1 col-end-3">
            <AnimatedDiv target="things-i-can-do-by-line" index={3}>
              <Paragraph className="opacity-50 mb-1">
                Things I can do for you
              </Paragraph>
            </AnimatedDiv>
            <AnimatedDiv target="stacks-by-line" index={3}>
              <AnimatedHeading target="things-i-can-do-heading">
                Stacks &amp; Skills
              </AnimatedHeading>
            </AnimatedDiv>
          </div>

          <div className="xl:col-start-4 lg:col-start-4 xl:col-end-6 lg:col-end-6 md:col-span-full sm:col-span-full flex flex-wrap">
            {data.map((item: IServiceProps, index: number) => (
              <AnimatedDiv target="services" index={index + 1} key={index}>
                <div className="flex items-start gap-2 mb-16">
                  <Paragraph
                    css={{ fontSize: TYPOGRAPHY.size.pSmall }}
                    className="w-fit opacity-50 m-0"
                  >
                    {`${index + 1}.`}
                  </Paragraph>
                  <div>
                    <Paragraph className="p-0 mb-8">{item.title}</Paragraph>

                    <Paragraph className="mt-5 leading-relaxed">
                      {ReactHtmlParser(item.description.html)}
                    </Paragraph>
                  </div>
                </div>
              </AnimatedDiv>
            ))}
          </div>
        </div>
      </FullWidthContainer>
    </div>
  );
};

export default Home;
