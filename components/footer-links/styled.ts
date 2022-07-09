import { styled } from '../../stitches.config';

const FooterLinks = styled('div', {
  padding: '1px 15px',
  width: 'fit-content',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '0.1px solid rgba(255, 255, 255, 0.5)',
  borderRadius: '25px',

  '&:hover': {
    backgroundColor: '#FFF !important',
    '*': {
      color: '#000 !important',
    },
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

export default FooterLinks;
export { FooterLinkGrid };
