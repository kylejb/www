import PropTypes from 'prop-types';
import { useThemeContext } from '../../contexts/theme/ThemeContext';
import { toElement as scrollToElement } from '../../utils/scroll';
import { StyledScroll } from './styledComponents';


const ScrollToNext = ( props ) => {
  const theme = useThemeContext();
  const { currentTheme: { colorPrimary } } = theme;

  const scrollToNext = () => {
    const { pageSelector } = props;
    const nextPage = document.querySelector(pageSelector);
    scrollToElement(nextPage);
  };


  return (
    <StyledScroll className="scroll-to-next" onClick={(e) => scrollToNext()} aria-label="Click me to view next section">
      <div className="arrow bounce" style={{ color: colorPrimary }}>
        <div className="scroll-text">Click Me</div>
        <button className="fas fa-chevron-down fa-2x" href="#" />
      </div>
    </StyledScroll>
  );
};


ScrollToNext.propTypes = {
  pageSelector: PropTypes.string,
  currentTheme: PropTypes.any
};


export default ScrollToNext;
