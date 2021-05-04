import AddWidgetForm from '../Layouts/AddWidgetForm';
import React, { useState } from 'react';

export default function AddCounter({ onAdd }) {
  const [checkError, setCheckError] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    if (Number(e.target.title.value) < 0) {
      setCheckError('Please enter at least 0.');
    } else if (e.target.title.value === '') {
      setCheckError('Please provide some value.');
    } else {
      onAdd('counter', Number(e.target.title.value)); //ส่งข้อมูล type, value กลับไปยัง handleAdd ใน WidgetTools
    }
  };

  return (
    <AddWidgetForm
      title='Add Counter'
      onSubmit={onSubmit}
      type='number'
      pattern='[0-9]'
      checkError={checkError}
    />
  );
}
