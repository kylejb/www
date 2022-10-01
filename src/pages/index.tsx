import LandingPage from 'components/LandingPage';
import Nav from 'components/Nav';
import PageHead from 'components/PageHead';

export default function Home() {
  return (
    <div>
      <PageHead title="Kyle J. Burda" />
      <Nav />
      <LandingPage />
    </div>
  );
}
