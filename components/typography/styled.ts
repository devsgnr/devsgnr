import styled from 'styled-components';
import THEME from '../../styles/token/colors';
import TYPOGRAPHY from '../../styles/token/typography';

export type TypographyHeadingSize = 'heading1' | 'heading2' | 'heading3';
export type TypographyParagraphSize = 'pRegular' | 'pSmall';
export type TypographyWeight = 'normal' | 'bold' | 'bolder';

interface TypographyHeadingProps {
  size: TypographyHeadingSize;
  weight: TypographyWeight;
}

interface TypographyParagraphProps {
  size?: TypographyParagraphSize;
  weight?: TypographyWeight;
}

export const Heading = styled.p<TypographyHeadingProps>`
  margin: 0;
  font-family: ${TYPOGRAPHY.family.heading};
  font-size: ${(props) =>
    props.size ? TYPOGRAPHY.size[props.size] : TYPOGRAPHY.size['heading1']}px;
  font-weight: ${(props) => props.weight && TYPOGRAPHY.weight[props.weight]};
  line-height: 55px;
  letter-spacing: -1px;

  &.title {
    background-image: ${THEME.dark.gradient};
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 0 0 100px 0;

    @media (max-width: 576px) {
      margin: 0 0 50px 0;
    }
  }

  @media (max-width: 576px) {
    font-size: ${TYPOGRAPHY.size['heading3']}px;
    line-height: 40px;
  }
`;

export const Paragraph = styled.p<TypographyParagraphProps>`
  margin: 5px 0;
  font-family: ${TYPOGRAPHY.family.paragraph};
  font-size: ${(props) =>
    props.size ? TYPOGRAPHY.size[props.size] : TYPOGRAPHY.size['pRegular']}px;
  font-weight: ${(props) => props.weight && TYPOGRAPHY.weight[props.weight]};
  line-height: 30px;

  a {
    text-decoration: underline;
    text-underline-offset: 4px;
    font-weight: ${TYPOGRAPHY.weight.bold};

    &:hover {
      opacity: 0.5;
    }
  }

  @media (max-width: 576px) {
    font-size: ${TYPOGRAPHY.size['pSmall']}px;
    line-height: 30px;
  }
`;
