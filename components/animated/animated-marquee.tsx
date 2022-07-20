import React, { FC, useEffect, useRef } from 'react';
import { gsap, Linear, Power1 } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

interface AnimatedProps {
  children: React.ReactNode;
  speed: number;
}

const AnimatedMarquee: FC<AnimatedProps> = ({
  children,
  speed,
}: AnimatedProps) => {
  const OuterDivWrapper: React.CSSProperties = {
    position: 'relative',
    overflow: 'hidden',
    opacity: 1,
  };

  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(divRef.current, {
      duration: 0,
      opacity: 1,
      ease: Power1.easeOut,
    });

    gsap.set('._marquee.in_view', {
      x: -500,
    });

    gsap.to('._marquee.in_view', {
      duration: speed * 5.5,
      opacity: 1,
      x: '-=500',
      ease: Linear.easeInOut,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % 500),
      },
      repeat: -1,
    });
  }, []);

  return (
    <div ref={divRef} style={OuterDivWrapper} className="flex gap-5">
      {children}
    </div>
  );
};

export default AnimatedMarquee;
