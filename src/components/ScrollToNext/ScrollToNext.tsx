import { useThemeContext } from 'contexts/theme/ThemeContext';
import { toElement as scrollToElement } from 'utils/scroll';
import { ChevronDown } from '@styled-icons/ionicons-outline';
import { StyledScroll } from './styledScrollToNextComponents';

type Props = {
  pageSelector: string;
};
const ScrollToNext = ({ pageSelector }: Props) => {
  const theme = useThemeContext();
  const {
    currentTheme: { colorPrimary },
  } = theme;

  const scrollToNext = () => {
    const nextPage = document.querySelector(pageSelector);
    scrollToElement(nextPage);
  };

  return (
    <StyledScroll
      className="scroll-to-next"
      onClick={(e) => scrollToNext()}
      aria-label="Click me to view next section"
    >
      <div className="arrow" style={{ color: colorPrimary }}>
        <div className="scroll-text">Portfolio</div>
        <ChevronDown title="Click Me" size="30" />
      </div>
    </StyledScroll>
  );
};

export default ScrollToNext;
