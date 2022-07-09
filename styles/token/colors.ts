import { ITheme } from '../../types/token';

const THEME: ITheme = {
  light: {
    background: '#ffffff',
    foreground: '#000000',
    opaque: 'rgba(255, 255, 255, 0.5)',
    gradient: 'linear-gradient(90deg, #FEE140 0%, #FA709A 100%)',
  },
  dark: {
    background: '#000000',
    foreground: '#ffffff',
    opaque: 'rgba(11, 11, 11, 0.5)',
    gradient: 'linear-gradient(90deg, #FEE140 0%, #FA709A 100%)',
  },
};

export default THEME;
