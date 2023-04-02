import React from 'react';
import { ICardData } from '../../interface/card';
import './card.scss';

const DEFAULT_IMAGE = 'https://stickerboom.ru/files/2012/11/26/678xfa73-300x215.png';
const DEFAULT_URL = 'https://rs-react-api.vercel.app/';

const Card = (props: ICardData) => {
  return (
    <div className="cards__box" data-testid="item-card">
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
      <div className="cards__birthday">{props.birthday}</div>
      <div className="cards__breeds">{props.breeds}</div>
      <div className="cards__gender">{props.gender}</div>
      <div className="cards__cost">{props.cost}</div>
      <div className="cards__place">{props.place}</div>
      <div className="cards__email">{props.email}</div>
    </div>
  );
};

export { Card };
