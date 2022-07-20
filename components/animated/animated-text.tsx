import React, { FC, useEffect, useRef } from 'react';
import { CSS } from '@stitches/react';
import { gsap, Power4, Power1 } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { Paragraph } from '../typography/styled';

interface AnimatedProps {
  children: string;
  target?: string;
}

const AnimatedText: FC<AnimatedProps> = ({
  children,
  target,
}: AnimatedProps) => {
  const Title: CSS = {
    opacity: 0,
  };

  const TextWrapper: React.CSSProperties = {
    display: 'inline-block',
    overflow: 'hidden',
  };

  const LetterWrapper: React.CSSProperties = {
    opacity: 0,
    display: 'inline-block',
    transform: 'translate(0px, 40px)',
  };

  const ParagraphRef = useRef<HTMLDivElement>(null);
  const textArr: string[] = children.split('');

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(ParagraphRef.current, {
      duration: 0,
      opacity: 1,
      ease: Power1.easeOut,
    });

    textArr.forEach((letter: string, index: number) => {
      ScrollTrigger.batch(`._text_${target}_${index}.in_view`, {
        onEnter: (batch) => {
          gsap.to(batch, {
            duration: index * 0.025,
            opacity: 1,
            y: 0,
            ease: Power4.easeInOut,
          });
        },
      });
    });
  }, []);

  return (
    <Paragraph ref={ParagraphRef} css={Title} id={target}>
      {textArr.map((letter: string, index: number) => (
        <span key={index} style={TextWrapper}>
          <span
            key={index}
            className={`_text_${target}_${index} in_view`}
            style={LetterWrapper}
          >
            {letter === ' ' ? <span>&nbsp;</span> : letter}
          </span>
        </span>
      ))}
    </Paragraph>
  );
};

export default AnimatedText;
