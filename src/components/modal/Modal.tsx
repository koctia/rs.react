import React from 'react';
import './modal.scss';

import { useAppDispatch, useAppSelector } from '../../store/redux';
import { setOpen } from '../../store/cardsSlice';

import { ICardData } from '../../interface/card';
import { DEFAULT_IMAGE, DEFAULT_URL } from '../../data/variables';

export const Modal = () => {
  const dispatch = useAppDispatch();
  const { card } = useAppSelector((state) => state.cards);
  const data: ICardData = card ? card[0] : {};

  const handleClick = () => {
    dispatch(setOpen(false));
  };

  return (
    <div className="modal" onClick={handleClick}>
      <div className="modal__box" onClick={(e) => e.stopPropagation()}>
        <div className="modal__close">
          <div onClick={handleClick}>X</div>
        </div>
        <div className="modal__block">
          <div className="modal__url">
            <img
              className="modal__img"
              src={(data.url_l && DEFAULT_URL + data.url_l) || DEFAULT_IMAGE}
            />
          </div>
          <div className="modal__info">
            <div className="modal__name">
              <span className="modal__text">name</span>:
              <div className="modal__first-name">{data.first_name}</div>
              <div className="modal__last-name">{data.last_name}</div>
            </div>
            <div className="modal__birthday">
              <span className="modal__text">birthday</span>: {data.birthday}
            </div>
            <div className="modal__breeds">
              <span className="modal__text">breeds</span>: {data.breeds}
            </div>
            <div className="modal__gender">
              <span className="modal__text">gender</span>: {data.gender}
            </div>
            <div className="modal__cost">
              <span className="modal__text">cost</span>: {data.cost}
            </div>
            <div className="modal__place">
              <span className="modal__text">place</span>: {data.place}
            </div>
            <div className="modal__email">
              <span className="modal__text">email</span>: {data.email}
            </div>
            <div className="modal__description">
              <span className="modal__text">description</span>: {data.description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
