import { styled } from '../../stitches.config';

const Flex = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'start',
  padding: '0px 25px',

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

export { Flex };
