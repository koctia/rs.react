import React, { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { CheckboxForms } from '../../components/checkbox/Checkbox';
import './form.scss';

import { ICardData } from '../../interface/card';

import { InputForms } from '../../components/input/InputForms';
import { SelectForms } from '../../components/select/SelectForms';
import { SwitchForms } from '../../components/switch/Switch';
import { RadiosForms } from '../../components/radios/Radios';
import { LoaderForms } from '../../components/loader/Loader';
import { Card } from '../../components/card/Card';

const Form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<ICardData>({ mode: 'onSubmit', reValidateMode: 'onSubmit' });

  const [newData, setNewData] = useState<ICardData[]>([]);
  const [infoMessage, setInfoMessage] = useState(false);

  const myHandleSubmit = (data: ICardData) => {
    const newArray: ICardData[] = newData;
    const newCard: ICardData = {
      id: newData.length,
      first_name: data.first_name,
      last_name: data.last_name,
      birthday: data.birthday,
      breeds: data.breeds,
      cost: data.cost,
      gender: data.gender ? 'Female' : 'Male',
      place: data.place,
      url_l: `${uploadImages(data)}`,
      email: data.email,
    };
    newArray.push(newCard);
    setNewData(newArray);
    setInfoMessage(true);
    setTimeout(() => setInfoMessage(false), 3000);
    reset();
  };

  const uploadImages: SubmitHandler<FieldValues> = (data) => {
    let file = '';
    const uploadFile = data.url_l;
    if (uploadFile) {
      const arrData = [...uploadFile];
      arrData.forEach((item) => (file = URL.createObjectURL(item)));
    }
    return file;
  };

  return (
    <>
      <h2 className="main__title-form">Forms</h2>
      {infoMessage && <div className="main__form-info">The data has been saved</div>}
      <div className="main__form-box">
        <form
          className="main__form"
          onSubmit={handleSubmit(myHandleSubmit)}
          aria-label="form add card"
        >
          <InputForms
            id="namecat"
            label="name"
            type="text"
            placeholder="enter first name"
            {...register('first_name', {
              required: 'Please enter name.',
              pattern: {
                value: /[A-ZА-Я]{1}/,
                message: 'Please capitalize the name.',
              },
            })}
            error={errors.first_name?.message}
          />
          <InputForms
            id="surname"
            label="surname"
            type="text"
            placeholder="enter surname"
            {...register('last_name', {
              required: 'Please enter name.',
              pattern: {
                value: /[A-ZА-Я]{1}/,
                message: 'Please capitalize the name.',
              },
            })}
            error={errors.last_name?.message}
          />
          <InputForms
            id="birthday"
            label="birthday"
            type="date"
            placeholder="enter birthday"
            {...register('birthday', {
              validate: (value) => {
                return (
                  (value === '' && 'Please enter birthday.') ||
                  (Date.parse(`${value}`) > Date.now() && 'Please enter the correct date.') ||
                  true
                );
              },
            })}
            error={errors.birthday?.message}
          />
          <SelectForms
            id="breeds"
            label="breeds"
            {...register('breeds', {
              required: 'Please enter breeds.',
            })}
            error={errors.breeds?.message}
          />
          <SwitchForms id="gender" label="" type="checkbox" {...register('gender')} />
          <CheckboxForms
            id="isgender"
            label="gender"
            type="checkbox"
            {...register('isgender', {
              required: 'Please confirm your gender.',
            })}
            error={errors.isgender?.message}
          />
          <InputForms
            id="cost"
            label="cost"
            type="number"
            placeholder="enter cost"
            {...register('cost', {
              required: 'Please enter a valid price value.',
              validate: (value) => {
                return Number(value) > 0 || 'Please enter a valid price value.';
              },
            })}
            error={errors.cost?.message}
          />
          <div className="main__form-radios">
            <RadiosForms
              id="place"
              label="Nursery"
              type="radio"
              value="Nursery"
              {...register('place', { required: true })}
            />
            <RadiosForms
              id="place"
              label="Breeder"
              type="radio"
              value="Breeder"
              {...register('place', { required: true })}
            />
            <RadiosForms
              id="place"
              label="Other"
              type="radio"
              value="Other"
              {...register('place', { required: true })}
            />
            <label className="radios-label">
              from{' '}
              <span className="error-block">
                {errors.place?.type === 'required' && 'Please select type.'}
              </span>
            </label>
          </div>
          <LoaderForms
            id="file"
            type="file"
            accept="image/*"
            error={errors.url_l?.message}
            {...register('url_l', { required: 'Please select files.' })}
          />
          <InputForms
            id="email"
            label="email"
            type="text"
            placeholder="enter email"
            {...register('email', {
              required: 'Please enter email.',
              pattern: {
                value:
                  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
                message: 'Please enter valid email address.',
              },
            })}
            error={errors.email?.message}
          />

          <input className="main__btn-submit" type="submit" value="submit" />
        </form>
      </div>
      <div className="main__cards cards">
        {newData.map((data) => {
          return <Card key={data.id} {...data} />;
        })}
      </div>
    </>
  );
};

export { Form };
