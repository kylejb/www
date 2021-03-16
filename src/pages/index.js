import Head from 'next/head';
import LandingPage from '../components/LandingPage';
import PortfolioPage from './PortfolioPage';
import Nav from '../components/Nav';

export default function Home() {
  return (
    <div>
      <Head>
        <title>kyleburda</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://kit.fontawesome.com/70a9a273b4.js" crossOrigin="anonymous"></script>
      </Head>

      <Nav />
      <LandingPage />
      <PortfolioPage />
    </div>
  );
};
