import Button from '../Buttons/Button';
import React from 'react';

export default function AddWidgetForm({
  title,
  children,
  onSubmit,
  defaultValue,
  checkError,
  type,
  pattern,
  placeholder,
}) {
  
  return (
    <div>
      <h2 className='text-xl mb-2'>{title}</h2>
      <form onSubmit={onSubmit} className='flex'>
        <div className='flex-1 mr-1'>
          <input
            type={type}
            name='title'
            pattern={pattern}
            className='w-full px-2.5 py-1 focus:outline-none rounded-md'
            defaultValue={defaultValue}
            placeholder={placeholder}
          />
        </div>
        <Button>Add</Button>
      </form>
      <p className='text-red-600 text-xs mt-1'>{checkError}</p>
    </div>
  );
}
