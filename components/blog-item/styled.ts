import { styled } from '../../stitches.config';
import THEME from '../../styles/token/colors';

const BlogItem = styled('div', {
  padding: '35px 20px',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderBottom: `1px solid ${THEME.dark.opaque}`,
  backgroundColor: THEME.dark.background,
  transition: 'all ease-in-out 0.2s',

  '&:hover': {
    backgroundColor: THEME.dark.accent,
    '*': {
      color: THEME.dark.background,
    },
    backgroundSize: 'cover',
    padding: '35px 35px',
    borderBottomColor: THEME.dark.accent,
    transition: 'all ease-in-out 0.2s',
  },
});

export default BlogItem;
