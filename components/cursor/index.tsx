import gsap, { Linear } from 'gsap';
import React, { useEffect, useRef } from 'react';
import Cursor from './styled';

const MouseCursor = () => {
  const CursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', (e) => {
        gsap.to(CursorRef.current, {
          duration: 0.25,
          x: e.pageX,
          y: e.pageY,
          ease: Linear.easeInOut,
        });
      });

      window.addEventListener('wheel', (e) => {
        gsap.to(CursorRef.current, {
          x: e.pageX,
          y: e.pageY,
        });
      });
    }
  }, []);

  return <Cursor ref={CursorRef} className="cursor" />;
};

export default MouseCursor;
