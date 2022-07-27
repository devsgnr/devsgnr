/* eslint-disable arrow-body-style */
import React from 'react';
import { PenTool } from 'react-feather';
import THEME from '../../styles/token/colors';
import TYPOGRAPHY from '../../styles/token/typography';
import Anchor from '../anchor';
import AnimatedHeading, {
  AnimatedCirle,
  AnimatedDiv,
  AnimatedLink,
} from '../animated';
import { FullWidthContainer } from '../container/styled';
import { Paragraph } from '../typography/styled';
import { FooterContainer, FooterLinkGrid } from './styled';

const Footer = () => {
  return (
    <>
      <FullWidthContainer className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-between items-start mt-10">
        <div className="col-span-2">
          <AnimatedDiv>
            <Paragraph className="opacity-50 mb-3">
              Wanna work together?
            </Paragraph>
          </AnimatedDiv>
          <div className="w-fit">
            <AnimatedHeading target="footer-heading">
              Let&apos;s start that project!
            </AnimatedHeading>
          </div>
        </div>
        <div className="flex xl:justify-end lg:justify-end md:justify-start sm:justify-start xl:m-0 lg:m-0 md:mt-10 sm:mt-10">
          <Anchor href="mailto:hi@devsgnr.xyz">
            <AnimatedCirle target="click-me" index={1}>
              <Paragraph
                className="text-center"
                css={{
                  color: THEME.light.background,
                  fontSize: TYPOGRAPHY.size.pSmall,
                }}
              >
                <PenTool />
              </Paragraph>
            </AnimatedCirle>
          </Anchor>
        </div>
      </FullWidthContainer>

      <FooterContainer>
        <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 justify-between items-end">
          <div className="col-span-2">
            <Paragraph
              className="opacity-50"
              css={{ fontSize: TYPOGRAPHY.size.pSmall }}
            >
              Info &amp; Socials
            </Paragraph>
            <FooterLinkGrid>
              <Anchor href="https://read.cv/devsgnr_" target="_blank">
                <AnimatedLink identifier="RESUME">RESUME</AnimatedLink>
              </Anchor>
              <Anchor href="https://instagram.com/devsgnr_" target="_blank">
                <AnimatedLink identifier="INSTAGRAM">INSTAGRAM</AnimatedLink>
              </Anchor>
              <Anchor href="https://twitter.com/devsgnr_" target="_blank">
                <AnimatedLink identifier="TWITTER">TWITTER</AnimatedLink>
              </Anchor>
              <Anchor href="https://linkedin.com/in/eiwatila" target="_blank">
                <AnimatedLink identifier="LINKEDIN">LINKEDIN</AnimatedLink>
              </Anchor>
              <Anchor
                href="https://www.getrevue.co/profile/devsgnr"
                target="_blank"
              >
                <AnimatedLink identifier="NEWSLETTER">NEWSLETTER</AnimatedLink>
              </Anchor>
            </FooterLinkGrid>
          </div>

          <div className="xl:m-0 lg:m-0 md:mt-10 sm:mt-10">
            <Paragraph
              className="opacity-50"
              css={{ fontSize: TYPOGRAPHY.size.pSmall }}
            >
              Design &amp; Development by
            </Paragraph>
            <Paragraph className="mb-0">Emmanuel Watila</Paragraph>
          </div>
        </div>
      </FooterContainer>
    </>
  );
};

export default Footer;
