import React, { useState, useEffect } from 'react';
import './App.css';
import { AnimatePresence } from 'framer-motion';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
import './index.css';
import i18next from 'i18next';
import { Route, Routes, useLocation } from 'react-router-dom';
import MainNavbar from './navbar/nav/Nav';
import Main from './pages/main/Main';
import HomePage from './HomePage/HomePage';



function App() {

  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState(i18next.language);
  const [languageExpanded, setLanguageExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [navOpen, setNavOpen] = React.useState(false);





  const  location = useLocation();

  return (
    <div className="App">
      <MainNavbar />
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<HomePage />} />
        </Routes>              
        </AnimatePresence>
      <ScrollUp />
      {/* <Footer  isMobile={isMobile} setIsMobile={setIsMobile}  /> */}
    </div>
  );
}

export default App;
