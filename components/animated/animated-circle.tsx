import React, { FC, useEffect, useRef } from 'react';
import { gsap, Power1 } from 'gsap';
import THEME from '../../styles/token/colors';

interface AnimatedProps {
  children: React.ReactNode;
  index: number;
  target?: string;
}

const AnimatedDiv: FC<AnimatedProps> = ({
  children,
  index,
  target,
}: AnimatedProps) => {
  const OuterDivWrapper: React.CSSProperties = {
    width: '180px',
    height: '180px',
    overflow: 'hidden',
    borderRadius: '50%',
    backgroundColor: THEME.dark.accent,
    color: THEME.dark.foreground,
    padding: '30px',
    transform: 'rotateZ(0deg) scale(1)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(divRef.current, {
      duration: 0,
      opacity: 1,
      ease: Power1.easeOut,
    });
  }, []);

  const handleMouseEnter = () => {
    gsap.set(`._${target}_${index}.in_view`, {
      rotationZ: '0deg',
    });
    gsap.to(`._${target}_${index}.in_view`, {
      duration: 0.5,
      rotationZ: '-45deg',
      transform: 'scale(1.05)',
      ease: Power1.easeOut,
    });
  };

  const handleMouseLeave = () => {
    gsap.set(`._${target}_${index}.in_view`, {
      rotationZ: '-45deg',
    });
    gsap.to(`._${target}_${index}.in_view`, {
      duration: 0.5,
      rotationZ: '0deg',
      transform: 'scale(1)',
      ease: Power1.easeOut,
    });
  };

  return (
    <div
      ref={divRef}
      style={OuterDivWrapper}
      className={`_${target}_${index} in_view`}
      onMouseOverCapture={() => handleMouseEnter()}
      onMouseOutCapture={() => handleMouseLeave()}
    >
      <div>{children}</div>
    </div>
  );
};

export default AnimatedDiv;
