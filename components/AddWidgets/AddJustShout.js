import AddWidgetForm from '../Layouts/AddWidgetForm';
import React, { useState } from 'react';

export default function AddJustShout({ onAdd, defaultValueShout }) {
  const [checkError, setCheckError] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    if (e.target.title.value.length < 3) {
      setCheckError('Please enter at least 3 characters.');
    } else {
      onAdd('justShout', e.target.title.value.trim());
    }
  };
  
  return (
    <AddWidgetForm
      title='Add JustShout'
      defaultValue={defaultValueShout}
      onSubmit={onSubmit}
      type='text'
      placeholder='Enter text'
      checkError={checkError}
    />
  );
}
