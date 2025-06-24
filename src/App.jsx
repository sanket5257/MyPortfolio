import React, { useEffect, useRef, useState } from 'react'; // Add useState import
import Page1 from './pages/Page1';
import Header from './components/Header';
import Page2 from './pages/Page2';
import HireMe from './pages/HireMe';
import { Route, Routes } from 'react-router-dom';
import Work from './pages/Work';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';
import Page6 from './pages/Page6';
import About from './pages/About';
import Aboutme from './pages/Aboutme';
import Projects from './components/Projects';





const App = () => {
  // loading animation
 useEffect(() => {
  const scroll = new LocomotiveScroll({
    el: scrollRef.current,
    smooth: true,
  });

  const handleLoad = () => {
    scroll.update();
  };

  window.addEventListener("load", handleLoad);
  return () => {
    window.removeEventListener("load", handleLoad);
    scroll.destroy();
  };
}, []);
 

  return (
    
     <div data-scroll-container data-scroll-speed="2" ref={scrollRef}>
      <Routes>
        <Route path="/projects" element={<Projects />} />
        <Route path="/HireMe" element={<HireMe />} />

        <Route
          path="/"
          element={
            <div data-scroll-section>
              <Header />
              <Page1 />
              <Page2 />
              <Aboutme />
              <Page3 />
              <Projects />
              <Page4 />
              <Page5 />
              <Page6 />
            </div>
          }
        />
      </Routes>
    </div>
      
    
  );
};

export default App;
