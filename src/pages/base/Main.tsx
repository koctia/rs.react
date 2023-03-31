import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
  return (
    <main className="main">
      <div className="main__container">
        <Outlet />
      </div>
    </main>
  );
};

export { Main };
