import { useThemeContext } from 'contexts/theme/ThemeContext';
import PortfolioCardBack from './Card/back.component';
import PortfolioCardFront from './Card/front.component';
import { CardWrapper, Card, CardBack, CardFront } from './styledComponent';

const PortfolioCard = (props) => {
  const theme = useThemeContext();
  const {
    currentTheme: { colorPrimary, colorAlternate },
  } = theme;

  const flipCard = (event) => {
    event.currentTarget.classList.toggle('flipped');
  };

  return (
    <CardWrapper>
      <Card
        onClick={flipCard}
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

export default PortfolioCard;
