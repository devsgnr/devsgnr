import { ITheme } from '../../types/token';

const THEME: ITheme = {
  light: {
    background: '#ffffff',
    foreground: '#000000',
    opaque: 'rgba(255, 255, 255, 0.5)',
    gradient: 'linear-gradient(90deg, #FEE140 0%, #FA709A 100%)',
  },
  dark: {
    background: '#0b0b0b',
    foreground: '#c4c4c4',
    opaque: 'rgba(11, 11, 11, 0.5)',
    gradient: 'linear-gradient(90deg, #FEE140 0%, #FA709A 100%)',
  },
};

export default THEME;
