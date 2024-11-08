// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider as PolarisProvider } from '@shopify/polaris';
import enTranslations from '@shopify/polaris/locales/en.json';
import Home from './pages/home';
import Auth from './pages/auth';
import NotFound from './pages/notFound';

import '@shopify/polaris/build/esm/styles.css';

const App = () => {
  return (
    <>
    <PolarisProvider i18n={enTranslations}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/auth" element={<Auth />} /> 
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    </PolarisProvider>
    </>
  );
};

export default App;
