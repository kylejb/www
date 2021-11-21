import { AppProps } from 'next/app';
import GlobalStyle from 'styles/globalStyles';

import { ThemeProvider } from 'contexts/theme/ThemeContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
