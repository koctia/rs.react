import React, { Component, createRef, RefObject } from 'react';
import './form.scss';
import { InputForms } from '../../components/input/InputForms';
import { SelectForms } from '../../components/select/selectForms';
import { SwitchForms } from '../../components/switch/Switch';
import { RadiosForms } from '../../components/radios/Radios';
import { LoaderForms } from '../../components/loader/Loader';

import { ICardData } from '../../interface/card';
import { Card } from '../../components/card/Card';

interface IFormsParameters {
  cards: ICardData[];
}

// type CardType = {
//   firstName: string | undefined;
//   surname: string | undefined;
//   birthday: string | undefined;
//   breeds: string | undefined;
//   switcher: boolean | undefined;
//   nursery: string | undefined;
//   breeder: string | undefined;
//   other: string | undefined;
//   upload: string | undefined;
// };

class Form extends Component {
  private namecat: RefObject<HTMLInputElement>;
  private surname: RefObject<HTMLInputElement>;
  private birthday: RefObject<HTMLInputElement>;
  private breeds: RefObject<HTMLSelectElement>;
  private switcher: RefObject<HTMLInputElement>;
  private nursery: RefObject<HTMLInputElement>;
  private breeder: RefObject<HTMLInputElement>;
  private other: RefObject<HTMLInputElement>;
  private upload: RefObject<HTMLInputElement>;
  state: IFormsParameters;

  constructor(props: IFormsParameters) {
    super(props);
    this.state = {
      cards: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.namecat = createRef();
    this.surname = createRef();
    this.birthday = createRef();
    this.breeds = createRef();
    this.switcher = createRef();
    this.nursery = createRef();
    this.breeder = createRef();
    this.other = createRef();
    this.upload = createRef();
  }

  private handleSubmit(event: { preventDefault: () => void }) {
    const newCard: ICardData = {
      id: this.state.cards.length,
      first_name: this.namecat.current?.value,
      last_name: this.surname.current?.value,
      birthday: this.birthday.current?.value,
      breeds: this.breeds.current?.value,
      gender: this.switcher.current?.checked ? 'Female' : 'Male',
      place: this.placeCat(),
      url_l: this.uploadImages(),
    };
    const newArray: ICardData[] = [...this.state.cards];
    newArray.push(newCard);
    this.setState({ cards: newArray });
    event.preventDefault();
  }

  private placeCat() {
    let place = '';
    if (this.nursery.current?.checked) place = 'Nursery';
    if (this.breeder.current?.checked) place = 'Breeder';
    if (this.other.current?.checked) place = 'Other';
    return place;
  }

  private uploadImages() {
    let file = '';
    if (this.upload.current?.files) {
      const arrData = [...[...this.upload.current.files]];
      arrData.forEach((item) => (file = URL.createObjectURL(item)));
    }
    return file;
  }

  render() {
    console.log(this.state);
    // inclued price
    // inclued checked after upload button
    return (
      <>
        <h2 className="main__title-form">Forms</h2>
        <div className="main__form-box">
          <form className="main__form" onSubmit={this.handleSubmit}>
            <InputForms
              id="namecat"
              label="name"
              type="text"
              placeholder="enter first name"
              ref={this.namecat}
            />
            <InputForms
              id="surname"
              label="surname"
              type="text"
              placeholder="enter surname"
              ref={this.surname}
            />
            <InputForms
              id="birthday"
              label="birthday"
              type="date"
              placeholder="enter birthday"
              ref={this.birthday}
            />
            <SelectForms id="breed" label="breed" ref={this.breeds} />
            <SwitchForms id="switcher" label="gender" type="checkbox" ref={this.switcher} />
            <div className="main__form-radios">
              <RadiosForms
                id="radio1"
                label="Nursery"
                type="radio"
                name="radio"
                value="Nursery"
                ref={this.nursery}
              />
              <RadiosForms
                id="radio2"
                label="Breeder"
                type="radio"
                name="radio"
                value="Breeder"
                ref={this.breeder}
              />
              <RadiosForms
                id="radio2"
                label="Other"
                type="radio"
                name="radio"
                value="Other"
                ref={this.other}
              />
              <label className="radios-label">Place</label>
            </div>
            <LoaderForms id="upload" type="file" ref={this.upload} />
            <input className="main__btn-submit" type="submit" value="submit" />
          </form>
        </div>
        <div className="main__cards cards">
          {this.state.cards.map((data) => {
            return <Card key={data.id} {...data} />;
          })}
        </div>
      </>
    );
  }
}

export { Form };
