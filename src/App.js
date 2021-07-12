import React, { useState, useEffect } from 'react';
import { Appoinment } from './components/Appoinment';
import { Form } from './components/Form';

export const App = () => {
  let initialAppoinments = JSON.parse(localStorage.getItem('appoinments'));

  if (!initialAppoinments) {
    initialAppoinments = [];
  }

  const [appoinmentArray, setAppoinmentArray] = useState(initialAppoinments);

  useEffect(() => {
    if (initialAppoinments) {
      localStorage.setItem('appoinments', JSON.stringify(appoinmentArray));
    } else {
      localStorage.setItem('appoinments', JSON.stringify([]));
    }
  }, [appoinmentArray, initialAppoinments]);

  const handleAddAppoinment = (appoinment) =>
    setAppoinmentArray([...appoinmentArray, appoinment]);

  const handleDeleteById = (id) => {
    const filteredAppoinments = appoinmentArray.filter(
      (appoinment) => appoinment.id !== id
    );

    setAppoinmentArray(filteredAppoinments);
  };

  return (
    <div>
      <h1>Patients Manager</h1>

      <div className='container'>
        <div className='row'>
          <div className='one-half column'>
            <Form handleAddAppoinment={handleAddAppoinment} />
          </div>
          <div className='one-half column'>
            <h2>
              {appoinmentArray.length
                ? 'Manage your Appoinments'
                : 'Add an Appoinment'}
            </h2>

            {appoinmentArray.map((appoinment) => (
              <Appoinment
                appoinment={appoinment}
                key={appoinment.id}
                handleDeleteById={handleDeleteById}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
