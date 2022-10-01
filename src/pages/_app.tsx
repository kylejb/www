import { AppProps } from 'next/app';

import { ThemeProvider } from 'contexts/theme';
import GlobalStyle from 'styles/globalStyles';

const ascii = `
 █████   █████          ████  ████                  █████  ██                    █████   ████            ████           ███
░░███   ░░███          ░░███ ░░███                 ░░███  ███                   ░░███   ███░            ░░███          ░███
 ░███    ░███   ██████  ░███  ░███   ██████         ░███ ░░░  █████████████      ░███  ███    █████ ████ ░███   ██████ ░███
 ░███████████  ███░░███ ░███  ░███  ███░░███        ░███     ░░███░░███░░███     ░███████    ░░███ ░███  ░███  ███░░███░███
 ░███░░░░░███ ░███████  ░███  ░███ ░███ ░███        ░███      ░███ ░███ ░███     ░███░░███    ░███ ░███  ░███ ░███████ ░███
 ░███    ░███ ░███░░░   ░███  ░███ ░███ ░███        ░███      ░███ ░███ ░███     ░███ ░░███   ░███ ░███  ░███ ░███░░░  ░░░
 █████   █████░░██████  █████ █████░░██████   ██    █████     █████░███ █████    █████ ░░████ ░░███████  █████░░██████  ███
░░░░░   ░░░░░  ░░░░░░  ░░░░░ ░░░░░  ░░░░░░   ██    ░░░░░     ░░░░░ ░░░ ░░░░░    ░░░░░   ░░░░   ░░░░░███ ░░░░░  ░░░░░░  ░░░
                                            ░░                                                 ███ ░███
                                                                                              ░░██████
                                                                                               ░░░░░░
`;

function MyApp({ Component, pageProps }: AppProps) {
  const disableConsoleLog = () => {
    console.log(
      `%c ${ascii}`,
      'background: #212121; color: #594A7D; padding: 6px;'
    );
    console.log = () => {};
  };

  return (
    <>
      <GlobalStyle />
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
      {disableConsoleLog()}
    </>
  );
}

export default MyApp;
