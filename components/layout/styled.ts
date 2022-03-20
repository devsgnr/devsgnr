import { styled } from '../../stitches.config';
import THEME from '../../styles/token/colors';

export const StyledSplashScreen = styled('div', {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '*': {
    textAlign: 'center',
  },
});

const StyledLayout = styled('div', {
  width: '100%',
  minHeight: '100vh',
  background: THEME.dark.background,

  '*': {
    color: THEME.dark.foreground,
  },
});

export default StyledLayout;
