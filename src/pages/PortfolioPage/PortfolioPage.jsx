import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import PortfolioCard from '../../components/PortfolioItem/PortfolioCard';
import ScrollToPrevious from '../../components/ScrollToPrevious';
import { ThemeContext } from '../../ThemeContext';
import { projects } from './projects';
import './style.scss';


const PortfolioPage = () => {
  const theme = useContext(ThemeContext);
  const { currentTheme: {colorPrimary, colorAlternate, textAlternate, bgPrimary } } = theme;


  return (
    <div className="portfolio-page" style={{ backgroundColor: bgPrimary }}>
      <div className="content-grid">
        <h1 style={{ color: colorPrimary }}>Portfolio</h1>
        <div className="portfolio-wrapper">
          <style jsx="true">
            {`
              .portfolio-card-content__title, .portfolio-card-content__desc, .portfolio-card-content__links, .portfolio-card-content__icon {
                background-color: ${colorPrimary};
                color: ${textAlternate};
              }
              .portfolio-card a {
                background-color: ${colorPrimary};
                color: ${textAlternate};
              }
              .portfolio-card a:hover {
                color: ${'#ffb727'};
                border-bottom: 2px solid ${colorAlternate};
              }              
            `}
          </style>
            {projects.map((project) => (
                <PortfolioCard project={project} key={project.id} />
            ))}
        </div>
      </div>
      <ScrollToPrevious pageSelector=".landing-page" />
    </div>
  );
};


PortfolioPage.propTypes = {
  theme: PropTypes.any
};


export default PortfolioPage;
