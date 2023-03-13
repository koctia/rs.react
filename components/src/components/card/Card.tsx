import React, { Component } from 'react';
import { ICardData } from '../../interface/card';

class Card extends Component<ICardData> {
  render() {
    // console.log(this.props.id);
    return (
      <>
        <div>
          <div>{this.props.first_name}</div>
          <div>{this.props.last_name}</div>
        </div>
      </>
    );
  }
}

export default Card;
