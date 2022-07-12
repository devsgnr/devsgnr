import { styled } from '../../stitches.config';

const Container = styled('div', {
  padding: '0 25px',

  '@sm': {
    width: '420px',
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
  length: 0,
});

const FullWidthContainer = styled('div', {
  width: '100%',
  position: 'relative',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed',

  '@sm': {
    padding: '25px 20px',
  },
  '@md': {
    padding: '50px',
  },
  '@lg': {
    padding: '50px',
  },
  '@xl': {
    padding: '50px',
  },
});

export { FullWidthContainer };
export default Container;
