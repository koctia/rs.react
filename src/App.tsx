import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

// import { Path } from './data/path';

import { Home } from './pages/main/Home';
import { About } from './pages/about/About';
import { Form } from './pages/form/Form';
import { NotFound } from './pages/not-found/NotFound';

// import { Layout } from './components/Layout';
import { Header } from './pages/base/Header';
import { Footer } from './pages/base/Footer';

export function App() {
  return (
    <>
      <Header />
      <main className="main">
        <div className="main__container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="form" element={<Form />} />
            <Route path="404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </>
  );
}
