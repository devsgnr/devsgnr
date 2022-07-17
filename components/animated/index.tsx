import React, { FC, useEffect, useRef } from 'react';
import { CSS } from '@stitches/react';
import { gsap, Power4, Power1 } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { Heading } from '../typography/styled';
import AnimatedText from './animated-text';
import AnimatedDiv from './animated-div';
import AnimatedLink from './animated-link';
import AnimatedImageContainer from './animated-image';

interface AnimatedProps {
  children: string;
  target?: string;
}

const AnimatedHeading: FC<AnimatedProps> = ({
  children,
  target,
}: AnimatedProps) => {
  const Title: CSS = {
    opacity: 0,
    height: 'fit-content',
  };

  const TextWrapper: React.CSSProperties = {
    display: 'inline-block',
    overflow: 'hidden',
    height: 'fit-content',
  };

  const LetterWrapper: React.CSSProperties = {
    opacity: 0,
    display: 'inline-block',
    transform: 'translate(0px, 40px)',
    height: 'fit-content',
  };

  const HeadingRef = useRef<HTMLDivElement>(null);
  const textArr: string[] = children.split('');

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(HeadingRef.current, {
      duration: 0,
      opacity: 1,
      ease: Power1.easeOut,
    });

    textArr.forEach((letter: string, index: number) => {
      ScrollTrigger.batch(`._letter_${target}_${index}.in_view`, {
        onEnter: (batch) => {
          gsap.to(batch, {
            duration: index * 0.05,
            opacity: 1,
            y: 0,
            ease: Power4.easeInOut,
          });
        },
      });
    });
  }, [HeadingRef]);

  return (
    <Heading ref={HeadingRef} css={Title} className="big">
      {textArr.map((letter: string, index: number) => (
        <span key={index} style={TextWrapper} id={target}>
          <span
            key={index}
            className={`_letter_${target}_${index} in_view`}
            style={LetterWrapper}
          >
            {letter === ' ' ? <span>&nbsp;</span> : letter}
          </span>
        </span>
      ))}
    </Heading>
  );
};

export default AnimatedHeading;
export { AnimatedText, AnimatedDiv, AnimatedLink, AnimatedImageContainer };
