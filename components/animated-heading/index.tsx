import React, { FC, useEffect, useRef } from 'react';
import { CSS } from '@stitches/react';
import { gsap, Power4, Power1 } from 'gsap';
import { Heading, Paragraph } from '../typography/styled';
import isInViewport from '../../utils/isInView';

interface AnimatedProps {
  children: string;
  target?: string;
}

const AnimatedHeading: FC<AnimatedProps> = ({
  children,
  target,
}: AnimatedProps) => {
  const Title: CSS = {
    position: 'relative',
    opacity: 0,
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

  const isInView = isInViewport(target);

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
          duration: index * 0.05,
          opacity: 1,
          y: 0,
          ease: Power4.easeInOut,
        });
    });
  }, [isInView === true]);

  return (
    <Heading ref={HeadingRef} css={Title} className="big" id={target}>
      {textArr.map((letter: string, index: number) => (
        <span key={index} style={TextWrapper}>
          <span
            key={index}
            className={`_letter_${index}`}
            style={LetterWrapper}
          >
            {letter === ' ' ? <span>&nbsp;</span> : letter}
          </span>
        </span>
      ))}
    </Heading>
  );
};

const AnimatedText: FC<AnimatedProps> = ({
  children,
  target,
}: AnimatedProps) => {
  const Title: CSS = {
    position: 'relative',
    opacity: 0,
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

  const ParagraphRef = useRef<HTMLDivElement>(null);
  const textArr: string[] = children.split('');

  const isInView = isInViewport(target);

  useEffect(() => {
    gsap.to(ParagraphRef.current, {
      duration: 0,
      opacity: 1,
      ease: Power1.easeOut,
    });

    textArr.forEach((letter: string, index: number) => {
      gsap
        .timeline({ delay: index * 0.025 })
        .from(`._text_${index}`, {
          duration: 0,
          opacity: 0,
          y: `${index + 40}px`,
          ease: Power4.easeInOut,
        })
        .to(`._text_${index}`, {
          duration: index * 0.005,
          opacity: 1,
          y: 0,
          ease: Power4.easeInOut,
        });
    });
  }, [isInView === true]);

  return (
    <Paragraph ref={ParagraphRef} css={Title} id={target}>
      {textArr.map((letter: string, index: number) => (
        <span key={index} style={TextWrapper}>
          <span key={index} className={`_text_${index}`} style={LetterWrapper}>
            {letter === ' ' ? <span>&nbsp;</span> : letter}
          </span>
        </span>
      ))}
    </Paragraph>
  );
};

export default AnimatedHeading;
export { AnimatedText };
