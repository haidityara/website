import { ParallaxProvider } from 'react-scroll-parallax';
import AboutSection from 'sections/AboutSection';
import BeginSection from 'sections/BeginSection';
import FlyWheelSection from 'sections/FlyWheelSection';
import LogoCarousel from 'sections/LogoCarousel';
import MetaverseSection from 'sections/MetaverseSection';
import PartnersSection from 'sections/PartnersSection';
import RecruimentProcessSection from 'sections/RecruimentProcessSection';
import RoadmapSection from 'sections/RoadmapSection';
import RobotGalaxySection from 'sections/RobotGalaxySection';
import TokenSection from 'sections/TokenSection';
import WrappedTeamSection from 'sections/WrappedTeamSection';
import RobotBottomSection from 'sections/RobotBottomSection';
import Footer from 'components/Footer';

const App = () => (
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
      <RoadmapSection />
      <PartnersSection />
      <RobotBottomSection />
      <Footer />
    </div>
  </ParallaxProvider>
);

export default App;
