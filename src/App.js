import React from 'react';
import ThemeSwitcher from './components/ThemeSwitcher/index';
import LandingPage from './components/LandingPage/index';
// import AboutPage from '@pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage/index';
// import Footer from '@components/Footer';
// import ScrollTop from '/components/ScrollTop/index';

const App = () => {
  return (
    <div className="dev-landing-page">
      <ThemeSwitcher>
        <LandingPage />
        {/* <AboutPage /> */}
        <PortfolioPage />
        {/* <ScrollTop /> */}
        {/* <Footer /> */}
      </ThemeSwitcher>
    </div>
  );
}

export default App;