import { styled } from '../../stitches.config';
import THEME from '../../styles/token/colors';

const BlogItem = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderTop: `1px solid ${THEME.light.opaque}`,
  backgroundColor: 'transparent',
  transition: 'all ease-in-out 0.15s',
  position: 'relative',
  zIndex: 999,

  '.image': {
    width: '300px',
    height: '300px',
    position: 'absolute',
    transform: 'translateX(10px) translateY(10px)',
    pointerEvents: 'none',
    zIndex: 999,
    willChange: 'transform',
    backgroundSize: 'cover',
  },

  '@sm': {
    padding: '35px 20px',
  },
  '@md': {
    padding: '35px 50px',
  },
  '@lg': {
    padding: '75px 50px',
  },
  '@xl': {
    padding: '75px 50px',
  },

  '&:hover': {
    backgroundSize: 'cover',
    transition: 'all ease-in-out 0.3s',
  },
});

export default BlogItem;
