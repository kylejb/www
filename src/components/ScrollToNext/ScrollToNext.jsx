import React, { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';
import PropTypes from 'prop-types';
import { toElement as scrollToElement } from '../../utils/scroll';

import './style.scss';

const ScrollToNext = (props) => {
  const theme = useContext(ThemeContext);

  const scrollToNext = () => {
    const { pageSelector } = this.props;
    const nextPage = document.querySelector(pageSelector);
    scrollToElement(nextPage);
  }
  
  const { currentTheme: { colorPrimary } } = theme;
  return (
    <div className="scroll-to-next" onClick={(e) => this.scrollToNext()}>
      <div className="arrow bounce" style={{ color: colorPrimary }}>
        <div className="scroll-text">Click Me</div>
        <button className="fas fa-chevron-down fa-2x" href="#" />
      </div>
    </div>
  );
}

ScrollToNext.propTypes = {
  pageSelector: PropTypes.string,
  currentTheme: PropTypes.any
};

export default ScrollToNext;