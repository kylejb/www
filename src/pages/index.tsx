import Head from 'next/head';

import LandingPage from 'components/LandingPage';
import Nav from 'components/Nav';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kyle Burda</title>
      </Head>
      <Nav />
      <LandingPage />
    </div>
  );
}
