import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../ThemeContext';
import { toElement as scrollToElement } from '../../utils/scroll';
import './style.scss';


const ScrollToNext = (props) => {
  const theme = useContext(ThemeContext);
  const { currentTheme: { colorPrimary } } = theme;

  const scrollToNext = () => {
    const { pageSelector } = props;
    const nextPage = document.querySelector(pageSelector);
    scrollToElement(nextPage);
  };
  

  return (
    <div className="scroll-to-next" onClick={(e) => scrollToNext()}>
      <div className="arrow bounce" style={{ color: colorPrimary }}>
        <div className="scroll-text">Click Me</div>
        <button className="fas fa-chevron-down fa-2x" href="#" />
      </div>
    </div>
  );
};


ScrollToNext.propTypes = {
  pageSelector: PropTypes.string,
  currentTheme: PropTypes.any
};


export default ScrollToNext;
