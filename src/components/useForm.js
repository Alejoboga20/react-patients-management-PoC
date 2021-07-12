import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const useForm = (initialState, handleAddAppoinment) => {
  const [formValues, setFormValues] = useState(initialState);
  const [error, setError] = useState(false);

  const { pet, owner, date, time, symptoms } = formValues;

  const handleOnChange = (e) => {
    setFormValues({
      ...formValues,
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

    formValues.id = uuidv4();
    handleAddAppoinment(formValues);
    setError(false);
    setFormValues(initialState);
  };

  return [formValues, error, handleOnChange, handleOnSubmit];
};

export default useForm;
