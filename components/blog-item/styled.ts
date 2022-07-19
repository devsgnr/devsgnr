import { styled } from '../../stitches.config';
import THEME from '../../styles/token/colors';

const BlogItem = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderBottom: `1px solid ${THEME.dark.opaque}`,
  backgroundColor: THEME.dark.background,
  transition: 'all ease-in-out 0.2s',
  position: 'relative',
  overflow: 'hidden',
  zIndex: 999,

  ':after': {
    content: ' ',
    width: '100%',
    height: '100%',
    backgroundColor: THEME.dark.accent,
    position: 'absolute',
    left: '-100%',
    top: 0,
    zIndex: -1,
    transition: 'all ease-in-out 0.3s',
  },

  '@sm': {
    padding: '35px 20px',
    '&:hover': {
      padding: '35px 35px',
    },
  },
  '@md': {
    padding: '35px 50px',
    '&:hover': {
      padding: '35px 60px',
    },
  },
  '@lg': {
    padding: '85px 50px',
    '&:hover': {
      padding: '85px 60px',
    },
  },
  '@xl': {
    padding: '85px 50px',
    '&:hover': {
      padding: '85px 60px',
    },
  },

  '&:hover': {
    ':after': {
      left: '0%',
    },

    backgroundColor: THEME.dark.accent,
    backgroundSize: 'cover',
    borderBottomColor: THEME.dark.accent,
    transition: 'all ease-in-out 0.3s',
  },
});

export default BlogItem;
