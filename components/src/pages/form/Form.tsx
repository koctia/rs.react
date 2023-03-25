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
  info: boolean;
  cards: ICardData[];
  errors: ICardData;
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
  private email: RefObject<HTMLInputElement>;
  private form: RefObject<HTMLFormElement>;
  state: IFormsParameters;

  constructor(props: IFormsParameters) {
    super(props);
    this.state = {
      info: false,
      cards: [],
      errors: {},
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
    this.email = createRef();
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
        email: this.email.current?.value,
      };
      const newArray: ICardData[] = [...this.state.cards];
      newArray.push(newCard);
      this.setState({ cards: newArray });
      this.form.current?.reset();
      this.setState({
        info: true,
      });
      setTimeout(() => this.setState({ info: false }), 3000);
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
      const arrData = [...this.upload.current.files];
      arrData.forEach((item) => (file = URL.createObjectURL(item)));
    }
    return file;
  }

  validate() {
    const errors: ICardData = {};
    let isValidate = true;

    if (this.namecat.current?.value === '') {
      isValidate = false;
      errors['first_name'] = 'Please enter name.';
    }
    if (typeof errors['first_name'] === 'undefined') {
      const word: string | undefined = this.namecat.current?.value;
      if (word!.charAt(0) !== word!.charAt(0).toUpperCase()) {
        isValidate = false;
        errors['first_name'] = 'Please capitalize the name.';
      }
    }
    if (this.surname.current?.value === '') {
      isValidate = false;
      errors['last_name'] = 'Please enter surname.';
    }
    if (typeof errors['last_name'] === 'undefined') {
      const word: string | undefined = this.surname.current?.value;
      if (word!.charAt(0) !== word!.charAt(0).toUpperCase()) {
        isValidate = false;
        errors['last_name'] = 'Please capitalize the surname.';
      }
    }
    if (this.birthday.current?.value === '') {
      isValidate = false;
      errors['birthday'] = 'Please enter birthday.';
    }
    if (typeof errors['birthday'] === 'undefined') {
      if (Date.parse(`${this.birthday.current?.value}`) > Date.now()) {
        isValidate = false;
        errors['birthday'] = 'Please enter the correct date.';
      }
    }
    if (this.breeds.current?.value === '') {
      isValidate = false;
      errors['breeds'] = 'Please enter breeds.';
    }
    if (!this.isgender.current?.checked) {
      isValidate = false;
      errors['gender'] = 'Please enter gender.';
    }
    if (Number(this.cost.current?.value) < 1) {
      isValidate = false;
      errors['coststr'] = 'Please enter a valid price value.';
    }
    if (this.placeCat() === '') {
      isValidate = false;
      errors['place'] = 'Please select type.';
    }
    if (this.uploadImages() === '') {
      isValidate = false;
      errors['url_l'] = 'Please select files.';
    }
    if (this.email.current?.value === '') {
      isValidate = false;
      errors['email'] = 'Please enter email.';
    }
    if (typeof errors['email'] === 'undefined') {
      const mailFormat =
        /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
      if (!mailFormat.test(this.email.current!.value)) {
        isValidate = false;
        errors['email'] = 'Please enter valid email address.';
      }
    }
    this.setState({
      errors: errors,
    });

    return isValidate;
  }

  render() {
    return (
      <>
        <h2 className="main__title-form">Forms</h2>
        {this.state.info ? <div className="main__form-info">The data has been saved</div> : ''}
        <div className="main__form-box">
          <form className="main__form" onSubmit={this.handleSubmit} ref={this.form}>
            <InputForms
              id="namecat"
              label="name"
              type="text"
              placeholder="enter first name"
              error={this.state.errors.first_name}
              ref={this.namecat}
            />
            <InputForms
              id="surname"
              label="surname"
              type="text"
              placeholder="enter surname"
              error={this.state.errors.last_name}
              ref={this.surname}
            />
            <InputForms
              id="birthday"
              label="birthday"
              type="date"
              placeholder="enter birthday"
              error={this.state.errors.birthday}
              ref={this.birthday}
            />
            <SelectForms
              id="breed"
              label="breed"
              error={this.state.errors.breeds}
              ref={this.breeds}
            />
            <SwitchForms id="gender" label="" type="checkbox" ref={this.gender} />
            <CheckboxForms
              id="isgender"
              label="gender"
              type="checkbox"
              error={this.state.errors.gender}
              ref={this.isgender}
            />
            <InputForms
              id="cost"
              label="cost"
              type="number"
              placeholder="enter cost"
              error={this.state.errors.coststr}
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
              <label className="radios-label">
                from <span className="error-block">{this.state.errors.place}</span>
              </label>
            </div>
            <LoaderForms
              id="upload"
              type="file"
              error={this.state.errors.url_l}
              ref={this.upload}
            />
            <InputForms
              id="email"
              label="email"
              type="text"
              placeholder="enter email"
              error={this.state.errors.email}
              ref={this.email}
            />

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
