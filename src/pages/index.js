import Head from 'next/head';
import Nav from 'components/Nav';
import LandingPage from 'components/LandingPage';
import PortfolioPage from 'components/PortfolioPage';

export default function Home() {
    return (
        <div>
            <Head>
                <title>kyleburda</title>
                <script src="https://kit.fontawesome.com/70a9a273b4.js" crossOrigin="anonymous"></script>
            </Head>

            <Nav />
            <LandingPage />
            <PortfolioPage />
        </div>
    );
};
