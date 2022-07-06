import { styled } from '../../stitches.config';

export const StyledInternalA = styled('a', {
  textDecoration: 'none !important',
  opacity: '1 !important',

  '.blend': {
    mixBlendMode: 'exclusion',
  },
});
