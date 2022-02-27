import { createContext, useContext, useState, ReactNode } from 'react';

import { getThemes } from './themes';

type CurrentTheme = {
  name: string;
  firstTime: boolean;
  colorPrimary: string;
  colorAlternate: string;
  colorHighlight: string;
  bgPrimary: string;
  bgAlternate: string;
  bgLanding: string;
  textPrimary: string;
  textAlternate: string;
  textLanding: string;
  parallaxStars: string;
  navAlpha: string;
};

interface IThemeContext {
  currentTheme: CurrentTheme;
  switchTheme: () => void;
}

function createCtx<A extends {} | null>() {
  const ctx = createContext<A | undefined>(undefined);
  function useCtx() {
    const c = useContext(ctx);
    if (c === undefined)
      throw new Error('useCtx must be inside a Provider with a value');
    return c;
  }
  return [useCtx, ctx.Provider] as const; // 'as const' makes TypeScript infer a tuple
}

export const [useThemeContext, ThemeContextProvider] =
  createCtx<IThemeContext>();

type ThemeProviderProps = {
  children: ReactNode;
};
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
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
    <ThemeContextProvider
      value={{
        currentTheme,
        switchTheme,
      }}
    >
      {children}
    </ThemeContextProvider>
  );
};
