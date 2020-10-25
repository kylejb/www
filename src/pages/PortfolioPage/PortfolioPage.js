import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import PortfolioCard from '../../components/PortfolioItem/PortfolioCard';
// import ScrollToPrevious from '@components/ScrollToPrevious';
// import PortfolioItems from './portfolio-items';
import { projects } from './projects'
import './style.scss';

import { ThemeContext } from '../../ThemeContext';

// This component displays name from Context



const PortfolioPage = (props, context) => {

  const theme = useContext(ThemeContext);
  const { colorPrimary, colorAlternate, textAlternate, bgPrimary } = theme;

  return (
    <div className="portfolio-page" style={{ backgroundColor: bgPrimary }}>
      <div className="content-grid">
        <h1 style={{ color: colorPrimary }}>Portfolio</h1>
        <div className="portfolio-wrapper">
          <style jsx="true">
            {`
              .portfolio-card {
                background-color: ${colorPrimary};
                color: ${textAlternate};
              }
              .portfolio-card a:hover {
                color: ${textAlternate};
              }
              .portfolio-item__icon a:hover {
                border-bottom: 2px solid ${colorAlternate};
              }

              .portfolio-item__links a {
                border-bottom: 2px solid ${colorAlternate};
              }
            `}
          </style>
            {projects.map((project) => (
              // <div className='portfolio-card-body'>
                <PortfolioCard project={project} key={project.id} />
              // </div>
            ))}
        </div>
      </div>
      {/* <ScrollToPrevious pageSelector=".about-page" /> */}
    </div>
  );
};

PortfolioPage.propTypes = {
  theme: PropTypes.any
};

export default PortfolioPage;


// const Char = (props) => {

//   return (
//     <div
//       className={'Char'}
//     >
//       <div
//         className={'Scene'}
//       >
//         <div
//           className={cardClassName}
//           onClick={() => setOpen(!open)}
//         >
//           <div
//             className={'Card-face Card-face--front'}
//           />
//           <div
//             className={'Card-face Card-face--back'}
//           >
//             {props.char.toUpperCase()}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };