import Head from 'next/head';
import LandingPage from 'components/LandingPage';
import PortfolioPage from 'components/PortfolioPage';
import Nav from 'components/Nav';
import AboutPage from 'components/AboutPage';

export default function Home() {
    return (
        <div>
            <Head>
                <title>kyleburda</title>
                <script src="https://kit.fontawesome.com/70a9a273b4.js" crossOrigin="anonymous"></script>
            </Head>

            <Nav />
            <LandingPage />
            <AboutPage />
            <PortfolioPage />
        </div>
    );
};
