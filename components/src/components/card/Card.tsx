import React, { Component } from 'react';
import { ICardData } from '../../interface/card';

class Card extends Component<ICardData> {
  render() {
    return (
      <>
        <div>
          <div>{this.props.first_name}</div>
          <div>{this.props.last_name}</div>
          <div>{this.props.cost}</div>
          {/* <div>
            <img src={`${this.props.url_l}`} />
          </div> */}
        </div>
      </>
    );
  }
}

export default Card;
