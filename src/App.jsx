import { BrowserRouter } from "react-router-dom";
import CursorSparkle from "./components/CursorSparkle"; // Import cursor sparkle

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

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        {/* Add CursorSparkle at the top level */}
        <CursorSparkle />
        
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
    </BrowserRouter>
  );
}

export default App;
