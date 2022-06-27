import { styled } from '../../stitches.config';
import THEME from '../../styles/token/colors';

export const NavigationFlex = styled('div', {
  width: '100%',
  display: 'grid',
  alignItems: 'start',
  justifyContent: 'space-between',
  gap: '30px',
  padding: '0px 25px',

  '@sm': {
    gridTemplateColumns: '1fr',
  },
  '@md': {
    gridTemplateColumns: '1fr 0.7fr 0.7fr',
  },
  '@lg': {
    gridTemplateColumns: '1fr 0.7fr 0.7fr',
  },
  '@xl': {
    gridTemplateColumns: '1fr 0.7fr 0.7fr',
  },
});

export const NavigationLinks = styled('div', {
  display: 'flex',
  alignItems: 'center',
  '*': {
    padding: '0 5px',
  },
});

const Navigation = styled('div', {
  width: '100%',
  padding: '20px 0',
  marginBottom: '50px',
  backgroundColor: THEME.dark.background,
});

export default Navigation;
