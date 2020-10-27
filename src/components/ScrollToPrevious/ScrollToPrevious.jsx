import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../ThemeContext';
import { toElement as scrollToElement } from '../../utils/scroll';
import './style.scss';

const ScrollToPrevious = ( props ) => {
  const theme = useContext(ThemeContext);
  const { currentTheme: { colorPrimary } } = theme;

  const scrollToPrevious = () => {
    const { pageSelector } = props;
    const nextPage = document.querySelector(pageSelector);
    scrollToElement(nextPage);
  }


  return (
    <div
      className="scroll-to-previous"
      onClick={(e) => scrollToPrevious()}
    >
      <div className="arrow bounce" style={{ color: colorPrimary }} aria-label="Click me to go back to the previous section">
        <button className="fas fa-chevron-up fa-2x" href="#" />
        <div className="scroll-text">Click Me</div>
      </div>
    </div>
  );
};


ScrollToPrevious.propTypes = {
  pageSelector: PropTypes.string
};


export default ScrollToPrevious;