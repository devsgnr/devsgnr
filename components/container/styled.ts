import { styled } from '../../stitches.config';

const Container = styled('div', {
  padding: '0 25px',
  margin: '0 auto',

  '@sm': {
    width: '560px',
  },
  '@md': {
    width: '700px',
  },
  '@lg': {
    width: '800px',
  },
  '@xl': {
    width: '800px',
  },
});

export default Container;
