import PropTypes from 'prop-types';
import PortfolioCard from '../../components/PortfolioCard';
import ScrollToPrevious from '../../components/ScrollToPrevious';
import { useThemeContext } from '../../contexts/theme/ThemeContext';
import { projects } from './projects';
import {
  GridContainer,
  GridRow,
  GridColumn
} from '../../components/PortfolioCard/expStyledComponent';


const PortfolioPage = () => {
  const theme = useThemeContext();
  const { currentTheme: {colorPrimary, colorAlternate, textAlternate, bgPrimary } } = theme;

  const renderProj = () => projects.map((project) => (
    <GridColumn sm='6' lg='4'>
      <PortfolioCard className={project.title} id={project.id} project={project} key={project.id} />
    </GridColumn>
  ));

  return (
    <GridContainer>
      <h1 style={{ color: colorPrimary }}>Portfolio</h1>
      <GridRow breakpoints={[700]}>
          {renderProj()}
        </GridRow>
      <ScrollToPrevious pageSelector=".landing-page" />
    </GridContainer>
  );
};

PortfolioPage.propTypes = {
  theme: PropTypes.any
};

export default PortfolioPage;
