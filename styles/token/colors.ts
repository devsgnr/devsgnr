import { ITheme } from '../../types/token';

const THEME: ITheme = {
  light: {
    background: '#ffffff',
    foreground: '#000000',
    opaque: 'rgba(0, 0, 0, 0.5)',
    gradient: 'linear-gradient(90deg, #FEE140 0%, #FA709A 100%)',
    accent: '#008DD5',
  },
  dark: {
    background: '#000000',
    foreground: '#ffffff',
    opaque: 'rgba(255, 255, 255, 0.1)',
    gradient: 'linear-gradient(90deg, #FEE140 0%, #FA709A 100%)',
    accent: '#008DD5',
  },
};

export default THEME;
