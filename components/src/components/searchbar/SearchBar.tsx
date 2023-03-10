import React from 'react';
import Data from './../../data/mock_data.json';
import { useState } from 'react';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  return (
    <div>
      <input placeholder="enter search..." onChange={(event) => setQuery(event.target.value)} />
      {console.log(Data)}
      {Data.filter((post) => {
        if (query === '') {
          return post;
        } else if (post.first_name.toLowerCase().includes(query.toLowerCase())) {
          return post;
        }
      }).map((post, index) => {
        <div key={index}>
          <p>{post.first_name}</p>
          <p>{post.last_name}</p>
        </div>;
      })}
    </div>
  );
};

export { SearchBar };
