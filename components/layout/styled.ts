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
  backgroundColor: THEME.dark.accent,
  color: THEME.dark.background,

  '*': {
    textAlign: 'center',
  },
});

const StyledLayout = styled('div', {
  width: '100%',
  minHeight: '100vh',
  background: THEME.dark.background,
});

export default StyledLayout;
