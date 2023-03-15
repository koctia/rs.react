import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
// import { Breadcrumb } from '../components/Breadcrumbs';

const setActiveLink = ({ isActive }: { isActive: boolean }) =>
  isActive ? 'header__active-link' : '';

const Layout = () => {
  // const status = {
  //   name: 'Home',
  // };
  // console.log();

  return (
    <>
      <header className="header">
        <div className="header__container">
          <nav className="header__nav">
            <NavLink to="/" onClick={() => console.log('Home')} className={setActiveLink}>
              Home
            </NavLink>
            <NavLink to="/about" onClick={() => console.log('About')} className={setActiveLink}>
              About
            </NavLink>
          </nav>
          {/* <Breadcrumbs {...status} /> */}
          {/* <Breadcrumb /> */}
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
