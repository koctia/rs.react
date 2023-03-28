import React, { forwardRef } from 'react';
import './radios.scss';

interface IPropsType {
  id: string;
  label?: string;
  type: string;
  name?: string;
  value?: string;
}

const RadiosForms = forwardRef<HTMLInputElement, IPropsType>(({ id, label, ...props }, ref) => {
  return (
    <div>
      <input id={id} {...props} ref={ref} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
});

export { RadiosForms };
