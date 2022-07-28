import Link from 'next/link';
import React, { AnchorHTMLAttributes, ReactChild } from 'react';
import gsap, { Power4 } from 'gsap';
import { StyledInternalA } from './styled';

interface AnchorProps {
  href: string;
  title?: string;
  children?: ReactChild | ReactChild[];
}

const Anchor = ({
  href,
  title,
  children,
  ...props
}: AnchorProps & AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const increaseCursorScale = () => {
    gsap.to('.cursor', {
      duration: 0.25,
      width: '60px',
      height: '60px',
      top: '-30px',
      left: '-30px',
      ease: Power4.easeInOut,
    });
  };

  const reduceCursorScale = () => {
    gsap.to('.cursor', {
      duration: 0.25,
      width: '25px',
      height: '25px',
      top: '-12.5px',
      left: '-12.5px',
      ease: Power4.easeInOut,
    });
  };

  return (
    <Link href={href} passHref {...props}>
      <StyledInternalA
        title={title}
        {...props}
        className="anchor"
        onMouseEnter={() => increaseCursorScale()}
        onMouseLeave={() => reduceCursorScale()}
      >
        {title || children}
      </StyledInternalA>
    </Link>
  );
};

export default Anchor;
