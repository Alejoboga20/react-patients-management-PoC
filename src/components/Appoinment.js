import React from 'react';
import PropTypes from 'prop-types';

export const Appoinment = ({ appoinment, handleDeleteById }) => (
  <div className='cita'>
    <p>
      Pet: <span>{appoinment.pet}</span>
    </p>
    <p>
      Owner: <span>{appoinment.owner}</span>
    </p>
    <p>
      Date: <span>{appoinment.date}</span>
    </p>
    <p>
      Time: <span>{appoinment.time}</span>
    </p>
    <p>
      Symptoms: <span>{appoinment.symptoms}</span>
    </p>

    <button
      className='button eliminar u-full-width'
      onClick={() => handleDeleteById(appoinment.id)}
    >
      Delete &times;
    </button>
  </div>
);

Appoinment.propTypes = {
  appoinment: PropTypes.object.isRequired,
  handleDeleteById: PropTypes.func.isRequired
};
