import React from 'react';
import PropTypes from 'prop-types';
import SocialIcons from '../SocialIcons/index';
import Nav from '../Nav/index';
import ScrollToNext from '../ScrollToNext/index';

import './style.scss';

const LandingPage = (props, context) => {
  const { theme: { bgPrimary, colorPrimary } } = context;

  return (
    <div style={{ backgroundColor: bgPrimary }} className="landing-page">
      <Nav />
      <main style={{ color: colorPrimary }}>
        <div className="intro-wrapper">
          <div className="intro-name">Hello, I'm Kyle!</div>
          <div className="tagline">
            Full Stack Dev | Open-Source Enthusiast | Blogger | Avid Surfer
          </div>
        </div>
      </main>
      <ScrollToNext pageSelector=".portfolio-item" />
    </div>
  );
};

LandingPage.contextTypes = {
  theme: PropTypes.any
};

export default LandingPage;