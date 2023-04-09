import React from 'react';
import { NavLink } from 'react-router-dom';

import { setText } from '../../store/headerSlice';
import { useAppDispatch, useAppSelector } from '../../store/redux';

const setActiveLink = ({ isActive }: { isActive: boolean }) =>
  isActive ? 'header__active-link' : '';

const Header = () => {
  const dispatch = useAppDispatch();
  const { text } = useAppSelector((state) => state.headers);

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__box">
          <h2 className="header__header-name">{text}</h2>
          <nav className="header__nav">
            <NavLink
              data-testid="home-link"
              to="/"
              onClick={() => dispatch(setText('Home'))}
              className={setActiveLink}
            >
              Home
            </NavLink>
            <NavLink
              data-testid="about-link"
              to="/about"
              onClick={() => dispatch(setText('About'))}
              className={setActiveLink}
            >
              About
            </NavLink>
            <NavLink
              data-testid="form-link"
              to="/form"
              onClick={() => dispatch(setText('Form'))}
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
