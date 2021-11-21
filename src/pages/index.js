import Head from 'next/head';
import Nav from 'components/Nav';

import LandingPage from 'components/LandingPage';
import PortfolioPage from 'components/PortfolioPage';

export default function Home() {
  return (
    <div>
      <Head>
        <title>kyleburda</title>
      </Head>

      <Nav />
      <LandingPage />
      <PortfolioPage />
    </div>
  );
}
