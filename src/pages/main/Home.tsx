import React, { ChangeEvent, useEffect, KeyboardEvent } from 'react';
import './home.scss';

import { fetchCards, setSeachCard } from '../../store/cardsSlice';
import { useAppDispatch, useAppSelector } from '../../store/redux';

import { SearchBar } from '../../components/searchbar/SearchBar';
import { Card } from '../../components/card/Card';
import { ICardData } from '../../interface/card';

function Home() {
  const dispatch = useAppDispatch();
  const { cards, isLoading, isNotData, seachCard } = useAppSelector((state) => state.cards);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSeachCard(event.target.value));
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      dispatch(fetchCards(`q=${seachCard}`));
    }
  };

  useEffect(() => {
    dispatch(fetchCards(`q=${seachCard}`));
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
        value={seachCard}
      />
      <h2 className="main__title-card" data-testid="home-page">
        The cards
      </h2>
      <div className="main__cards cards">
        {cards.map((data: ICardData) => {
          return <Card key={data.id} {...data} />;
        })}
        {isNotData && <div className="main__not-data">oops! nothing found for your query</div>}
      </div>
    </>
  );
}

export { Home };
