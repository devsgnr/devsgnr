import { ITheme } from '../../types/token';

const THEME: ITheme = {
  light: {
    background: '#ffffff',
    foreground: '#000000',
    opaque: 'rgba(255, 255, 255, 0.5)',
    gradient: 'linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)',
  },
  dark: {
    background: '#000000',
    foreground: '#c4c4c4',
    opaque: 'rgba(0, 0, 0, 0.5)',
    gradient: 'linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)',
  },
};

export default THEME;
