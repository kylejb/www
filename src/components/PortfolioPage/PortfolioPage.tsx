import PortfolioCard from 'components/PortfolioCard';
import { useThemeContext } from 'contexts/theme/ThemeContext';

import { Container, Grid } from './styledComponents';
import { projects } from './projects';

const PortfolioPage = () => {
  const theme = useThemeContext();
  const {
    currentTheme: { colorPrimary, bgPrimary },
  } = theme;

  const renderProj = () =>
    projects.map((project) => (
      <PortfolioCard
        className={project.title}
        project={project}
        key={project.id}
      />
    ));

  return (
    <Container
      className="portfolio-page"
      style={{ backgroundColor: bgPrimary }}
    >
      <h1 style={{ color: colorPrimary }}>Portfolio</h1>
      <Grid>{renderProj()}</Grid>
    </Container>
  );
};

export default PortfolioPage;
