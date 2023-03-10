import React from 'react';
import { SearchBar } from '../../components/searchbar/SearchBar';
import './home.scss';

function Home() {
  return (
    <>
      <h2 className="main__title">Home</h2>
      <SearchBar />
    </>
  );
}

export default Home;
