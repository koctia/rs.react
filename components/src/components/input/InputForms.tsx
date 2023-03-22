import React, { forwardRef } from 'react';
import './inputforms.scss';

interface IPropsType {
  id: string;
  label: string;
  type: string;
  placeholder: string;
}

const InputForms = forwardRef<HTMLInputElement, IPropsType>(({ id, label, ...props }, ref) => {
  return (
    <div className="main__form-namecat">
      <input className="main__form-input" ref={ref} {...props} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
});

export { InputForms };
