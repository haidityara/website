import { lazy, Suspense } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import LoadingScreen from 'sections/LoadingScreen';

const AboutSection = lazy(() => import('sections/AboutSection'));
const BeginSection = lazy(() => import('sections/BeginSection'));
const MetaverseSection = lazy(() => import('sections/MetaverseSection'));
const RobotGalaxySection = lazy(() => import('sections/RobotGalaxySection'));
const RecruimentProcessSection = lazy(
  () => import('sections/RecruimentProcessSection')
);
const WrappedTeamSection = lazy(() => import('sections/WrappedTeamSection'));
const FlyWheelSection = lazy(() => import('sections/FlyWheelSection'));
const TokenSection = lazy(() => import('sections/TokenSection'));
const LogoCarousel = lazy(() => import('sections/LogoCarousel'));

const App = () => (
  <Suspense fallback={<LoadingScreen />}>
    <ParallaxProvider>
      <div style={{ background: 'black' }}>
        <BeginSection />
        <AboutSection />
        <RecruimentProcessSection />
        <TokenSection />
        <MetaverseSection />
        <LogoCarousel />
        <RobotGalaxySection />
        <WrappedTeamSection />
        <FlyWheelSection />
        <div style={{ height: '200vh' }} />
      </div>
    </ParallaxProvider>
  </Suspense>
);

export default App;
