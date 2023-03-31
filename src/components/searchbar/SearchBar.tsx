import React, { ChangeEvent, useState, useEffect, useRef } from 'react';
import './searchbar.scss';

const SearchBar = () => {
  const [dataValue, setDataValue] = useState(localStorage.getItem('rssearch') || '');
  const dataRef = useRef(dataValue);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => setDataValue(event.target.value);

  useEffect(() => {
    dataRef.current = dataValue;
  }, [dataValue]);

  useEffect(() => {
    return () => {
      localStorage.setItem('rssearch', dataRef.current);
    };
  }, []);

  return (
    <div className="main__search-input">
      <input
        className="main__search"
        data-testid="search-input"
        type="search"
        placeholder="enter search..."
        onChange={handleChange}
        value={dataValue}
      />
    </div>
  );
};

export { SearchBar };
