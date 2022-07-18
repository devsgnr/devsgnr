import { styled } from '../../stitches.config';
import THEME from '../../styles/token/colors';
import TYPOGRAPHY from '../../styles/token/typography';

export type TypographyHeadingSize = 'heading1' | 'heading2' | 'heading3';
export type TypographyParagraphSize = 'pRegular' | 'pSmall';
export type TypographyWeight = 'normal' | 'bold' | 'bolder';

export const Heading = styled('div', {
  margin: 0,
  fontFamily: TYPOGRAPHY.family.heading,
  letterSpacing: '0px',
  fontWeight: TYPOGRAPHY.weight.normal,
  lineHeight: 1.3,
  width: '100%',
  color: THEME.dark.foreground,

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
      fontSize: '7.2vw',
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
  width: '100%',
  color: THEME.dark.foreground,

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
    color: THEME.dark.foreground,
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
  lineHeight: 2.2,
  position: 'relative',

  '&:after': {
    content: ' ',
    width: '0%',
    height: '1px',
    backgroundColor: THEME.dark.foreground,
    position: 'absolute',
    bottom: '18%',
    left: 0,
    zIndex: 99999999,
    transition: 'all ease-in-out 0.2s',
  },

  '&:hover': {
    '&:after': {
      width: '100%',
    },
  },

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
    fontWeight: TYPOGRAPHY.weight.normal,
    opacity: 0.4,

    '&:hover': {
      opacity: 1,
    },
  },
});
