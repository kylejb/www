import React from 'react';
import Nav from './components/Nav/index';
import LandingPage from './components/LandingPage/index';
import PortfolioPage from './pages/PortfolioPage/index';
// import AboutPage from './pages/AboutPage';
// import Footer from './components/Footer';
// import ScrollTop from './components/ScrollTop/index';


const App = () => {
 

  return (
    <div className="dev-landing-page">
        <Nav />
        <LandingPage />
        <PortfolioPage />
    </div>
  );
}


export default App;