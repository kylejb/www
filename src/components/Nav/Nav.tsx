import { Dice } from '@styled-icons/ionicons-solid/Dice';
import { useRef } from 'react';

import { useThemeContext } from 'contexts/theme/ThemeContext';

import { StyledNav, ThemeWand, ThemeWandContent } from './styledNavComponents';

const Nav = () => {
  const theme = useThemeContext();
  const {
    currentTheme: { colorPrimary, bgPrimary, navAlpha },
    switchTheme,
  } = theme;

  const nav = useRef<HTMLInputElement>();

  const stickyStyles = { backgroundColor: bgPrimary, color: colorPrimary };

  return (
    <StyledNav ref={nav} style={stickyStyles}>
      <ThemeWand onClick={switchTheme}>
        <Dice size="25" />
        <ThemeWandContent>Recolor</ThemeWandContent>
      </ThemeWand>
    </StyledNav>
  );
};

export default Nav;
