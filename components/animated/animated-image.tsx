import React, { FC, useEffect, useRef } from 'react';
import { gsap, Power4, Power1 } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import THEME from '../../styles/token/colors';

interface AnimatedProps {
  children: React.ReactNode;
  index: number;
  target?: string;
  className?: string;
}

const AnimatedImageContainer: FC<AnimatedProps> = ({
  children,
  index,
  target,
  className,
}: AnimatedProps) => {
  const OuterDivWrapper: React.CSSProperties = {
    overflow: 'hidden',
    position: 'relative',
    width: '100%',
    height: '100%',
    opacity: 0,
    transform: 'translate(0%, 0%)',
    borderRadius: '15px',
  };

  const InnerDiv: React.CSSProperties = {
    opacity: 1,
    width: '100%',
    height: '100%',
    transform: 'rotateZ(5deg) scale(2)',
    position: 'relative',
    overflow: 'hidden',
  };

  const divRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

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
      backgroundColor: THEME.light.background,
      position: 'absolute',
      top: '0%',
      left: '0%',
      zIndex: 99999,
    });

    gsap.set(`.container_before_${target}_${index}.in_view`, {
      content: ' ',
      width: '100%',
      height: '100%',
      backgroundColor: THEME.light.foreground,
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
          top: '100%',
          ease: Power4.easeInOut,
        });
        gsap.to(`.container_before_${target}_${index}.in_view`, {
          delay: index * 0.25,
          duration: index * 1.5,
          top: '100%',
          ease: Power4.easeInOut,
        });
        gsap.to(batch, {
          duration: index * 2.5,
          opacity: 1,
          transform: 'translate(0, 0) scale(1)',
          rotationZ: 0,
          ease: Power4.easeInOut,
        });
      },
    });
  }, []);

  return (
    <div
      ref={divRef}
      style={OuterDivWrapper}
      className={`_container_${target}_${index} in_view ${className}`}
    >
      <span className={`container_after_${target}_${index} in_view`} />
      <span className={`container_before_${target}_${index} in_view`} />

      <div
        ref={imageRef}
        style={InnerDiv}
        className={`_${target}_${index} in_view`}
      >
        {children}
      </div>
    </div>
  );
};

export default AnimatedImageContainer;
