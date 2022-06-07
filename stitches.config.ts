import { createStitches } from '@stitches/react';

export const { styled, css, getCssText } = createStitches({
  media: {
    sm: '(min-width: 425px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 992px)',
    xl: '(min-width: 1200px)',
  },
});
