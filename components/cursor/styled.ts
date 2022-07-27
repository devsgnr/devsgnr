import { styled } from '../../stitches.config';
import THEME from '../../styles/token/colors';

const CursorContainer = styled('div', {
  width: '100vw',
  height: '100vh',
  backgroundColor: 'transparent',
  pointerEvents: 'none',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 999999,
});

const Cursor = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: THEME.light.background,
  border: `1px solid ${THEME.light.background}`,
  borderRadius: '50%',
  willChange: 'transform',
  transformStyle: 'preserve-3d',
  width: '15px',
  height: '15px',
  position: 'absolute',
  top: '-7.5px',
  left: '-7.5px',
  transform: 'translateX(-10px) translateY(-10px)',
  pointerEvents: 'none',
  zIndex: 9999,
  transition: 'opacity .6s ease-in-out',
  mixBlendMode: 'difference',

  '@sm': {
    display: 'none',
  },
  '@md': {
    display: 'none',
  },
  '@lg': {
    display: 'initial',
  },
  '@xl': {
    display: 'initial',
  },
});

export default Cursor;
export { CursorContainer };
