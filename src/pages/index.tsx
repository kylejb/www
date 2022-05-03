import Head from 'next/head';

import LandingPage from 'components/LandingPage';
import Nav from 'components/Nav';

export default function Home() {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Kyle J. Burda</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="manifest.json" />
      </Head>
      <Nav />
      <LandingPage />
    </div>
  );
}
