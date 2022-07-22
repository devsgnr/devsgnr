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
      <FullHeightContainer className="mt-5 mb-24">
        <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 justify-end mt-3">
          <AnimatedHeadingWords target="about-heading" className="big">
            Helping you build the next best digital experience
          </AnimatedHeadingWords>
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
              priority
            />
          </AnimatedImageContainer>
        </div>
      </FullHeightContainer>

      <FullWidthContainer className="mt-10 mb-24">
        <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-1 sm:grid-col-1 gap-16 mt-10">
          <div className="col-span-2">
            <AnimatedDiv target="things-i-can-do-by-line" index={3}>
              <Paragraph className="opacity-50 mb-1">
                Hello, I&apos;m Emmanuel - nice to meet you
              </Paragraph>
            </AnimatedDiv>
          </div>
          <div className="col-span-2">
            <AnimatedDiv target="quirky-by-line" index={1}>
              <Heading className="xl:indent-36 lg:indent-36 md:indent-16 sm:indent-0">
                I&apos;m a very quirky human, based in Nigeria, collaborating
                with agencies and individuals around the world. I try to read as
                often as I can, I try to write when I have something to say, I
                watch Netflix and Prime Video a little too much, but most
                importantly I take my craft to heart and make sure I&apos;m not
                just delivering the fancy but also the value.
              </Heading>
            </AnimatedDiv>
          </div>
        </div>
      </FullWidthContainer>

      <FullWidthContainer>
        <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-1 sm:grid-col-1 gap-16 mt-10">
          <div className="col-span-2">
            <AnimatedDiv target="things-i-can-do-by-line" index={3}>
              <Paragraph className="opacity-50 mb-1">
                Things I can do for you
              </Paragraph>
            </AnimatedDiv>
            <AnimatedHeading target="things-i-can-do-heading">
              Stacks &amp; Skills
            </AnimatedHeading>
          </div>

          <div className="col-span-2">
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
                    <Heading className="p-0 mb-8">{item.title}</Heading>

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
