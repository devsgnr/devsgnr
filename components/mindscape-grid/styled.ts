import { createStitches } from '@stitches/react';
import THEME from '../../styles/token/colors';

export const { styled, css } = createStitches({
  media: {
    sm: '(min-width: 576px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 992px)',
    xl: '(min-width: 1200px)',
  },
});

export const StyledMindscapeGrid = styled('div', {
  display: 'grid',
  alignItems: 'flex-start',
  rowGap: '15px',
  columnGap: '15px',
  marginTop: '100px',

  '@sm': {
    gridTemplateColumns: '1fr',
  },
  '@md': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  '@lg': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  '@xl': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
});

export const StyledMindscapeGridItemCredit = styled('div', {
  position: 'absolute',
  bottom: 0,
  left: '5.5%',
  opacity: 0,
  transition: 'all ease-in-out 0.2s',
});

export const StyledMindscapeGridDownloadButton = styled('div', {
  position: 'absolute',
  bottom: 0,
  right: '5.5%',
  padding: '5px 8px',
  opacity: 0,
  transition: 'all ease-in-out 0.2s',
  borderRadius: '5px',
  backgroundColor: 'rgba(196, 196, 196, 0.1)',
  svg: {
    stroke: THEME.dark.foreground,
    verticalAlign: 'middle',
  },
  display: 'flex',
  justifyContent: 'center',

  '&:hover': {
    backgroundColor: 'rgba(196, 196, 196, 0.3)',
  },
});

export const StyledMindscapeGridItem = styled('div', {
  overflow: 'hidden',
  borderRadius: '10px',
  position: 'relative',
});

export const StyledMindscapeGridInfiniteScrollLoading = styled('div', {
  width: '100%',
  padding: '40px 0',
  margin: '20px 0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
