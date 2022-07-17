import { ITheme } from '../../types/token';

const THEME: ITheme = {
  light: {
    background: '#ffffff',
    foreground: '#0b0b0b',
    opaque: 'rgba(0, 0, 0, 0.5)',
    gradient: 'linear-gradient(90deg, #FEE140 0%, #FA709A 100%)',
    accent: '#dbff00',
  },
  dark: {
    background: '#0b0b0b',
    foreground: '#ffffff',
    opaque: 'rgba(255, 255, 255, 0.1)',
    gradient: 'linear-gradient(90deg, #FEE140 0%, #FA709A 100%)',
    accent: '#dbff00',
  },
};

export default THEME;
