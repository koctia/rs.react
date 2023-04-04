import React, { forwardRef } from 'react';
import './selectforms.scss';
import { Data } from '../../data/breeds';
import { IPropsType } from '../../interface/forms';

const SelectForms = forwardRef<HTMLSelectElement, IPropsType>(
  ({ id, label, error, ...props }, ref) => {
    return (
      <div className="main__form-breeds">
        <select className="main__form-select" id={id} ref={ref} {...props}>
          <option value=""></option>
          {Data.map((item) => {
            return (
              <option key={item.breed} value={item.name}>
                {item.name}
              </option>
            );
          })}
        </select>
        <label htmlFor={id}>
          {label} <span className="error-block">{error}</span>
        </label>
      </div>
    );
  }
);

export { SelectForms };
