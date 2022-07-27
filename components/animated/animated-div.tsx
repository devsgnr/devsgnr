import React, { FC, useEffect, useRef } from 'react';
import { gsap, Power1 } from 'gsap';

interface AnimatedProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedDiv: FC<AnimatedProps> = ({
  children,
  className,
}: AnimatedProps) => {
  const OuterDivWrapper: React.CSSProperties = {
    opacity: 1,
  };

  const divRef = useRef<HTMLDivElement>(null);
  const innerDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(divRef.current, {
      duration: 0,
      opacity: 1,
      ease: Power1.easeOut,
    });
  }, []);

  return (
    <div ref={divRef} style={OuterDivWrapper} className={className}>
      <div ref={innerDivRef}>{children}</div>
    </div>
  );
};

export default AnimatedDiv;
