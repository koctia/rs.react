import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { IHeaderName } from '../../interface/header';

const setActiveLink = ({ isActive }: { isActive: boolean }) =>
  isActive ? 'header__active-link' : '';

class Header extends Component<IHeaderName, { name: string }> {
  constructor(props: IHeaderName) {
    super(props);
    this.state = {
      name: 'Home',
    };
  }

  componentDidMount() {
    if (location.pathname === '/') this.setState({ name: 'Home' });
    else if (location.pathname === '/about') this.setState({ name: 'About' });
    else this.setState({ name: '' });
  }

  render() {
    return (
      <header className="header">
        <div className="header__container">
          <div className="header__box">
            <h2 className="header__header-name">{this.state.name}</h2>
            <nav className="header__nav">
              <NavLink
                to="/"
                onClick={() => this.setState({ name: 'Home' })}
                className={setActiveLink}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                onClick={() => this.setState({ name: 'About' })}
                className={setActiveLink}
              >
                About
              </NavLink>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
