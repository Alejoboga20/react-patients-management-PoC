import React from 'react';
import PropTypes from 'prop-types';
import useForm from './useForm';

const initialState = {
  pet: '',
  owner: '',
  date: '',
  time: '',
  symptoms: ''
};

export const Form = ({ handleAddAppoinment }) => {
  const [formValues, error, handleOnChange, handleOnSubmit] = useForm(
    initialState,
    handleAddAppoinment
  );

  const { pet, owner, date, time, symptoms } = formValues;

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

Form.propTypes = {
  handleAddAppoinment: PropTypes.func.isRequired
};
