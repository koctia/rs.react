import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const setActiveLink = ({ isActive }: { isActive: boolean }) =>
  isActive ? 'header__active-link' : '';

class Header extends Component {
  render() {
    return (
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
        </div>
      </header>
    );
  }
}

export default Header;
