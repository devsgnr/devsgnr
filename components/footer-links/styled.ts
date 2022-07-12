import { styled } from '../../stitches.config';
import THEME from '../../styles/token/colors';

const FooterLinks = styled('div', {
  padding: '5px 15px',
  width: 'fit-content',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '0.1px solid rgba(255, 255, 255, 0.5)',
  borderRadius: '25px',

  '&:hover': {
    backgroundColor: THEME.dark.accent,
    '*': {
      color: THEME.dark.background,
    },
    border: `0.1px solid ${THEME.dark.accent}`,
  },
});

const FooterLinkGrid = styled('div', {
  width: '100%',
  display: 'grid',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: '10px',
  gridAutoFlow: 'column',
  padding: '100px 0 25px 0',

  '@sm': {
    gridAutoFlow: 'row',
  },
  '@md': {
    gridAutoFlow: 'column',
  },
  '@lg': {
    gridAutoFlow: 'column',
  },
  '@xl': {
    gridAutoFlow: 'column',
  },
});

const FooterContainer = styled('div', {
  width: '100%',

  '@sm': {
    padding: '25px',
  },
  '@md': {
    padding: '25px 50px',
  },
  '@lg': {
    padding: '25px 50px',
  },
  '@xl': {
    padding: '25px 50px',
  },
});

export default FooterLinks;
export { FooterLinkGrid, FooterContainer };
