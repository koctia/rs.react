import React from 'react';

// interface IStatus {
//   name: string;
// }

// export const Breadcrumbs = (props: IStatus) => {
//   return (
//     <>
//       <div>{props.name}</div>
//     </>
//   );
// };

import { Link } from 'react-router-dom';

export const Breadcrumb = () => {
  // console.log(location);
  return (
    <>
      <Link to="/">Welcome</Link>
      <Link to="/about">About</Link>
    </>
  );
};
