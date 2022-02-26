import { createStitches } from '@stitches/react';

export const { styled, css } = createStitches({
  media: {
    sm: '(min-width: 576px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 992px)',
    xl: '(min-width: 1200px)',
  },
});

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
    width: '700px',
  },
  '@xl': {
    width: '800px',
  },
});

export default Container;
