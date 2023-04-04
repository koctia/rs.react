import React from 'react';

import { IModal } from '../../interface/modal';
import { DEFAULT_IMAGE, DEFAULT_URL } from '../../data/variables';

import './modal.scss';

export const Modal = ({ onClose, props }: IModal) => {
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
              src={(props.url_l && DEFAULT_URL + props.url_l) || DEFAULT_IMAGE}
            />
          </div>
          <div className="modal__info">
            <div className="modal__name">
              <span className="modal__text">name</span>:
              <div className="modal__first-name">{props.first_name}</div>
              <div className="modal__last-name">{props.last_name}</div>
            </div>
            <div className="modal__birthday">
              <span className="modal__text">birthday</span>: {props.birthday}
            </div>
            <div className="modal__breeds">
              <span className="modal__text">breeds</span>: {props.breeds}
            </div>
            <div className="modal__gender">
              <span className="modal__text">gender</span>: {props.gender}
            </div>
            <div className="modal__cost">
              <span className="modal__text">cost</span>: {props.cost}
            </div>
            <div className="modal__place">
              <span className="modal__text">place</span>: {props.place}
            </div>
            <div className="modal__email">
              <span className="modal__text">email</span>: {props.email}
            </div>
            <div className="modal__description">
              <span className="modal__text">description</span>: {props.description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
