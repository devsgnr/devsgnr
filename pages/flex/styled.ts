import { styled } from '../../stitches.config';

const Grid = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  justifyContent: 'space-between',
  alignItems: 'start',

  '@sm': {
    gridTemplateColumns: '1fr',
  },
  '@md': {
    gridTemplateColumns: '1fr',
  },
  '@lg': {
    gridTemplateColumns: '1fr 1fr',
  },
  '@xl': {
    gridTemplateColumns: '1fr 1fr',
  },
});

export { Grid };
