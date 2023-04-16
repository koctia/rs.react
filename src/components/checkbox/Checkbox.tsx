import React, { forwardRef } from 'react';
import './checkbox.scss';

import { IPropsType } from '../../interface/forms';

const CheckboxForms = forwardRef<HTMLInputElement, IPropsType>(
  ({ id, label, error, ...props }, ref) => {
    return (
      <div className="main__form-checkbox">
        <div className="main__form-checkblock">
          <input className="main__check-input" id={id} ref={ref} {...props} />
          <span>confirm your selection gender</span>
        </div>
        <label htmlFor={id}>
          {label} <span className="error-block">{error}</span>
        </label>
      </div>
    );
  }
);

export { CheckboxForms };
