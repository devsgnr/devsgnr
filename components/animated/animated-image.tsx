import React, { FC, useEffect, useRef } from 'react';
import { gsap, Power4, Power1 } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import THEME from '../../styles/token/colors';

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
    position: 'relative',
    opacity: 0,
  };

  const InnerDiv: React.CSSProperties = {
    opacity: 1,
    transform: 'rotateZ(10deg) scale(2)',
    position: 'relative',
    overflow: 'hidden',
  };

  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(divRef.current, {
      duration: 0,
      opacity: 1,
      ease: Power1.easeOut,
    });

    gsap.set(`.container_after_${target}_${index}.in_view`, {
      content: ' ',
      width: '100%',
      height: '100%',
      backgroundColor: THEME.dark.background,
      position: 'absolute',
      top: '0%',
      left: '0%',
      zIndex: 99999,
    });

    gsap.set(`.container_before_${target}_${index}.in_view`, {
      content: ' ',
      width: '100%',
      height: '100%',
      backgroundColor: THEME.dark.foreground,
      position: 'absolute',
      top: '0%',
      left: '0%',
      zIndex: 9999,
    });

    ScrollTrigger.batch(`._${target}_${index}.in_view`, {
      interval: 0.5,
      start: 'top 80%',
      onEnter: (batch) => {
        gsap.to(`.container_after_${target}_${index}.in_view`, {
          duration: index * 1,
          top: '-100%',
          ease: Power4.easeInOut,
        });
        gsap.to(`.container_before_${target}_${index}.in_view`, {
          delay: index * 0.25,
          duration: index * 1.5,
          top: '-100%',
          ease: Power4.easeInOut,
        });
        gsap.to(batch, {
          duration: index * 2.5,
          opacity: 1,
          transform: 'scale(1)',
          rotationZ: 0,
          ease: Power4.easeInOut,
        });
      },
    });

    gsap.to(divRef.current, {
      y: '-px',
      scrollTrigger: {
        trigger: divRef.current,
        scrub: 1,
      },
    });
  }, []);

  return (
    <div
      ref={divRef}
      style={OuterDivWrapper}
      className={`_container_${target}_${index} in_view`}
    >
      <span className={`container_after_${target}_${index} in_view`} />
      <span className={`container_before_${target}_${index} in_view`} />
      <div style={InnerDiv} className={`_${target}_${index} in_view`}>
        {children}
      </div>
    </div>
  );
};

export default AnimatedImageContainer;
