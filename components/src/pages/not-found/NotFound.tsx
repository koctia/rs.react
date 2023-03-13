import React from 'react';
import { Link } from 'react-router-dom';
import './notfound.scss';

function NotFound() {
  return (
    <>
      <h2 className="main__title">Not Found</h2>
      <Link to="/">GO HOME</Link>
    </>
  );
}

export default NotFound;
