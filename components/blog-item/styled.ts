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
    padding: '35px 50px',
    '&:hover': {
      padding: '35px 60px',
    },
  },
  '@xl': {
    padding: '35px 50px',
    '&:hover': {
      padding: '35px 60px',
    },
  },

  '&:hover': {
    backgroundColor: THEME.dark.accent,
    '*': {
      color: THEME.dark.background,
    },
    backgroundSize: 'cover',
    borderBottomColor: THEME.dark.accent,
    transition: 'all ease-in-out 0.2s',
  },
});

export default BlogItem;
