import React, { ChangeEvent, useEffect, useRef, useState, KeyboardEvent } from 'react';
import './home.scss';

import { SearchBar } from '../../components/searchbar/SearchBar';
import { Card } from '../../components/card/Card';
import { ICardData } from '../../interface/card';
import { fetchUrl } from '../../components/api/api';

import { fetchCards } from '../../store/cardSlice';
import { useAppDispatch, useAppSelector } from '../../store/redux';
// import { useDispatch } from 'react-redux';

function Home() {
  const [dataValue, setDataValue] = useState(localStorage.getItem('rssearch') || '');
  const dataRef = useRef(dataValue);
  // const [catsData, setCatsData] = useState([]);
  // const [isLoading, setLoading] = useState(true);
  const [isNotData, setNotData] = useState(true);
  const dispatch = useAppDispatch();
  const catsData = useAppSelector((state) => state.cards.cards);
  const isLoading = useAppSelector((state) => state.cards.isLoading);

  const fetchData = (query: string) => {
    setTimeout(() => {
      fetchUrl(`${query}`).then((data) => {
        // setCatsData(data);
        // setLoading(false);
        if (data.length === 0) setNotData(false);
        else setNotData(true);
      });
    }, 1000);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const symbolChar = event.target.value;
    dataRef.current = symbolChar;
    setDataValue(symbolChar);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      // setLoading(true);
      localStorage.setItem('rssearch', dataRef.current);
      fetchData(`q=${dataValue}`);
    }
  };

  useEffect(() => {
    dispatch(fetchCards(''));
    // dataValue ? fetchData(`q=${dataValue}`) : fetchData('');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <>
      {isLoading && (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      )}
      <SearchBar
        id="search"
        type="text"
        placeholder="enter search..."
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={dataValue}
      />
      <h2 className="main__title-card" data-testid="home-page">
        The cards
      </h2>
      <div className="main__cards cards">
        {catsData.map((data: ICardData) => {
          return <Card key={data.id} {...data} />;
        })}
        {isNotData || <div className="main__not-data">oops! nothing found for your query</div>}
      </div>
    </>
  );
}

export { Home };
