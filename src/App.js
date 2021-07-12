import React from 'react';
import { Form } from './components/Form';

export const App = () => {
  return (
    <div>
      <h1>Patients Manager</h1>

      <div className='container'>
        <div className='row'>
          <div className='one-half column'>
            <Form />
          </div>
          <div className='one-half column'>2</div>
        </div>
      </div>
    </div>
  );
};
