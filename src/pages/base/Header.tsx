import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const setActiveLink = ({ isActive }: { isActive: boolean }) =>
  isActive ? 'header__active-link' : '';

const Header = () => {
  const [nameRouter, setNameRouter] = useState('Home');

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        setNameRouter('Home');
        break;
      case '/about':
        setNameRouter('About');
        break;
      case '/form':
        setNameRouter('Form');
        break;
      default:
        setNameRouter('Not Page');
    }
  }, []);

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__box">
          <h2 className="header__header-name">{nameRouter}</h2>
          <nav className="header__nav">
            <NavLink
              data-testid="home-link"
              to="/"
              onClick={() => setNameRouter('Home')}
              className={setActiveLink}
            >
              Home
            </NavLink>
            <NavLink
              data-testid="about-link"
              to="/about"
              onClick={() => setNameRouter('About')}
              className={setActiveLink}
            >
              About
            </NavLink>
            <NavLink
              data-testid="form-link"
              to="/form"
              onClick={() => setNameRouter('Form')}
              className={setActiveLink}
            >
              Form
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export { Header };
