export interface IColor {
  background: string;
  foreground: string;
  opaque: string;
  gradient: string;
  accent: string;
}

export interface ITheme {
  light: IColor;
  dark: IColor;
}

export interface ITypography {
  family: {
    heading: string;
    paragraph: string;
    footing: string;
  };
  size: {
    heading1: number;
    heading2: number;
    heading3: number;
    headingfooting: string;
    pRegular: number;
    pSmall: number;
  };
  weight: {
    normal: number;
    bold: number;
    bolder: number;
  };
}
