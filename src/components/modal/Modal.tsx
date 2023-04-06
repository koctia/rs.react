import React from 'react';
import './modal.scss';

import { IModal } from '../../interface/modal';
import { ICardData } from '../../interface/card';
import { DEFAULT_IMAGE, DEFAULT_URL } from '../../data/variables';

export const Modal = ({ onClose, props }: IModal) => {
  const card: ICardData = props ? props[0] : {};

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal__box" onClick={(e) => e.stopPropagation()}>
        <div className="modal__close">
          <div onClick={onClose}>X</div>
        </div>
        <div className="modal__block">
          <div className="modal__url">
            <img
              className="modal__img"
              src={(card?.url_l && DEFAULT_URL + card?.url_l) || DEFAULT_IMAGE}
            />
          </div>
          <div className="modal__info">
            <div className="modal__name">
              <span className="modal__text">name</span>:
              <div className="modal__first-name">{card?.first_name}</div>
              <div className="modal__last-name">{card?.last_name}</div>
            </div>
            <div className="modal__birthday">
              <span className="modal__text">birthday</span>: {card?.birthday}
            </div>
            <div className="modal__breeds">
              <span className="modal__text">breeds</span>: {card?.breeds}
            </div>
            <div className="modal__gender">
              <span className="modal__text">gender</span>: {card?.gender}
            </div>
            <div className="modal__cost">
              <span className="modal__text">cost</span>: {card?.cost}
            </div>
            <div className="modal__place">
              <span className="modal__text">place</span>: {card?.place}
            </div>
            <div className="modal__email">
              <span className="modal__text">email</span>: {card?.email}
            </div>
            <div className="modal__description">
              <span className="modal__text">description</span>: {card?.description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
