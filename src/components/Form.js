import React, { useState } from 'react';

const initialState = {
  pet: '',
  owner: '',
  date: '',
  time: '',
  symptoms: ''
};

export const Form = () => {
  const [appoinment, setAppoinment] = useState(initialState);

  const { pet, owner, date, time, symptoms } = appoinment;

  const handleOnChange = (e) => {
    console.log(appoinment);
    setAppoinment({
      ...appoinment,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <h2>Create Appoinment</h2>

      <form>
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
