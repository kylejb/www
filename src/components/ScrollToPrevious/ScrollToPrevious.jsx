import { useThemeContext } from "contexts/theme/ThemeContext";
import { toElement as scrollToElement } from "utils/scroll";
import { ChevronUp } from "@styled-icons/ionicons-outline";
import { StyledScroll } from "./styledScrollToPreviousComponents";

const ScrollToPrevious = (props) => {
  const theme = useThemeContext();
  const {
    currentTheme: { colorPrimary },
  } = theme;

  const scrollToPrevious = () => {
    const { pageSelector } = props;
    const nextPage = document.querySelector(pageSelector);
    scrollToElement(nextPage);
  };

  return (
    <StyledScroll
      className="scroll-to-previous"
      onClick={(e) => scrollToPrevious()}
    >
      <div
        className="arrow"
        style={{ color: colorPrimary }}
        aria-label="Click me to go back to the previous section"
      >
        <div className="scroll-text">About</div>
        <ChevronUp title="Click Me" size="40" />
      </div>
    </StyledScroll>
  );
};

export default ScrollToPrevious;
