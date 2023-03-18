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
    console.log(location.pathname);
    switch (location.pathname) {
      case '/':
        this.setState({ name: 'Home' });
        break;
      case '/about':
        this.setState({ name: 'About' });
        break;
      default:
        this.setState({ name: 'Not Page' });
    }
  }

  render() {
    return (
      <header className="header">
        <div className="header__container">
          <div className="header__box">
            <h2 className="header__header-name">{this.state.name}</h2>
            <nav className="header__nav">
              <NavLink
                data-testid="home-link"
                to="/"
                onClick={() => this.setState({ name: 'Home' })}
                className={setActiveLink}
              >
                Home
              </NavLink>
              <NavLink
                data-testid="about-link"
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
