import { CardDescription, CardTitle } from '../expStyledComponent';

const PortfolioCardBack = ({ project }) => {
  return (
    <>
      <CardTitle className='portfolio-card-content__title'>
        {project.title}
      </CardTitle>
      <CardDescription className='portfolio-card-content__desc'>
        <u>Placeholder:</u><i>Content will be added (e.g., gifs and/or demo url)</i>
      </CardDescription>
    </>
  );
};


export default PortfolioCardBack;
