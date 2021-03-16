import { useThemeContext } from '../../contexts/theme/ThemeContext';
import PortfolioCardBack from './Card/back.component';
import PortfolioCardFront from './Card/front.component';
import {
  CardWrapper,
  Card,
  CardBack,
  CardFront,
} from './expStyledComponent';

const ExpComponent = (props) => {

  const theme = useThemeContext();
  const { currentTheme: { colorPrimary, colorAlternate, textAlternate, bgPrimary } } = theme;

  const flipCard = (event) => {
    event.currentTarget.classList.toggle('flipped');
  };



  return (
    <CardWrapper>
      <Card onClick={flipCard}
        styledBackgroundColor={colorPrimary}
        styledColor={colorAlternate}
      >
        <CardFront
          styledBackgroundColor={colorPrimary}
          styledColor={colorAlternate}
        >
          <PortfolioCardFront project={props.project} />
        </CardFront>
        <CardBack
          styledBackgroundColor={colorPrimary}
          styledColor={colorAlternate}
        >
          <PortfolioCardBack project={props.project} />
        </CardBack>
      </Card>
    </CardWrapper>
  );
};

export default ExpComponent;
