import React from 'react';
import SearchBar from '../../components/searchbar/SearchBar';
import Card from '../../components/card/Card';
import MockData from '../../data/mock_data.json';
import { ICardData } from '../../interface/card';
import './home.scss';

function Home() {
  return (
    <>
      <h2 className="main__title">Home</h2>
      <SearchBar />

      <h2 className="main__title-card">Карточки</h2>
      <div className="main__cards cards">
        {MockData.map((data: ICardData) => {
          return <Card key={data.id} {...data} />;
        })}
      </div>
    </>
  );
}

export default Home;
