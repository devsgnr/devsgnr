import React, { FC, useEffect, useRef } from 'react';
import { CSS } from '@stitches/react';
import { gsap, Power4, Power1 } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { Heading } from '../typography/styled';

interface AnimatedProps {
  children: string;
  target?: string;
  className?: string;
}

const AnimatedHeadingWords: FC<AnimatedProps> = ({
  children,
  target,
  className,
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
  const textArr: string[] = children.split(' ');

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(HeadingRef.current, {
      duration: 0,
      opacity: 1,
      ease: Power1.easeOut,
    });

    textArr.forEach((letter: string, index: number) => {
      ScrollTrigger.batch(HeadingRef.current, {
        start: 'top 95%',
        onEnter: () => {
          gsap.to(`._letter_${target}_${index}.in_view`, {
            duration: (index + 0.5) * 0.15,
            opacity: 1,
            y: 0,
            ease: Power4.easeInOut,
          });
        },
      });
    });
  }, [HeadingRef]);

  return (
    <Heading ref={HeadingRef} css={Title} className={className}>
      {textArr.map((letter: string, index: number) => (
        <span key={index} style={TextWrapper} id={target}>
          <span
            key={index}
            className={`_letter_${target}_${index} in_view`}
            style={LetterWrapper}
          >
            {letter}
            {index !== textArr.length - 1 ? <span>&nbsp;</span> : null}
          </span>
        </span>
      ))}
    </Heading>
  );
};

export default AnimatedHeadingWords;
