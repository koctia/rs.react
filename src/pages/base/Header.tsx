import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { pathName } from '../../utility/pathname';

const setActiveLink = ({ isActive }: { isActive: boolean }) =>
  isActive ? 'header__active-link' : '';

const Header = () => {
  const [nameRouter, setNameRouter] = useState(pathName(location.pathname));

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
