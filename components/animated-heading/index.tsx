import React, { FC, useEffect, useRef } from 'react';
import { CSS } from '@stitches/react';
import { gsap, Power3 } from 'gsap';
import { Heading } from '../typography/styled';
import TYPOGRAPHY from '../../styles/token/typography';

interface AnimatedHeadingProps {
  children: string;
}

const AnimatedHeading: FC<AnimatedHeadingProps> = ({
  children,
}: AnimatedHeadingProps) => {
  const Title: CSS = {
    position: 'relative',
    opacity: 0,
    fontSize: TYPOGRAPHY.size.headingfooting,

    '@sm': {
      fontSize: '7.5vw',
    },
    '@md': {
      fontSize: '6.5vw',
    },
    '@lg': {
      fontSize: TYPOGRAPHY.size.headingfooting,
    },
    '@xl': {
      fontSize: TYPOGRAPHY.size.headingfooting,
    },
  };

  const TextWrapper: React.CSSProperties = {
    display: 'inline-block',
    paddingTop: '0.2em',
    paddingRight: '0.05em',
    paddingBottom: '0.1em',
    overflow: 'hidden',
    position: 'relative',
  };

  const HeadingRef = useRef<HTMLDivElement>(null);
  const textArr: string[] = children.split('');

  useEffect(() => {
    gsap.to(HeadingRef.current, {
      duration: 0,
      opacity: 1,
      ease: Power3.easeOut,
    });

    textArr.forEach((letter: string, index: number) => {
      gsap
        .timeline({ delay: index * 0.01 })
        .from(`._letter_${index}`, {
          duration: 0,
          opacity: 0,
          zoom: 1.5,
          ease: Power3.easeIn,
        })
        .to(`._letter_${index}`, {
          duration: 0.1,
          opacity: 1,
          zoom: 1,
          ease: Power3.easeIn,
          stagger: 0.5,
        });
    });
  }, []);

  return (
    <Heading className="title" ref={HeadingRef} css={Title}>
      <div className="letters" style={TextWrapper}>
        {textArr.map((letter: string, index: number) => (
          <span
            key={index}
            className={`_letter_${index}`}
            style={{ opacity: 0 }}
          >
            {letter}
          </span>
        ))}
      </div>
    </Heading>
  );
};

export default AnimatedHeading;
