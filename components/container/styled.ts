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
  height: '100vh',
  position: 'relative',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed',
  backgroundBlendMode: 'difference',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  length: 0,
});

export { FullWidthContainer };
export default Container;
