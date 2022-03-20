import { styled } from '../../stitches.config';
import THEME from '../../styles/token/colors';
import TYPOGRAPHY from '../../styles/token/typography';

export type TypographyHeadingSize = 'heading1' | 'heading2' | 'heading3';
export type TypographyParagraphSize = 'pRegular' | 'pSmall';
export type TypographyWeight = 'normal' | 'bold' | 'bolder';

export const Paragraph = styled('div', {
  margin: '5px 0',
  fontFamily: TYPOGRAPHY.family.paragraph,
  fontSize: `${TYPOGRAPHY.size.pRegular}px`,
  fontWeight: TYPOGRAPHY.weight.normal,
  lineHeight: 2.2,

  a: {
    textDecoration: 'underline',
    textUnderlineOffset: '3px',
    fontWeight: TYPOGRAPHY.weight.bold,
    opacity: 0.4,
    transition: 'all ease-in-out 0.2s',

    '&:hover': {
      opacity: 1,
      transition: 'all ease-in-out 0.2s',
    },
  },

  '&.title': {
    margin: '0 0 100px 0',

    '@sm': {
      margin: '0 0 50px 0',
    },
  },

  blockquote: {
    margin: '40px 0',
    paddingLeft: '20px',
    borderLeft: `3px solid ${THEME.dark.foreground}`,
  },

  ol: {
    li: {
      marginBottom: '15px',
    },
  },

  ul: {
    li: {
      marginBottom: '15px',
    },
  },
});

export const AnchorParagraph = styled('div', {
  margin: '5px 0',
  fontFamily: TYPOGRAPHY.family.paragraph,
  fontSize: `${TYPOGRAPHY.size.pRegular}px`,
  fontWeight: TYPOGRAPHY.weight.normal,
  lineHeight: 2.2,

  a: {
    fontWeight: TYPOGRAPHY.weight.bold,
    opacity: 0.4,

    '&:hover': {
      opacity: 1,
    },
  },
});
