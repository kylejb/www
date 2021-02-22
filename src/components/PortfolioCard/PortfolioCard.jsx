import { useState } from 'react';
import { useThemeContext } from '../../contexts/theme/ThemeContext';
import PortfolioCardBack from './Card/back.component';
import PortfolioCardFront from './Card/front.component';
import { CardWrapper, InnerCard, FrontCard, BackCard } from './styledComponent';


const PortfolioCard = ( props ) => {
  const [ flipped, setFlipped ] = useState(null),
        [ clicked, setClicked ] = useState(null);
  const cardFlipClassName = (flipped ? 'portfolio-card-back-flip' : 'portfolio-card-front-flip');

  const theme = useThemeContext();
  const { currentTheme: {colorPrimary, colorAlternate, textAlternate, bgPrimary } } = theme;

  const flip = () => {
    setFlipped(!flipped);
    setClicked(true);
  };


  return (
    <CardWrapper className='portfolio-card'>
      <InnerCard className='portfolio-card-inner' flip={flipped ? 'FLIP_BACK' : 'FLIP_FRONT'}>
        <FrontCard
          onClick={flip}
        >
          <PortfolioCardFront project={props.project} />
        </FrontCard>

        <BackCard
          onClick={flip}
        >
          <PortfolioCardBack project={props.project} />
        </BackCard>
      </InnerCard>
    </CardWrapper>
  );
};


export default PortfolioCard;
