import React, { useState } from 'react';
import PortfolioCardBack from './Card/back.component';
import PortfolioCardFront from './Card/front.component';


const PortfolioCard = ( props ) => {
  const [ flipped, setFlipped ] = useState(null),
        [ clicked, setClicked ] = useState(null);
  const cardFlipClassName = (flipped ? 'portfolio-card-back-flip' : 'portfolio-card-front-flip');


  const flip = () => {
    setFlipped(!flipped);
    setClicked(true);
  };


  return (
    <div
      className='portfolio-card'
      >
        <div className='portfolio-card-inner'>
          <div
            className={'portfolio-card--front ' + (clicked ? cardFlipClassName : '')}
            onClick={flip}
          >
            <PortfolioCardFront project={props.project} />
          </div>

          <div
            className={'portfolio-card--back ' + (clicked ? cardFlipClassName : '')}
            onClick={flip}
          >
            <PortfolioCardBack project={props.project} />
          </div>
        </div>
    </div>
  );
};


export default PortfolioCard;
