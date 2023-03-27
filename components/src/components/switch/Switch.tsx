import React, { forwardRef } from 'react';
import './switch.scss';
import { IPropsType } from '../../interface/forms';

const SwitchForms = forwardRef<HTMLInputElement, IPropsType>(({ id, label, ...props }, ref) => {
  return (
    <div className="onoffswitch">
      <input className="onoffswitch-checkbox" id={id} {...props} ref={ref} name="onoffswitch" />
      <label className="onoffswitch-label" htmlFor={id}>
        <span className="onoffswitch-inner"></span>
        <span className="onoffswitch-switch"></span>
      </label>
      <label className="onoffswitch-description" htmlFor={id}>
        {label}
      </label>
    </div>
  );
});

export { SwitchForms };
