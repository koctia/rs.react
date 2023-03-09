import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/main/Home';
import About from './pages/about/About';
import NotFound from './pages/not-found/NotFound';

import { Layout } from './components/Layout';

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
