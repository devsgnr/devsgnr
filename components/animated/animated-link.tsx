import React, { FC, useRef } from 'react';
import { gsap, Power4 } from 'gsap';
import TYPOGRAPHY from '../../styles/token/typography';
import FooterLinks from '../footer-links/styled';

interface AnimatedProps {
  children: string;
  identifier?: string;
}

const AnimatedText: FC<AnimatedProps> = ({
  children,
  identifier,
}: AnimatedProps) => {
  const Title: React.CSSProperties = {
    opacity: 1,
    fontFamily: TYPOGRAPHY.family.paragraph,
    fontSize: TYPOGRAPHY.size.pSmall,
    position: 'relative',
    zIndex: 9,
  };

  const TextWrapper: React.CSSProperties = {
    display: 'inline-block',
    alignItems: 'center',
    overflow: 'hidden',
  };

  const LetterWrapper: React.CSSProperties = {
    opacity: 1,
    display: 'inline-block',
    paddingTop: '4.5px',
    transform: 'translateY(0%)',
  };

  const ParagraphRef = useRef<HTMLDivElement>(null);
  const textArr: string[] = children.split('');

  const handleMouseEnter = () => {
    textArr.forEach((letter: string, index: number) => {
      gsap.set(`._link_${identifier}_${index}.in_view`, {
        y: '100%',
      });
      gsap.to(`._link_${identifier}_${index}.in_view`, {
        duration: (index + 1) * 0.1,
        opacity: 1,
        y: '0%',
        ease: Power4.easeInOut,
      });
    });
  };

  const handleMouseLeave = () => {
    textArr.forEach((letter: string, index: number) => {
      gsap.set(`._link_${identifier}_${index}.in_view`, {
        y: '-100%',
      });
      gsap.to(`._link_${identifier}_${index}.in_view`, {
        duration: (index + 1) * 0.1,
        opacity: 1,
        y: '0%',
        ease: Power4.easeInOut,
      });
    });
  };

  return (
    <FooterLinks
      ref={ParagraphRef}
      style={Title}
      id={identifier}
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
      className={`container ${identifier}_container`}
    >
      <div>
        {textArr.map((letter: string, index: number) => (
          <span key={index} style={TextWrapper}>
            <span
              key={index}
              className={`_link_${identifier}_${index} in_view`}
              style={LetterWrapper}
            >
              {letter === ' ' ? <span>&nbsp;</span> : letter}
            </span>
          </span>
        ))}
      </div>
    </FooterLinks>
  );
};

export default AnimatedText;
