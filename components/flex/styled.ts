import { styled } from '../../stitches.config';

const Flex = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'start',
  padding: '0px 25px',
  gap: '25px',

  '@sm': {
    flexDirection: 'column',
  },
  '@md': {
    flexDirection: 'column',
  },
  '@lg': {
    flexDirection: 'row',
  },
  '@xl': {
    flexDirection: 'row',
  },
});

const Grid = styled('div', {
  width: '100%',
  display: 'grid',
  alignItems: 'start',
  justifyContent: 'space-between',
  gap: '30px',
  padding: '0px 25px',

  '@sm': {
    gridTemplateColumns: '1fr',
  },
  '@md': {
    gridTemplateColumns: 'auto auto',
  },
  '@lg': {
    gridTemplateColumns: 'auto auto',
  },
  '@xl': {
    gridTemplateColumns: 'auto auto',
  },
});

export { Flex, Grid };
