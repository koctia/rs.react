import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';

import { Path } from './data/path';

import { Home } from './pages/main/Home';
import { About } from './pages/about/About';
import { Form } from './pages/form/Form';
import { NotFound } from './pages/not-found/NotFound';

import { Layout } from './components/Layout';

export const router = createBrowserRouter([
  {
    path: Path.home.path,
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: Path.about.path,
        element: <About />,
      },
      {
        path: Path.form.path,
        element: <Form />,
      },
      {
        path: Path.error.path,
        element: <NotFound />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/404" replace />,
  },
]);
