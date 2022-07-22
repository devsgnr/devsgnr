import { styled } from '../../stitches.config';

export const NavigationFlex = styled('div', {
  width: '100%',
  display: 'grid',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '30px',

  '@sm': {
    gridTemplateColumns: '1fr auto',
  },
  '@md': {
    gridTemplateColumns: '1fr auto',
  },
  '@lg': {
    gridTemplateColumns: '1fr auto',
  },
  '@xl': {
    gridTemplateColumns: '1fr auto',
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
  position: 'sticky',
  top: 0,
  left: 0,
  zIndex: 9999999,
  width: '100%',
  padding: '10px 0',
  backgroundColor: 'transparent',
  mixBlendMode: 'difference',

  '@sm': {
    padding: '15px',
  },
  '@md': {
    padding: '15px 50px',
  },
  '@lg': {
    padding: '15px 50px',
  },
  '@xl': {
    padding: '15px 50px',
  },
});

export default Navigation;
