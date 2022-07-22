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
  margin: 'auto auto',
  backgroundColor: THEME.dark.foreground,
  borderRadius: '50%',
  willChange: 'transform',
  transformStyle: 'preserve-3d',
  width: '15px',
  height: '15px',
  position: 'absolute',
  top: '-10px',
  left: '-10px',
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
