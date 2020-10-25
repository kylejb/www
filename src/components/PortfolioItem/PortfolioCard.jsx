import React, { useState } from 'react';
import PortfolioCardBack from './PortfolioCard/back.component';
import PortfolioCardFront from './PortfolioCard/front.component'

const PortfolioCard = (props) => {
    const [ open, setOpen ] = useState(false);
    const cardClassName = (open ? 'portfolio-card portfolio-card--open' : 'portfolio-card');


    return(
        <div 
          className={cardClassName}
          onClick={() => setOpen(!open)}
        >
            <div className='portfolio-card-body'>
                {<PortfolioCardBack project={props.project} />}
                {<PortfolioCardFront project={props.project} />}

                {/* { open ? <PortfolioCardBack project={props.project}/> : <PortfolioCardFront project={props.project} />} */}
                {/* <div className='portfolio-item__title'>
                    {props.project.title}
                </div>
                <div className='portfolio-item__desc'>
                    {props.project.desc}
                </div>
                <div className='portfolio-item__icon'>
                    {props.project.icons.map(icon => <a target="_blank" rel="noopener noreferrer" href={icon.link} key={icon.id}><i className={icon.classname}></i></a>)}
                </div>
                <div className='portfolio-item__links'>
                    { props.project.github.link.length > 1 ? 
                            props.project.github.link.map(repo => {
                                return <a target="_blank" rel="noopener noreferrer" href={repo}>{repo.label}</a> 
                            }) 
                    :
                        (<a target="_blank" rel="noopener noreferrer" href={props.project.github.link[0]}>{props.project.github.label}</a>)
                    }
                </div> */}
            </div>
        </div>
    )
}

export default PortfolioCard;