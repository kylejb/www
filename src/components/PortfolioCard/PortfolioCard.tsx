import { MouseEvent } from 'react';

import { Project } from 'components/PortfolioPage/projects';
import { useThemeContext } from 'contexts/theme/ThemeContext';
import PortfolioCardBack from './Card/back.component';
import PortfolioCardFront from './Card/front.component';
import { CardWrapper, Card, CardBack, CardFront } from './styledComponent';

type Props = {
  className?: string;
  project: Project;
};

const PortfolioCard = ({ className, project }: Props) => {
  const theme = useThemeContext();
  const {
    currentTheme: { colorPrimary, colorAlternate },
  } = theme;

  const flipCard = (event: MouseEvent<HTMLButtonElement>) => {
    event.currentTarget.classList.toggle('flipped');
  };

  return (
    <CardWrapper className={className}>
      <Card
        onClick={flipCard}
        styledBackgroundColor={colorPrimary}
        styledColor={colorAlternate}
      >
        <CardFront
          styledBackgroundColor={colorPrimary}
          styledColor={colorAlternate}
        >
          <PortfolioCardFront project={project} />
        </CardFront>
        <CardBack
          styledBackgroundColor={colorPrimary}
          styledColor={colorAlternate}
        >
          <PortfolioCardBack project={project} />
        </CardBack>
      </Card>
    </CardWrapper>
  );
};

export default PortfolioCard;
