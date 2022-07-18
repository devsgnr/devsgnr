import React from 'react';
import Anchor from '../anchor';
import { AnimatedLink } from '../animated';
import { FooterContainer, FooterLinkGrid } from './styled';

const Footer = () => (
  <FooterContainer>
    <FooterLinkGrid>
      <Anchor href="https://read.cv/devsgnr_">
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
      <Anchor href="https://www.getrevue.co/profile/devsgnr" target="_blank">
        <AnimatedLink>NEWSLETTER</AnimatedLink>
      </Anchor>
    </FooterLinkGrid>
  </FooterContainer>
);

export default Footer;
