/* eslint-disable arrow-body-style */
import React from 'react';
import { NextPage } from 'next';
import ReactHtmlParser from 'react-html-parser';
import Image from 'next/image';
import { IServiceResponse } from '../types/response';
import { FetchServicesService } from './api/services';
import { IServiceProps } from '../types/services';
import { Paragraph } from '../components/typography/styled';
import AnimatedHeading, {
  AnimatedDiv,
  AnimatedHeadingWords,
  AnimatedImageContainer,
  AnimatedText,
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
      <FullHeightContainer className="flex flex-col justify-between pt-6">
        <div className="grid xl:grid-cols-5 lg:grid-col-5 md:grid-cols-1 sm:grid-cols-1 xl:h-full lg:h-full md:h-auto sm:h-auto">
          <div className="col-start-1 col-end-4 big grid grid-cols-1">
            <AnimatedHeadingWords className="big" target="first-heading">
              Emmanuel Watila —
            </AnimatedHeadingWords>
            <div className="self-end mb-5">
              <AnimatedDiv target="heading-by-line" index={2}>
                <AnimatedHeadingWords>Curious developer</AnimatedHeadingWords>
              </AnimatedDiv>
            </div>
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
              <AnimatedText>My Personal Side...</AnimatedText>
            </div>

            <AnimatedHeadingWords target="first-heading" className="col-span-3">
              Adding value to teams &amp; individuals — Building visual
              appealing &amp; performant digital interfaces.
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

      <FullWidthContainer className="mt-10 mb-24">
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

          <div className="xl:col-start-4 lg:col-start-4 xl:col-end-6 lg:col-end-6 md:col-span-full sm:col-span-full">
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
