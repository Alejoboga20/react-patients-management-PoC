import React from 'react';

export const Appoinment = ({ appoinment }) => (
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
  </div>
);
