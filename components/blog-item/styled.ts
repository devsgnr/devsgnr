import { styled } from '../../stitches.config';

const BlogItem = styled('div', {
  padding: '25px 20px',
  margin: '10px 0',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderBottom: '0.1px solid rgba(196, 196, 196, 0.15)',

  '&:hover': {
    backgroundColor: 'rgba(196, 196, 196, 0.025)',
    backgroundSize: 'cover',
    backgroundBlendMode: 'darken',
  },
});

export default BlogItem;
