import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

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
          <Route path="404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Route>
      </Routes>
    </>
  );
}
