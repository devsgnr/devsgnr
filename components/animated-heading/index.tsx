import React, { FC, useEffect, useRef } from 'react';
import { CSS } from '@stitches/react';
import { gsap, Power4, Power1 } from 'gsap';
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
  };

  const TextWrapper: React.CSSProperties = {
    display: 'inline-block',
    overflow: 'hidden',
    position: 'relative',
  };

  const LetterWrapper: React.CSSProperties = {
    opacity: 0,
    display: 'inline-block',
    transform: 'translate(0px, 40px)',
  };

  const HeadingRef = useRef<HTMLDivElement>(null);
  const textArr: string[] = children.split('');

  useEffect(() => {
    gsap.to(HeadingRef.current, {
      duration: 0,
      opacity: 1,
      ease: Power1.easeOut,
    });

    textArr.forEach((letter: string, index: number) => {
      gsap
        .timeline({ delay: index * 0.05 })
        .from(`._letter_${index}`, {
          duration: 0,
          opacity: 0,
          y: `${index + 40}px`,
          ease: Power4.easeInOut,
        })
        .to(`._letter_${index}`, {
          duration: index * 0.01,
          opacity: 1,
          y: 0,
          ease: Power4.easeInOut,
        });
    });
  }, []);

  return (
    <Heading ref={HeadingRef} css={Title}>
      {textArr.map((letter: string, index: number) => (
        <span key={index} style={TextWrapper}>
          <span
            key={index}
            className={`_letter_${index}`}
            style={LetterWrapper}
          >
            {letter === ' ' ? (
              <span style={{ width: '38px' }}>&nbsp;</span>
            ) : (
              letter
            )}
          </span>
        </span>
      ))}
    </Heading>
  );
};

export default AnimatedHeading;
