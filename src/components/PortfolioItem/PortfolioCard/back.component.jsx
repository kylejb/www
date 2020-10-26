import React from 'react';

const PortfolioCardBack = (props) => {    
    const cardSubClassName = props.class;

    
    return(
        <>
            <div className={`${cardSubClassName}__title`}>
                {props.project.title}
            </div>
        </>
    )
}

export default PortfolioCardBack;