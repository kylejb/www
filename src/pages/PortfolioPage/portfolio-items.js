import React, { useState } from 'react';
import PortfolioItem from '../../components/PortfolioItem/index';

const PortfolioItems = () => {
  const [ open, setOpen ] = useState(false);
  const cardClassName = 'portfolio-card' + (open ? ' portfolio-card--open' : ' portfolio-card');

  const items = [{
    name: 'JobMate',
    render: (
      <div 
        className={cardClassName}
        onClick={() => setOpen(!open)}
      >
        <div className='portfolio-item__title'>
          JobMate
        </div>
        <div className='portfolio-item__desc'>
          A better way to find and apply to jobs. 
        </div>
        <div className='portfolio-item__icon'>
        <a target="_blank" rel="noopener noreferrer" href="https://sqlite.org"><i className="fas fa-database"></i></a>
        <a target="_blank" rel="noopener noreferrer" href="https://rubyonrails.org"><i className="fas fa-gem"></i></a>
        </div>
        <div className='portfolio-item__links'>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/kylejb/JobMate">Fullstack</a>
        </div>
      </div>
    )
  }, {
    name: 'ClassZoom',
    render: (
      <div 
        className={cardClassName}
        // onClick={() => setOpen(!open)}
      >        
      <div className='portfolio-item__title'>
          ClassZoom
        </div>
        <div className='portfolio-item__desc'>
          Simplifying remote learning with Zoom API integration. 
        </div>
        <div className='portfolio-item__icon'>
        <a target="_blank" rel="noopener noreferrer" href="https://www.postgresql.org"><i className="fas fa-database"></i></a>
        <a target="_blank" rel="noopener noreferrer" href="https://rubyonrails.org"><i className="fas fa-gem"></i></a>
        <a target="_blank" rel="noopener noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/javascript"><i className="fab fa-js"></i></a>
        </div>
        <div className='portfolio-item__links'>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/kylejb/classzoom_backend">Backend</a>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/kylejb/classzoom_frontend">Frontend</a>
        </div>
      </div>
    )
  }, {
    name: 'clairBuoyant',
    render: (
      <div 
        className={cardClassName}
        // onClick={() => setOpen(!open)}
      >
        <div className='portfolio-item__title'>
          clairBuoyant
        </div>
        <div className='portfolio-item__desc'>
          Aggregating buoy and crowdsourced data for surfers.
        </div>
        <div className='portfolio-item__icon'>
        <a target="_blank" rel="noopener noreferrer" href="https://www.postgresql.org"><i className="fas fa-database"></i></a>
        <a target="_blank" rel="noopener noreferrer" href="https://rubyonrails.org"><i className="fas fa-gem"></i></a>
        <a target="_blank" rel="noopener noreferrer" href="https://reactjs.org"><i className="fab fa-react"></i></a>
        </div>
        <div className='portfolio-item__links'>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/kylejb/capstone-project_backend">Backend</a>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/kylejb/clairbuoyant_frontend">Frontend</a>
        </div>
      </div>
    )
  }];

  return (
    items.map((item, i) => (
      <PortfolioItem render={item.render} key={i} />
    ))
  );
}

export default PortfolioItems