import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';

class Main extends Component {
  render() {
    return (
      <main className="main">
        <div className="main__container">
          <Outlet />
        </div>
      </main>
    );
  }
}

export { Main };
