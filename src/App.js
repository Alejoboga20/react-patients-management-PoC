import React, { useState } from 'react';
import { Form } from './components/Form';

export const App = () => {
  const [appoinmentArray, setAppoinmentArray] = useState([]);

  const handleAddAppoinment = (appoinment) =>
    setAppoinmentArray([...appoinmentArray, appoinment]);

  return (
    <div>
      <h1>Patients Manager</h1>

      <div className='container'>
        <div className='row'>
          <div className='one-half column'>
            <Form handleAddAppoinment={handleAddAppoinment} />
          </div>
          <div className='one-half column'>2</div>
        </div>
      </div>
    </div>
  );
};
