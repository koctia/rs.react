import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { SearchBar } from '../../components/searchbar/SearchBar';
import { Card } from '../../components/card/Card';
import MockData from '../../data/mock_data.json';
import { ICardData } from '../../interface/card';
import './home.scss';

function Home() {
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
    <>
      <SearchBar
        id="search"
        type="search"
        placeholder="enter search..."
        onChange={handleChange}
        value={dataValue}
      />
      <h2 className="main__title-card" data-testid="home-page">
        The cards
      </h2>
      <div className="main__cards cards">
        {MockData.filter((data: ICardData) => {
          return (
            data.first_name?.toLowerCase().includes(dataValue.toLowerCase()) ||
            data.last_name?.toLowerCase().includes(dataValue.toLowerCase())
          );
        }).map((data: ICardData) => {
          return <Card key={data.id} {...data} />;
        })}
      </div>
    </>
  );
}

export { Home };
