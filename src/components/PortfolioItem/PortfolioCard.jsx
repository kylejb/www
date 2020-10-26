import React, { useState } from 'react';
import PortfolioCardBack from './PortfolioCard/back.component';
import PortfolioCardFront from './PortfolioCard/front.component';
import './style.scss';

const PortfolioCard = (props) => {
    const [ flip, setFlip ] = useState(false);
    const cardClassName = (flip ? 'portfolio-card-content--back' : 'portfolio-card-content--front');


    return(
        <div 
          className='portfolio-card'
          onClick={() => setFlip(!flip)}
        >
            <div className={cardClassName}>
                { flip ? <PortfolioCardBack project={props.project} class={cardClassName} /> : <PortfolioCardFront project={props.project} class={cardClassName} />}
            </div>
        </div>
    );
};

export default PortfolioCard;