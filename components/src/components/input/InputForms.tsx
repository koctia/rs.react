import React, { forwardRef } from 'react';
import './inputforms.scss';
import { IPropsType } from '../../interface/forms';

const InputForms = forwardRef<HTMLInputElement, IPropsType>(({ id, label, ...props }, ref) => {
  return (
    <div className="main__form-namecat">
      <input className="main__form-input" id={id} ref={ref} {...props} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
});

export { InputForms };
