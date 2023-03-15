import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const setActiveLink = ({ isActive }: { isActive: boolean }) =>
  isActive ? 'header__active-link' : '';

const Layout = () => {
  return (
    <>
      <header className="header">
        <div className="header__container">
          <nav className="header__nav">
            <NavLink to="/" className={setActiveLink}>
              Home
            </NavLink>
            <NavLink to="/about" className={setActiveLink}>
              About
            </NavLink>
          </nav>
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
