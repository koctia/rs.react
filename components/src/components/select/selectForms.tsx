import React, { forwardRef } from 'react';
import './selectforms.scss';

interface IPropsType {
  id: string;
  label: string;
  type: string;
}

const SelectForms = forwardRef<HTMLSelectElement, IPropsType>(({ id, label, ...props }, ref) => {
  return (
    <div className="main__form-breeds">
      <label htmlFor={id}>{label}</label>
    </div>
  );
});

export { SelectForms };
