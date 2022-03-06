import { styled } from '../../stitches.config';
import THEME from '../../styles/token/colors';

interface NavigationProps {
  theme: string;
}

export const NavigationFlex = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
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
  backgroundColor: THEME.dark.opaque,
  backdropFilter: 'blur(8px)',
});

export default Navigation;
