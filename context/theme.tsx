import React, {
  createContext,
  FC,
  ReactChild,
  useEffect,
  useState,
} from 'react';

const initState = {
  theme: 'light' as string,
  changeTheme: () => {},
};

export const ThemeContext = createContext(initState);
export const ThemeProvider = ThemeContext.Provider;

interface Props {
  children: ReactChild | ReactChild[];
}

const ThemeContextProvider: FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<string>(initState.theme);

  useEffect(() => {
    const themeStorage = localStorage.getItem('themeStorage');
    if (typeof themeStorage === 'string') setTheme(themeStorage);
  }, []);

  const changeTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      localStorage.setItem('themeStorage', 'dark');
    } else {
      setTheme('light');
      localStorage.setItem('themeStorage', 'light');
    }
  };

  return (
    <ThemeProvider value={{ theme, changeTheme }}>{children}</ThemeProvider>
  );
};

export default ThemeContextProvider;
