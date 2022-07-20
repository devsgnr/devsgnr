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
  width: '20px',
  height: '20px',
  border: `2px solid ${THEME.dark.foreground}`,
  borderRadius: '50%',
  position: 'absolute',
  top: '5%',
  right: '20%',
  zIndex: 9999,
  transition: 'all ease-in-out 0.3s',
  willChange: 'transform',
  transformStyle: 'preserve-3d',
});

export default Cursor;
export { CursorContainer };
