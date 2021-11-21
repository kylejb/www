import { createContext, useContext, useState } from 'react';
import { getThemes } from './themes';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const firstTimeThemes = getThemes().filter(
      (theme) => theme.firstTime === true
    ),
    setFirstTimeTheme =
      firstTimeThemes[Math.floor(Math.random() * firstTimeThemes.length)];
  const [currentTheme, setCurrentTheme] = useState(setFirstTimeTheme);

  const getRandomTheme = () => {
    const allThemes = getThemes();
    const themesWithoutCurrentTheme = allThemes.filter(
      (theme) => theme.name !== currentTheme.name
    );
    const randomThemeIndex = Math.floor(
      Math.random() * themesWithoutCurrentTheme.length
    );
    return themesWithoutCurrentTheme[randomThemeIndex];
  };

  const switchTheme = () => {
    const randomTheme = getRandomTheme();
    setCurrentTheme(randomTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        switchTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export function useThemeContext() {
  return useContext(ThemeContext);
}
