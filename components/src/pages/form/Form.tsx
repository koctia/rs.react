import React, { Component, createRef, RefObject } from 'react';
import './form.scss';
import { InputForms } from '../../components/input/InputForms';
import { SelectForms } from '../../components/select/selectForms';
import { SwitchForms } from '../../components/switch/Switch';
import { RadiosForms } from '../../components/radios/Radios';

interface IFormsParameters {
  card: CardType[];
}

type CardType = {
  firstName: string | undefined;
  surname: string | undefined;
  birthday: string | undefined;
  breeds: string | undefined;
  switcher: boolean | undefined;
  nursery: string | undefined;
  breeder: string | undefined;
  other: string | undefined;
  // place: boolean | undefined;
};

class Form extends Component {
  private namecat: RefObject<HTMLInputElement>;
  private surname: RefObject<HTMLInputElement>;
  private birthday: RefObject<HTMLInputElement>;
  private breeds: RefObject<HTMLSelectElement>;
  private switcher: RefObject<HTMLInputElement>;
  private nursery: RefObject<HTMLInputElement>;
  private breeder: RefObject<HTMLInputElement>;
  private other: RefObject<HTMLInputElement>;
  // private place: RefObject<HTMLInputElement>;
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
    this.switcher = createRef();
    this.nursery = createRef();
    this.breeder = createRef();
    this.other = createRef();
    // this.place = createRef();
  }

  handleSubmit(event: { preventDefault: () => void }) {
    console.log(this.namecat.current!.value);
    console.log(this.surname.current!.value);
    console.log(this.birthday.current!.value);
    console.log(this.breeds.current!.value);
    console.log(this.switcher.current!.checked);

    console.log(this.nursery.current!.checked);
    console.log(this.breeder.current!.checked);
    console.log(this.other.current!.checked);

    // console.log(this.radioPlace());
    event.preventDefault();
  }

  // radioPlace() {
  //   const inputs: NodeListOf<HTMLInputElement> | undefined =
  //     this.place.current?.querySelectorAll('input');
  //   if (!inputs) return;
  //   return Array.from(inputs).find((el) => el.checked)?.value;
  // }

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
            </div>

            <input type="submit" value="submit" />
          </form>
        </div>
      </>
    );
  }
}

export { Form };
