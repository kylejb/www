import PropTypes from 'prop-types';
import { useThemeContext } from '../../contexts/theme/ThemeContext';
import { toElement as scrollToElement } from '../../utils/scroll';
import { StyledScroll } from './styledComponents';


const ScrollToPrevious = ( props ) => {
  const theme = useThemeContext();
  const { currentTheme: { colorPrimary } } = theme;

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
      <div className="arrow bounce" style={{ color: colorPrimary }} aria-label="Click me to go back to the previous section">
        <button className="fas fa-chevron-up fa-2x" href="#" />
        <div className="scroll-text">Click Me</div>
      </div>
    </StyledScroll>
  );
};


ScrollToPrevious.propTypes = {
  pageSelector: PropTypes.string
};


export default ScrollToPrevious;
