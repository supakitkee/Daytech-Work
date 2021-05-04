import Button from '../components/Buttons/Button';
import Card from '../components/Layouts/Card';
import { IoClose } from 'react-icons/io5';
import React from 'react';

export default function Counter({ list, onDelete, onUpdateValue }) {
  const count = list.value;

  let countClass = 'text-5xl rounded-full w-10 text-center focus:outline-none';
  let countBlue = 'text-blue-500';

  let resetButton;
  let decrease;
  let disabled = true;

  const handleClick = () => {
    onUpdateValue(list.id, 0);
  };

  if (count == 0) {
    resetButton = (
      <Button doClick={handleClick} disabled={disabled}>
        Set zero
      </Button>
    );
    decrease = <button className={`${countClass} text-gray-300`}>-</button>;
  } else {
    resetButton = (
      <Button doClick={handleClick} disabled={!disabled}>
        Set zero
      </Button>
    );
    decrease = (
      <button
        onClick={() => onUpdateValue(list.id, count - 1)}
        className={`${countClass} + ${countBlue}`}
      >
        -
      </button>
    );
  }

  const handleDelete = function () {
    onDelete(list);
  };

  return (
    <Card
      title='Counter'
      closeBtn={<IoClose />}
      key={list.id}
      onDelete={handleDelete}
    >
      <div className='text-center'>
        <div className='flex items-center justify-center mt-4 mb-6'>
          {decrease}
          <div className='text-6xl mx-7'>{count}</div>
          <button
            onClick={() => onUpdateValue(list.id, count + 1)}
            className={`${countClass} + ${countBlue}`}
          >
            +
          </button>
        </div>
        {resetButton}
        <div className='text-xs text-gray-400'>
          <div className='mt-6 -mb-2 text-center'>{list.date}</div>
        </div>
      </div>
    </Card>
  );
}
