import { styled } from '../../stitches.config';

const Container = styled('div', {
  padding: '0 25px',
  margin: '0 auto',

  '@sm': {
    width: '420px',
  },
  '@md': {
    width: '700px',
  },
  '@lg': {
    width: '1000px',
  },
  '@xl': {
    width: '1000px',
  },
  length: 0,
});

const FullWidthContainer = styled('div', {
  width: '100%',
  height: '100%',
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
    height: '90vh',
  },
  '@lg': {
    padding: '25px 50px',
    height: '95vh',
  },
  '@xl': {
    padding: '25px 50px',
    height: '100vh',
  },
});

export { FullWidthContainer, FullHeightContainer };
export default Container;
