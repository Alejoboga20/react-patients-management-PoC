import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  pet: '',
  owner: '',
  date: '',
  time: '',
  symptoms: ''
};

export const Form = () => {
  const [appoinment, setAppoinment] = useState(initialState);
  const [error, setError] = useState(false);

  const { pet, owner, date, time, symptoms } = appoinment;

  const handleOnChange = (e) => {
    console.log(appoinment);
    setAppoinment({
      ...appoinment,
      [e.target.name]: e.target.value
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (
      pet.trim() === '' ||
      owner.trim() === '' ||
      date.trim() === '' ||
      time.trim() === '' ||
      symptoms.trim() === ''
    ) {
      setError(true);
      return;
    }

    appoinment.id = uuidv4();
    console.log(appoinment);
    setError(false);
  };

  return (
    <>
      <h2>Create Appoinment</h2>

      {error ? <p className='alerta-error'>All Fields are Mandatory</p> : null}

      <form onSubmit={handleOnSubmit}>
        <label>Pet's Name</label>
        <input
          type='text'
          name='pet'
          className='u-full-width'
          placeholder="Pet's Name"
          value={pet}
          onChange={handleOnChange}
        />

        <label>Owner's Name</label>
        <input
          type='text'
          name='owner'
          className='u-full-width'
          placeholder="Owner's Name"
          value={owner}
          onChange={handleOnChange}
        />

        <label>Date</label>
        <input
          type='date'
          name='date'
          className='u-full-width'
          value={date}
          onChange={handleOnChange}
        />

        <label>Time</label>
        <input
          type='time'
          name='time'
          className='u-full-width'
          value={time}
          onChange={handleOnChange}
        />

        <label>Symptoms</label>
        <textarea
          className='u-full-width'
          name='symptoms'
          value={symptoms}
          onChange={handleOnChange}
        ></textarea>
        <button type='submit' className='u-full-width button-primary'>
          Add Appoinment
        </button>
      </form>
    </>
  );
};
