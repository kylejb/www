import Script from 'next/script';

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
      <Script
        src="https://kit.fontawesome.com/70a9a273b4.js"
        crossOrigin="anonymous"
      ></Script>
      <main style={{ color: colorPrimary }}>
        <div className="intro-wrapper">
          <div className="intro-name">Hello, I'm Kyle!</div>
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
