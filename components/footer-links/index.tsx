import { useRouter } from 'next/router';
import React from 'react';
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
  const { pathname } = useRouter();
  const path = pathname.split('/')[1];
  return (
    <>
      <FullWidthContainer className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-between items-start mt-10">
        <div className="col-span-2">
          <AnimatedDiv
            target={`footer-by-line-${path === '' ? 'home' : path}`}
            index={3}
          >
            <Paragraph className="opacity-50 mb-1">
              Wanna work together? Let&apos;s talk
            </Paragraph>
          </AnimatedDiv>
          <div className="w-fit">
            <AnimatedHeading target="footer-heading">
              hi@devsgnr.xyz
            </AnimatedHeading>
          </div>
        </div>
        <div className="flex xl:justify-end lg:justify-end md:justify-start sm:justify-start xl:m-0 lg:m-0 md:mt-10 sm:mt-10">
          <Anchor href="mailto:hi@devsgnr.xyz">
            <AnimatedCirle target="click-me" index={1}>
              <Paragraph>Email me</Paragraph>
            </AnimatedCirle>
          </Anchor>
        </div>
      </FullWidthContainer>

      <FooterContainer>
        <FooterLinkGrid>
          <Anchor href="https://read.cv/devsgnr_" target="_blank">
            <AnimatedLink>RESUME</AnimatedLink>
          </Anchor>
          <Anchor href="https://instagram.com/devsgnr_" target="_blank">
            <AnimatedLink>INSTAGRAM</AnimatedLink>
          </Anchor>
          <Anchor href="https://twitter.com/devsgnr_" target="_blank">
            <AnimatedLink>TWITTER</AnimatedLink>
          </Anchor>
          <Anchor href="https://linkedin.com/in/eiwatila" target="_blank">
            <AnimatedLink>LINKEDIN</AnimatedLink>
          </Anchor>
          <Anchor
            href="https://www.getrevue.co/profile/devsgnr"
            target="_blank"
          >
            <AnimatedLink>NEWSLETTER</AnimatedLink>
          </Anchor>
        </FooterLinkGrid>
      </FooterContainer>
    </>
  );
};

export default Footer;
