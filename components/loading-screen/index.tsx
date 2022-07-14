import React, { FC, useEffect, useRef } from 'react';
import { gsap, Power4 } from 'gsap';
import { AnimatedText } from '../animated-heading';
import { StyledSplashScreen } from '../layout/styled';

interface LoadingScreenProps {
  done: () => void;
  loading: () => void;
}

const LoadingScreen: FC<LoadingScreenProps> = ({ done, loading }) => {
  const SplashScreenRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    loading();

    if (typeof window !== 'undefined') {
      gsap
        .timeline({ delay: 0 })
        .to(SplashScreenRef.current, {
          top: '0%',
          duration: 1,
          ease: Power4.easeInOut,
        })
        .to(SplashScreenRef.current, {
          delay: 2,
          top: '-100%',
          duration: 3.5,
          ease: Power4.easeInOut,
        })
        .then(() => done());
    }
  }, []);

  return (
    <StyledSplashScreen ref={SplashScreenRef}>
      <AnimatedText>Emmanuel Watila</AnimatedText>
    </StyledSplashScreen>
  );
};

export default LoadingScreen;
