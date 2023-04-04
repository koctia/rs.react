import React, { ChangeEvent, useEffect, useRef, useState, KeyboardEvent } from 'react';

import { SearchBar } from '../../components/searchbar/SearchBar';
import { Card } from '../../components/card/Card';
import { ICardData } from '../../interface/card';
import { fetchUrl } from '../../components/api/api';

import './home.scss';

function Home() {
  const [dataValue, setDataValue] = useState(localStorage.getItem('rssearch') || '');
  const dataRef = useRef(dataValue);
  const [catsData, setCatsData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const fetchData = (query: string) => {
    fetchUrl(`${query}`).then((data) => {
      setCatsData(data);
      setLoading(false);
    });
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const symbolChar = event.target.value;
    if (symbolChar === '') {
      setLoading(true);
      setDataValue(symbolChar);
      fetchData('');
    } else {
      setDataValue(symbolChar);
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setLoading(true);
      fetchData(`q=${dataValue}`);
    }
  };
  useEffect(() => {
    dataRef.current = dataValue;
  }, [dataValue]);

  useEffect(() => {
    dataValue ? fetchData(`q=${dataValue}`) : fetchData('');
    return () => {
      localStorage.setItem('rssearch', dataRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isLoading && (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      )}
      <SearchBar
        id="search"
        type="search"
        placeholder="enter search..."
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={dataValue}
      />
      <h2 className="main__title-card" data-testid="home-page">
        The cards
      </h2>
      <div className="main__cards cards">
        {(catsData.length &&
          catsData.map((data: ICardData) => {
            return <Card key={data.id} {...data} />;
          })) || <div className="main__not-data">oops! nothing found for your query</div>}
      </div>
    </>
  );
}

export { Home };
