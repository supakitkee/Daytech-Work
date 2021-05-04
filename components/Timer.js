import React, { useState, useEffect, useRef } from 'react';
import Button from '../components/Buttons/Button';
import Card from '../components/Layouts/Card';
import { IoClose } from 'react-icons/io5';

export default function Timer({ list, onDelete, onUpdateValue }) {
  let disabled = true;
  const timer = list.value;
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        savedCallback.current();
      }, 1000);
    } // pause
    else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn, timer]);

  const savedCallback = useRef();
  const doingUpdateTimer = () => {
    onUpdateValue(list.id, list.value + 1000);
  };

  useEffect(() => {
    savedCallback.current = doingUpdateTimer;
  });

  const handleClickStart = () => {
    setTimerOn(true);
  };

  const handleClickPause = () => {
    setTimerOn(false);
  };

  const handleClickReset = () => {
    onUpdateValue(list.id, 0);
    setTimerOn(false);
  };

  const handleDelete = function () {
    onDelete(list);
  };

  return (
    <Card
      title='Timer'
      closeBtn={<IoClose />}
      key={list.id}
      onDelete={handleDelete}
    >
      <div className='text-center space-x-1'>
        <div className='text-6xl mx-7 flex items-center justify-center mt-4 mb-6'>
          <div className='text-6xl mx-7'>
            <span>{`0${Math.floor((timer / 60000) % 60)}`.slice(-2)}:</span>
            <span>{`0${Math.floor((timer / 1000) % 60)}`.slice(-2)}</span>
          </div>
        </div>
        {!timerOn && (
          <Button doClick={handleClickStart} disabled={!disabled}>
            Start
          </Button>
        )}
        {timerOn && (
          <Button doClick={handleClickPause} disabled={!disabled}>
            Pause
          </Button>
        )}
        {!timerOn && timer == 0 && (
          <Button doClick={handleClickReset} disabled={disabled}>
            Reset
          </Button>
        )}
        {timerOn && (
          <Button doClick={handleClickReset} disabled={!disabled}>
            Reset
          </Button>
        )}
        {!timerOn && timer > 0 && (
          <Button doClick={handleClickReset} disabled={!disabled}>
            Reset
          </Button>
        )}
      </div>
      <div className='mt-6 '></div>
    </Card>
  );
}
