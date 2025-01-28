import React, { useEffect, useState } from 'react'; // Add useState import
import Page1 from './pages/Page1';
import Header from './components/Header';
import Page2 from './pages/Page2';
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';
import Page6 from './pages/Page6';
import Page7 from './pages/Page7';
import HireMe from './pages/HireMe';
import TechStack from './pages/TechStack';
import { BallTriangle } from 'react-loader-spinner';
import Skills from './pages/Skills';

const App = () => {
  // loading animation
 

  return (
    
     
        <>
          <Header />
          <Page1 />
          <Page2 />
          <Skills/>
          <Page4 />
          <Page5 />
          <Page6 />
          {/* <Page7 /> */}
          <HireMe />
        </>
      
    
  );
};

export default App;
