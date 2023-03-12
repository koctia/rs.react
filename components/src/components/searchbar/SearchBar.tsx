import React from 'react';
import './searchbar.scss';

const SearchBar = () => {
  return (
    <div>
      <input className="main__search" type="text" placeholder="enter search..." />
    </div>
  );
};

export { SearchBar };
