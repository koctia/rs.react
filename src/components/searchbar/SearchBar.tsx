import React, { forwardRef } from 'react';

import './searchbar.scss';
import { IPropsType } from '../../interface/forms';

const SearchBar = forwardRef<HTMLInputElement, IPropsType>(({ id, ...props }, ref) => {
  return (
    <div className="main__search-input">
      <input id={id} className="main__search" data-testid="search-input" ref={ref} {...props} />
    </div>
  );
});

export { SearchBar };
