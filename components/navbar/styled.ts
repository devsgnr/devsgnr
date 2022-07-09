import { styled } from '../../stitches.config';

export const NavigationFlex = styled('div', {
  width: '100%',
  display: 'grid',
  alignItems: 'start',
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
  zIndex: 999,
  width: '100%',
  padding: '20px 0',
  marginBottom: '50px',
  backgroundColor: 'transparent',
});

export default Navigation;
