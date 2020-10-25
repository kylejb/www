import React from 'react';

const PortfolioCardBack = (props) => {

    
    return(
        <div className={'portfolio-card--back'}>
            <div className='portfolio-item__title'>
                    {props.project.title}
            </div>
        </div>
    )
}

export default PortfolioCardBack;