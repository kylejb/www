import { ThemeProvider } from '../contexts/theme/ThemeContext';
import GlobalStyle from '../styles/globalStyles';

function MyApp({ Component, pageProps }) {
  return <>
    <GlobalStyle />
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  </>
};

export default MyApp;
