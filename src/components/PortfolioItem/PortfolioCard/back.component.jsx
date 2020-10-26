import React from 'react';

const PortfolioCardBack = (props) => {    
    const cardClassName = props.class;

    
    return(
        <>
            <div className={`${cardClassName}__title`}>
                {props.project.title}
            </div>
        </>
    )
}

export default PortfolioCardBack;