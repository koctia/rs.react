import React from 'react';
import './notfound.scss';

import PageImg from '../../../public/images/404.png';

function NotFound() {
  return (
    <>
      <div className="main__page-not">
        <img className="main__img-not" src={PageImg} alt="" />
        <h2 className="main__title-not" data-testid="not-found-page">
          Not Found
        </h2>
      </div>
    </>
  );
}

export default NotFound;
