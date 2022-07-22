import { styled } from '../../stitches.config';
import THEME from '../../styles/token/colors';

const BlogItem = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderBottom: `1px solid ${THEME.dark.opaque}`,
  backgroundColor: THEME.dark.background,
  transition: 'all ease-in-out 0.15s',
  position: 'relative',
  overflow: 'hidden',
  zIndex: 999,

  '&:after': {
    content: ' ',
    width: '100%',
    height: '100%',
    backgroundColor: THEME.dark.accent,
    position: 'absolute',
    left: 0,
    bottom: '-100%',
    zIndex: -1,
    transition: 'all ease-in-out 0.15s',
  },

  '@sm': {
    padding: '35px 20px',
  },
  '@md': {
    padding: '35px 50px',
  },
  '@lg': {
    padding: '15px 50px',
  },
  '@xl': {
    padding: '15px 50px',
  },

  '&:hover': {
    '&:after': {
      bottom: '0%',
    },
    '*': {
      color: THEME.dark.background,
    },

    backgroundSize: 'cover',
    borderBottomColor: THEME.dark.accent,
    transition: 'all ease-in-out 0.3s',
  },
});

export default BlogItem;
