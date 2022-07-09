import { styled } from '../../stitches.config';

const BlogItem = styled('div', {
  padding: '35px 20px',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderBottom: '0.1px solid rgba(255, 255, 255, 0.2)',

  '&:hover': {
    backgroundColor: '#FFF !important',
    '*': {
      color: '#000 !important',
    },
    backgroundSize: 'cover',
    padding: '35px 25px',
  },
});

export default BlogItem;
