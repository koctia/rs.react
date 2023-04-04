import React from 'react';
import './card.scss';

import { ICardData } from '../../interface/card';
import { Modal } from '../../components/modal/modal';
import { DEFAULT_IMAGE, DEFAULT_URL } from '../../data/variables';

export const Card = (props: ICardData) => {
  const [isOpen, setOpen] = React.useState(false);
  const onClose = () => setOpen(false);

  return (
    <div className="cards__block" data-testid="item-card">
      <div className="cards__box">
        <div className="cards__url">
          <img
            className="cards__img"
            src={(props.url_l && DEFAULT_URL + props.url_l) || DEFAULT_IMAGE}
          />
        </div>
        <div className="cards__name">
          <div className="cards__first-name">{props.first_name}</div>
          <div className="cards__last-name">{props.last_name}</div>
        </div>
        <div className="cards__breeds">{props.breeds}</div>
        <div className="cards__gender">{props.gender}</div>
        <div className="cards__cost">{props.cost}</div>
      </div>
      <div className="cards__btn" onClick={() => setOpen(true)}>
        more
      </div>
      {isOpen && <Modal props={props} onClose={onClose} />}
    </div>
  );
};
