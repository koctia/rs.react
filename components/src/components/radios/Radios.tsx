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

// const RadiosForms = forwardRef<HTMLInputElement, IPropsType>(({ id, label, ...props }, ref) => {
//   return (
//     <div className="main__form-radios" id={id} ref={ref}>
//       <div>
//         <input {...props} id="radio1" value={0} />
//         <label htmlFor="radio1">Питомник</label>
//       </div>
//       <div>
//         <input {...props} id="radio2" value={1} />
//         <label htmlFor="radio2">Заводчик</label>
//       </div>
//       <div>
//         <input {...props} id="radio3" value={2} />
//         <label htmlFor="radio3">Иное</label>
//       </div>
//       <label className="radios-label">{label}</label>
//     </div>
//   );
// });

export { RadiosForms };
