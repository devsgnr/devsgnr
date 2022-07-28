import { styled } from '../../stitches.config';
import THEME from '../../styles/token/colors';

export const StyledMindscapeGrid = styled('div', {
  display: 'grid',
  alignItems: 'flex-start',
  rowGap: '0px',
  columnGap: '0px',
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
  bottom: '-50%',
  left: 0,
  opacity: 0,
  transition: 'all ease-in-out 0.2s',
  padding: '0 0 15px 20px',
  width: '100%',
  '*': {
    color: THEME.dark.foreground,
  },
});

export const StyledMindscapeGridPlusButton = styled('div', {
  position: 'absolute',
  top: 0,
  right: '5%',
  padding: '5px 8px',
  opacity: 0,
  transition: 'all ease-in-out 0.2s',
  borderRadius: '5px',
  backgroundColor: 'rgba(196, 196, 196, 0.1)',
  cursor: 'pointer',
  svg: {
    stroke: THEME.dark.foreground,
    verticalAlign: 'middle',
  },
  display: 'flex',
  justifyContent: 'center',

  '&:hover': {
    backgroundColor: 'rgba(196, 196, 196, 0.3)',
    boxShadow: '0 0 5px 2px rgba(0, 0, 0, 0.1)',
  },
});

export const StyledMindscapeGridItem = styled('div', {
  overflow: 'hidden',
  borderRadius: '0px',
  position: 'relative',
});

export const StyledMindscapeGridInfiniteScrollLoading = styled('div', {
  width: '100% !important',
  padding: '40px 0',
  margin: '20px 0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
