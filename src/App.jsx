import { BrowserRouter } from "react-router-dom";
import CursorSparkle from "./components/CursorSparkle"; // Import cursor sparkle
import { PerformanceProvider, usePerformance } from "./context/PerformanceContext";

import { 
  About, 
  Contact, 
  Experience, 
  Hero, 
  Navbar, 
  Tech, 
  Projects,
  Achievements, 
} from "./components";

const AppContent = () => {
  const { performanceMode } = usePerformance();

  return (
    <div className='relative z-0 bg-primary'>
      {/* Add CursorSparkle only when performanceMode is false (Dynamic Visuals enabled) */}
      {!performanceMode && <CursorSparkle />}
      
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Projects />
      <Achievements/>
      <Tech />
      <div className='relative z-0'>
        <Contact />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <PerformanceProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </PerformanceProvider>
  );
}

export default App;
