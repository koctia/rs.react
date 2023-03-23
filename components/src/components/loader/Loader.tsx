import React, { forwardRef } from 'react';
import './loader.scss';

import { IPropsType } from '../../interface/forms';

const LoaderForms = forwardRef<HTMLInputElement, IPropsType>(({ id, ...props }, ref) => {
  return (
    <div>
      <label className="main__loader-label" htmlFor={id}>
        <span className="main__loader-span">Выберите файл</span>
        <input
          className="main__loader-file"
          id={id}
          {...props}
          name="file"
          accept="image/*"
          ref={ref}
        />
      </label>
    </div>
  );
});

export { LoaderForms };
