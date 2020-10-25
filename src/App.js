import React from 'react';
// import ThemeSwitcher from './components/ThemeSwitcher/index';
import Nav from './components/Nav/index';
import LandingPage from './components/LandingPage/index';
// import AboutPage from '@pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage/index';
// import Footer from '@components/Footer';
// import ScrollTop from '/components/ScrollTop/index';

const App = () => {
  return (
    <div className="dev-landing-page">
        <Nav />
        <LandingPage />
        {/* <AboutPage /> */}
        <PortfolioPage />
        {/* <ScrollTop /> */}
        {/* <Footer /> */}
    </div>
  );
}

export default App;