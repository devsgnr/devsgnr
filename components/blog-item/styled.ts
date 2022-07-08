import { styled } from '../../stitches.config';

const BlogItem = styled('div', {
  padding: '35px 20px',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderBottom: '0.1px solid rgba(196, 196, 196, 0.15)',

  '&:hover': {
    backgroundColor: '#FFF !important',
    '*': {
      color: '#000 !important',
    },
    backgroundSize: 'cover',
    backgroundBlendMode: 'darken',
    padding: '35px 25px',
  },
});

export default BlogItem;
