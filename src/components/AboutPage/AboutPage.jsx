import { useThemeContext } from 'contexts/theme/ThemeContext';
import { Container } from './styledComponents';

const AboutPage = () => {
    const theme = useThemeContext();
    const { currentTheme: { bgPrimary, colorPrimary } } = theme;


    return (
        <Container style={{ backgroundColor: bgPrimary }} className="about-page">
            <main style={{ color: colorPrimary }}>
                <div className="about-wrapper">
                    <div className="about-header">About Me</div>
                    <div className="about-content">
                        <p>This is my about me section.</p>
                    </div>
                </div>
            </main>
        </Container>
    );
};

export default AboutPage;
