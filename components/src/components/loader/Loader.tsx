import React, { forwardRef } from 'react';
import './loader.scss';

import { IPropsType } from '../../interface/forms';

const LoaderForms = forwardRef<HTMLInputElement, IPropsType>(({ id, error, ...props }, ref) => {
  return (
    <div className="main__loader-box">
      <label className="main__loader-label" htmlFor={id}>
        <span className="main__loader-span">Upload File</span>
        <input
          className="main__loader-file"
          id={id}
          {...props}
          name="file"
          accept="image/*"
          ref={ref}
        />
      </label>
      <div className="main__loader-error">
        <span className="error-block">{error}</span>
      </div>
    </div>
  );
});

export { LoaderForms };
