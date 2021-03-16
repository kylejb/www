import { useThemeContext } from '../../contexts/theme/ThemeContext';
import SocialIcons from '../SocialIcons/index';
import { Container } from './styledComponents';


const LandingPage = () => {
    const theme = useThemeContext();
    const { currentTheme: { bgPrimary, colorPrimary } } = theme;


    return (
        <Container style={{ backgroundColor: bgPrimary }} className="landing-page">
            <main style={{ color: colorPrimary }}>
                <div className="intro-wrapper">
                    <div className="intro-name">Hello, I'm Kyle!</div>
                    <div className="tagline">
                        Full Stack Dev | Open-Source Enthusiast | Blogger | Avid Surfer
                    </div>
                    <SocialIcons />
                </div>
            </main>
        </Container>
    );
};

export default LandingPage;
