import React, { ChangeEvent, useEffect, useRef, useState, KeyboardEvent } from 'react';
import { SearchBar } from '../../components/searchbar/SearchBar';
import { Card } from '../../components/card/Card';
// import MockData from '../../data/mock_data.json';
import { ICardData } from '../../interface/card';
import './home.scss';

function Home() {
  const [dataValue, setDataValue] = useState(localStorage.getItem('rssearch') || '');
  const dataRef = useRef(dataValue);
  const [catsData, setCatsData] = useState([]);
  const [textSeach, setTextSeach] = useState('');
  const [isLoading, setLoading] = useState(true);

  const fetchData = () => {
    fetch('https://rs-react-api.vercel.app/cats')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCatsData(data);
        setLoading(false);
      });
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const symbolChar = event.target.value;
    if (symbolChar === '') setTextSeach('');
    setDataValue(symbolChar);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    // console.log('User pressed: ', event.key);
    if (event.key === 'Enter') {
      setTextSeach(dataValue);
      // console.log('Enter key pressed ✅');
    }
  };
  useEffect(() => {
    fetchData();
    dataRef.current = dataValue;
  }, [dataValue]);

  useEffect(() => {
    return () => {
      localStorage.setItem('rssearch', dataRef.current);
    };
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
        {catsData
          .filter((data: ICardData) => {
            return (
              data.first_name?.toLowerCase().includes(textSeach.toLowerCase()) ||
              data.last_name?.toLowerCase().includes(textSeach.toLowerCase())
            );
          })
          .map((data: ICardData) => {
            return <Card key={data.id} {...data} />;
          })}
      </div>
    </>
  );
}

export { Home };
