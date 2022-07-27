import { styled } from '../../stitches.config';

const BlogItem = styled('div', {
  width: '100%',
  height: '100%',
  transition: 'all ease-in-out 0.15s',
  position: 'relative',
  zIndex: 999,

  '.overlay': {
    height: '50vh',
    width: '100%',
    borderRadius: '20px',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
  },

  '.content': {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '20px',
  },

  '@sm': {
    padding: '35px',
  },
  '@md': {
    padding: '35px',
  },
  '@lg': {
    padding: '35px 35px',
  },
  '@xl': {
    padding: '35px 35px',
  },

  '&:hover': {
    backgroundSize: 'cover',
    transition: 'all ease-in-out 0.3s',
  },
});

export default BlogItem;
