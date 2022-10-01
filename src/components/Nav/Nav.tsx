import { Dice } from '@styled-icons/ionicons-solid/Dice';

import { useThemeContext } from 'contexts/theme';

import { StyledNav, ThemeWand, ThemeWandContent } from './styledNavComponents';

const Nav = () => {
  const theme = useThemeContext();
  const {
    currentTheme: { colorPrimary, bgPrimary },
    switchTheme,
  } = theme;

  const stickyStyles = {
    backgroundColor: bgPrimary,
    color: colorPrimary,
  };

  return (
    <StyledNav style={stickyStyles}>
      <ThemeWand onClick={switchTheme}>
        <Dice size="25" />
        <ThemeWandContent>Recolor</ThemeWandContent>
      </ThemeWand>
    </StyledNav>
  );
};

export default Nav;
