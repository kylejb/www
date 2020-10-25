import React, { createContext, useState} from 'react';
import { themes as themesList } from './theme';

export const ThemeContext = createContext();

export const ThemeProvider = () => {
    const firstTimeThemes = themesList.filter(theme => theme.firstTime === true), 
          setFirstTimeTheme = firstTimeThemes[Math.floor((Math.random() * (firstTimeThemes.length)))]
    const [currentTheme, setCurrentTheme] = useState(setFirstTimeTheme);
  
    const getRandomTheme = () => {
      const currentTheme = this.state.theme;
      const allThemes = getThemes();
      const themesWithoutCurrentTheme = allThemes.filter(
        theme => theme.name !== currentTheme.name
      );
      const randomThemeIndex = Math.floor(
        (Math.random() * (themesWithoutCurrentTheme.length))
      );
      return themesWithoutCurrentTheme[randomThemeIndex];
    }
  
    const switchTheme = () => {
      const randomTheme = this.getRandomTheme();
      setCurrentTheme(randomTheme);
    }

    const getThemes = () => {
        return themesList.map((theme) => {
          return {
            name: theme.name,
            firstTime: theme.firstTime,
            colorPrimary: theme.colorPrimary,
            colorAlternate: theme.colorAlternate,
            colorHighlight: theme.colorHighlight,
            bgPrimary: theme.colorAlternate,
            bgAlternate: theme.colorPrimary,
            bgLanding: theme.colorPrimary,
            textPrimary: theme.textPrimary,
            textAlternate: theme.colorAlternate,
            textLanding: theme.colorPrimary,
            parallaxStars: theme.colorPrimary,
            navAlpha: theme.navAlpha
          };
        });
    }


    return (
      <ThemeContext.Provider
        value={{
          currentTheme,
          setCurrentTheme,
        }}
      >
        {getThemes()}
      </ThemeContext.Provider>
    );
}
