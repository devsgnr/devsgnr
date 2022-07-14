import { css } from '../stitches.config';

const ContainerStyle = css({
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

const NavigationContainerStyle = css({
  '@sm': {
    padding: '25px',
  },
  '@md': {
    padding: '25px 50px',
  },
  '@lg': {
    padding: '25px 50px',
  },
  '@xl': {
    padding: '25px 50px',
  },
});

export { ContainerStyle, NavigationContainerStyle };
