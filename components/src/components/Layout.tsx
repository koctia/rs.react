import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header className="header">
        <div className="header__container">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
      </header>

      <main className="main">
        <div className="main__container">
          <Outlet />
        </div>
      </main>

      <footer className="footer">
        <div className="footer__container">All Rights Reserved © RS.REACT, 2023</div>
      </footer>
    </>
  );
};

export { Layout };
