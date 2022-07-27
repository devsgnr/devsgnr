/* eslint-disable arrow-body-style */
import React from 'react';
import { NextPage } from 'next';
import ReactHtmlParser from 'react-html-parser';
import { IServiceResponse } from '../types/response';
import { FetchServicesService } from './api/services';
import { IServiceProps } from '../types/services';
import { Paragraph, Heading } from '../components/typography/styled';
import {
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

interface AboutPageProps {
  data: IServiceProps[];
}

const About: NextPage<AboutPageProps> = ({ data }: AboutPageProps) => {
  return (
    <div>
      <FullHeightContainer className="mt-3 mb-8">
        <AnimatedHeadingWords className="mb-8 h-fit" target="about-heading">
          Creating a new perspective
        </AnimatedHeadingWords>

        <AnimatedImageContainer
          className="xl:self-start lg:self-start md:self-end sm:self-end"
          target="me_three"
          index={1}
        >
          <img src="https://i.imgur.com/P2Fptsu.gif" alt="Emmanuel Watila" />
        </AnimatedImageContainer>
      </FullHeightContainer>

      <FullWidthContainer className="mt-8 mb-8">
        <div className="grid xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-1 sm:grid-col-1 gap-16 mt-10">
          <div className="col-span-2">
            <AnimatedDiv target="things-i-can-do-by-line" index={3}>
              <Paragraph className="opacity-50 mb-1">
                Hello - nice to meet you
              </Paragraph>
            </AnimatedDiv>
          </div>

          <Heading className="col-span-3 leading-normal mb-8">
            Hey! I&apos;m Emmanuel, a twenty-two years old, creative web
            developer and looming creative director building cool and performant
            websites. Currently based in Nigeria - and working remotely.
          </Heading>
          <Heading className="col-span-3 leading-normal mb-8">
            More developer than human. I&apos;m extraordinary and love working
            with extraordinary brands, individuals and teams, to produce
            interactive web experiences that will delight thier audience.
          </Heading>
          <Paragraph className="col-span-2">
            Quirky, human, and creative genius who reads and would love to read
            more mythology, who writes when he has something to write, and who
            watches Netflix and Prime Video a little too much, but most
            importantly who take his craft to heart and focus on delivering the
            best web experience out there.
          </Paragraph>
        </div>
      </FullWidthContainer>

      <FullWidthContainer>
        <div className="grid xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-1 sm:grid-col-1 xl:gap-16 lg:gap-16 md:gap-8 sm:gap-2 mt-10 h-full">
          <div className="col-start-1 col-end-3">
            <AnimatedDiv target="things-i-can-do-by-line" index={3}>
              <Paragraph className="opacity-50 mb-1">
                Things I can do for you
              </Paragraph>
            </AnimatedDiv>
            <AnimatedDiv target="stacks-by-line" index={3}>
              <Heading>Stacks &amp; Skills</Heading>
            </AnimatedDiv>
          </div>

          <>
            {data.map((item: IServiceProps, index: number) => (
              <AnimatedDiv
                className="col-span-2 flex flex-wrap"
                target="services"
                index={index + 1}
                key={index}
              >
                <div className="flex items-start gap-2 mb-16">
                  <Paragraph
                    css={{ fontSize: TYPOGRAPHY.size.pSmall }}
                    className="w-fit opacity-50 m-0"
                  >
                    {`${index + 1}.`}
                  </Paragraph>
                  <div>
                    <Heading className="p-0 mb-1">{item.title}</Heading>

                    <Paragraph className="mt-5 leading-relaxed">
                      {ReactHtmlParser(item.description.html)}
                    </Paragraph>
                  </div>
                </div>
              </AnimatedDiv>
            ))}
          </>
        </div>
      </FullWidthContainer>
    </div>
  );
};

export default About;
