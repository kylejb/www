import React from 'react';


const PortfolioCardFront = ( props ) => {

    
    return (     
        <>       
            <div className='portfolio-card-content__title'>
                {props.project.title}
            </div>

            <div className='portfolio-card-content__desc'>
                {props.project.desc}
            </div>

            <div className='portfolio-card-content__icon'>
                {props.project.icons.map(icon => <a target="_blank" rel="noopener noreferrer" href={icon.link} key={icon.id}><i className={icon.classname}></i></a>)}
            </div>

            <div className='portfolio-card-content__links'>
                { props.project.github.link.length > 1 ? 
                    props.project.github.link.map(repo => {
                        return <a key={repo.label} target="_blank" rel="noopener noreferrer" href={repo.link}>{repo.label}</a> 
                    }) : (<a target="_blank" rel="noopener noreferrer" href={props.project.github.link[0]}>{props.project.github.label}</a>)
                }
            </div>
        </>
    );
};


export default PortfolioCardFront;