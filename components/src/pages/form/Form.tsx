import React, { Component, createRef, RefObject } from 'react';
import './form.scss';
import { InputForms } from '../../components/input/InputForms';
import { SelectForms } from '../../components/select/selectForms';

interface IFormsParameters {
  card: CardType[];
}

type CardType = {
  firstName: string | undefined;
  surname: string | undefined;
  birthday: string | undefined;
  breeds: string | undefined;
};

class Form extends Component {
  private namecat: RefObject<HTMLInputElement>;
  private surname: RefObject<HTMLInputElement>;
  private birthday: RefObject<HTMLInputElement>;
  private breeds: RefObject<HTMLSelectElement>;
  state: IFormsParameters;

  constructor(props: IFormsParameters) {
    super(props);
    this.state = {
      card: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.namecat = createRef();
    this.surname = createRef();
    this.birthday = createRef();
    this.breeds = createRef();
  }

  handleSubmit(event: { preventDefault: () => void }) {
    console.log(this.namecat.current!.value);
    console.log(this.surname.current!.value);
    console.log(this.birthday.current!.value);
    console.log(this.breeds.current!.value);
    event.preventDefault();
  }

  render() {
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
            <SelectForms id="breeds" label="breed" ref={this.breeds} />

            <input type="submit" value="submit" />
          </form>
        </div>
      </>
    );
  }
}

export { Form };
