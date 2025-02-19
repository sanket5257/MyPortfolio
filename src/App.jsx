import React, { useEffect, useState } from 'react'; // Add useState import
import Page1 from './pages/Page1';
import Header from './components/Header';
import Page2 from './pages/Page2';
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';
import Page6 from './pages/Page6';
import About from './pages/About';
import HireMe from './pages/HireMe';
import { Route, Routes } from 'react-router-dom';
import Work from './pages/Work';





const App = () => {
  // loading animation
 

  return (
    
     
        <>
          

          <Routes>
          <Route path='/Work' element={<Work />} />
        <Route path='/HireMe' element={<HireMe/>} />
        <Route path='/' element={
          <div>
            <Header />
            <Page1 />
          <Page2 />
          <Page4 />
          <Page5 />
          <Page6 />
          <About/>
          </div>
        } />
      </Routes>
      

         

        </>
      
    
  );
};

export default App;
