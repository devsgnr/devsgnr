/* eslint-disable arrow-body-style */
import React from 'react';
import { NextPage } from 'next';
import ReactHtmlParser from 'react-html-parser';
import Image from 'next/image';
import { IServiceResponse } from '../types/response';
import { FetchServicesService } from './api/services';
import { IServiceProps } from '../types/services';
import { Heading, Paragraph } from '../components/typography/styled';
import AnimatedHeading, {
  AnimatedDiv,
  AnimatedImageContainer,
} from '../components/animated';
import {
  FullHeightContainer,
  FullWidthContainer,
} from '../components/container/styled';

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
      <FullHeightContainer className="mt-5 mb-24">
        <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 justify-end mt-3">
          <AnimatedDiv target="intro_line" index={2}>
            <Heading className="big">
              Helping you build the next best digital experience
            </Heading>
          </AnimatedDiv>
        </div>

        <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 self-end content-end mb-5 gap-12">
          <AnimatedDiv target="hero-by-line" index={3}>
            <Paragraph className="opacity-50 xl:w-3/4 lg:w-3/4 md:w-full sm:w-full">
              Curious creative developer — Collaborating with individuals and
              agencies on world-class digital experiences and strategies.
            </Paragraph>
          </AnimatedDiv>

          <AnimatedImageContainer target="desk" index={1}>
            <Image
              src="/desk.png"
              width="100%"
              height="45%"
              sizes="50vw"
              quality={100}
              objectFit="cover"
              alt="Emmanuel Watila"
            />
          </AnimatedImageContainer>
        </div>
      </FullHeightContainer>

      <FullWidthContainer className="mt-10">
        <AnimatedDiv target="things-i-can-do-by-line" index={3}>
          <Paragraph className="opacity-50 mb-1">
            Things I can do for you
          </Paragraph>
        </AnimatedDiv>
        <AnimatedHeading target="things-i-can-do-heading">
          Stacks &amp; Skills
        </AnimatedHeading>
      </FullWidthContainer>

      <FullWidthContainer>
        <hr className="opacity-50" />
        <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 sm:grid-col-1 gap-16 mt-10">
          <div className="col-span-2">
            <AnimatedDiv target="services-heading" index={3}>
              <Heading>Skills</Heading>
            </AnimatedDiv>
          </div>

          <div>
            {data.map((item: IServiceProps, index: number) => (
              <AnimatedDiv target="services" index={3} key={index}>
                <div className="flex items-start gap-5 mb-16">
                  <Paragraph className="w-fit opacity-50 m-0">
                    {`${index + 1}.`}
                  </Paragraph>
                  <div>
                    <Heading className="p-0 mb-8">{item.title}</Heading>
                    <hr className="opacity-20" />
                    <Paragraph className="mt-5">
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
