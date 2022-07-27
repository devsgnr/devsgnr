import { styled } from '../../stitches.config';
import THEME from '../../styles/token/colors';
import TYPOGRAPHY from '../../styles/token/typography';

export type TypographyHeadingSize = 'heading1' | 'heading2' | 'heading3';
export type TypographyParagraphSize = 'pRegular' | 'pSmall';
export type TypographyWeight = 'normal' | 'bold' | 'bolder';

export const Heading = styled('div', {
  margin: 0,
  fontFamily: TYPOGRAPHY.family.heading,
  letterSpacing: '-2.2px',
  fontWeight: TYPOGRAPHY.weight.normal,
  lineHeight: 1.2,
  width: '100%',
  color: THEME.light.foreground,

  '@sm': {
    fontSize: TYPOGRAPHY.size.heading3,
  },
  '@md': {
    fontSize: TYPOGRAPHY.size.heading2,
  },
  '@lg': {
    fontSize: TYPOGRAPHY.size.heading1,
  },
  '@xl': {
    fontSize: TYPOGRAPHY.size.heading1,
  },

  '&.big': {
    '@sm': {
      fontSize: '6.5vw',
    },
    '@md': {
      fontSize: '5.2vw',
    },
    '@lg': {
      fontSize: TYPOGRAPHY.size.headingfooting,
    },
    '@xl': {
      fontSize: TYPOGRAPHY.size.headingfooting,
    },
  },

  '&.title': {
    margin: '150px 0 150px 0',

    '@sm': {
      margin: '100px 0 100px 0',
    },
  },
});

export const Paragraph = styled('div', {
  margin: '5px 0',
  fontFamily: TYPOGRAPHY.family.paragraph,
  fontSize: `${TYPOGRAPHY.size.pRegular}px`,
  fontWeight: TYPOGRAPHY.weight.normal,
  lineHeight: 1.75,
  letterSpacing: '-0.9px',
  width: '100%',
  color: THEME.light.foreground,

  '@sm': {
    fontSize: '15px',
  },
  '@md': {
    fontSize: '15px',
  },
  '@lg': {
    fontSize: TYPOGRAPHY.size.pRegular,
  },
  '@xl': {
    fontSize: TYPOGRAPHY.size.pRegular,
  },

  a: {
    textDecoration: 'underline',
    textUnderlineOffset: '3px',
    fontWeight: TYPOGRAPHY.weight.bold,
    color: THEME.light.foreground,
    opacity: 0.4,
    letterSpacing: '-0.9px',
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
    borderLeft: `3px solid ${THEME.light.foreground}`,
  },

  ol: {
    li: {
      marginBottom: '15.6px',
    },
  },

  ul: {
    li: {
      marginBottom: '15.6px',
    },
  },
});

export const AnchorParagraph = styled('div', {
  margin: '5px 0',
  fontFamily: TYPOGRAPHY.family.paragraph,
  fontSize: `${TYPOGRAPHY.size.pRegular}px`,
  fontWeight: TYPOGRAPHY.weight.normal,
  letterSpacing: '-0.9px',
  lineHeight: 1.75,
  position: 'relative',

  '@sm': {
    fontSize: '15px',
  },
  '@md': {
    fontSize: '15px',
  },
  '@lg': {
    fontSize: TYPOGRAPHY.size.pRegular,
  },
  '@xl': {
    fontSize: TYPOGRAPHY.size.pRegular,
  },

  a: {
    display: 'inline-block',
    position: 'relative',
    fontWeight: TYPOGRAPHY.weight.normal,
    opacity: 0.4,
    letterSpacing: '-0.9px',

    '&:hover': {
      opacity: 1,
    },
  },
});
