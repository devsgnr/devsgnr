import React, { FC, useEffect, useRef } from 'react';
import { gsap, Power4, Power1 } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

interface AnimatedProps {
  children: React.ReactNode;
  index: number;
  target?: string;
}

const AnimatedImageContainer: FC<AnimatedProps> = ({
  children,
  index,
  target,
}: AnimatedProps) => {
  const OuterDivWrapper: React.CSSProperties = {
    overflow: 'hidden',
    opacity: 0,
  };

  const InnerDiv: React.CSSProperties = {
    opacity: 0,
    transform: 'translate(0, 100%)',
  };

  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(divRef.current, {
      duration: 0,
      opacity: 1,
      ease: Power1.easeOut,
    });

    ScrollTrigger.batch(`._${target}_${index}.in_view`, {
      interval: 0.5,
      onEnter: (batch) => {
        gsap.to(batch, {
          duration: index * 0.75,
          opacity: 1,
          y: 0,
          ease: Power4.easeInOut,
        });
      },
    });
  }, []);

  return (
    <div ref={divRef} style={OuterDivWrapper}>
      <div style={InnerDiv} className={`_${target}_${index} in_view`}>
        {children}
      </div>
    </div>
  );
};

export default AnimatedImageContainer;
