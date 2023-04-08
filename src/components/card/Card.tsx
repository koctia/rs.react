import React from 'react';
import './card.scss';

import { useAppDispatch, useAppSelector } from '../../store/redux';
import { fetchCard, setOpen } from '../../store/cardsSlice';

import { ICardData } from '../../interface/card';
import { Modal } from '../modal/Modal';
import { DEFAULT_IMAGE, DEFAULT_URL } from '../../data/variables';

export const Card = (data: ICardData) => {
  const dispatch = useAppDispatch();
  const { isOpen } = useAppSelector((state) => state.cards);

  const handleClick = async () => {
    await dispatch(fetchCard(`id=${data.id}`));
    dispatch(setOpen(true));
  };

  return (
    <div id={`${data.id}`} className="cards__block">
      <div className="cards__box">
        <div className="cards__url">
          <img
            className="cards__img"
            src={
              (data.url_l &&
                (data.url_l.includes('blob:') ? data.url_l : DEFAULT_URL + data.url_l)) ||
              DEFAULT_IMAGE
            }
          />
        </div>
        <div className="cards__name">
          <div className="cards__first-name">{data.first_name}</div>
          <div className="cards__last-name">{data.last_name}</div>
        </div>
        <div className="cards__breeds">{data.breeds}</div>
        <div className="cards__gender">{data.gender}</div>
        <div className="cards__cost">{data.cost}</div>
        {data.url_l?.includes('blob:') && <div className="cards__birthday">{data.birthday}</div>}
        {data.url_l?.includes('blob:') && <div className="cards__place">{data.place}</div>}
        {data.url_l?.includes('blob:') && <div className="cards__email">{data.email}</div>}
      </div>
      {data.url_l?.includes('blob:') || (
        <div className="cards__btn" onClick={handleClick}>
          more
        </div>
      )}
      {isOpen && <Modal />}
    </div>
  );
};
