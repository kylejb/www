import React, { useContext, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../ThemeContext';
import { toElement as scrollToElement } from '../../utils/scroll';
import './style.scss';


const Nav = () => {
  const theme = useContext(ThemeContext);
  const { currentTheme: { colorPrimary, bgPrimary, navAlpha }, switchTheme } = theme;

  const [isSticky, setIsSticky] = useState(false);
  const [goingUp, setGoingUp] = useState(false);
  
  const prevScrollY = useRef(0);
  const nav = useRef();

  const stickyClass = isSticky ? 'sticky' : '';
  const stickyStyles = isSticky
    ? { backgroundColor: navAlpha, color: colorPrimary }
    : { backgroundColor: bgPrimary, color: colorPrimary };


  const scrollToPage = (pageSelector) => {
    const nextPage = document.querySelector(pageSelector);
    scrollToElement(nextPage);
  }


  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (prevScrollY.current < currentScrollY && goingUp) {
        setGoingUp(false);
      }
      if (prevScrollY.current > currentScrollY && !goingUp) {
        setGoingUp(true);
      }
      const domRect = nav.current.getBoundingClientRect()
      if (currentScrollY > domRect.height) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
      prevScrollY.current = currentScrollY;
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [goingUp, nav]);
 
  
  return (
    <nav
      ref={nav}
      className={stickyClass}
      style={stickyStyles}
    >
      <div className="magic-wand bounce-xy" onClick={(e) => switchTheme()}>
        <button className="fas fa-magic fa-lg" href="#" />
        <div className="magic-text">Color Me</div>
      </div>
      <style jsx="true">
        {`
          .menu__item:hover {
            border-bottom: 2px solid ${colorPrimary};
          }
        `}
      </style>
      <div className="menu">
        <div
          className="menu__item active"
          onClick={(e) => scrollToPage('.intro-wrapper')}
        >
          About
        </div>
        <div
          className="menu__item"
          onClick={(e) => scrollToPage('.portfolio-page')}
        >
          Portfolio
        </div>
      </div>
    </nav>
  );
}

Nav.propType = {
  currentTheme: PropTypes.any,
  switchTheme: PropTypes.func
};

export default Nav;
