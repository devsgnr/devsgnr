import React, { useRef } from 'react';
import Cursor, { CursorContainer } from './styled';

const MouseCursor = () => {
  const CursorRef = useRef<HTMLDivElement>(null);
  const CursorContainerRef = useRef<HTMLDivElement>(null);

  const handleMouseEvent = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    if (CursorRef.current) {
      CursorRef.current.style.transform = `translate3d(${e.movementX}vw, ${e.movementY}vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`;
      CursorRef.current.style.willChange = 'transform';
    }
  };

  return (
    <CursorContainer
      ref={CursorContainerRef}
      onMouseMove={(e) => handleMouseEvent(e)}
    >
      <Cursor ref={CursorRef} />
    </CursorContainer>
  );
};

export default MouseCursor;
