import { styled } from '../../stitches.config';
import THEME from '../../styles/token/colors';

const FooterLinks = styled('div', {
  padding: '3px 15px 0px 15px',
  width: 'fit-content',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '0.1px solid rgba(255, 255, 255, 0.5)',
  borderRadius: '25px',
  overflow: 'hidden',
  position: 'relative',

  '&.container': {
    '&:after': {
      content: ' ',
      width: '100%',
      height: '100%',
      backgroundColor: THEME.dark.accent,
      position: 'absolute',
      bottom: '-100%',
      left: 0,
      zIndex: -1,
      transition: 'all ease-in-out 0.2s',
    },
    '&:hover': {
      '&:after': {
        bottom: '0%',
      },
      transition: 'all ease-in-out 0.2s',
    },
  },

  '&.in_view': {
    '&:after': {
      display: 'none !important',
    },
  },

  '&:hover': {
    border: `0.1px solid ${THEME.dark.accent}`,
    transition: 'all ease-in-out 0.2s',
  },
});

const FooterLinkGrid = styled('div', {
  width: '100%',
  display: 'grid',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: '10px',
  gridAutoFlow: 'column',

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
    padding: '50px 25px',
  },
  '@md': {
    padding: '100px 50px 50px 50px',
  },
  '@lg': {
    padding: '100px 50px 50px 50px',
  },
  '@xl': {
    padding: '100px 50px 50px 50px',
  },
});

export default FooterLinks;
export { FooterLinkGrid, FooterContainer };
