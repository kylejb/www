import SocialIcons from 'components/SocialIcons/index';
import { useThemeContext } from 'contexts/theme/ThemeContext';

import { Container } from './styledComponents';

const LandingPage = () => {
  const theme = useThemeContext();
  const {
    currentTheme: { bgPrimary, colorPrimary },
  } = theme;

  return (
    <Container style={{ backgroundColor: bgPrimary }} className="landing-page">
      <main style={{ color: colorPrimary }}>
        <div className="intro-wrapper">
          <div className="intro-name">Hello, I&apos;m Kyle!</div>
          <div className="tagline">
            Software Engineer | Open-Source Enthusiast | Avid Surfer
          </div>
          <SocialIcons />
        </div>
      </main>
    </Container>
  );
};

export default LandingPage;
