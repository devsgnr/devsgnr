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

const FullHeightContainer = styled('div', {
  width: '100%',
  height: 'auto',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed',
  backgroundPosition: 'center',
  display: 'grid',
  gridTemplateColumns: '1fr',

  '@sm': {
    padding: '25px 20px',
    height: '90vh',
  },
  '@md': {
    padding: '25px 50px',
    height: '55vh',
  },
  '@lg': {
    padding: '25px 50px',
    height: '55vh',
  },
  '@xl': {
    padding: '25px 50px',
    height: '75vh',
  },
});

export { FullWidthContainer, FullHeightContainer };
export default Container;
