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
import LoadingScreen from 'sections/LoadingScreen';
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.onreadystatechange = () => {
      setTimeout(() => {
        setLoading(document.readyState !== 'complete');
      }, 1000);
    };
  }, []);

  return (
    <>
      <div style={{ display: !loading ? 'none' : 'block' }}>
        <LoadingScreen />
      </div>
      <ToastContainer
        position="top-center"
        hideProgressBar={false}
        newestOnTop={false}
        theme="dark"
      />
      <ParallaxProvider>
        <div
          style={{
            background: 'black',
            overflowX: 'hidden',
            display: loading ? 'none' : 'block'
          }}
        >
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
    </>
  );
};

export default App;
