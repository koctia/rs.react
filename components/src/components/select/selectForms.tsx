import React, { forwardRef } from 'react';
import './selectforms.scss';
import { Data } from '../../data/breeds';

interface IPropsType {
  id: string;
  label: string;
}

const SelectForms = forwardRef<HTMLSelectElement, IPropsType>(({ id, label, ...props }, ref) => {
  return (
    <div className="main__form-breeds">
      <select className="main__form-select" id={id} ref={ref} {...props}>
        <option value="">-- choose a breed --</option>
        {Data.map((item) => {
          return (
            <option key={item.breed} value={item.breed}>
              {item.name}
            </option>
          );
        })}
      </select>
      <label htmlFor={id}>{label}</label>
    </div>
  );
});

export { SelectForms };
