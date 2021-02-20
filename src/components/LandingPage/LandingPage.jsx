import React, { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';
import PropTypes from 'prop-types';
import SocialIcons from '../SocialIcons/index';
import ScrollToNext from '../ScrollToNext/index';


const LandingPage = () => {
  const theme = useContext(ThemeContext);

  const { currentTheme: { bgPrimary, colorPrimary } } = theme;


  return (
    <div style={{ backgroundColor: bgPrimary }} className="landing-page">
      <main style={{ color: colorPrimary }}>
        <div className="intro-wrapper">
          <div className="intro-name">Hello, I'm Kyle!</div>
          <div className="tagline">
            Full Stack Dev | Open-Source Enthusiast | Blogger | Avid Surfer
          </div>
            <SocialIcons />
        </div>
      </main>
      <ScrollToNext pageSelector=".portfolio-page" />
    </div>
  );
};


LandingPage.propTypes = {
  theme: PropTypes.any
};


export default LandingPage;
