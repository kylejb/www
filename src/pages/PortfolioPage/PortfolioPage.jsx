import PortfolioCard from '../../components/PortfolioCard';
import { useThemeContext } from '../../contexts/theme/ThemeContext';
import { projects } from './projects';
import {
    GridContainer,
    GridRow,
    GridColumn
} from '../../components/PortfolioCard/expStyledComponent';


const PortfolioPage = () => {
    const theme = useThemeContext();
    const { currentTheme: { colorPrimary, colorAlternate, textAlternate, bgPrimary } } = theme;

    const renderProj = () => projects.map((project) => (
        <GridColumn key={project.id} sm='6' lg='4'>
            <PortfolioCard className={project.title} id={project.id} project={project} key={project.id} />
        </GridColumn>
    ));

    return (
        <div className="portfolio-page" style={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: bgPrimary }}>
            <GridContainer>
                <h1 style={{ padding: "1rem 0", fontSize: "3rem", textAlign: "center", color: colorPrimary }}>Portfolio</h1>
                <GridRow breakpoints={[700]}>
                    {renderProj()}
                </GridRow>
            </GridContainer>
        </div>
    );
};

export default PortfolioPage;
