import { Header, Settingss } from './Layouts/Settings';
import React, { useState } from 'react';
import Button from './Buttons/Button';

export default function ModalSetting({
  listAllWidgets,
  children,
  defaultValueShout,
  onEditJustShout,
  handleClear,
}) {
  let totalWg = listAllWidgets.length;
  let totalJs = 0;
  let totalC = 0;
  let totalT = 0;
  let low = 200;
  let lowTemp = 0;
  let disabled = true;
  let inputSty = 'w-full px-2.5 py-1 border focus:outline-none rounded-md';
  let settingsBtn =
    'text-white focus:outline-none px-4 py-1 rounded-md bg-red-500 hover:bg-red-600';

  let cityName = 'N/A';
  let editJustShout = (
    <Header title='JustShout text'>
      <fieldset disabled>
        <form className='flex'>
          <div className='flex-1 mr-1'>
            <input
              type='text'
              className={inputSty}
              placeholder='Enter text'
              defaultValue=''
            />
          </div>
          <div>
            <Button disabled={disabled}>Edit</Button>
          </div>
        </form>
      </fieldset>
    </Header>
  );

  const [checkError, setCheckError] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    if (e.target.title.value.length < 3) {
      setCheckError('Please enter at least 3 characters.');
    } else {
      onEditJustShout(e.target.title.value.trim());
    }
  };

  listAllWidgets.map((list) => {
    if (list.type === 'justSay' || list.type === 'justShout') {
      if (list.type === 'justShout' && list.value) {
        editJustShout = (
          <Header title='JustShout text'>
            <fieldset>
              <form onSubmit={onSubmit} className='flex'>
                <div className='flex-1 mr-1'>
                  <input
                    name='title'
                    type='text'
                    className={inputSty}
                    placeholder='Enter text'
                    defaultValue={defaultValueShout}
                  />
                </div>
                <div>
                  <Button disabled={!disabled}>Edit</Button>
                </div>
              </form>
              <div className='text-red-600 text-xs mt-1'>{checkError}</div>
            </fieldset>
          </Header>
        );
      }
      totalJs = totalJs + list.value.length;
    } else if (list.type === 'counter') {
      totalC = totalC + list.value;
    } else if (list.type === 'timer') {
      totalT = totalT + list.value;
    } else if (list.type === 'weather') {
      lowTemp = `${parseInt(list.value.main.temp)}`;
      if (lowTemp < low) {
        low = lowTemp;
        cityName = list.value.name;
      }
    }
  });

  let totalTime = (
    <>
      <span>{`0${Math.floor((totalT / 60000) % 60)}`.slice(-2)}:</span>
      <span>{`0${Math.floor((totalT / 1000) % 60)}`.slice(-2)}</span>
    </>
  );

  return (
    <div>
      <h2 className='text-xl mb-4'>Settings</h2>
      <Header title='Statistics'>
        <div className='table'>
          <Settingss title='Total widgets'>{totalWg}</Settingss>
          <Settingss title='Total Just length'>{totalJs}</Settingss>
          <Settingss title='Total count'>{totalC}</Settingss>
          <Settingss title='Total time'>{totalTime}</Settingss>
          <Settingss title='Coldest cities'>{cityName}</Settingss>
        </div>
      </Header>
      {editJustShout}
      {children}
      <Header title='Delete Zone'>
        <button onClick={handleClear} className={`${settingsBtn} w-full mb-1`}>
          {' '}
          Delete all widgets
        </button>
      </Header>
    </div>
  );
}
