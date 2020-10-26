import React, { useState } from 'react';
import PortfolioCardBack from './PortfolioCard/back.component';
import PortfolioCardFront from './PortfolioCard/front.component';
import './style.scss';

const PortfolioCard = (props) => {
    const [ flip, setFlip ] = useState(false);
    const cardSubClassName = (flip ? 'portfolio-card-content--back' : 'portfolio-card-content--front');


    return(
        <div 
          className='portfolio-card'
          onClick={() => setFlip(!flip)}
        >
            <div className='portfolio-card-content'>
                { flip ? <PortfolioCardBack project={props.project} class={cardSubClassName} /> : <PortfolioCardFront project={props.project} class={cardSubClassName} />}
            </div>
        </div>
    );
};

export default PortfolioCard;