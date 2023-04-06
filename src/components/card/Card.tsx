import React, { useState } from 'react';
import './card.scss';

import { ICardData } from '../../interface/card';
import { Modal } from '../modal/Modal';
import { fetchUrl } from '../api/api';
import { DEFAULT_IMAGE, DEFAULT_URL } from '../../data/variables';

export const Card = (props: ICardData) => {
  const [isOpen, setOpen] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [catCard, setCatCard] = useState();
  const onClose = () => setOpen(false);

  const handleClick = () => {
    setLoading(true);
    fetchUrl(`id=${props.id}`).then((data) => {
      setCatCard(data);
      setOpen(true);
      setLoading(false);
    });
  };

  return (
    <>
      {isLoading && (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      )}
      <div className="cards__block">
        <div className="cards__box">
          <div className="cards__url">
            <img
              className="cards__img"
              src={
                (props.url_l &&
                  (props.url_l.includes('blob:') ? props.url_l : DEFAULT_URL + props.url_l)) ||
                DEFAULT_IMAGE
              }
            />
          </div>
          <div className="cards__name">
            <div className="cards__first-name">{props.first_name}</div>
            <div className="cards__last-name">{props.last_name}</div>
          </div>
          <div className="cards__breeds">{props.breeds}</div>
          <div className="cards__gender">{props.gender}</div>
          <div className="cards__cost">{props.cost}</div>
          {props.url_l?.includes('blob:') && (
            <div className="cards__birthday">{props.birthday}</div>
          )}
          {props.url_l?.includes('blob:') && <div className="cards__place">{props.place}</div>}
          {props.url_l?.includes('blob:') && <div className="cards__email">{props.email}</div>}
        </div>
        {props.url_l?.includes('blob:') || (
          <div className="cards__btn" onClick={handleClick}>
            more
          </div>
        )}
        {isOpen && <Modal props={catCard} onClose={onClose} />}
      </div>
    </>
  );
};
