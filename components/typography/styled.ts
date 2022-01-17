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
    opacity: 0.4;

    &:hover {
      opacity: 1;
    }
  }

  &.title {
    margin: 0 0 100px 0;

    @media (max-width: 576px) {
      margin: 0 0 50px 0;
    }
  }

  ul li {
    list-style-type: none;
    position: relative;
    padding-bottom: 50px;
    padding-left: 15px;

    ::after {
      position: absolute;
      top: 0px;
      left: -19px;
      content: ' ';
      width: 1px;
      height: 100%;
      background-color: ${THEME.light.opaque};
      border-radius: 20px;
    }

    ::before {
      position: absolute;
      top: 10px;
      left: -24px;
      content: ' ';
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: ${THEME.dark.foreground};
      outline: 2px solid ${THEME.dark.foreground};
      outline-offset: 2px;
      box-shadow: 0 0 15px 7px ${THEME.light.opaque};
      z-index: 9;
    }
  }

  @media (max-width: 576px) {
    line-height: 25px;
  }
`;
