import React, { Component, createRef, RefObject } from 'react';
import './form.scss';
import { InputForms } from '../../components/input/InputForms';
import { SelectForms } from '../../components/select/selectForms';
import { SwitchForms } from '../../components/switch/Switch';
import { RadiosForms } from '../../components/radios/Radios';
import { LoaderForms } from '../../components/loader/Loader';
import { CheckboxForms } from '../../components/checkbox/Checkbox';

import { ICardData } from '../../interface/card';
import { Card } from '../../components/card/Card';

interface IFormsParameters {
  cards: ICardData[];
  errors: [];
}

class Form extends Component {
  private namecat: RefObject<HTMLInputElement>;
  private surname: RefObject<HTMLInputElement>;
  private birthday: RefObject<HTMLInputElement>;
  private breeds: RefObject<HTMLSelectElement>;
  private cost: RefObject<HTMLInputElement>;
  private gender: RefObject<HTMLInputElement>;
  private isgender: RefObject<HTMLInputElement>;
  private nursery: RefObject<HTMLInputElement>;
  private breeder: RefObject<HTMLInputElement>;
  private other: RefObject<HTMLInputElement>;
  private upload: RefObject<HTMLInputElement>;
  private form: RefObject<HTMLFormElement>;
  state: IFormsParameters;

  constructor(props: IFormsParameters) {
    super(props);
    this.state = {
      cards: [],
      errors: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.namecat = createRef();
    this.surname = createRef();
    this.birthday = createRef();
    this.breeds = createRef();
    this.cost = createRef();
    this.gender = createRef();
    this.isgender = createRef();
    this.nursery = createRef();
    this.breeder = createRef();
    this.other = createRef();
    this.upload = createRef();
    this.form = createRef();
  }

  private handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
    if (this.validate()) {
      const newCard: ICardData = {
        id: this.state.cards.length,
        first_name: this.namecat.current?.value,
        last_name: this.surname.current?.value,
        birthday: this.birthday.current?.value,
        breeds: this.breeds.current?.value,
        cost: Number(this.cost.current?.value),
        gender: this.gender.current?.checked ? 'Female' : 'Male',
        place: this.placeCat(),
        url_l: this.uploadImages(),
      };
      // console.log('isgender', this.isgender.current?.checked);
      const newArray: ICardData[] = [...this.state.cards];
      newArray.push(newCard);
      this.setState({ cards: newArray });
      this.form.current?.reset();
    }
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

  validate() {
    const isValidate = true;
    return isValidate;
  }

  render() {
    return (
      <>
        <h2 className="main__title-form">Forms</h2>
        <div className="main__form-box">
          <form className="main__form" onSubmit={this.handleSubmit} ref={this.form}>
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
            <SwitchForms id="gender" label="" type="checkbox" ref={this.gender} />
            <CheckboxForms id="isgender" label="gender" type="checkbox" ref={this.isgender} />
            <InputForms
              id="cost"
              label="cost"
              type="number"
              placeholder="enter cost"
              ref={this.cost}
            />
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
              <label className="radios-label">from</label>
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
