import React, { FC, useEffect, useRef } from 'react';
import { gsap, Power1 } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

interface AnimatedProps {
  children: React.ReactNode;
  index: number;
  target?: string;
  className?: string;
}

const AnimatedDiv: FC<AnimatedProps> = ({
  children,
  index,
  target,
  className,
}: AnimatedProps) => {
  const OuterDivWrapper: React.CSSProperties = {
    opacity: 1,
  };

  const InnerDiv: React.CSSProperties = {
    opacity: 1,
    transform: 'translate(0%, 30%)',
  };

  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(divRef.current, {
      duration: 0,
      opacity: 1,
      ease: Power1.easeOut,
    });

    gsap.to(`._${target}_${index}.in_view`, {
      y: '-px',
      scrollTrigger: {
        trigger: `._${target}_${index}.in_view`,
        scrub: 1,
      },
    });
  }, []);

  return (
    <div ref={divRef} style={OuterDivWrapper} className={className}>
      <div style={InnerDiv} className={`_${target}_${index} in_view`}>
        {children}
      </div>
    </div>
  );
};

export default AnimatedDiv;
