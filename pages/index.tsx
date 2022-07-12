import React from 'react';
import { NextPage } from 'next';
import { IProjectResponse } from '../types/response';
import { FetchProjectsService } from './api/project';
import { IProjectProps } from '../types/project';
import { Paragraph } from '../components/typography/styled';
import Anchor from '../components/anchor';
import AnimatedHeading from '../components/animated-heading';
import TYPOGRAPHY from '../styles/token/typography';
import FooterLinks, {
  FooterContainer,
  FooterLinkGrid,
} from '../components/footer-links/styled';
import { FullWidthContainer } from '../components/container/styled';
import BlogItemComponent from '../components/blog-item';

export const getStaticProps = async () => {
  const res: IProjectResponse<IProjectProps[]> = await FetchProjectsService();
  const data: IProjectProps[] | undefined = res.caseStudies;

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
  const FooterLinkStyle: React.CSSProperties = {
    fontSize: TYPOGRAPHY.size.pSmall,
    fontFamily: TYPOGRAPHY.family.paragraph,
  };

  return (
    <div>
      <FullWidthContainer>
        <div style={{ padding: '100px 0' }}>
          <AnimatedHeading>A front-end developer —</AnimatedHeading>
          <AnimatedHeading>
            Designing &amp; building websites that kicks ass
          </AnimatedHeading>
        </div>

        <div>
          <Paragraph>
            I&apos;m a full-stack developer with focus on front-end & creative
            development — primarily working with React & Next.js.
          </Paragraph>
        </div>
      </FullWidthContainer>

      <div style={{ marginTop: '50px' }}>
        {data.map((item: IProjectProps, index: number) => (
          <BlogItemComponent data={item} key={index} />
        ))}
      </div>

      <FooterContainer>
        <FooterLinkGrid>
          <Anchor href="/mindscape">
            <FooterLinks>
              <div style={FooterLinkStyle}>MINDSCAPE</div>
            </FooterLinks>
          </Anchor>
          <Anchor href="https://instagram.com/devsgnr_" target="_blank">
            <FooterLinks>
              <div style={FooterLinkStyle}>INSTAGRAM</div>
            </FooterLinks>
          </Anchor>
          <Anchor href="https://twitter.com/devsgnr_" target="_blank">
            <FooterLinks>
              <div style={FooterLinkStyle}>TWITTER</div>
            </FooterLinks>
          </Anchor>
          <Anchor href="https://linkedin.com/in/eiwatila" target="_blank">
            <FooterLinks>
              <div style={FooterLinkStyle}>LINKEDIN</div>
            </FooterLinks>
          </Anchor>
          <Anchor
            href="https://www.getrevue.co/profile/devsgnr"
            target="_blank"
          >
            <FooterLinks>
              <div style={FooterLinkStyle}>NEWSLETTER</div>
            </FooterLinks>
          </Anchor>
        </FooterLinkGrid>
      </FooterContainer>
    </div>
  );
};

export default Home;
