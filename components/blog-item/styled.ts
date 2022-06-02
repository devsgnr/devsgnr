import { styled } from '../../stitches.config';

const BlogItem = styled('div', {
  padding: '15px 20px',
  margin: '10px 0',
  width: '100%',
  borderRadius: '15px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  '&:hover': {
    backgroundColor: 'rgba(196, 196, 196, 0.05)',
  },
});

export default BlogItem;
