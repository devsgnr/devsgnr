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
  gap: '10%',

  '@sm': {
    gridAutoFlow: 'row',
  },
  '@md': {
    gridAutoFlow: 'column',
  },
  '@lg': {
    gridAutoFlow: 'column',
  },
  '@xl': {
    gridAutoFlow: 'column',
  },
});

export { Flex, Grid };
