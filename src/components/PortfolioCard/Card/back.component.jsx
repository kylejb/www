import React from 'react';


const PortfolioCardBack = ( props ) => {    

    
    return (
        <>
            <div className='portfolio-card-content__title'>
                {props.project.title}
            </div>
            <div className='portfolio-card-content__desc'>
                <u>Placeholder:</u><i>Content will be added (e.g., gifs and/or demo url)</i>
            </div>
        </>
    );
};


export default PortfolioCardBack;