import AddWidgetForm from '../Layouts/AddWidgetForm';
import React, { useState } from 'react';

export default function EditJustX({ onEditSubmit, list, title }) {
  const [checkError, setCheckError] = useState('');
  let dfValue = list.value;
  if (list.type === 'weather') {
    dfValue = list.value.name;
  }
  const onSubmit = (e) => {
    e.preventDefault();
    if (e.target.title.value.length < 3) {
      setCheckError('Please enter at least 3 characters.');
    } else {
      if (list.type === 'justSay') {
        onEditSubmit(list.id, e.target.title.value.trim());
      } else if (list.type === 'justShout') {
        onEditSubmit(e.target.title.value.trim());
      } else if (list.type === 'weather' || list.type === 'weatherNF') {
        onEditSubmit(list.id, list.type, e.target.title.value.trim());
      }
    }
  };

  return (
    <AddWidgetForm
      title={title}
      onSubmit={onSubmit}
      type='text'
      defaultValue={dfValue}
      checkError={checkError}
    />
  );
}
