import { useThemeContext } from 'contexts/theme/ThemeContext';
import { Container } from './styledComponents';

const AboutPage = () => {
    const theme = useThemeContext();
    const { currentTheme: { bgPrimary, colorPrimary } } = theme;


    return (
        <Container style={{ backgroundColor: bgPrimary }} className="about-page">
            <main style={{ color: colorPrimary }}>
                <div className="about-wrapper">
                    <div className="about-header">$ whoami</div>
                    {/*
                        // TODO - consider adding terminal animation with 'whoami' being entered that returns the div below
                    */}
                    <div className="about-content">
                        <p>I am driven by a deep desire to utilize technology to make a positive impact.</p>

                        <h4>Skills</h4>
                        <h6>Languages</h6>
                        <p>
                            Python, Ruby, JavaScript, TypeScript, SQL, HTML, CSS
                        </p>

                        <h6>Libraries and Frameworks</h6>
                        <p>
                            React, Redux, Node, Express, Ruby on Rails, FastAPI, Django, Flask, Jest, Selenium
                        </p>

                        <h6>Databases and Tools</h6>
                        <p>
                            AWS, git, Docker, Postman, Heroku, Travis-CI, PostgreSQL, SQLite3
                        </p>
                    </div>
                </div>
            </main>
        </Container>
    );
};

export default AboutPage;
