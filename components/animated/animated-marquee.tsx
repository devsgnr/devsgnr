import React, { FC, useEffect, useRef } from 'react';
import { gsap, Power1 } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

interface AnimatedProps {
  children: React.ReactNode[];
}

const AnimatedMarquee: FC<AnimatedProps> = ({ children }: AnimatedProps) => {
  const OuterDivWrapper: React.CSSProperties = {
    margin: 'auto',
    position: 'relative',
    overflow: 'hidden',
  };

  const InnerDiv: React.CSSProperties = {
    width: '100%',
    position: 'relative',
    left: '-50px',
  };

  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(divRef.current, {
      duration: 0,
      opacity: 1,
      ease: Power1.easeOut,
    });

    gsap.set('.marquee_item', {
      x: (i) => i * 700,
    });

    gsap.to('.marquee_item', {
      duration: 15.5,
      x: '+=700',
      ease: 'none',
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % 400),
      },
      repeat: -1,
    });
  }, []);

  return (
    <div ref={divRef} style={OuterDivWrapper} className="flex gap-5">
      <div style={InnerDiv} className="marquee in_view w-fit flex gap-4">
        {children}
      </div>
    </div>
  );
};

export default AnimatedMarquee;
