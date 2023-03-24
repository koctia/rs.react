import React, { Component } from 'react';
import { ICardData } from '../../interface/card';
import './card.scss';

const DEFAULT_IMAGE = 'https://stickerboom.ru/files/2012/11/26/678xfa73-300x215.png';

class Card extends Component<ICardData> {
  render() {
    return (
      <div className="cards__box" data-testid="item-card">
        <div className="cards__url">
          <img
            className="cards__img"
            src={`${this.props.url_l !== '' ? this.props.url_l : DEFAULT_IMAGE}`}
          />
        </div>
        <div className="cards__name">
          <div className="cards__first-name">{this.props.first_name}</div>
          <div className="cards__last-name">{this.props.last_name}</div>
        </div>
        <div className="cards__birthday">{this.props.birthday}</div>
        <div className="cards__breeds">{this.props.breeds}</div>
        <div className="cards__gender">{this.props.gender}</div>
        <div className="cards__cost">{this.props.cost}</div>
        <div className="cards__email">{this.props.email}</div>
      </div>
    );
  }
}

export { Card };
