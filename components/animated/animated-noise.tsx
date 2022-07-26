import React, { FC, useEffect } from 'react';
import { gsap, Linear } from 'gsap';

const AnimatedNoiseOverlay: FC = () => {
  const Title: React.CSSProperties = {
    width: '100%',
    height: '100vh',
    position: 'fixed',
    overflow: 'hidden',
    top: 0,
    left: 0,
    zIndex: 99999,
    pointerEvents: 'none',
  };

  useEffect(() => {
    gsap
      .timeline({ duration: 0.001, repeat: -1 })
      .to('#noise', {
        x: '-1px',
        ease: Linear.easeInOut,
      })
      .to('#noise', {
        x: '0px',
        ease: Linear.easeInOut,
      })
      .to('#noise', {
        x: '1px',
        ease: Linear.easeInOut,
      });
  }, []);

  return (
    <svg style={Title}>
      <filter id="noiseFilter">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.01 1, 0.1 0.01, 0.001 1"
          numOctaves={1}
          stitchTiles="stitch"
        />
      </filter>
      <rect id="noise" width="100%" height="100vh" filter="url(#noiseFilter)" />
    </svg>
  );
};

export default AnimatedNoiseOverlay;
